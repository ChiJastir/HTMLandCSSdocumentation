import {css} from "styled-components";
import CodeExample from "../components/codeExample.tsx";
import {Container, Code, Example} from "../UI/components";
import BoxElements from "../components/boxElements.tsx";
import Page from "../components/page";

const PageWithDisplayFlex = () => {
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
                    <p><Code>display: flex</Code> позволяет сделать элементы в блоке обтекаемыми, а также даёт доступ к другим flex-свойствам. Для сравнения стандартное значение <Code>block</Code></p>
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
                    <p>С помощью <Code>flex-direction</Code> мы можем указать направление укладки элементов</p>
                    <Example>
                        <CodeExample>{directionRowReverse}</CodeExample>
                        <BoxElements $elemStyle={MElem} $containerStyle={FDirection} length={3}/>
                    </Example>
                </div>
                <div>
                    <h2>flex-wrap</h2>
                    <p><Code>flex-wrap</Code> отвечает за перенос элементов</p>
                    <Example>
                        <CodeExample>{flexWrap}</CodeExample>
                        <BoxElements $elemStyle={MElem} $containerStyle={FWrap} length={5}/>
                    </Example>
                </div>
                <div>
                    <h2>justify-content</h2>
                    <p><Code>justify-content</Code> отвечает за размещение элементов в блоке. Самые частно используемые значения это <Code>center</Code>, <Code>space-between</Code> и <Code>space-around</Code></p>
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