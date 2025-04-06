import { HStack, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  leftContent: ReactNode;
  rightContent: ReactNode;
  children?: ReactNode;
  bg?: string;
  spacing?: number;
  shadow?: string;
}

const NavLayout = ({
  leftContent,
  rightContent,
  children,
  bg = "orange",
  spacing = 0,
  shadow = "2xl",
}: props) => {
  return (
    <VStack w={"full"} spacing={spacing} overflow={"visible"}>
      <HStack
        w={"full"}
        h={"auto"}
        p={2}
        alignItems={"center"}
        justifyContent={"space-between"}
        position={"sticky"}
        top={0}
        zIndex={1000}
        bg={bg}
        boxShadow={shadow}
      >
        {leftContent}
        {rightContent}
      </HStack>
      {children}
    </VStack>
  );
};

export default NavLayout;
