
import { Login } from '../login/Login';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import { Link, Flex, Box, Text, } from '@chakra-ui/react'


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
            <Flex bg='brand.900' p="10px">
                <Box flex='1'>
                    <Link href='/'>
                        <Text as='b' fontSize='m'>ATOOL</Text>
                    </Link>
                </Box>

            </Flex>
            {props.children}
        </>
    )
}
