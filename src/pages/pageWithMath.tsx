import CodeExample from "../components/codeExample";
import {Container, Code, Example} from "../UI/components";
import styled from "styled-components";
import Page from "../components/page";

const PageWithMath = () => {
    const calc = `p {
    font-size: calc(1vw + 15px);
}`

    const minAndMax = `p {
    font-size: max(3vw, 3vh);
}`

    const clamp = `p {
    font-size: clamp(16px, 2vw, 32px);
}`
    return (
        <Page>
            <Container>
                <h1>Математика</h1>
                <div>
                    <h2>calc</h2>
                    <p><Code>calc()</Code> позволяет добавить на сайт простейшую математику. Мы можем складывать(+), вычетать(-), умножать(*) и делить(/) разные единицы измерения. Во всех остальных математических функциях мы также можем использовать эти операторы</p>
                    <Example>
                        <CodeExample>{calc}</CodeExample>
                        <Calc>Hello world!</Calc>
                    </Example>
                </div>
                <div>
                    <h2>min и max</h2>
                    <p><Code>min(a, b)</Code> и <Code>max(a, b)</Code> выбирает минимальное и максимальное из двух значений соответственно. Являются важными знаниями при адаптивной вёрстке</p>
                    <Example>
                        <CodeExample>{minAndMax}</CodeExample>
                        <MinAndMax>Hello world!</MinAndMax>
                    </Example>
                </div>
                <div>
                    <h2>clamp</h2>
                    <p><Code>clamp(a, b, c)</Code> можно представить в виде желаемого значения, ограниченного минимальным и максимальным значением. Тоже крайне нужная вещь при построении адаптива</p>
                    <Example>
                        <CodeExample>{clamp}</CodeExample>
                        <Clamp>Hello world!</Clamp>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const Calc = styled.p`
  font-size: calc(1vw + 15px)`

const MinAndMax = styled.p`
  font-size: max(3vw, 3vh)`

const Clamp = styled.p`
  font-size: clamp(16px, 2vw, 32px)`

export default PageWithMath;