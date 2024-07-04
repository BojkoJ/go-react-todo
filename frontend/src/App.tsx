import { Button, Container, Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Stack h="100vh">
                <Navbar />
                <Container>
                    <Button>Hello</Button>
                </Container>
            </Stack>
        </>
    );
}

export default App;
