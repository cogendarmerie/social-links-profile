import React from "react";

export default function Button({link, text}){
    return <a href={link} className="btn btn-primary">{text}</a>;
}