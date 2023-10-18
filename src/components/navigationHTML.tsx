import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const NavigationHTML = () => {
    const { t } = useTranslation()

    return (
        <ul>
            <li><Link to={'/'}>{t("introductionToHTMLT")}</Link></li>
            <li><Link to={'/html/tagsInHead'}>{t("tagsInHeadT")}</Link></li>
            <li><Link to={'/html/textTags'}>{t("textTagsT")}</Link></li>
            <li><Link to={'/html/lists'}>{t("listsT")}</Link></li>
            <li><Link to={'/html/blockElements'}>{t("blockElementsT")}</Link></li>
            <li><Link to={'/html/inputs'}>{t("inputsT")}</Link></li>
            <li><Link to={'/html/otherTags'}>{t("otherTagsT")}</Link></li>
            <li><Link to={'/html/styleAttrs'}>{t("styleAttrsT")}</Link></li>
        </ul>
    );
};

export default NavigationHTML;