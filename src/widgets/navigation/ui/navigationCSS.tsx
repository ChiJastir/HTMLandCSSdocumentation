import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const NavigationCSS = () => {
    const { t } = useTranslation()
    // const links = [
    //     { link: '/cssPages/selectors', title: '' },
    //     {
    //         link: '/cssPages/selectors',
    //         title: '',
    //         internal: [
    //             { link: '/cssPages/selectors', title: '' },
    //             { link: '/cssPages/selectors', title: '' },
    //             { link: '/cssPages/selectors', title: '' },
    //         ]
    //     }
    // ]

    return (
        <ul>
            <li><Link to={'/cssPages/selectors'}>{t("selectorsT")}</Link></li>
            <li><Link to={'/cssPages/measurement'}>{t("measurementUnitsT")}</Link></li>
            <li><Link to={'/cssPages/pseudo-classes'}>{t("pseudoClassesT")}</Link></li>
            <li><Link to={'/cssPages/pseudo-elements'}>{t("pseudoElementsT")}</Link></li>
            <li><Link to={'/cssPages/math'}>{t("mathematicsT")}</Link></li>
            <li><Link to={'/cssPages/size'}>{t("sizesT")}</Link></li>
            <li><Link to={'/cssPages/text'}>{t("textT")}</Link></li>
            <li><Link to={'/cssPages/color-and-background'}>{t("colorAndBackgroundT")}</Link></li>
            <li>
                <Link to={'/cssPages/display-flex'}>Display</Link>
                <ul>
                    <li><Link to={'/cssPages/display-flex'}>Flex</Link></li>
                    <li><Link to={'/cssPages/display-grid'}>Grid</Link></li>
                    <li><Link to={'/cssPages/display-other'}>None, block</Link></li>
                </ul>
            </li>
            <li><Link to={'/cssPages/position'}>Position</Link></li>
            <li><Link to={'/cssPages/transform'}>Transform</Link></li>
            <li><Link to={'/cssPages/animation'}>{t("animationT")}</Link></li>
            <li><Link to={'/cssPages/frames'}>{t("framesT")}</Link></li>
            <li><Link to={'/cssPages/indents'}>{t("indentsT")}</Link></li>
            <li><Link to={'/cssPages/other'}>{t("otherT")}</Link></li>
        </ul>
    );
};

export default NavigationCSS;