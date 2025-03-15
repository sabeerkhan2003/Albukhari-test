import React, { useState, useEffect } from "react";
import logo3 from "../../assets/Navbar/logo3.png";
import logo from "../../assets/Navbar/logo.png";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";

function Nav2({ text_color }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarDropdownOpen, setSidebarDropdownOpen] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const items = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    {
      title: "Academic",
      path: "/academic",
      subPages: [
        { title: "Programs", path: "/programs" },
        { title: "Faculty", path: "/faculty" },
        // { title: "Admission", path: "/admission" },
      ],
    },
    { title: "Gallery", path: "/gallery" },
    {
      title: "E-Journal",
      path: "http://www.albukharijournal.in/index.php/abjais",
      external: true,
    },
    { title: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative font-Robot">
      {/* Navbar */}
      <div
        className={`fixed md:absolute top-0 left-0 z-50  flex justify-center gap-[8%] md:gap-[7%] xl:gap-56 2xl:gap-80 lg:h-20 w-full md:py-2 items-center py-4 transition-all duration-500 ${
          isScrolled ? "bg-white shadow-md md:h-16" : "bg-white md:bg-transparent md:mt-10 lg:mt-16 xl:top-0 xl:mt-16 "
        }`}
      >
        {/* Logo */}
        <img
          src={isScrolled ? logo : logo3}
          alt="logo"
          className="w-[70%] md:w-[180px] md:h-[90px] lg:w-[200px] xl:w-[220px] lg:h-[120px] object-contain transition-all duration-500 hidden md:block"
        />
            <img src={logo} alt="logo" className="w-[70%] md:hidden  object-contain transition-all duration-500" />
        {/* Desktop Nav Links */}
        <ul className={`hidden md:flex items-center gap-8 lg:gap-16 2xl:gap-28 md:text-[11px] lg:text-[12px] 2xl:text-lg ${isScrolled ? "text-[#1C315E]" : text_color} lg:text-sm font-semibold`}>
          {items.map((item, index) => {
            const isActive = location.pathname === item.path || (item.subPages && item.subPages.some(sub => sub.path === location.pathname));
            return (
              <li key={index} className="relative group">
                {item.external ? (
                  <a href={item.path} target="_blank" rel="noopener noreferrer" className="flex items-center transition-colors duration-200 hover:text-red-400">
                    {item.title}
                  </a>
                ) : (
                  <>
                    <Link to={item.path} className={`flex items-center transition-colors duration-200 ${isActive ? "text-red-400" : "hover:text-red-400"}`}>
                      {item.title}
                      {item.subPages && <Icon icon="mingcute:down-line" width="20" height="24" className="ml-1" />}
                    </Link>
                    {item.subPages && (
                      <ul className="absolute left-0 mt-2 w-fit bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.subPages.map((subItem, subIndex) => (
                          <li key={subIndex} className="px-4 py-2 hover:bg-gray-200">
                            <Link to={subItem.path} className="block text-[#1C315E]">
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Icon */}
        <Icon
          icon="charm:menu-hamburger"
          width="38"
          height="40"
          className="md:hidden border-2 p-1 cursor-pointer"
          onClick={handleSidebarToggle}
        />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-20 md:top-0 left-0 w-full h-screen bg-[#07294D] text-white font-Roboto text-xl px-4 py-4 z-40 transform ${
          isSidebarOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out`}
      >
        {/* Close Button */}
        {/* <button className="absolute top-4 right-6 text-2xl" onClick={closeSidebar}>
          ✕
        </button> */}

        {/* Sidebar Links */}
        <ul className="space-y-6 pt-8">
          {items.map((item, index) => {
            const isActive = location.pathname === item.path || (item.subPages && item.subPages.some(sub => sub.path === location.pathname));

            return (
              <li key={index} className="hover:text-red-400">
                {item.external ? (
                  <a href={item.path} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-red-400">
                    {item.title}
                  </a>
                ) : item.subPages ? (
                  <>
                    <div className="flex justify-between items-center w-full">
                      <Link
                        to={item.path}
                        className={`transition-colors duration-200 ${isActive ? "text-red-400" : "hover:text-red-500"}`}
                        onClick={closeSidebar}
                      >
                        {item.title}
                      </Link>
                      <button onClick={() => setSidebarDropdownOpen(sidebarDropdownOpen === index ? null : index)}>
                        <Icon icon={sidebarDropdownOpen === index ? "mingcute:up-line" : "mingcute:down-line"} width="20" height="24" />
                      </button>
                    </div>
                    {sidebarDropdownOpen === index && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {item.subPages.map((subItem, subIndex) => {
                          const isSubActive = location.pathname === subItem.path;
                          return (
                            <li key={subIndex} className={`text-lg transition-colors duration-200 hover:text-red-400 ${isSubActive ? "text-red-400" : ""}`}>
                              <Link to={subItem.path} onClick={closeSidebar}>
                                {subItem.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={item.path} className={`transition-colors duration-200 hover:text-red-400 ${isActive ? "text-red-400" : ""}`} onClick={closeSidebar}>
                    {item.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Nav2;
