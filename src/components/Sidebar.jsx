import React from "react";
import { Link } from "react-router-dom";
import SidebarIcon from "./SidebarIcon";
import { PiExam } from "react-icons/pi";
import { FaHome, FaUniversity, FaLinkedin, FaGithub, FaInstagram, FaRegChartBar } from "react-icons/fa";
import { GiViolin } from "react-icons/gi";
import { BsRewindCircleFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col justify-between bg-primary text-secondary shadow-lg dark">
      <div>
        <Link to="/"><SidebarIcon icon={<FaHome size="20" />} text="Home" /></Link>
        <Link to="/academics"><SidebarIcon icon={<PiExam size="24" />} text="Academics" /></Link>
        <Link to="/interests"><SidebarIcon icon={<GiViolin size="24" />} text="Interests" /></Link>
        <Link to="/university"><SidebarIcon icon={<FaUniversity size="20" />} text="University" /></Link>
        <Link to="/memories"><SidebarIcon icon={<BsRewindCircleFill size="20" />} text="Memories" /></Link>
        <Link to="/charts"><SidebarIcon icon={<FaRegChartBar size="20" />} text="Charts" /></Link>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/hamzaasad/" target="_blank"><SidebarIcon icon={<FaLinkedin size="20" />} text="LinkedIn" /></a>
        <a href="https://github.com/Muh-Hamza-99" target="_blank"><SidebarIcon icon={<FaGithub size="20" />} text="GitHub" /></a>
        <a href="https://www.instagram.com/fullstack_tabla/" target="_blank"><SidebarIcon icon={<FaInstagram size="20" />} text="Instagram" /></a>
      </div>
    </div>
  );
};

export default Sidebar;
