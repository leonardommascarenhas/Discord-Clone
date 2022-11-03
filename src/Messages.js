import { FaUserFriends, FaPoo } from "react-icons/fa";
import { BsSpeedometer, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Messages = () => {
  return (
    <div className="relative h-screen p-2 flex flex-col bg-gray-800 shadow-lg w-60">
      <div className="mb-4">
        <MessagesMenu icon={<FaUserFriends className="message-icons" />} text={"Amigos"} />
        <MessagesMenu icon={<BsSpeedometer className="message-icons" />} text={"Nitro"} />
        <MessagesMenu icon={<AiOutlineMail className="message-icons" />} text={"Solicitações de me..."} />
      </div>
      <h6 className="text-xs font-semibold ml-2.5 text-gray-400">MENSAGENS DIRETAS</h6>
      <div className="direct-messages">
        <MessagesReceived profilePics={<BsFillLightningFill size={19} />} text={"Nyels"}></MessagesReceived>
        <MessagesReceived profilePics={<FaPoo size={19} />} text={"Pou Lourds"}></MessagesReceived>
      </div>
    </div>
  );
};

const MessagesMenu = ({ icon, text }) => (
  <div className="message-menu-container">
    {icon}
    <span className="message-text ml-3">{text}</span>
  </div>
);

const MessagesReceived = ({ profilePics, text }) => (
  <div className="message-menu-container">
    <span className="profile-pics">{profilePics}</span>
    <span className="message-text ml-2">{text}</span>
  </div>
);

export default Messages;
