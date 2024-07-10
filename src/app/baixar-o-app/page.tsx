"use client";
import Header from "@/components/header";
import VideoFrame from "@/components/videoFrame";
import { Flex } from "@chakra-ui/react";

export default function DownloadApp() {
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
