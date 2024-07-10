"use client";
import GameSignal from "@/components/gameSignal";
import Header from "@/components/header";
import OpenGameModal from "@/components/openGameModal";
import { useAuth } from "@/context/authContext";
import { useValidateJsonKey } from "@/hooks/useValidateJsonKey";
import { Center, Flex } from "@chakra-ui/react";
import { redirect } from "next/navigation";

const gameName = "LightningRoulette";

export default function LightningRoulette() {
  const { isUserLoggedIn } = useAuth();
  const { isKeyValidated } = useValidateJsonKey(`hasDone${gameName}Setup`);
  if (!isUserLoggedIn) {
    return redirect("/entrar");
  }

  const sings = [
    "Lado de mesa do 9",
    "Lado de mesa do 17",
    "Lado de mesa do 5",
    "Lado de meta do 0",
    "Colunas 1 e 2",
    "Colunas 2 e 3",
    "Colunas 1 e 3",
    "Duzias 1 e 2",
    "Duzias 1 e 3",
    "Duzias 2 e 3",
    "Terminal do 1",
    "Terminal do 2",
    "Terminal do 3",
    "Terminal do 4",
    "Terminal do 5",
    "Terminal do 6",
  ];

  return (
    <Flex justify="center" direction="column" width="100vw">
      <Header />
      {!isKeyValidated && <OpenGameModal gameName={gameName} />}
      <Flex gap="40px" align="center" direction="column">
        <GameSignal possibleSigns={sings} gameTitle="Ligthning Roulette" />
        <Center>
          <iframe
            style={{
              minHeight: "80vh",
              minWidth: "80vw",
              marginBottom: "40px",
            }}
            src="https://live.leon.red/frontend/evo/r2/"
          />
        </Center>
      </Flex>
    </Flex>
  );
}
