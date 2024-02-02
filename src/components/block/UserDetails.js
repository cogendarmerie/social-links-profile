import React from "react";
import Avatar from "./Avatar";

export default function UserDetails({name, city, bio, picture}) {
    return (
        <>
            <div>
                <Avatar picture={picture}/>
                <div className="user-details">
                    <div>
                        <h1>{name}</h1>
                        <h2>{city}</h2>
                    </div>
                    <div>
                        <p>"{bio}"</p>
                    </div>
                </div>
            </div>
        </>
    );
}