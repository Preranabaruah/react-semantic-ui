import { Menu, Container } from "semantic-ui-react";

const items = [
  { key: "editorials", active: true, name: "Editorials" },
  { key: "review", name: "Reviews" },
  { key: "events", name: "Upcoming Events" },
];

const NavBar = () => {
  return (
    <>
      <Menu>
        <Container></Container>
      </Menu>
    </>
  );
};

export default NavBar;
