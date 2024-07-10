"use client";
import GameSignal from "@/components/gameSignal";
import Header from "@/components/header";
import OpenGameModal from "@/components/openGameModal";
import { useAuth } from "@/context/authContext";
import { useSubscription } from "@/context/subscriptionContext";
import { useValidateJsonKey } from "@/hooks/useValidateJsonKey";
import { Center, Flex } from "@chakra-ui/react";
import { redirect } from "next/navigation";

const gameName = "FootballStudio";

export default function FootballStudio() {
  const { userHasAccess } = useSubscription();
  const { isKeyValidated } = useValidateJsonKey("hasDoneLeonSetup");
  const { isUserLoggedIn } = useAuth();

  if (!isUserLoggedIn) {
    return redirect("/entrar");
  }

  if (isUserLoggedIn && !userHasAccess) {
    return redirect("/assinar");
  }
  if (!isUserLoggedIn) {
    return redirect("/entrar");
  }
  return (
    <Flex justify="center" direction="column" width="100vw">
      <Header />
      {!isKeyValidated && <OpenGameModal gameName={gameName} />}
      <Flex gap="40px" align="center" direction="column">
        <GameSignal
          gameTitle={"Football Studio"}
          possibleSigns={["sinal 1", "sinal 2"]}
        />
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
