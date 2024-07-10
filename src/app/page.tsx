"use client";
import ActionCard from "@/components/actionCard";
import Header from "@/components/header";
import LoginLeonModal from "@/components/loginLeonModal";
import RouletteIcon from "@/components/rouletteIcon";
import { useAuth } from "@/context/authContext";
import { useSubscription } from "@/context/subscriptionContext";
import { useValidateJsonKey } from "@/hooks/useValidateJsonKey";
import { Flex, Heading, Text } from "@chakra-ui/react";
import CasinoIcon from "@mui/icons-material/Casino";
import DownloadIcon from "@mui/icons-material/Download";
import PaymentsIcon from "@mui/icons-material/Payments";
import SchoolIcon from "@mui/icons-material/School";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
import { redirect } from "next/navigation";

export default function Home() {
  const { isUserLoggedIn } = useAuth();
  const { userHasAccess } = useSubscription();
  const { isKeyValidated } = useValidateJsonKey("hasDoneLeonSetup");

  if (!isUserLoggedIn) {
    return redirect("/entrar");
  }

  if (isUserLoggedIn && !userHasAccess) {
    return redirect("/assinar");
  }

  return (
    <Flex justify="center" direction="column" width="100vw">
      <Header isHome />
      <Flex justify="center" align="center" direction="column" width="auto">
        <Heading size="md">Bem vindo ao Gambler AI.</Heading>
        {!isKeyValidated && <LoginLeonModal />}
        <Flex direction="column" margin="40px 0" gap="12px">
          <ActionCard
            backgroundImage='url("/strategy-bg.png")'
            title="Aprenda estretégias vencedoras"
            icon={<SchoolIcon />}
            onClickDestiny="/estrategias"
          />
          <ActionCard
            backgroundImage='url("/download-bg.png")'
            title="Como baixar o APP"
            icon={<DownloadIcon />}
            onClickDestiny="/baixar-o-app"
          />
          <ActionCard
            backgroundImage='url("/roulette-bg.png")'
            onClickDestiny="/lightning-roulette"
            title="Jogar Lightning Roulette"
            icon={<RouletteIcon />}
          />
          <ActionCard
            backgroundImage='url("/bac-bo-bg.png")'
            onClickDestiny="/bacbo"
            title="Jogar Bac Bo"
            icon={<CasinoIcon />}
          />
          <ActionCard
            backgroundImage='url("/football-studio-bg.png")'
            onClickDestiny="/football-studio"
            title="Jogar Football Studio"
            icon={<SportsSoccerIcon />}
          />
          <ActionCard
            backgroundImage='url("/stock-market-bg.png")'
            onClickDestiny="/stock-market"
            title="Jogar Stock Market"
            icon={<CandlestickChartIcon />}
          />
          <ActionCard
            backgroundImage='url("/payment-bg.png")'
            onClickDestiny="/assinar"
            title="Gerenciar Assinatura"
            icon={<PaymentsIcon />}
          />
        </Flex>
      </Flex>
      <Text margin="20px 40px" align="center">
        © Gambler IA 2024 - Todos os direitos reservados
      </Text>
    </Flex>
  );
}
