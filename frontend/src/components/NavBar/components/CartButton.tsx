import { Box, Button } from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";

interface props {
  cartCount: number;
}

const CartButton = ({ cartCount }: props) => {
  return (
    <Button variant={"ghost"} colorScheme="gray">
      <MdShoppingCart size={60} />
      {cartCount > 0 && (
        <Box
          position={"absolute"}
          top={"-2px"}
          right={"8px"}
          bg={"red.500"}
          color={"white"}
          fontSize={"xs"}
          fontWeight={"bold"}
          borderRadius={"full"}
          width={"18px"}
          height={"18px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {cartCount}
        </Box>
      )}
    </Button>
  );
};

export default CartButton;
