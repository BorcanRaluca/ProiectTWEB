import React, { useState } from "react";
import smileyFace from "../images/smileyFace.png"
import surprisedFace from "../images/surprisedFace.png"
import frownyFace from "../images/frownyFace.png"
import confusedFace from "../images/confusedFace.png"
import "./FeedbackPage.css"
import axios from "axios";
import { useParams } from "react-router-dom";

export default function FeedbackPage(){
    const { id } = useParams()
    const addSmiley = (e) => {
        axios.post(`http://localhost:8080/activitate/${id}/feedback`, {
            emoticon: "smileyFace"
          })
          .then(() => {
            // setOpen(false);
            // window.location.reload(false);
            //refresh()
          });
    }

    const addSurprised = (e) => {
        axios.post(`http://localhost:8080/activitate/${id}/feedback`, {
            emoticon: "surprisedFace"
          })
          .then(() => {
            // setOpen(false);
            // window.location.reload(false);
            //refresh()
          });
    }

    const addFrowny = (e) => {
        axios.post(`http://localhost:8080/activitate/${id}/feedback`, {
            emoticon: "frownyFace"
          })
          .then(() => {
            // setOpen(false);
            // window.location.reload(false);
            //refresh()
          });
    }

    const addConfused = (e) => {
        axios.post(`http://localhost:8080/activitate/${id}/feedback`, {
            emoticon: "confusedFace"
          })
          .then(() => {
            // setOpen(false);
            // window.location.reload(false);
            //refresh()
          });
    }

    return(
        <div className="feedback">
            <h1>Trimite feedback</h1>
            <div className="imgContainer">
                <img className="image" src={smileyFace} onClick={addSmiley}></img>
                <img className="image" src={surprisedFace} onClick={addSurprised}></img>
            </div>
            <div className="imgContainer">
                <img className="image" src={frownyFace} onClick={addFrowny}></img>
                <img className="image" src={confusedFace} onClick={addConfused}></img>
            </div>
        </div>
    )
}
