import './App.css';
// Câu lệnh import để file liên kết với các function của file được export
// import Session02Component from './lesson/components/Session02Component'
import NavBar from './components/organisms/navbar.js/navbar';
import { BrowserRouter } from "react-router-dom";
import { Context } from "./context/ContextHelper";
import RoutesUser from "./routes/user"

function App () {
  
  return (
    <div>
        <Context.Provider value="Nguyen Van E">   
          <RoutesUser/>
        </Context.Provider>
    </div>
  );
}
export default App;