import { Box, Flex, Text } from "@chakra-ui/layout";
import { ColorProps, Image } from "@chakra-ui/react";
import { ReactElement } from "react";

const GradientLayout = ({
  color,
  children,
  image,
  subtitle,
  title,
  description,
  roundImage,
}: {
  color: string;
  children: ReactElement;
  image: string;
  subtitle: string;
  title: string;
  description: string;
  roundImage: boolean;
}) => {
  return (
    <Box
      h="100%"
      overflowY={"auto"}
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding={"40px"} align={"end"}>
        <Box>
          <Image
            boxSize={"160px"}
            boxShadow={"2xl"}
            src={image}
            borderRadius={roundImage ? "100%" : "3px"}
          />
        </Box>
        <Box padding={"80px 40px 0 40px"} lineHeight={"40px"} color={"white"}>
          <Text fontSize={"x-small"} fontWeight={"bold"} casing={"uppercase"}>
            {subtitle}
          </Text>
          <Text fontSize={"6xl"}>{title}</Text>
          <Text fontSize={"sm"} fontWeight={"100"}>
            {description}
          </Text>
        </Box>
      </Flex>
      <Box paddingY="50px">{children}</Box>
    </Box>
  );
};

export default GradientLayout;
