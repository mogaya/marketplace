import {
  Flex,
  List,
  ListItem,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Text,
  MenuItem,
  HStack,
} from "@chakra-ui/react";
import { FaChevronDown, FaUserAstronaut } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { NavLink } from "react-router";
import { BuyerMenu } from "./BuyerLogin";
import CartButton from "../../components/CartButton";
import SearchBar from "../../components/SearchBar";
import CategoryMenu from "../../components/CategoryMenu";

interface props {
  items: BuyerMenu[];
}

const BuyerRightSection = ({ items }: props) => {
  return (
    <HStack w={"80%"} gap={4} paddingRight={4}>
      {/* categories */}
      <CategoryMenu />

      {/* Search Bar */}
      <SearchBar />

      <List gap={2} display={{ base: "none", md: "flex" }}>
        {items.map((item) => (
          <ListItem key={item.label} listStyleType={"none"}>
            <Button
              as={NavLink}
              to={item.uri}
              variant="ghost"
              colorScheme="black"
              _hover={{ textDecoration: "underline" }}
              _activeLink={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              {item.label}
            </Button>
          </ListItem>
        ))}
      </List>

      {/* Cart Button */}
      <CartButton cartCount={2} />

      {/* Account Menu */}
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              variant={"ghost"}
              colorScheme="grey"
              leftIcon={<FaUserAstronaut size={25} />}
            >
              <Text color={"blue"} mr={8}>
                Account
              </Text>
            </MenuButton>
            <MenuList>
              <MenuItem
                as={Button}
                variant={"ghost"}
                colorScheme="black"
                borderRadius={0}
                leftIcon={<IoSettingsOutline size={20} />}
              >
                Settings
              </MenuItem>
              <MenuItem
                as={Button}
                variant={"ghost"}
                colorScheme="black"
                borderRadius={0}
                leftIcon={<RiLogoutCircleRLine size={20} />}
                onClick={() => alert("Kagebunshin")}
              >
                LogOut
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </HStack>
  );
};

export default BuyerRightSection;
