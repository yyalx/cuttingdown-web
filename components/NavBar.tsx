"use client";

import Link from "next/link";
import "./NavBar.css";
import { Menu, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  type MenuItem = Required<MenuProps>["items"][number];
  const items: MenuItem[] = [
    { label: "Home", key: "/" },
    { label: "Tools", key: "/tools" },
    { label: "Blogs", key: "/blogs" },
    { label: "ChatRoom", key: "/chatroom" },
    { label: "About", key: "/about" },
    { label: "Register", key: "/my-account/register" },
  ];

  const router = useRouter();
  const pathname = usePathname();

  // when click on menu item, set selectd key and navigate to the page
  const clickMenu: MenuProps["onClick"] = (e) => {
    router.push(e.key);
  };

  return (
    <Header className="header">
      <Menu
        mode="horizontal"
        style={{ justifyContent: "flex-end", paddingRight: "50px" }}
        onClick={clickMenu}
        selectedKeys={[pathname]}
        items={items}
      >
        {/* {items.map((item) => (
          <Menu.Item key={item.key}>
            <Link href={item.href}>{item.label}</Link>
          </Menu.Item>
        ))} */}

        {/* account menu: 
        if the user is logged in, show personal icon
        else show register/login */}
        {/* <Menu.Item key={10}>
          <Link href={"/my-account/register"}>register/login</Link>
        </Menu.Item> */}
      </Menu>
    </Header>
  );
};

export default NavBar;
