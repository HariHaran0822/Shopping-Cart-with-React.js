import { useState } from "react";
import "./Card.css";
import { FiHeart } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";


function Card(props) {
 
  const[heart,setHeart]=useState(true);

  const handleHeart=()=>{
   
if(heart===true){
  setHeart(false)
}
else{
  setHeart(true)

}
    }
  
  return (
    <div className="card" key={props.items.id}>
      <div className="prod" style={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold',fontSize:'20px'}}> {props.items.title}</div>

      <div className="img">
        <img src={props.items.img} alt="img-not-found" />
      </div>

      <div> MRP {props.items.price}</div>

      <div>
        <div className="btn" onClick={() =>props.handleAddToCart(props.items)}> Add to cart <div onClick={handleHeart}>{heart?<FiHeart/>:<AiFillHeart/>}</div></div>
      </div>
    </div>
  );
}

export default Card;
