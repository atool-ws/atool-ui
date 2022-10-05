import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Card } from './Card'
import { DividerWithText } from './DividerWithText'
import { Link } from './Link'
import LoginForm from './LoginForm'
import { Logo } from './Logo'

export const Login = () => (
  <Box
    minH="100vh"
    py="12"
    px={{ base: '4', lg: '8' }}
  >
    <Box maxW="md" mx="auto" >
      <Box w={300}  mx="auto">
        <Logo />
      </Box>

      <Heading textAlign="center" size="xl" mt='50px' fontWeight="extrabold">
        Sign in to your account
      </Heading>

      <Card mt='50px'>
        <LoginForm/>
      </Card>
    </Box>
  </Box>
)
