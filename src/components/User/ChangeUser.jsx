import UserContext from "../../context/UserContext";
import {useContext} from "react";
function ChangeUser() {
    const {userName, changeUserName}  = useContext(UserContext);
    return (
        <button onClick={() => changeUserName(userName === 'Eugene' ? 'Alice' : 'Eugene')}>Change User</button>
    );
}

export default ChangeUser;