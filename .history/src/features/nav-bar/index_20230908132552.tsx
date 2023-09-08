import { Menu, Container, Button } from "semantic-ui-react";

const NavBar = () => {
  return (
    <>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <img src="/src/assets/react.svg" />
            Re-vents
          </Menu.Item>
          <Menu.Item name="Events" />
          <Menu.Item>
            <Button positive inverted content="Create Event" />
          </Menu.Item>
          <Menu.Item position="right">
            <Button basic inverted content="Sign in" />
            <Button basic inverted content="Register" style={{ marginLeft: "0.5em" }} />
          </Menu.Item>
        </Container>
      </Menu>
    </>
  );
};

export default NavBar;
