import { useState } from 'react';
import { ConnectButton } from "@mysten/dapp-kit";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import { CoinSelector } from "./components/CoinSelector";
import { OwnedEvent } from "./components/OwnedEvent";
import { COINS_TYPE_LIST } from './constants';


function App() {
  const [selectedCoin, setSelectedCoin] = useState<keyof typeof COINS_TYPE_LIST>('vSUI');
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
      <Container px="3" p="6">
        <Flex direction="column" width="100%" gap="5" >
          <CoinSelector 
            selectedCoin={selectedCoin} 
            onSelectCoin={setSelectedCoin}
          />
          <Flex
            flexGrow="1"
            p="4"
            style={{ backgroundColor: "#252E3E", borderRadius: "10px" }}
          >
            <OwnedEvent selectedCoin={selectedCoin} />
          </Flex>
          
        </Flex>
      </Container>
    </>
  );
}

export default App;
