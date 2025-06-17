import {  useState } from "react";
import { API_URL } from "../../../constants/constants";

const Post = () => {
  
    fetch(API_URL + "/posts", {
        method: "POST",
        headers: { contentType: "application/json" },
        body: JSON.stringify({ 
    })})
}