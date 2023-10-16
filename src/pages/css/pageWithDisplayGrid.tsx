import CSSCodeExample from "../../components/CSSCodeExample.tsx";
import {Container, Example} from "../../UI/components";
import BoxElements from "../../components/boxElements";
import styled, {css} from "styled-components";
import BoxElem from "../../components/boxElem";
import Page from "../../components/page";
import {useTranslation} from "react-i18next";
import HTMLCodeExample from "../../components/HTMLCodeExample";

const PageWithDisplayGrid = () => {
    const {t} = useTranslation()

    const displayGrid = `div{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}`

    const gridTemplateColumns = `div{
    display: grid;
    grid-template-columns: 30% 60% 1fr;
}`

    const gridTemplateAreasHTML = `<div class="gridTemplateAreas">
    <div class="header">header</div>
    <div class="nav">nav</div>
    <div class="content">content</div>
</div>`

    const gridTemplateAreasCSS = `.gridTemplateAreas{
    display: grid;
    grid-template-areas:
        "header header"
        "nav content";
    grid-template-columns: 25% 1fr;
    grid-template-rows: 50px 150px;
}

.header{
    grid-area: header;
}
.nav{
    grid-area: nav;
}
.content{
    grid-area: content;
}`

    const gap = `div{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}`
    return (
        <Page>
            <Container>
                <h1>Display</h1>
                <div>
                    <h2>{t("displayGridT1")}</h2>
                    <p>{t("displayGridP1")}</p>
                    <p>{t("displayGridP2")}</p>
                    <Example>
                        <CSSCodeExample>{displayGrid}</CSSCodeExample>
                        <BoxElements width={'100%'} $containerStyle={DGrid} length={5}/>
                    </Example>
                    <Example>
                        <CSSCodeExample>{gridTemplateColumns}</CSSCodeExample>
                        <BoxElements width={'100%'} $containerStyle={GridTemplateColumns} length={3}/>
                    </Example>
                </div>
                <div>
                    <h2>{t("gridAreasT")}</h2>
                    <p>{t("gridAreasP1")}</p>
                    <Example>
                        <HTMLCodeExample>{gridTemplateAreasHTML}</HTMLCodeExample>
                        <CSSCodeExample>{gridTemplateAreasCSS}</CSSCodeExample>
                        <GridTemplateAreas>
                            <BoxElem width={'auto'} height={'auto'} $elemStyle={'grid-area: header;'}>header</BoxElem>
                            <BoxElem width={'auto'} height={'auto'} $elemStyle={'grid-area: nav;'}>nav</BoxElem>
                            <BoxElem width={'auto'} height={'auto'} $elemStyle={'grid-area: content;'}>content</BoxElem>
                        </GridTemplateAreas>
                    </Example>
                </div>
                <div>
                    <h2>gap</h2>
                    <p>{t("gapP1")}</p>
                    <Example>
                        <CSSCodeExample>{gap}</CSSCodeExample>
                        <BoxElements width={'100%'} $containerStyle={Gap} length={5}/>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const DGrid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5px;`.toString()

const GridTemplateColumns = css`
    display: grid;
    grid-template-columns: 30% 60% 1fr;
    padding: 5px;`.toString()

const GridTemplateAreas = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "nav content";
  grid-template-columns: 25% 1fr;
  grid-template-rows: 50px 150px;
  border: ${props => props.theme.colors.primary} 1px solid;
  padding: 5px;`

const Gap = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5px;
  gap: 15px;`.toString()

export default PageWithDisplayGrid;