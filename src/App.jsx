import { ToastContainer } from "react-toastify";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/home";

const App = () => {
  return (
    <div>
      <Home />
      <ToastContainer position="top-right" pauseOnHover />
    </div>
  );
};

export default App;
