import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const NavigationHTML = () => {
    const { t } = useTranslation()

    return (
        <ul>
            <li><Link to={'/html/introduction-to-HTML'}>{t("introductionToHTMLT")}</Link></li>
            <li><Link to={'/html/tags-in-head'}>{t("tagsInHeadT")}</Link></li>
            <li><Link to={'/html/text-tags'}>{t("textTagsT")}</Link></li>
            <li><Link to={'/html/lists'}>{t("listsT")}</Link></li>
            <li><Link to={'/html/block-elements'}>{t("blockElementsT")}</Link></li>
            <li><Link to={'/html/inputs'}>{t("inputsT")}</Link></li>
            <li><Link to={'/html/other-tags'}>{t("otherTagsT")}</Link></li>
            <li><Link to={'/html/style-attrs'}>{t("styleAttrsT")}</Link></li>
        </ul>
    );
};

export default NavigationHTML;