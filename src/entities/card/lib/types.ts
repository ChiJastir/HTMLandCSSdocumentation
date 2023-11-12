import React, {HTMLAttributes} from "react";
import {Variants} from "framer-motion";

export type CardInfo = {
    heading: string,
    description: string,
    image: string
}

export interface CardProps extends HTMLAttributes<HTMLDivElement>{
    information: CardInfo,
    children?: React.ReactNode,
    cardAnimation?: Variants,
}