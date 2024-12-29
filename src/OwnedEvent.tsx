import { useCurrentAccount, useSuiClient } from "@mysten/dapp-kit";
import { Flex, Heading, Text, Card, Box, Popover } from "@radix-ui/themes";
import { useEffect, useState } from 'react';
import {
    COINS_TYPE_LIST,
    COIN_DECIMALS,
    LiquidationEventType
} from "./constants";


export function OwnedEvent() {
  const currentAccount = useCurrentAccount();
  const client = useSuiClient();
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    if (currentAccount?.address) {
      LiduidationQuery();
    }
  }, [currentAccount]);
  const LiduidationQuery = async () => {
    if (!currentAccount?.address) {
      console.error("No connected account found.");
      return;
    }
    
    // const address = currentAccount.address; 
    const address = "0xfcdb97f918c8785f805a1a11c07428a13bee1ab37584a2f43a05cb57cba0f0cd";

    let allEvents = [];
    let currentCursor: undefined | {eventSeq: string, txDigest: string} = undefined ;
    try {
      for (let i = 0; i < 2; i++) {
        const eventsResult = await client.queryEvents({
            query: { "MoveEventType" : `${LiquidationEventType}<${COINS_TYPE_LIST.vSUI}>` },
            cursor: currentCursor,
            order: 'descending'
        });
        console.log("Events result:", eventsResult);
        const filteredEvents = eventsResult.data.filter(event => 
            event.parsedJson?.debtor === address
          );
          allEvents.push(...filteredEvents);
        if (eventsResult.hasNextPage) {
            currentCursor = {
              eventSeq: eventsResult.nextCursor?.eventSeq || "",
              txDigest: eventsResult.nextCursor?.txDigest || ""
            };
        } else {
            break; // No more events to fetch
        }
        
      }
      
      if (allEvents.length > 0) {
        console.log("Events found:", allEvents);
        setEvents(allEvents);
        // const firstEvent = eventsResult.data[0]?.parsedJson as { msg?: string };
        // const result = firstEvent?.msg || "No events found for the given criteria.";
      } else {
        console.log("No events found for the given criteriaa.");
      }
    } catch (error) {
      console.error("Error creating game or querying events:", error);
    }
  };

  return (
    <>
      <Flex direction="column" my="2">
      {events.length === 0 ? (
        <Text>No objects owned by the connected wallet</Text>
      ) : (
        <Heading size="4">Objects owned by the connected wallet</Heading>
      )}
      <Flex
        direction="row"
        wrap="wrap"
        justify="start"
        align="start"
        gap="4"
      >
        {events.map((event, index) => (
            <Card key={event.id?.txDigest}>
                <Flex
                direction="column"
                justify="start"
                align="start"
                gap="2"
                minHeight="220px"
                >
                    <Text weight="bold">Event {index + 1}</Text>
                    <Text>Debtor: {event.parsedJson.debtor}</Text>
                    <Text>Transaction: {event.id.txDigest}</Text>
                    <Text>Timestamp: {new Date(Number(event.timestampMs)).toLocaleString()}</Text>
                    <Flex direction="column" gap="1">
                        <Text></Text>
                        <Text weight="bold">Collateral Coin Type: </Text>
                        <Text>Collateral Amount: {((Number(event.parsedJson.coll_amount) / 10 ** COIN_DECIMALS.BUCK)).toFixed(2)}</Text>
                        <Text>Price N: {((Number(event.parsedJson.price_n) / 10 ** COIN_DECIMALS.BUCK)).toFixed(2)}</Text>
                        <Text></Text>
                        <Text weight="bold">Debt Coin Type: BUCK</Text>
                        <Text>Debt Amount: {((Number(event.parsedJson.debt_amount) / 10 ** COIN_DECIMALS.BUCK)).toFixed(2)}</Text>
                        <Text>Price BUCK: {((Number(event.parsedJson.price_m) / 10 ** COIN_DECIMALS.BUCK)).toFixed(2)}</Text>                       
                        <Text></Text>
                        <Text>TCR: {event.parsedJson.tcr || 'N/A'}</Text>
                    </Flex>
                </Flex>
            </Card>
        ))}
      </Flex>
      {/* {events.map((event, index) => (
        <Flex direction="column" gap="2" key={index}>
            <Text weight="bold">Event {index + 1}</Text>
            <Text>Transaction: {event.id.txDigest}</Text>
            <Text>Timestamp: {new Date(Number(event.timestampMs)).toLocaleString()}</Text>
            <Text>Event Data: {JSON.stringify(event.parsedJson, null, 2)}</Text>
            <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
                {JSON.stringify(event.parsedJson, null, 2)}
            </pre>
        </Flex>
     ))} */}
    </Flex>
    </>
  );
}