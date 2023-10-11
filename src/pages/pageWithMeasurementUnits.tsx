import styled from "styled-components";
import CodeExample from "../components/codeExample.tsx"
import {Container, Code, Example} from "../UI/components";
import Page from "../components/page";

const PageWithMeasurementUnits = () => {
    const pixels = `p {
    font-size: 20px;
}`

    const percent = `p {
    font-size: 150%;
}`

    const emAndRem = `p {
    font-size: 1.5em;
}`

    const vwAndVh = `p {
    font-size: 2vw;
}`

    return (
        <Page>
            <Container>
                <h1>Единицы измерения</h1>
                {/*<div>*/}
                {/*    <h2>Абсолютные</h2>*/}
                {/*    <p>Абсолютные единицы измерения задают конкретные показатели свойствам. К примеру, если мы указываем размеры блока в абсолютных единицах и на вашем компьютере они будут смотреться хорошо, то на маленьких эранах (например телефонах) он скорее всего будет слишком большим</p>*/}
                {/*</div>*/}
                <div>
                    <h2>Пиксели</h2>
                    <p><Code>px</Code> - наиболее распространенная единица измерения, которая определяет размеры элементов на экране. Один пиксель представляет собой наименьшую отдельную точку на экране</p>
                    <Example>
                        <CodeExample>{pixels}</CodeExample>
                        <Pixels>Hello world?</Pixels>
                    </Example>
                </div>
                <div>
                    <h2>Проценты</h2>
                    <p><Code>%</Code> - используются для определения размеров элементов относительно размера родительского элемента или контейнера</p>
                    <Example>
                        <CodeExample>{percent}</CodeExample>
                        <Percent>Hello world!</Percent>
                    </Example>
                </div>
                <div>
                    <h2>em и rem</h2>
                    <p><Code>em</Code> - относительная единица измерения, которая зависит от размера шрифта родительского элемента. Значение 1em равно текущему размеру шрифта. <Code>rem</Code> аналогичен единице измерения EM, но значение 1rem всегда равно размеру шрифта корневого элемента (обычно это {'<html>'})</p>
                    <Example>
                        <CodeExample>{emAndRem}</CodeExample>
                        <EmAndRem>Hello world!</EmAndRem>
                    </Example>
                </div>
                <div>
                    <h2>Вьюпорт</h2>
                    <p><Code>vw</Code> и <Code>vh</Code> - относительные единицы измерения, которые определяются относительно размеров видимой области (viewport) браузера. 1vw равен 1% ширины видимой области, а 1vh равен 1% высоты видимой области</p>
                    <Example>
                        <CodeExample>{vwAndVh}</CodeExample>
                        <VwAndVh>Hello world!</VwAndVh>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const Pixels = styled.p`
  font-size: 20px`

const Percent = styled.p`
  font-size: 150%`

const EmAndRem = styled.p`
  font-size: 1.5em`

const VwAndVh = styled.p`
  font-size: 2vw`

export default PageWithMeasurementUnits;