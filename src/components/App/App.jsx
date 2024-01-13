import './App.scss';
import {useState} from "react";
import User from "../User/User";
import UserContext from "../../context/UserContext";
import ChangeUser from "../User/ChangeUser";
function App() {
  const [user, setUser] = useState('Eugene');

  return (
      <UserContext.Provider value={{
          userName: user,
          changeUserName: setUser,
      }}>
          <div className="App">
            <User/>
            <ChangeUser/>
          </div>
      </UserContext.Provider>
  );
}

export default App;
