import React from "react";
import { Dropdown, Icon, Input, Menu } from "semantic-ui-react";

export default function SideNavi() {
  const [activeItem, setValue] = React.useState("");
 
  const handleItemClick = (e, { name }) => {
    setValue({ activeItem: name })
    console.log(  activeItem  );
  }

  return (
    <div>
      <Menu vertical>
        <Menu.Item>
          <Input placeholder="Search..." />
        </Menu.Item>

        <Menu.Item>
          Home
          <Menu.Menu>
            <Menu.Item
              name="search"
              active={activeItem === "search"}
              onClick={handleItemClick}
            >
              Search
            </Menu.Item>
            <Menu.Item
              name="add"
              active={activeItem === "add"}
              onClick={handleItemClick}
            >
              Add
            </Menu.Item>
            <Menu.Item
              name="about"
              active={activeItem === "about"}
              onClick={handleItemClick}
            >
              Remove
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item
          name="browse"
          active={activeItem === "browse"}
          onClick={handleItemClick}
        >
          <Icon name="grid layout" />
          Browse
        </Menu.Item>
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={handleItemClick}
        >
          Messages
        </Menu.Item>

        <Dropdown item text="More">
          <Dropdown.Menu>
            <Dropdown.Item icon="edit" text="Edit Profile" />
            <Dropdown.Item icon="globe" text="Choose Language" />
            <Dropdown.Item icon="settings" text="Account Settings" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </div>
  );
}
