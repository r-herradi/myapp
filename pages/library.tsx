import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import prisma from "../lib/prisma";

const Library = ({ playlists }) => {
  let color = "gray";
  return (
    <Box
      bg={`${color}.1000`}
      height={"calc(100vh - 100px)"}
      paddingTop={"20px"}
    >
      {/* Boxes with image of playlist, name of playlist, artist of playlist */}
      <Flex direction={"row"} flexWrap={"wrap"}>
        <Box
          width={"26%"}
          height={"28vh"}
          margin={"1%"}
          bg={`${color}.1100`}
          color="white"
          padding={"20px"}
          borderRadius={"6px"}
          display={"flex"}
          justifyContent={"start"}
          alignContent={"space-evenly"}
        >
          <Box padding={"5px"}>
            <Image
              alt={"kitten"}
              src={`https://picsum.photos/400?random=${
                Math.random() * (playlists.length + 1)
              }`}
              boxSize={"100%"}
              overflow={"hidden"}
              objectFit={"cover"}
            />
          </Box>
          <Box padding={"20px"}>
            <Text fontSize={"medium"} fontWeight={"bold"}>
              Liked Music
            </Text>
            <Text fontSize={"small"}>By You</Text>
          </Box>
        </Box>
        {playlists.map((playlist) => (
          <Box
            width={"12%"}
            height={"28vh"}
            margin={"1%"}
            bg={`${color}.1100`}
            color="white"
            padding={"20px"}
            borderRadius={"6px"}
          >
            <Box padding={"5px"} boxShadow={"2xl"}>
              <Image
                alt={"kitten"}
                src={`https://picsum.photos/400?random=${
                  Math.random() * (playlists.length + 1)
                }`}
                overflow={"hidden"}
                objectFit={"cover"}
                borderRadius={"2px"}
              />
            </Box>
            <Box>
              <Text fontSize={"medium"} fontWeight={"bold"}>
                {playlist.name}
              </Text>
              <Text fontSize={"small"}>By {playlist.user.email}</Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export const getServerSideProps = async () => {
  const playlists = await prisma.playlist.findMany({
    include: {
      user: true,
    },
  });
  return {
    props: { playlists },
  };
};

export default Library;
