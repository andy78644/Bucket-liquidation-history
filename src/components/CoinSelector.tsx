import { Button, Flex } from "@radix-ui/themes";
import { COINS_TYPE_LIST } from "../constants";
import { Dispatch, SetStateAction } from 'react';

interface CoinSelectorProps {
  selectedCoin: keyof typeof COINS_TYPE_LIST;
  onSelectCoin: Dispatch<SetStateAction<keyof typeof COINS_TYPE_LIST>>;
}


export function CoinSelector({ selectedCoin, onSelectCoin }: CoinSelectorProps) {
  return (
    <Flex gap="2">
      {Object.entries(COINS_TYPE_LIST).map(([key, value]) => (
        <Button 
          key={key}
          onClick={() => onSelectCoin(key as keyof typeof COINS_TYPE_LIST)}
          variant={selectedCoin === key ? "solid" : "outline"}
        >
          {key}
        </Button>
      ))}
    </Flex>
  );
}