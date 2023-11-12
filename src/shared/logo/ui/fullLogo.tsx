import Logo from "./assets/fullLogo.svg?react";
import React, {HTMLAttributes} from "react";

export const FullLogo: React.FC<HTMLAttributes<SVGElement>> = (props) => {
    return <Logo {...props}/>
};