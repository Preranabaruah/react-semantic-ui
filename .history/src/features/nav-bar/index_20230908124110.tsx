import { Menu } from "semantic-ui-react";
const NavBar = () => {
  return (
    <>
      <Menu>
        <Menu.Item name="editorials">Editorials</Menu.Item>
        <Menu.Item name="reviews">Reviews</Menu.Item>
        <Menu.Item name="upcomingEvents">Upcoming Events</Menu.Item>
      </Menu>
    </>
  );
};

export default NavBar;
