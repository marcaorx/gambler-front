import { primaryColor } from "@/types/colors";
import { Card, Heading, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ActionCard({
  title,
  icon,
  backgroundImage,
  onClickDestiny,
}: {
  title: string;
  icon: JSX.Element;
  backgroundImage: string;
  onClickDestiny: string;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const iconSize = isMobile ? 50 : 62;

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{
        scale: 0.8,
        borderRadius: "100%",
      }}
    >
      <Card
        style={{
          borderRadius: "10px",
          backdropFilter: "blur(5px)",
        }}
        backgroundImage={backgroundImage}
        backgroundSize="cover"
        backgroundColor="#020202"
        backgroundPosition="center"
        width={isMobile ? "300px" : "800px"}
        height={isMobile ? "120px" : "160px"}
      >
        <Link style={{ height: "100%" }} href={onClickDestiny} scroll={true}>
          <Flex
            height="100%"
            padding="16px"
            direction="row"
            gap={isMobile ? "10px" : "20px"}
            align="center"
          >
            {{
              ...icon,
              props: {
                sx: { color: primaryColor, fontSize: iconSize },
              },
            }}
            <Heading size={isMobile ? "md" : "lg"}>{title}</Heading>
          </Flex>
        </Link>
      </Card>
    </motion.div>
  );
}
