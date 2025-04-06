import {
  Flex,
  List,
  ListItem,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
// import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { NavLink } from "react-router";
import { AdminMenu } from "./AdminLogin";
import { FaChevronDown, FaUserAstronaut } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

interface props {
  items: AdminMenu[];
}

const AdminRightSection = ({ items }: props) => {
  return (
    <Flex alignItems="center" gap={2}>
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

      {/* Add Products */}

      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              variant={"ghost"}
              colorScheme="black"
              rightIcon={<FaChevronDown />}
              _hover={{ textDecoration: "underline" }}
              _activeLink={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              Products
            </MenuButton>
            <MenuList>
              <MenuItem>All Products</MenuItem>
              <MenuItem onClick={() => alert("Kagebunshin")}>Orders</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>

      {/* Add Products */}
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              variant={"ghost"}
              colorScheme="black"
              rightIcon={<FaChevronDown />}
              _hover={{ textDecoration: "underline" }}
              _activeLink={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              Users
            </MenuButton>
            <MenuList>
              <MenuItem>Buyers</MenuItem>
              <MenuItem onClick={() => alert("Kagebunshin")}>Vendors</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>

      {/* Setting Button */}
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
              <Text color={"blue"}>Admin</Text>
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
    </Flex>
  );
};

export default AdminRightSection;
