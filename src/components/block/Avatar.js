import React from "react";

export default function Avatar({ picture }){
    return (
        <picture className="avatar">
            <img src={picture} alt="Avatar" />
        </picture>
    )
}