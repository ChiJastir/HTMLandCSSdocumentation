import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useSwipeable} from "react-swipeable";
import Navigation from "./navigation";

interface PageProps {
    children?: React.ReactNode
}

const Page = ({children}: PageProps) => {
    const [swipe, setSwipe] = useState(false)

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
        <PageStyle {...handlers}>
            <Navigation swipe={swipe} setSwipe={setSwipe} />
            {children}
        </PageStyle>
    );
};

const PageStyle = styled.div`
  display: flex;`

export default Page;