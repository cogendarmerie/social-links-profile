import React from "react";

export default function UserDetails({name, city, bio}) {
    return <div className="user-details">
        <div>
            <h1>{name}</h1>
            <h2>{ city }</h2>
        </div>
        <div>
            <p>"{bio}"</p>
        </div>
    </div>;
}