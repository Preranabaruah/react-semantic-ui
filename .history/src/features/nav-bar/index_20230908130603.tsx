import { Menu, Container } from "semantic-ui-react";

const NavBar = () => {
  return (
    <>
      <Menu>
        <Container>
          <Menu.Item name="editorials">Editorials</Menu.Item>
        </Container>
      </Menu>
    </>
  );
};

export default NavBar;
