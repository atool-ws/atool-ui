import {
    Input, Grid, FormControl,
    FormLabel,
    FormErrorMessage, Stack,
    Button, ButtonGroup,
    FormHelperText, GridItem, Box, Image, Flex, Badge, Text, VStack, HStack, useToast, Heading, Link
} from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { useState } from 'react';
import React from 'react';
import Layout from "../components/Layout";

export default function Menu() {
    const router = useRouter()
    const toast = useToast()
    const input = React.createRef<HTMLInputElement>();

    return (
        <Layout>
            <Stack mt="20" spacing="20" align={"center"}>
                <Text fontSize='6xl'>
                    What do you want to do?
                </Text>
                <Flex >
                    <Box m='10px' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p="20px">
                        <Stack spacing='50px'>
                            <Text as='em' fontSize='md'>Create a QR code</Text>
                            <Text fontSize='sm'>No bullshit, just a simple way of creating a QR code.</Text>
                            <Button onClick={() => router.push('/qr')} >QR</Button>
                        </Stack>
                    </Box>
                    {/* <Box m='10px' minW='sm' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p="20px">
                        <Stack spacing='50px'>
                            <Text as='em' fontSize='md'>Build QR</Text>
                            <Text fontSize='sm'>You can create here your QR code to build a vcard or something else.</Text>
                            <Button onClick={() => router.push('/form')} >Build QR</Button>
                        </Stack>
                    </Box> */}
                </Flex>
            </Stack>
        </Layout>
    )
}
