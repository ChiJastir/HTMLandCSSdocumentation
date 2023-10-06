import PageWithText from "../pages/pageWithText/pageWithText";
import PageWithAnimation from "../pages/pageWithAnimation/pageWithAnimation";
import PageWithDisplayFlex from "../pages/pageWithDisplayFlex/pageWithDisplayFlex";
import PageWithDisplayGrid from "../pages/pageWithDisplayGrid/pageWithDisplayGrid";
import PageWithDisplayOther from "../pages/pageWithDisplayOther/pageWithDisplayOther";
import PageWithPosition from "../pages/pageWithPosition/pageWithPosition";
import PageWithTransform from "../pages/pageWithTransform/pageWithTransform";
import PageWithFrames from "../pages/pageWithFrames/pageWithFrames";
import PageWithIndents from "../pages/pageWithIndents/pageWithIndents";
import PageWithOther from "../pages/pageWithOther/pageWithOther";

export const routes = [
    {path: '/', component: <PageWithText/>},
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