import React from "react";
import styled from "styled-components";

const MyContainer = styled.div`
      padding: 40px;
      width: calc(100% - 40px * 2);`

type ContainerProps = {
    children: React.ReactNode
}

const Container = ({children}: ContainerProps) => {
    return (
        <MyContainer>
            {children}
        </MyContainer>
    );
};

export default Container;