import {useEffect, useRef, useState} from "react";
import {onCSS, onHTML, useAppDispatch, useAppSelector} from "@/shared";

export const useSiteNavigation = (swipe: boolean, setSwipe: (visible: boolean) => void) => {
    const [visible, setVisible] = useState(false)

    const firstBtn = useRef<null | HTMLButtonElement>(null)
    const secondBtn = useRef<null | HTMLButtonElement>(null)

    const isMenuPin = useAppSelector((store) => store.pinMenuSlice.isMenuPin)
    const technology = useAppSelector((store) => store.technologySlice.technology)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setVisible(swipe)
    }, [swipe])

    useEffect(() => {
        setSwipe(visible)
    }, [visible])

    useEffect(() => {
        const htmlReg = /html/
        if (htmlReg.test(window.location.pathname)){
            dispatch(onHTML())
        } else {
            dispatch(onCSS())
        }
    }, [])

    return {
        visible,
        setVisible,
        isMenuPin,
        technology,
        firstBtn,
        secondBtn,
        dispatch
    }
}