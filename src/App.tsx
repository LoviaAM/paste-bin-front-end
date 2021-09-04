import PostInput from "./components/PostInput";
import PostTable from "./components/PostTable";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChakraProvider } from "@chakra-ui/react"
import Header from './components/Header'

function App(): JSX.Element {
  return (
    <ChakraProvider>
      <Header/>
      <PostInput />
      <PostTable />
    </ChakraProvider>
  );
}

export default App;
