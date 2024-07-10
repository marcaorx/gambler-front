/* eslint-disable react/no-unescaped-entities */
import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalButtonGroup from "./modalButtonGroup";

export default function OpenGameModal({ gameName }: { gameName: string }) {
  const [isOpen, setIsOpen] = useState(true);
  const [gameTitle, setGameTitle] = useState("");
  const [gameUrl, setGameUrl] = useState("");

  const jsonKey = `hasDone${gameName}Setup`;

  useEffect(() => {
    if (localStorage.getItem(jsonKey)) {
      const jsonLeonConfig = JSON.parse(
        localStorage.getItem(jsonKey) as string
      );
      const timeDifference = Date.now() - jsonLeonConfig.dateSaved;
      const minutesDifference = timeDifference / (1000 * 60);
      if (!localStorage.getItem(jsonKey) || minutesDifference > 30) {
        localStorage.setItem(
          jsonKey,
          JSON.stringify({ value: false, dateSaved: null })
        );
      }
    }

    if (!localStorage.getItem(jsonKey)) {
      localStorage.setItem(
        jsonKey,
        JSON.stringify({ value: false, dateSaved: null })
      );
    }

    if (gameName === "LightningRoulette") {
      setGameTitle("Lightning Roulette");
      setGameUrl(
        "https://leon84.casino/live-casino/evolution/play/lightning-roulette"
      );
    }
    if (gameName === "StockMarket") {
      setGameTitle("Stock Market");
      setGameUrl("https://leon84.casino/casino/evolution-rng/play/stockmarket");
    }
    if (gameName === "BacBo") {
      setGameTitle("Bac-Bo");
      setGameUrl("https://leon84.casino/live-casino/evolution/play/bac-bo");
    }
    if (gameName === "FootballStudio") {
      setGameTitle("Football Studio");
      setGameUrl(
        "https://leon84.casino/live-casino/evolution/play/football-studio-dice"
      );
    }
  }, []);

  function finishConfig() {
    setIsOpen(false);
    const dateSaved = Date.now();
    const item = {
      value: true,
      dateSaved,
    };
    localStorage.setItem(jsonKey, JSON.stringify(item));
    window.location.reload();
  }

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        size="xl"
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
      >
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(90deg)" />
        <ModalContent background="linear-gradient(120deg, #000 0%, #120E09 20%, #120E09 70%, #000 100%)">
          <ModalHeader>
            Como receber os sinais de {gameTitle} corretamente!
          </ModalHeader>
          <ModalBody>
            <Flex gap="12px" direction="column">
              <Text>
                Você precisa abrir o jogo o {gameTitle} e esperar carrega-lo
                totalmente.
              </Text>
              <Text>
                Assim que o jogo estiver carregado, clique no botão abaixo para
                começar a receber os sinais.
              </Text>
              <Text fontWeight="600">
                Atenção! Se o jogo não for aberto e carregado totalmente, os
                sinais não irão funcionar.
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter style={{ margin: "20px 0" }}>
            <Flex width="100%" justify="center">
              <ModalButtonGroup
                leftButtonTitle="Abrir o jogo"
                rightButtonTitle="Ganhar dinheiro"
                rightButtonLoadingText="Aguardando"
                leftButtonDestiny={gameUrl}
                onRightButtonFunction={finishConfig}
              />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
