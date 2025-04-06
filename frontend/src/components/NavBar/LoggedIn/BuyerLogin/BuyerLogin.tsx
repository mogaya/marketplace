import { VStack, HStack } from "@chakra-ui/react";
import BuyerLeftSection from "./BuyerLeftSection";
import BuyerRightSection from "./BuyerRightSection";

export interface BuyerMenu {
  label: string;
  uri: string;
}

export const BuyerMenuItems: BuyerMenu[] = [{ label: "Home", uri: "/" }];

const BuyerLogin = () => {
  return (
    <VStack w={"full"} spacing={0} overflow={"visible"}>
      <HStack
        w={"full"}
        h={"auto"}
        alignItems={"center"}
        p={2}
        justifyContent={"space-between"}
        position={"fixed"}
        top={0}
        zIndex={1000}
        bg={"orange"}
        boxShadow={"2xl"}
      >
        {/* Left Section */}
        <BuyerLeftSection />

        {/* Right Section */}
        <BuyerRightSection items={BuyerMenuItems} />
      </HStack>
    </VStack>
  );
};

export default BuyerLogin;
