"use client";
import Header from "@/components/header";
import VideoFrame from "@/components/videoFrame";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Strategies() {
  return (
    <Flex justify="center" direction="column" width="100vw">
      <Header />
      <Flex padding={"20px 0"} align="center" direction="column" gap="12px">
        <Heading size="md">Estratégias vencedoras</Heading>
        <Text>
          Aprenda as melhores estratégias para lucrar com os jogos das casas de
          apostas!
        </Text>
        <Flex marginTop="40px" justify="center" wrap="wrap" gap="20px">
          <VideoFrame
            src="https://www.youtube.com/embed/Vv8zSF17z-E"
            title="Como acertar tudo na roleta"
          />
          <VideoFrame
            src="https://www.youtube.com/embed/Vv8zSF17z-E"
            title="Como acertar tudo no jogo"
          />
          <VideoFrame
            src="https://www.youtube.com/embed/Vv8zSF17z-E"
            title="Como fazer a estrategia certa"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
