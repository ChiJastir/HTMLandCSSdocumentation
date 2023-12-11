import { css } from "styled-components";
import { CssCodeExample } from "@/entities";
import { Container, Example } from "@/shared";
import { BoxElements } from "@/entities";
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import {useCodeExamplesFlex} from "../lib/codeExamplesFlex";

export const PageWithDisplayFlex = () => {
    const { t } = useTranslation()
    const { displayFlex, displayBlock, flexWrap, directionRowReverse, justifyContentSpaceBetween} = useCodeExamplesFlex()

    return (
        <Page>
            <Container>
                <h1>Display</h1>
                <div>
                    <h2>display: flex</h2>
                    <p>{t("displayFlexP1")}</p>
                    <Example>
                        <CssCodeExample>{displayBlock}</CssCodeExample>
                        <BoxElements $elemStyle={MElem} length={3}/>
                    </Example>
                    <Example>
                        <CssCodeExample>{displayFlex}</CssCodeExample>
                        <BoxElements $elemStyle={MElem} $containerStyle={DFlex} length={3}/>
                    </Example>
                </div>
                <div>
                    <h2>flex-direction</h2>
                    <p>{t("flexDirectionP1")}</p>
                    <Example>
                        <CssCodeExample>{directionRowReverse}</CssCodeExample>
                        <BoxElements $elemStyle={MElem} $containerStyle={FDirection} length={3}/>
                    </Example>
                </div>
                <div>
                    <h2>flex-wrap</h2>
                    <p>{t("flexWrapP1")}</p>
                    <Example>
                        <CssCodeExample>{flexWrap}</CssCodeExample>
                        <BoxElements $elemStyle={MElem} $containerStyle={FWrap} length={5}/>
                    </Example>
                </div>
                <div>
                    <h2>justify-content</h2>
                    <p>{t("justifyContentP1")}</p>
                    <Example>
                        <CssCodeExample>{justifyContentSpaceBetween}</CssCodeExample>
                        <BoxElements $elemStyle={MElem} $containerStyle={JC} length={4}/>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const MElem = css`
  margin: 5px`.toString()

const DFlex = css`
  display: flex`.toString()

const FDirection = css`
  display: flex; 
  flex-direction: row-reverse;`.toString()

const FWrap = css`
  max-width: 150px;
  display: flex;
  flex-wrap: wrap;`.toString()

const JC = css`
  display: flex;
  justify-content: space-between;`.toString()
