import React from "react";
import { Link } from "react-router-dom";
import routes from "./routes";

const Header = () => (
    <ul className="nav">
        {routes.map((route, i) => (
            <li key={i}>
                <link to ={route.path}>{route.name}</link>
            </li>
        ))}
        </ul>
);
export default Headers;