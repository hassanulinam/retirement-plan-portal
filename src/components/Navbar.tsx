import { BsPerson, BsSearch } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { VscNote } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbLogout } from "react-icons/tb";

import Butterfly from "../assets/icons8-butterfly-side-view-48.png";

import "./styles.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <>
        <img alt="app-logo" src={Butterfly} className="navbar-item" />
        <BsSearch fontSize={20} className="navbar-item" />
      </>
      <>
        <div className="navbar-item home box-center">
          <AiOutlineHome fontSize={25} />
        </div>
        <FaMoneyCheckAlt fontSize={20} className="navbar-item" />
        <VscNote fontSize={25} className="navbar-item" />
        <BsPerson fontSize={25} className="navbar-item" />
      </>
      <div className="mt-auto">
        <IoMdNotificationsOutline fontSize={25} className="navbar-item" />
        <TbLogout fontSize={25} className="navbar-item" />
      </div>
    </div>
  );
};

export default Navbar;
