import React from "react";
import starImage from "./images/star.png";
import deleteImage from "./images/delete.png";

export default function Movie(props) {
    const { title, rating } = props.item;
  
    return (
        <li className="list-group-item" style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
            { title }
        <div className="rating" style={{float: "right"}}>
            {Array.from({ length: rating }).map((_, index) => (
                <img key={index} src={starImage} alt="Star" style={{ width: "20px", height: "20px"}} />
            ))}
        </div>
            </div>         
            <button className="btn btn-sm btn-danger float-end" onClick={() =>{props.deleteItem(props.item.id)} }>
            <img src={deleteImage} alt="Delete" style={{ width: "20px", height: "20px" }} />
            </button>
            
        </li>
    )
}