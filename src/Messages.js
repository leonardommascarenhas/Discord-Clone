import { FaUserFriends } from "react-icons/fa";
import { BsSpeedometer } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Messages = () => {
  return (
    <div
      className="relative h-screen w-62 flex flex-col
                   bg-gray-800 shadow-lg"
    >
      <MessagesMenu icon={<FaUserFriends />} text={"Amigos"} />
      <MessagesMenu icon={<BsSpeedometer />} text={"Nitro"} />
      <MessagesMenu icon={<AiOutlineMail />} text={"Solicitações de men..."} />
    </div>
  );
};

const MessagesMenu = ({ icon, text }) => (
  <div className="flex items-center p-2 m-2">
    <div className="message-icons">{icon}</div>
    <span className="ml-3">{text}</span>
  </div>
);

export default Messages;
