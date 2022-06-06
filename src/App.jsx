import { ChakraProvider } from '@chakra-ui/react'
import Main from './pages/Main'
import { lightTheme } from './theme/lightTheme'

function App() {
  return (
    <ChakraProvider theme={lightTheme}>
      <Main />
    </ChakraProvider>
  )
}

export default App
