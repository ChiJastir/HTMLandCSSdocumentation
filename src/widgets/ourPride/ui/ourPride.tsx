import { Button, HTML_PLACEHOLDER } from "@/shared";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useTranslation } from "react-i18next";
import {useNavigate} from "react-router-dom";

export const OurPride = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <>
            <div>
                <h2>{t('mainFirstInfoBlockT1')}</h2>
                <p>{t('mainFirstInfoBlockP1')}</p>
                <h3>{t('mainFirstInfoBlockT2')}</h3>
                <ul>
                    <li>{t('mainFirstInfoBlockListElem1')}</li>
                    <li>{t('mainFirstInfoBlockListElem2')}</li>
                    <li>{t('mainFirstInfoBlockListElem3')}</li>
                    <li>{t('mainFirstInfoBlockListElem4')}</li>
                </ul>
                <Button onClick={ () => navigate("/html/introduction-to-HTML") }>{t('mainFirstInfoBlockGetStartedButton')}</Button>
            </div>
            <div>
                <SyntaxHighlighter language={'handlebars'} useInlineStyles={false}>
                    {HTML_PLACEHOLDER}
                </SyntaxHighlighter>
            </div>
        </>
    );
};