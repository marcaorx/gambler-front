"use client";
import Header from "@/components/header";
import VideoFrame from "@/components/videoFrame";
import { useAuth } from "@/context/authContext";
import { useSubscription } from "@/context/subscriptionContext";
import { Flex } from "@chakra-ui/react";
import { redirect } from "next/navigation";

export default function DownloadApp() {
  const { userHasAccess } = useSubscription();
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
    <Flex align="center" justify="center" direction="column" width="100vw">
      <Header />
      <VideoFrame
        width={800}
        height={400}
        src="https://www.youtube.com/embed/Vv8zSF17z-E"
        title="Como baixar o app"
      />
    </Flex>
  );
}
