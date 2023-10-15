import {useState} from 'react';
import CodeExample from "../components/codeExample";
import {Container, ParagraphBorder, Example} from "../UI/components";
import styled from "styled-components";
import Page from "../components/page";
import {useTranslation} from "react-i18next";

const PageWithPosition = () => {
    const [absolute, setAbsolute] = useState(false)
    const [relative, setRelative] = useState(false)
    const [fixed, setFixed] = useState(false)

    const {t} = useTranslation()

    const absoluteStyle = `div{
    position: ${absolute ? 'absolute' : 'static'};
    top: 5px;
    left: 5px;
}`

    const relativeStyle = `div{
    position: ${relative ? 'relative' : 'static'};
    top: 5px;
    left: 5px;
}`
    const fixedStyle = `div{
    position: ${fixed ? 'fixed' : 'static'};
    top: 5px;
    left: 5px;
}`
    return (
        <Page>
            <Container>
                <h1>Position</h1>
                <div>
                    <h2>position</h2>
                    <p>{t("positionP1")}</p>
                </div>
                <div>
                    <h2>position: absolute</h2>
                    <p>{t("positionAbsoluteP1")}</p>
                    <Example>
                        <CodeExample>{absoluteStyle}</CodeExample>
                        <Position position={absolute ? 'absolute' : 'static'}>{absolute ? 'absolute' : 'static'}</Position>
                        <button onClick={() => setAbsolute(!absolute)}>absolute/static</button>
                    </Example>
                </div>
                <div>
                    <h2>position: relative</h2>
                    <p>{t("positionRelativeP1")}</p>
                    <Example>
                        <CodeExample>{relativeStyle}</CodeExample>
                        <Position position={relative ? 'relative' : 'static'}>{relative ? 'relative' : 'static'}</Position>
                        <button onClick={() => setRelative(!relative)}>relative/static</button>
                    </Example>
                </div>
                <div>
                    <h2>position: fixed</h2>
                    <p>{t("positionFixedP1")}</p>
                    <Example>
                        <CodeExample>{fixedStyle}</CodeExample>
                        <Position position={fixed ? 'fixed' : 'static'}>{fixed ? 'fixed' : 'static'}</Position>
                        <button onClick={() => setFixed(!fixed)}>fixed/static</button>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

// CSS
const Position = styled(ParagraphBorder)<{position: string}>`
  position: ${props => props.position};
  top: 5px;
  left: 5px;`

export default PageWithPosition;