import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useSwipeable} from "react-swipeable";
import NavigationCSS from "./navigationCSS";
import {useAppSelector} from "../hooks/redux";
import NavigationHTML from "./navigationHTML";

interface PageProps {
    children?: React.ReactNode
}

const Page = ({children}: PageProps) => {
    const [swipe, setSwipe] = useState(false)

    const isMenuPin = useAppSelector((store) => store.pinMenuSlice.isMenuPin)
    const technology = useAppSelector((store) => store.technologySlice.technology)

    const handlers = useSwipeable({
        onSwipedRight: (eventData) => {
            setSwipe(eventData.deltaX >= 100)
        },
        onSwipedLeft: (eventData) => {
            setSwipe(eventData.deltaX >= 100)
        },
    });

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <PageStyle $isMenuPin={isMenuPin} {...handlers}>
            {technology === 'html'
                ? <NavigationHTML swipe={swipe} setSwipe={setSwipe}/>
                : <NavigationCSS swipe={swipe} setSwipe={setSwipe}/>}
            {children}
        </PageStyle>
    );
};

const PageStyle = styled.div<{$isMenuPin?: boolean}>`
  display: flex;
  margin-left: ${props => props.$isMenuPin && '280px'}`

export default Page;