import Head from "next/head";
import { GetServerSideProps } from "next";
import {
  Input,
  Grid,
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  FormHelperText,
  GridItem,
  Box,
  Image,
  Flex,
  Badge,
  Text,
  Stack,
  HStack,
  useToast,
} from "@chakra-ui/react";

import { useState } from "react";
import Layout from "../components/Layout";

enum EFormType {
  option = "option",
  single = "single",
}

interface IFormField {
  key: string;
  type: EFormType;
  values?: string[];
}

interface IForm {
  name: string;
  items: IFormField[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  const res = await fetch(
    "https://raw.githubusercontent.com/pedrofraca/form_qr_data/main/data.json",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  );

  const forms_data = await res.json();

  return {
    props: {
      forms: forms_data,
    },
  };
};

const parseOptions = (value: string): string[] => {
  var myRegexp = new RegExp("<(.*?)>", "g");
  var match = myRegexp.exec(value);
  return match[1].split("|");
};

const parseForm = (value: string[]): IForm[] => {
  var returnForm = [] as IForm[];

  value.map((form: string) => {
    const formName = form.split(":")[0];
    const items = form.substring(form.indexOf(":") + 1, form.length);
    const a = items
      .split(";")
      .filter((item) => item && item.length > 0)
      .map((item) => {
        return {
          key: item.split(":")[0],
          type: item.indexOf("|") > 0 ? EFormType.option : EFormType.single,
          values: item.indexOf("|") > 0 ? parseOptions(item) : undefined,
        };
      });
    returnForm.push({ name: formName, items: a });
  });

  return returnForm;
};

export default function Form(props: { forms: [string] }) {
  const forms = parseForm(props.forms);

  const [image, setImage] = useState(
    "https://img-9gag-fun.9cache.com/photo/ap5Kevp_460s.jpg",
  );
  const [data, setData] = useState({});
  const [form, setForm] = useState<IForm>(undefined);

  const toast = useToast();

  const handleFormSelect = (e) => {
    setForm(forms.find((item) => item.name === e.target.value));
  };

  const handleInputChange = (e) => {
    data[e.target.id] = e.target.value;
    var qr_content = "";
    for (let [key, value] of Object.entries(data)) {
      if (value) {
        qr_content = `${qr_content}${key}:${value};`;
      }
    }

    const qr_code = `${form.name}:${qr_content};`;
    console.log(qr_code);
    if (qr_code.length > 3) {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: qr_code }),
      };
      fetch("https://api.atool.ws/generate", requestOptions)
        .then(async (response) =>
          setImage(`data:image/png;base64, ${await response.text()}`),
        )
        .catch((error) => {
          toast({
            title: `${error}`,
            status: "error",
            isClosable: true,
          });
        });
    }
  };

  return (
    <Layout>
      <Text fontSize="6xl" mb="100px">
        Generate your QR Code
      </Text>
      <Flex>
        <Stack flex="1" direction={{ base: "column", md: "row" }} spacing={20}>
          <Stack flex="1">
            <Select
              id="qr_option"
              onChange={handleFormSelect}
              placeholder="Select option"
            >
              {forms.map((item: IForm, index) => {
                return (
                  <option key={index} value={item.name} id={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </Select>
            {form && (
              <FormControl w="m">
                {form.items.map((item, index) => {
                  if (item.type === EFormType.option) {
                    return (
                      <>
                        <FormLabel key={`label${index}`}>{item.key}</FormLabel>
                        <Select
                          key={`select${index}`}
                          id={item.key}
                          onChange={handleInputChange}
                          placeholder="Select option"
                        >
                          {item.values.map((option) => {
                            return (
                              <option
                                key={option}
                                value={option === "blank" ? "" : option}
                                id={option}
                              >
                                {option}
                              </option>
                            );
                          })}
                        </Select>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <FormLabel key={`label${index}`}>{item.key}</FormLabel>
                        <Input
                          onChange={handleInputChange}
                          id={item.key}
                          key={item.key}
                          type="text"
                        />
                      </>
                    );
                  }
                })}
              </FormControl>
            )}
          </Stack>

          <Stack flex="1" direction="column" alignItems={"center"}>
            <Box p={5} shadow="md" borderWidth="1px" alignItems={"center"}>
              <Image src={image} alt="Your QR" align={"center"} />
              <Text as="i">
                Right click and Save Image as in order to download the QR
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Flex>
    </Layout>
  );
}
