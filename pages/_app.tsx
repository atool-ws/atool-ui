import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import Fonts from './fonts'

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
})

const theme = extendTheme({
  fonts: {
    heading: 'Gerstner',
    body: 'Gerstner',
  },
  colors: {
    brand: {
      900: '#f6b310',
      800: '#153e75',
      700: '#2a69ac',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'white',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        // bg: 'brand.900', // Normally, it is "semibold"

      },
      sizes: {
        lg: {
          fontSize: 'xl',
        },
      },
      variants: {
        solid: (props) => ({
          bg: 'brand.900',
          borderRadius: '45px',
          color: 'black',
          _hover: { bg: 'brand.900' },
        }),
      },
    },
  },
})

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp