"use client";
import { getSubscriptionStatus } from "@/api/subscription";
import Header from "@/components/header";
import { useAuth } from "@/context/authContext";
import {
  SubscriptionStatus,
  subscriptionStatusText,
} from "@/types/subscription";
import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Subscribe() {
  const { isUserLoggedIn, currentUser } = useAuth();
  const [subscriptionStatus, setSubscriptionStatus] = useState("loading");

  if (!isUserLoggedIn) {
    return redirect("/entrar");
  }

  async function checkSubscriptionStatus() {
    setSubscriptionStatus("loading");
    const email = currentUser?.email ?? null;
    const subResponse = await getSubscriptionStatus(email);
    setSubscriptionStatus(subResponse.status);
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    checkSubscriptionStatus();
  }, []);

  return (
    <Flex justify="center" align="center" direction="column" width="100vw">
      <Header />
      <Flex direction="column" gap="12px" align="center" justify="center">
        {subscriptionStatus === "active" ||
        subscriptionStatus === "loading" ||
        subscriptionStatus === "trialing" ? (
          <>
            {subscriptionStatusText[subscriptionStatus as SubscriptionStatus]}
          </>
        ) : (
          <>
            {subscriptionStatusText[subscriptionStatus as SubscriptionStatus]}
            <Link
              target="_blank"
              href={"https://buy.stripe.com/4gwfZkcNk2i69AQ3ce"}
            >
              <Button>Acessar a página de pagamentos</Button>
            </Link>
            <Button onClick={checkSubscriptionStatus}>
              Verificar pagamento
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  );
}
