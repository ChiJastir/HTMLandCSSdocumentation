import styled, {keyframes} from "styled-components";
import CSSCodeExample from "../../components/CSSCodeExample.tsx"
import {Container, Example} from "../../UI/components";
import {Gradient} from "../../UI/gradient";
import Page from "../../components/page";
import {useTranslation} from "react-i18next";

const PageWithAnimation = () => {
    const {t} = useTranslation()

    const transition = `p{
    padding: 15px;
    background-color: #535bf2;

    transition: background-color 800ms;
}

p:hover{
    background-color: #e50035;
}`
    const keyframesAndAnimation = `div{
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: #535bf2;

    animation: move 10s linear infinite;
}

@keyframes move {
    0% {
        left: 0;
        transform: translateX(0);
    }
    50% {
        left: 100%;
        transform: translateX(-100%);
    }
    100% {
        left: 0;
        transform: translateX(0);
    }
}`
    const gradient = `div{
    width: 100%;
    height: 50px;
    background: linear-gradient(90deg, #e50000, blue, #e50000);
    background-size: 300% 100%;
    animation: gradient 10s linear infinite;
}

@keyframes gradient {
    0% {
        background-position: 0 50%;
    }
    100% {
        background-position: 150% 50%;
    }
}`

    return (
        <Page>
            <Container>
                <h1>{t("animationT")}</h1>
                <div>
                    <h2>Transition</h2>
                    <p>{t("transitionP1")}</p>
                    <Example>
                        <CSSCodeExample>{transition}</CSSCodeExample>
                        <TransitionExample>Hello world</TransitionExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("keyframesAndAnimationT")}</h2>
                    <p>{t("keyframesAndAnimationP1")}</p>
                    <Example>
                        <CSSCodeExample>{keyframesAndAnimation}</CSSCodeExample>
                        <Keyframe><div/></Keyframe>
                    </Example>
                    <p>{t("keyframesAndAnimationP2")}</p>
                    <Example>
                        <CSSCodeExample>{gradient}</CSSCodeExample>
                        <Gradient $horizontal height={'50px'}/>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const TransitionExample = styled.p`
  color: ${props => props.theme.colors.text};
  padding: 15px;
  background-color: ${props => props.theme.colors.primary};
  transition: background-color 800ms;
  &:hover{
    background-color: ${props => props.theme.colors.secondary};
  }`

const move = keyframes`
  0% {
    left: 0;
    transform: translateX(0);
  }
  50% {
    left: 100%;
    transform: translateX(-100%);
  }
  100% {
    left: 0;
    transform: translateX(0);
  }`

const Keyframe = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  div{
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: ${props => props.theme.colors.primary};

    animation: ${move} 10s linear infinite;
  }`

export default PageWithAnimation;