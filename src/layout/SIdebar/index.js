import {
  MenuOutlined,
  SettingOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import { useState } from "react";

function MenuItem({ menu, index, visible }) {
  const { title, icon, gap } = menu;

  return (
    <Tooltip title={!visible && title}>
      <li
        className={`flex ${
          !visible && "items-center justify-center"
        }  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 transition-all ease-in-out  hover:bg-blue-400 
    ${gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
      >
        {icon}
        <span className={`${!visible && "hidden"} origin-left duration-200`}>
          {title}
        </span>
      </li>
    </Tooltip>
  );
}

export function Sidebar() {
  const [isVisible, setIsVisible] = useState(true);
  const Menus = [
    { title: "Todos", icon: <MenuOutlined /> },
    { title: "Setting", icon: <SettingOutlined /> },
    { title: "Profile", icon: <UserAddOutlined />, gap: true },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          isVisible ? "w-72" : "w-20 "
        } bg-blue-900 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="/images/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full  ${!isVisible && "rotate-180"}`}
          onClick={() => setIsVisible(!isVisible)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="/images/logo.png"
            className={`cursor-pointer duration-500 ${
              isVisible && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !isVisible && "scale-0"
            }`}
          >
            Welcome :)
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <MenuItem visible={isVisible} menu={menu} index={index} key={index} />
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
}
