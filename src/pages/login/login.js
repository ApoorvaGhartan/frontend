import PointsContext from "../../context/pointsContext";
import Navbar from "../common/Navbar/navbar";
import {useState, useContext} from "react";
import './login.css';
const Login = () => {
    const {login} = useContext(PointsContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleClick = async() => {
        if(!email && !password){
            return;
        }
        const res = await fetch(`https://project-backend-9hbu.onrender.com`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({email, password})
        });
        const data = await res.json();
        if(data.status === "success"){
            localStorage.setItem("authorization", data.data.token);
            login();
        }
    }

    return (
        <div>
            <Navbar page='login'/>
            <div className = "login-main-container">
                <div className="main-heading"><h1>LOGIN</h1></div>
                <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={handleClick}>Login</button>
            </div>
        </div>
    )
}

export default Login;

