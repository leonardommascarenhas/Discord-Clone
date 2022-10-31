import SideBar from "./SideBar";
import Messages from "./Messages";
import ChatArea from "./ChatArea";
const App = () => {
  return (
    <div className="flex font-body">
      <SideBar />
      <Messages />
      <ChatArea />
    </div>
  );
};

export default App;
