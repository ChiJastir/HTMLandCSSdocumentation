import PageWithText from "../pages/pageWithText";
import PageWithAnimation from "../pages/pageWithAnimation";
import PageWithDisplayFlex from "../pages/pageWithDisplayFlex";
import PageWithDisplayGrid from "../pages/pageWithDisplayGrid";
import PageWithDisplayOther from "../pages/pageWithDisplayOther";
import PageWithPosition from "../pages/pageWithPosition";
import PageWithTransform from "../pages/pageWithTransform";
import PageWithFrames from "../pages/pageWithFrames";
import PageWithIndents from "../pages/pageWithIndents";
import PageWithOther from "../pages/pageWithOther";
import PageWithSelectors from "../pages/pageWithSelectors";
import PageWithPseudoClasses from "../pages/pageWithPseudoClasses";
import PageWithPseudoElements from "../pages/pageWithPseudoElements";

export const routes = [
    {path: '/', component: <PageWithSelectors/>},
    {path: '/pseudoClasses', component: <PageWithPseudoClasses/>},
    {path: '/pseudoElements', component: <PageWithPseudoElements/>},
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