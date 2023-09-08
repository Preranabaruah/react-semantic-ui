import { Menu, Container, Button } from "semantic-ui-react";

const NavBar = () => {
  return (
    <>
      <Menu inverted-fixed="top">
        <Container>
          <Menu.Item header>
            <img src="/src/assets/react.svg" />
            Re-vents
          </Menu.Item>
          <Menu name="events" />
          <Menu.Item>
            <Button />
          </Menu.Item>
        </Container>
      </Menu>
    </>
  );
};

export default NavBar;
