import PageWithText from "../pages/css/pageWithText";
import PageWithAnimation from "../pages/css/pageWithAnimation";
import PageWithDisplayFlex from "../pages/css/pageWithDisplayFlex";
import PageWithDisplayGrid from "../pages/css/pageWithDisplayGrid";
import PageWithDisplayOther from "../pages/css/pageWithDisplayOther";
import PageWithPosition from "../pages/css/pageWithPosition";
import PageWithTransform from "../pages/css/pageWithTransform";
import PageWithFrames from "../pages/css/pageWithFrames";
import PageWithIndents from "../pages/css/pageWithIndents";
import PageWithOther from "../pages/css/pageWithOther";
import PageWithSelectors from "../pages/css/pageWithSelectors";
import PageWithPseudoClasses from "../pages/css/pageWithPseudoClasses";
import PageWithPseudoElements from "../pages/css/pageWithPseudoElements";
import PageWithMath from "../pages/css/pageWithMath";
import PageWithMeasurementUnits from "../pages/css/pageWithMeasurementUnits";
import PageWithColorAndBackground from "../pages/css/pageWithColorAndBackground";
import PageWithSize from "../pages/css/pageWithSize";

export const routes = [
    {path: '/', component: <PageWithSelectors/>},
    {path: '/size', component: <PageWithSize/>},
    {path: '/colorAndBackground', component: <PageWithColorAndBackground/>},
    {path: '/measurement', component: <PageWithMeasurementUnits/>},
    {path: '/pseudoClasses', component: <PageWithPseudoClasses/>},
    {path: '/pseudoElements', component: <PageWithPseudoElements/>},
    {path: '/math', component: <PageWithMath/>},
    {path: '/text', component: <PageWithText/>},
    {path: '/animation', component: <PageWithAnimation/>},
    {path: '/displayFlex', component: <PageWithDisplayFlex/>},
    {path: '/displayGrid', component: <PageWithDisplayGrid/>},
    {path: '/displayOther', component: <PageWithDisplayOther/>},
    {path: '/position', component: <PageWithPosition/>},
    {path: '/transform', component: <PageWithTransform/>},
    {path: '/frames', component: <PageWithFrames/>},
    {path: '/indents', component: <PageWithIndents/>},
    {path: '/other', component: <PageWithOther/>},
]