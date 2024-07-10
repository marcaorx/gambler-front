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

export default function LoginLeonModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("hasDoneLeonSetup")) {
      const jsonLeonConfig = JSON.parse(
        localStorage.getItem("hasDoneLeonSetup") as string
      );
      const timeDifference = Date.now() - jsonLeonConfig.dateSaved;
      const hoursDifference = timeDifference / (1000 * 60 * 60);
      if (!localStorage.getItem("hasDoneLeonSetup") || hoursDifference > 2) {
        localStorage.setItem(
          "hasDoneLeonSetup",
          JSON.stringify({ value: false, dateSaved: null })
        );
      }
    }

    if (!localStorage.getItem("hasDoneLeonSetup")) {
      localStorage.setItem(
        "hasDoneLeonSetup",
        JSON.stringify({ value: false, dateSaved: null })
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
    localStorage.setItem("hasDoneLeonSetup", JSON.stringify(item));
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
          <ModalHeader>Como receber os sinais corretamente!</ModalHeader>
          <ModalBody>
            <Flex gap="12px" direction="column">
              <Text>
                Para acessar os sinais de jogos corretamente, leia com atenção
                as informações abaixo.
              </Text>
              <Text>
                Você precisa criar a conta estritamente pelo link do botão
                abaixo para que os sinais de jogos funcionem corretamente.
              </Text>
              <Text fontWeight="600">
                Atenção! Se você não criar a conta pelo link abaixo, os sinais
                de jogos não funcionarão.
              </Text>
              <Text>
                Caso já tenha criado uma conta na Leon pela Gambler, clique no
                link e vá até a aba de login apenas.
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter style={{ margin: "20px 0" }}>
            <Flex width="100%" justify="center">
              <ModalButtonGroup
                leftButtonTitle="Entrar na Leon"
                rightButtonTitle="Ganhar dinheiro"
                rightButtonLoadingText="Aguardando"
                leftButtonDestiny="https://bit.ly/CorretoraConfiavelPortugal"
                onRightButtonFunction={finishConfig}
              />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
