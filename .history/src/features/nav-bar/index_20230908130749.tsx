import { Menu, Container } from "semantic-ui-react";

const NavBar = () => {
  return (
    <>
      <Menu inverted-fixed="top">
        <Container>
          <Menu.Item header>
            <img src="/src/assets/react.svg" />
          </Menu.Item>
        </Container>
      </Menu>
    </>
  );
};

export default NavBar;
