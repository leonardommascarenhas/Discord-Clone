import { FaUserFriends } from "react-icons/fa";
import { BsSpeedometer } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Messages = () => {
  return (
    <div className="h-screen w-48 bg-gray-800">
      <MessagesMenu icon={<FaUserFriends size="28" />} text={"Amigos"} />
      <MessagesMenu icon={<BsSpeedometer size="28" />} text={"Nitro"} />
      <MessagesMenu
        icon={<AiOutlineMail size="28" />}
        text={"Solicitações de mensagem"}
      />
    </div>
  );
};

const MessagesMenu = ({ icon, text }) => (
  <div className="flex">
    <div className="message-icons">
      {icon}
      <span className="">{text}</span>
    </div>
  </div>
);

export default Messages;
