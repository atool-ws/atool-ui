import { Fragment } from 'react';
import {
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    Button,
    Link,
    Icon,
    Flex,
    Box,
    Image
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub } from 'react-icons/fa';
import { useRouter } from 'next/router';

const features = [
    {
        title: 'Free and open source',
        detail: 'All components have MIT license, you can use in any project. Check our github.',
        icon: 'atool-hero-1.png'
    },
    {
        title: 'Only tools',
        detail: 'No trackers, no ads. Just a toolbox for you to use.',
        icon: 'atool-hero-2.png'
    }
];
const HeroSection = () => {
    const router = useRouter()

    return (
        <Fragment>
            <Container maxW="6xl" px={{ base: 6, md: 10 }} py={14}>
                <Stack direction={{ base: 'column', md: 'row' }}>
                    <Stack direction="column" spacing={10} justifyContent="center">
                        <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign="left">
                            atool is more than a tool,
                            <chakra.span bgGradient="linear(to-br, brand.900, brand.900)" bgClip="text">
                                {' '}
                                is a toolbox{' '}
                            </chakra.span>{' '}
                            <br /> full of small applications.
                        </chakra.h1>
                        <Text
                            color={useColorModeValue('gray.500', 'gray.400')}
                            fontSize="lg"
                            textAlign="left"
                            fontWeight="800"
                            maxW="700px"
                        >
                            Just simple tools that are gonna help you in the digital world. Nothing else, only tools.
                        </Text>
                        <Stack
                            direction={{ base: 'column', md: 'row' }}
                            spacing={{ base: 5, md: 10 }}
                            flexWrap="wrap"
                        >
                            {features.map((feature, index) => (
                                <Stack key={index} direction={{ base: 'row', md: 'column' }} spacing={1}>
                                    <Stack direction="column" spacing={2}>
                                        <Text fontSize="md" fontWeight="800">
                                            {feature.title}
                                        </Text>
                                        <Text fontSize="sm" color="gray.400" maxW={{ base: '100%', md: '300px' }}>
                                            {feature.detail}
                                        </Text>
                                    </Stack>
                                    <Stack direction="column" >
                                    <Image src={feature.icon} />
                                    </Stack>

                                </Stack>
                            ))}
                        </Stack>
                        <Stack
                            direction={{ base: 'column', md: 'row' }}
                            spacing={{ base: 0, sm: 2 }}
                            flexWrap="wrap"
                        >
                            <chakra.button
                                h={12}
                                px={6}
                                bgGradient="linear(to-br, brand.900, brand.900)"
                                color="white"
                                _hover={{ bgGradient: 'linear(to-br, brand.900, brand.800)' }}
                                variant="solid"
                                size="lg"
                                rounded="md"
                                fontWeight="bold"
                                mb={{ base: 2, sm: 0 }}
                                onClick={() => router.push('/tools')}
                            >
                                <chakra.span> Get started </chakra.span>
                            </chakra.button>
                            <Flex
                                border="1px solid"
                                borderColor="gray.700"
                                justify="center"
                                p={3}
                                px={4}
                                lineHeight={1.18}
                                rounded="md"
                                boxShadow="md"
                                fontWeight="bold"
                                alignItems="center"
                                as={Link}
                            >
                                <Icon as={FaGithub} h={4} w={4} />
                                <Link ml={1} href='https://github.com/atool-ws' isExternal> Github</Link>
                            </Flex>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
            <Box overflow="hidden">

            </Box>
        </Fragment>
    );
};

export default HeroSection;
