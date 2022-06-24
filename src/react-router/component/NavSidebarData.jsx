import React from "react";
import * as FaIcons from "react-icons/fa";



export const NavSidebarData = [
    {
        title: "AllTask",
        path: "/all-task",
        icon: <FaIcons.FaHome/>
    },

    {
        title: "NewTask",
        path: "/new-task",
        icon: <FaIcons.FaNewspaper/>
    },

    {
        title: "DoingTask",
        path: "/doing-task",
        icon:<FaIcons.FaUserPlus/>
    },

    {
        title: "DoneTask",
        path: "/done-task",
        icon: <FaIcons.FaCheckSquare/>
    }
];