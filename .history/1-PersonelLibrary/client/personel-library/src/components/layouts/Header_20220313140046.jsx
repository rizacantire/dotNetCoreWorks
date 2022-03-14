import React from "react";
import { Menu } from "semantic-ui-react";

export default function Header() {
  return (
    <div>
      <Menu>
        <Menu.Item name="browse">Kitaplık</Menu.Item>

        <Menu.Item name="submit">Ana Sayfa</Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item name="signup">Kayıt Ol</Menu.Item>

          <Menu.Item name="help">Giriş Yap</Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
