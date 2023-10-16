import React, {useEffect} from "react";
import styled from "styled-components";
import {useAppSelector} from "../hooks/redux";

interface PageProps {
    children?: React.ReactNode
}

const Page = ({children}: PageProps) => {

    const isMenuPin = useAppSelector((store) => store.pinMenuSlice.isMenuPin)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <PageStyle $isMenuPin={isMenuPin}>
            {children}
        </PageStyle>
    );
};

const PageStyle = styled.div<{$isMenuPin?: boolean}>`
  display: flex;
  margin-left: ${props => props.$isMenuPin && '280px'}`

export default Page;