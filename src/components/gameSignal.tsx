import { primaryColor } from "@/types/colors";
import {
  Flex,
  CircularProgress,
  CircularProgressLabel,
  Button,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function GameSignal({
  gameTitle,
  possibleSigns,
}: {
  gameTitle: string;
  possibleSigns: string[];
}) {
  const [assertiveness, setAssertiveness] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [awnser, setAwnser] = useState("");
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  const isButtonEnabled = timeLeft === 0;

  function generateAwnser() {
    setIsLoading(true);
    setTimeLeft(60);
    setTimeout(() => {
      setIsLoading(false);
      setAssertiveness(Math.floor(Math.random() * 40) + 60);
    }, 5000);
    const randomIndex = Math.floor(Math.random() * possibleSigns.length);
    return setAwnser(possibleSigns[randomIndex]);
  }

  useEffect(() => {
    setAssertiveness(Math.floor(Math.random() * 40) + 60);
  }, []);

  return (
    <Flex gap="12px" direction="column" align="center" justify="center">
      <Flex gap="8px" align="center">
        <Text>
          <b>{gameTitle}</b>
        </Text>
      </Flex>
      <Text>Assertividade</Text>
      <CircularProgress
        size="60px"
        fill="transparent"
        max={100}
        value={assertiveness}
        color={primaryColor}
      >
        <CircularProgressLabel>{assertiveness}%</CircularProgressLabel>
      </CircularProgress>

      {isLoading ? (
        <>
          <Spinner
            thickness="4px"
            speed="0.65s"
            color={primaryColor}
            size="xl"
          />
          <Text>Nossa IA está trabalhando para gerar o sinal...</Text>
        </>
      ) : (
        <>
          <Text>Aposte em: {awnser}</Text>
          <Button
            onClick={() => generateAwnser()}
            color={primaryColor}
            variant="outline"
            isDisabled={!isButtonEnabled}
          >
            {isButtonEnabled ? "Gerar sinal" : `Aguarde: ${timeLeft} segundos`}
          </Button>
        </>
      )}
    </Flex>
  );
}
