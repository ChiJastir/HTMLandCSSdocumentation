import {css} from "styled-components";
import CodeExample from "../../components/codeExample.tsx";
import {Container, Example} from "../../UI/components";
import BoxElements from "../../components/boxElements.tsx";
import Page from "../../components/page";
import {useTranslation} from "react-i18next";

const PageWithDisplayFlex = () => {
    const {t} = useTranslation()

    const displayFlex = `div{
    display: flex;
}`
    const displayBlock = `div{
    display: block;
}`

    const directionRowReverse = `div{
    display: flex;
    flex-direction: row-reverse;
}`

    const flexWrap = `div{
    max-width: 150px;
    display: flex;
    flex-wrap: wrap;
}`

    const justifyContentSpaceBetween = `div{
    display: flex;
    justify-content: space-between;
}`
    return (
        <Page>
            <Container>
                <h1>Display</h1>
                <div>
                    <h2>display: flex</h2>
                    <p>{t("displayFlexP1")}</p>
                    <Example>
                        <CodeExample>{displayBlock}</CodeExample>
                        <BoxElements $elemStyle={MElem} length={3}/>
                    </Example>
                    <Example>
                        <CodeExample>{displayFlex}</CodeExample>
                        <BoxElements $elemStyle={MElem} $containerStyle={DFlex} length={3}/>
                    </Example>
                </div>
                <div>
                    <h2>flex-direction</h2>
                    <p>{t("flexDirectionP1")}</p>
                    <Example>
                        <CodeExample>{directionRowReverse}</CodeExample>
                        <BoxElements $elemStyle={MElem} $containerStyle={FDirection} length={3}/>
                    </Example>
                </div>
                <div>
                    <h2>flex-wrap</h2>
                    <p>{t("flexWrapP1")}</p>
                    <Example>
                        <CodeExample>{flexWrap}</CodeExample>
                        <BoxElements $elemStyle={MElem} $containerStyle={FWrap} length={5}/>
                    </Example>
                </div>
                <div>
                    <h2>justify-content</h2>
                    <p>{t("justifyContentP1")}</p>
                    <Example>
                        <CodeExample>{justifyContentSpaceBetween}</CodeExample>
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

export default PageWithDisplayFlex;