import { useCurrentAccount, useSuiClient } from "@mysten/dapp-kit";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { useEffect, useState } from 'react';
import {
    CERT,
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
            query: { "MoveEventType" : `${LiquidationEventType}<${CERT}>` },
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
      {events.map((event, index) => (
        <Flex direction="column" gap="2" key={index}>
            <Text weight="bold">Event {index + 1}</Text>
            <Text>Transaction: {event.id.txDigest}</Text>
            <Text>Timestamp: {new Date(Number(event.timestampMs)).toLocaleString()}</Text>
            <Text>Event Data: {JSON.stringify(event.parsedJson, null, 2)}</Text>
            {/* <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
                {JSON.stringify(event.parsedJson, null, 2)}
            </pre> */}
        </Flex>
     ))}
    </Flex>
    </>
  );
}