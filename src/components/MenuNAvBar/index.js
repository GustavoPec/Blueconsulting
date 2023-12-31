import { useNavigate } from "react-router-dom";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { List } from "phosphor-react";

export const NavbarMenu = () => {
  let navigate = useNavigate();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<List size={40} />}
        aria-label="Options"
        variant="outline"
        border="none"
        background="#f7f7f7"
        zIndex="2"
      />

      <MenuList marginTop="12px" width="200px" border="1px solid #c1c1c1">
        <MenuItem
          fontSize="18px"
          paddingLeft="10px"
          border="1px solid #f7f7f7"
          background="#f7f7f7"
          height="50px"
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        >
          INÍCIO
        </MenuItem>
        <MenuItem
          fontSize="18px"
          paddingLeft="10px"
          border="1px solid #f7f7f7"
          background="#f7f7f7"
          height="50px"
          onClick={() => {
            navigate("/Sobre");
            window.scrollTo(0, 0);
          }}
        >
          SOBRE NÓS
        </MenuItem>
        <MenuItem
          fontSize="18px"
          paddingLeft="10px"
          border="1px solid #f7f7f7"
          background="#f7f7f7"
          height="50px"
          onClick={() => {
            navigate("/Consultoria");
            window.scrollTo(0, 0);
          }}
        >
          CONSULTORIA SAP
        </MenuItem>
        <MenuItem
          fontSize="18px"
          paddingLeft="10px"
          border="1px solid #f7f7f7"
          background="#f7f7f7"
          height="50px"
          onClick={() => {
            navigate("/Soluções");
            window.scrollTo(0, 0);
          }}
        >
          SOLUÇÕES
        </MenuItem>
        <MenuItem
          fontSize="18px"
          paddingLeft="10px"
          border="1px solid #f7f7f7"
          background="#f7f7f7"
          height="50px"
          onClick={() => {
            navigate("/Contato");
            window.scrollTo(0, 0);
          }}
        >
          CONTATO
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
