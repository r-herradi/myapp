import { Box } from "@chakra-ui/layout";
import PlayerBar from "./playerBar";
import Sidebar from "./sidebar";

const PlayerLayout = ({ children }) => {
  return (
    <Box w={"100vw"} h={"100vh"}>
      <Box pos={"absolute"} top={"0"} w={"250px"} left={"0"}>
        <Sidebar />
      </Box>
      <Box marginLeft={"250px"} marginBottom={"100px"}>
        <Box h="calc(100vh - 100px)">{children}</Box>
      </Box>
      <Box pos={"absolute"} left={"0"} bottom={"0"} height={"100px"}>
        <PlayerBar />
      </Box>
    </Box>
  );
};

export default PlayerLayout;
