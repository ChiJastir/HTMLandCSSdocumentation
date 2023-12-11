import styled, { keyframes } from "styled-components";
import { CssCodeExample } from "@/entities"
import { Container, Example } from "@/shared";
import { Gradient } from "@/shared";
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { useCodeExamplesAnimation } from "../lib/codeExamplesAnimation";

export const PageWithAnimation = () => {
    const { t } = useTranslation()
    const { transition, keyframesAndAnimation, gradient } = useCodeExamplesAnimation()

    return (
        <Page>
            <Container>
                <h1>{t("animationT")}</h1>
                <div>
                    <h2>Transition</h2>
                    <p>{t("transitionP1")}</p>
                    <Example>
                        <CssCodeExample>{transition}</CssCodeExample>
                        <TransitionExample>Hello world</TransitionExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("keyframesAndAnimationT")}</h2>
                    <p>{t("keyframesAndAnimationP1")}</p>
                    <Example>
                        <CssCodeExample>{keyframesAndAnimation}</CssCodeExample>
                        <Keyframe><div/></Keyframe>
                    </Example>
                    <p>{t("keyframesAndAnimationP2")}</p>
                    <Example>
                        <CssCodeExample>{gradient}</CssCodeExample>
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
  }
`

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
  }
`

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
  }
`