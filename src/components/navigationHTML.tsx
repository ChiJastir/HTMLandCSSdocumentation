import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const NavigationHTML = () => {
    const { t } = useTranslation()

    return (
        <ul>
            <li><Link to={'/'}>{t("selectorsT")}</Link></li>
            <li><Link to={'/measurement'}>{t("measurementUnitsT")}</Link></li>
            <li><Link to={'/pseudoClasses'}>{t("pseudoClassesT")}</Link></li>
            <li><Link to={'/pseudoElements'}>{t("pseudoElementsT")}</Link></li>
            <li><Link to={'/colorAndBackground'}>{t("colorAndBackgroundT")}</Link></li>
            <li>
                <Link to={'/displayFlex'}>Display</Link>
                <ul>
                    <li><Link to={'/displayFlex'}>Flex</Link></li>
                    <li><Link to={'/displayGrid'}>Grid</Link></li>
                    <li><Link to={'/displayOther'}>None, block</Link></li>
                </ul>
            </li>
            <li><Link to={'/position'}>Position</Link></li>
            <li><Link to={'/transform'}>Transform</Link></li>
            <li><Link to={'/animation'}>{t("AnimationT")}</Link></li>
            <li><Link to={'/frames'}>{t("framesT")}</Link></li>
            <li><Link to={'/indents'}>{t("indentsT")}</Link></li>
            <li><Link to={'/other'}>{t("otherT")}</Link></li>
        </ul>
    );
};

export default NavigationHTML;