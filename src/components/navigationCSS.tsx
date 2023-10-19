import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const NavigationCSS = () => {
    const { t } = useTranslation()

    return (
        <ul>
            <li><Link to={'/css/selectors'}>{t("selectorsT")}</Link></li>
            <li><Link to={'/css/measurement'}>{t("measurementUnitsT")}</Link></li>
            <li><Link to={'/css/pseudo-classes'}>{t("pseudoClassesT")}</Link></li>
            <li><Link to={'/css/pseudo-elements'}>{t("pseudoElementsT")}</Link></li>
            <li><Link to={'/css/math'}>{t("mathematicsT")}</Link></li>
            <li><Link to={'/css/size'}>{t("sizesT")}</Link></li>
            <li><Link to={'/css/text'}>{t("textT")}</Link></li>
            <li><Link to={'/css/color-and-background'}>{t("colorAndBackgroundT")}</Link></li>
            <li>
                <Link to={'/css/display-flex'}>Display</Link>
                <ul>
                    <li><Link to={'/css/display-flex'}>Flex</Link></li>
                    <li><Link to={'/css/display-grid'}>Grid</Link></li>
                    <li><Link to={'/css/display-other'}>None, block</Link></li>
                </ul>
            </li>
            <li><Link to={'/css/position'}>Position</Link></li>
            <li><Link to={'/css/transform'}>Transform</Link></li>
            <li><Link to={'/css/animation'}>{t("animationT")}</Link></li>
            <li><Link to={'/css/frames'}>{t("framesT")}</Link></li>
            <li><Link to={'/css/indents'}>{t("indentsT")}</Link></li>
            <li><Link to={'/css/other'}>{t("otherT")}</Link></li>
        </ul>
    );
};

export default NavigationCSS;