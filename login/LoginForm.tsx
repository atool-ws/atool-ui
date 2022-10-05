import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react'
import * as React from 'react'
import { PasswordField } from './PasswordField'
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
  const router = useRouter();
  const toast = useToast()

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    // Quite important to avoid errors with next auth
    event.preventDefault();
    console.log(event);
    const response = await signIn('credentials', {
      username: event.target["username"].value,
      password: event.target["password"].value,
      redirect: false
    })
    // if (response.ok) router.push('/')
    // else console.log({ error: response.error })
  }
  
  return (
    <form onSubmit={submitForm}>
      <Stack spacing="6">
        <FormControl id="email" >
          <FormLabel>Email address</FormLabel>
          <Input name="username" required type="text"/>
        </FormControl>
        <PasswordField name="password" type="password" />
        <Button type="submit">
          Sign in
        </Button>
      </Stack>
    </form>
  )
}


