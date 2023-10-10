import React, {useState} from "react";
import styled from "styled-components";
import {useSwipeable} from "react-swipeable";
import Navigation from "./navigation";

interface PageProps {
    children?: React.ReactNode
}

const Page = ({children}: PageProps) => {
    const [swipe, setSwipe] = useState(false)

    const handlers = useSwipeable({
        onSwipedRight: () => {
            setSwipe(true)
        },
        onSwipedLeft: () => {
            setSwipe(false)
        },
    });

    return (
        <PageStyle {...handlers}>
            <Navigation swipe={swipe} />
            {children}
        </PageStyle>
    );
};

const PageStyle = styled.div`
  display: flex;`

export default Page;