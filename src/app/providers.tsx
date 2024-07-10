"use client";
import { AuthProvider } from "@/context/authContext";
import { SubscriptionProvider } from "@/context/subscriptionContext";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <ColorModeScript initialColorMode="dark" />
      <ChakraProvider>
        <AuthProvider>
          <SubscriptionProvider>{children}</SubscriptionProvider>
        </AuthProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
