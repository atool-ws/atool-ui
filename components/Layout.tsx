
import { Link, Flex, Box, Text, Container } from '@chakra-ui/react'
import Head from 'next/head';



export default function Layout(props) {
    // const data = useSession();

    // if (data.status === "loading") {
    //     return (<div></div>)
    // }
    // if (data.data) {
        
    // } else {
    //     return (<Login />)
    // }
    return (
        <>
            <Head>
            <meta key="theme-color-light" name="theme-color" content="#dfe8eb"/>
            </Head>
            <Flex bg='brand.900' p="10px">
                <Box flex='1'>
                    <Link href='/'>
                        <Text as='b' fontSize='m'>ATOOL</Text>
                    </Link>
                </Box>

            </Flex>
            <Container maxW="8xl" px={{ base: 6, md: 10 }} py={14}>
                {props.children}
            </Container>
        </>
    )
}
