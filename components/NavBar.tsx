"use client";

import Link from "next/link";
import "./NavBar.css";
import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
const items = [
  { label: "Home", key: "1", href: "/" },
  { label: "Tools", key: "2", href: "/tools" },
  { label: "Blogs", key: "3", href: "/blogs" },
  { label: "About", key: "4", href: "/about" },
];

const NavBar = () => {
  return (
    <Header>
      <Menu
        theme="light"
        mode="horizontal"
        style={{ display: "flex", justifyContent: "flex-end" }}
        defaultSelectedKeys={["1"]}
      >
        {items.map((item) => (
          <Menu.Item key={item.key}>
            <Link href={item.href}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default NavBar;
