import styled from "styled-components";

const MyCode = styled.code`
      background-color: rgba(255, 255, 255, 0.05);`

type CodeProps = {
    children: string
}

const Code = ({children}: CodeProps) => {
    return (
        <MyCode>
            {children}
        </MyCode>
    );
};

export default Code;