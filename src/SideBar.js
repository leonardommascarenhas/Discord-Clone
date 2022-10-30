import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
    >
      <SideBarIcon icon={<FaFire size="28" />} text={"Direct Messages"} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} text={"Nyels"} />
      <SideBarIcon icon={<FaPoo size="20" />} text={"Pou Lords"} />
      <SideBarIcon icon={<BsPlus size="32" />} text={"Add a friend"} />
      <SideBarIcon icon={<BsGearFill size="22" />} text={"Configurações"} />
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
