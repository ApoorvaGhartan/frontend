import PointsContext from "../../context/pointsContext";
import Navbar from "../common/Navbar/navbar";
import "./imageGenerator.css"
import {useState, useContext} from "react";

const ImageGenerator = (props) => {
    const cValue = useContext(PointsContext);
    const [searchText, setSearchText] = useState();
    const [imageSrc, setImgSrc] = useState("");

    const func = (e) => {
        setSearchText(e.target.value);
    }

    const handleClick = async () => {
        cValue.setUserPoints(cValue.userPoints-1);
        try{
            const res = await fetch(`https://project-backend-9hbu.onrender.com`, {
                method: "POST",
                body: JSON.stringify({
                    searchText: searchText,
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer "+localStorage.getItem("authorization"),
                },
            });
            const data = await res.json();
            if(data?.status === 'success'){
    
                setImgSrc(data.data.imageUrl);
            }
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <Navbar page="imageGenerator"/>
            <div className="image-generator-main-container">
                <h1>ENTER IMAGE YOU WANT TO FIND</h1>
                <div className='image-search'>
               
                    <div> 
                        <input onChange={(e)=>{func(e)}}/>
                    </div>
                  <div ><button onClick={handleClick}><img src="https://cdn-icons-png.flaticon.com/128/13894/13894983.png"></img></button></div>  
                </div>
                <div className="loading"> <img src={imageSrc} /></div>
            </div>
            
        </div>
    )
};

export default ImageGenerator;