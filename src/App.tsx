import { ConnectButton } from "@mysten/dapp-kit";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import { WalletStatus } from "./WalletStatus";
import { OwnedEvent } from "./OwnedEvent";

function App() {
  return (
    <>
      <Flex
        position="sticky"
        px="4"
        py="2"
        justify="between"
        style={{
          borderBottom: "1px solid var(--gray-a2)",
        }}
      >
        <Box>
          <Heading>dApp Starter Template</Heading>
        </Box>

        <Box>
          <ConnectButton />
        </Box>
      </Flex>
      {/* <Container>
        <Container
          mt="5"
          pt="2"
          px="4"
          style={{ background: "var(--gray-a2)", minHeight: 500 }}
        >
          <WalletStatus />
          { <OwnedEvent /> }
        </Container>
      </Container> */}
      <Container px="3" p="6">
        <Flex width="100%" gapX="4">
          <Flex
            flexGrow="1"
            p="4"
            style={{ backgroundColor: "#252E3E", borderRadius: "10px" }}
          >
            <OwnedEvent />
          </Flex>
          
        </Flex>
      </Container>
    </>
  );
}

export default App;
