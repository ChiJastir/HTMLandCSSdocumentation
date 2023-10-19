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
import PageWithTagsInHead from "../pages/html/pageWithTagsInHead";
import PageWithHTMLIntroduction from "../pages/html/pageWithHTMLIntroduction";
import PageWithTextTags from "../pages/html/pageWithTextTags";
import PageWithLists from "../pages/html/pageWithLists";
import PageWithBlocksTags from "../pages/html/pageWithBlocksTags";
import PageWithInputs from "../pages/html/pageWithInputs";
import PageWithOtherTags from "../pages/html/pageWithOtherTags";
import PageWithStyleAttrs from "../pages/html/pageWithStyleAttrs";
import MainPage from "../pages/mainPage";
import Page404 from "../pages/Page404";

export const routes = [
    {path: '/', component: <MainPage/>},

    {path: '/html/introduction-to-HTML', component: <PageWithHTMLIntroduction/>},
    {path: '/html/tags-in-head', component: <PageWithTagsInHead/>},
    {path: '/html/text-tags', component: <PageWithTextTags/>},
    {path: '/html/lists', component: <PageWithLists/>},
    {path: '/html/block-elements', component: <PageWithBlocksTags/>},
    {path: '/html/inputs', component: <PageWithInputs/>},
    {path: '/html/other-tags', component: <PageWithOtherTags/>},
    {path: '/html/style-attrs', component: <PageWithStyleAttrs/>},

    {path: '/css/selectors', component: <PageWithSelectors/>},
    {path: '/css/size', component: <PageWithSize/>},
    {path: '/css/color-and-background', component: <PageWithColorAndBackground/>},
    {path: '/css/measurement', component: <PageWithMeasurementUnits/>},
    {path: '/css/pseudo-classes', component: <PageWithPseudoClasses/>},
    {path: '/css/pseudo-elements', component: <PageWithPseudoElements/>},
    {path: '/css/math', component: <PageWithMath/>},
    {path: '/css/text', component: <PageWithText/>},
    {path: '/css/animation', component: <PageWithAnimation/>},
    {path: '/css/display-flex', component: <PageWithDisplayFlex/>},
    {path: '/css/display-grid', component: <PageWithDisplayGrid/>},
    {path: '/css/display-other', component: <PageWithDisplayOther/>},
    {path: '/css/position', component: <PageWithPosition/>},
    {path: '/css/transform', component: <PageWithTransform/>},
    {path: '/css/frames', component: <PageWithFrames/>},
    {path: '/css/indents', component: <PageWithIndents/>},
    {path: '/css/other', component: <PageWithOther/>},

    {path: '*', component: <Page404/>},
]