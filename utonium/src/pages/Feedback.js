import React, { useEffect } from "react";
import './Activities.css';

export default function Feedback(props){
    return(
        <div className="lista">
            <ul>
            <li className="table-row">
                <div className="col-1" >{props.emoticon}</div>
            </li>
            </ul>
        </div>
    )
}