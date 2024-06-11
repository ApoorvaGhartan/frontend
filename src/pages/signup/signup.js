import Navbar from "../common/Navbar/navbar";
import {useState} from "react";
import './signup.css';


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleClick = async() => {
        if(!email && !password){
            return;
        }
        try{
            const res = await fetch(`https://project-backend-9hbu.onrender.com`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: 'POST',
                body: JSON.stringify({email, password})
            });
            const data = await res.json();
            console.log(data);
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <Navbar page='signup'/>
            <div class = "sign-up-main-container">
            <div className="main-heading"><h1>SIGN UP</h1></div>
                <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={handleClick}>Signup</button>
            </div>
        </div>
    )
}

export default Signup;

