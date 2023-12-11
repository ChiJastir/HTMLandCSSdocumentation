import { CssCodeExample } from "@/entities";
import { Container, Example } from "@/shared";
import { BoxElements } from "@/entities";
import styled, { css } from "styled-components";
import { BoxElem } from "@/entities";
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { HtmlCodeExample } from "@/entities";
import {useCodeExamplesGrid} from "../lib/codeExamplesGrid";

export const PageWithDisplayGrid = () => {
    const { t } = useTranslation()

    const { gap, displayGrid, gridTemplateColumns, gridTemplateAreasHTML, gridTemplateAreasCSS } = useCodeExamplesGrid()

    return (
        <Page>
            <Container>
                <h1>Display</h1>
                <div>
                    <h2>{t("displayGridT1")}</h2>
                    <p>{t("displayGridP1")}</p>
                    <p>{t("displayGridP2")}</p>
                    <Example>
                        <CssCodeExample>{displayGrid}</CssCodeExample>
                        <BoxElements width={'100%'} $containerStyle={DGrid} length={5}/>
                    </Example>
                    <Example>
                        <CssCodeExample>{gridTemplateColumns}</CssCodeExample>
                        <BoxElements width={'100%'} $containerStyle={GridTemplateColumns} length={3}/>
                    </Example>
                </div>
                <div>
                    <h2>{t("gridAreasT")}</h2>
                    <p>{t("gridAreasP1")}</p>
                    <Example>
                        <HtmlCodeExample>{gridTemplateAreasHTML}</HtmlCodeExample>
                        <CssCodeExample>{gridTemplateAreasCSS}</CssCodeExample>
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
                        <CssCodeExample>{gap}</CssCodeExample>
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