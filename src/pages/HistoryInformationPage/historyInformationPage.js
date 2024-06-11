import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../common/Navbar/navbar";
import "./HistoryInformation.css";

const HistoryInformationPage = () => {
    const [data, setData] = useState();

    const params = useParams();
    const historyId = params.historyId;

    const customStyles = {
        color: 'white',
        padding: '48px',
    }

    const getData = async() => {
        try{
            const res = await fetch(`https://dummyjson.com/products/${historyId}`);
            const obj = await res.json();
            setData(obj);
        }
        catch(err){
            console.log(err);
        }
    }



    useEffect(() => {
      getData();
    }, []);
    

    return (<div>
         <Navbar/>
         <div className="cardd">
           <div style={customStyles}> 
            <div className="heading">
            <h3>Info of: {historyId}</h3>
            </div>
            
            <img src={data?.thumbnail}/>
        </div>
    </div>
       
    </div>
       
    )
}

export default HistoryInformationPage;