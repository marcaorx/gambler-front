"use client";
import { useAuth } from "@/context/authContext";
import { useSubscription } from "@/context/subscriptionContext";
import { primaryColor } from "@/types/colors";
import { Center, Flex, Spinner } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const { isLoading: isLoadingAuth, isUserLoggedIn } = useAuth();
  const { isLoading: isLoadingSubscription } = useSubscription();

  return (
    <Flex
      align="center"
      direction="column"
      style={{ minHeight: "100vh", minWidth: "100vw" }}
      background="linear-gradient(120deg, #000 0%, #120E09 20%, #120E09 70%, #000 100%)"
    >
      {isLoadingAuth || (isLoadingSubscription && isUserLoggedIn) ? (
        <Center style={{ minHeight: "100vh", minWidth: "100vw" }}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            color={primaryColor}
            size="xl"
          />
        </Center>
      ) : (
        children
      )}
    </Flex>
  );
}
