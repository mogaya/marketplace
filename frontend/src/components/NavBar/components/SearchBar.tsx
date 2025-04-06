import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents={"none"}>
        <FaSearch />
      </InputLeftElement>
      <Input placeholder="Search ..."></Input>
    </InputGroup>
  );
};

export default SearchBar;
