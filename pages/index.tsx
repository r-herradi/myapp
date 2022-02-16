import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Artist } from "@prisma/client";
import GradientLayout from "../components/gradientLayout";
import { useMe } from "../lib/hooks";
import prisma from "../lib/prisma";

const Home = ({ artists }: { artists: Artist[] }) => {
  const { user, isLoading, isError } = useMe();
  //Add skeleton item while isLoading, that would look seriously cool
  //Add Error state while isError, that would look seriously cool

  return (
    <GradientLayout
      roundImage
      color="gray"
      subtitle={"Profile"}
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} Public Playlists`}
      image={
        "https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0"
      }
    >
      <Box color={"white"} paddingX={"40px"}>
        <Box marginBottom={"40px"}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Top artist this month
          </Text>
          <Text fontSize={"md"}>Only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX={"20px"} width={"20%"}>
              <Box
                bg="gray.900"
                borderRadius={"4px"}
                padding={"15px"}
                width={"100%"}
              >
                <Image
                  src={"http://placekitten.com/300/300"}
                  borderRadius={"100%"}
                />
                <Box marginTop={"20px"}>
                  <Text fontSize={"large"} fontWeight={"bold"}>
                    {artist.name}
                  </Text>
                  <Text fontSize={"x-small"}>Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});
  return {
    props: { artists },
  };
};

export default Home;
