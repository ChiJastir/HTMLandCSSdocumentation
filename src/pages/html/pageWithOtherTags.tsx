import {Container, Example} from "../../UI/components";
import Page from "../../components/page";
import {useTranslation} from "react-i18next";
import HTMLCodeExample from "../../components/code/HTMLCodeExample";
import reactLogo from '../../assets/react.svg'

const PageWithOtherTags = () => {
    const {t} = useTranslation()

    const img = `<img src="images/react-logo.svg" alt="react-logo">`
    const button = `<button>
  ...
</button>`

    return (
        <Page>
            <Container>
                <h1>{t("otherTagsT")}</h1>
                <div>
                    <h2>{t("imgT")}</h2>
                    <p>{t("imgP1")}</p>
                    <Example>
                        <HTMLCodeExample>{img}</HTMLCodeExample>
                        <img src={reactLogo} alt="react-logo"/>
                    </Example>
                </div>
                <div>
                    <h2>{t("buttonT")}</h2>
                    <p>{t("buttonP1")}</p>
                    <Example>
                        <HTMLCodeExample>{button}</HTMLCodeExample>
                        <button>...</button>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

export default PageWithOtherTags;