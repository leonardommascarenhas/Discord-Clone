import SideBar from "./SideBar";
import Messages from "./Messages";
import ChatArea from "./ChatArea";
import Online from "./Online";
import { AuthProvider } from "./Providers/auth";
const App = () => {
  return (
    <div className="flex font-body">
      <AuthProvider>
        <SideBar />
        <Messages />
        <ChatArea />
      </AuthProvider>
    </div>
  );
};

export default App;
