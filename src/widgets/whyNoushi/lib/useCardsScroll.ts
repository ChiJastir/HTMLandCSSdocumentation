import {useEffect, useRef, useState} from "react";
import {MotionValue, useScroll, useTransform} from "framer-motion";
import {useResize} from "@/shared";

export const useCardsScroll = () => {
    const [width] = useResize()

    const cardsElem = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({target: cardsElem, offset: ['start end', 'end end']})
    const xPosition = useTransform(scrollYProgress, [0, 1], ['-15%', '0%'])
    const [xPositionNormalize, setXPositionNormalize] = useState<string | MotionValue>(xPosition)

    useEffect(() => {
        if (width > 768) setXPositionNormalize(xPosition)
        else setXPositionNormalize('0%')
    }, [width])

    return {cardsElem, xPositionNormalize}
}