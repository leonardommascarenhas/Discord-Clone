import SideBar from "./SideBar";
import Messages from "./Messages";
import ChatArea from "./ChatArea";
import ActiveNow from "./ActiveNow";
import { AuthProvider } from "./Providers/auth";
const App = () => {
  return (
    <div className="flex font-body">
      <AuthProvider>
        <SideBar />
        <Messages />
        <ChatArea />
        <ActiveNow />
      </AuthProvider>
    </div>
  );
};

export default App;
