import React from 'react'
import {Link} from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='mailto:sharoodikshit99@gmail.com'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default function contact() {
    return (
        <div>
            <h1>Contact me at</h1>
            <ButtonMailto label="sharoodikshit99@gmail.com" mailto="sharoodikshit99@gmail.com.com" />
        </div>
    )
}
