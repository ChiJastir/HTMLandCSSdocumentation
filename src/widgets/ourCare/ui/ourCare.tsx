import { Button, HTML_PLACEHOLDER } from "@/shared";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useTranslation } from "react-i18next";
import {useNavigate} from "react-router-dom";

export const OurCare = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <>
            <div>
                <h2>{t('mainSecondInfoBlockT1')}</h2>
                <p>{t('mainSecondInfoBlockP1')}</p>
                <h3>{t('mainSecondInfoBlockT2')}</h3>
                <ul>
                    <li>{t('mainSecondInfoBlockListElem1')}</li>
                    <li>{t('mainSecondInfoBlockListElem2')}</li>
                    <li>{t('mainSecondInfoBlockListElem3')}</li>
                    <li>{t('mainSecondInfoBlockListElem4')}</li>
                </ul>
                <Button onClick={ () => navigate("/html/introduction-to-HTML") } >{t('mainSecondInfoBlockGetStartedButton')}</Button>
            </div>
            <div>
                <SyntaxHighlighter language={'handlebars'} useInlineStyles={false}>
                    {HTML_PLACEHOLDER}
                </SyntaxHighlighter>
            </div>
        </>
    );
};