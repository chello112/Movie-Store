import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "News",
    path: "/news",
    icon: <BiIcons.BiNews />,
    cName: "nav-text",
  },
  {
    title: "Renting",
    path: "/renting",
    icon: <BiIcons.BiMoviePlay />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <AiIcons.AiOutlineContacts />,
    cName: "nav-text",
  },
];
