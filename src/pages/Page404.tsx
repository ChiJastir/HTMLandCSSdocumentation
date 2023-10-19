import styled from "styled-components";
import Page from "../components/page";

const Page404 = () => {
    return (
        <Page>
            <Container404>
                <h1>404</h1>
                <p>Приносим наши извинения, но кажется вы перешли на несуществующую страницу :(</p>
            </Container404>
        </Page>
    );
};

const Container404 = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 150%`

export default Page404;