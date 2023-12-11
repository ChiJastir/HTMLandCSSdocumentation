import { PageWithText } from "@/pages";
import { PageWithAnimation } from "@/pages";
import { PageWithDisplayFlex } from "@/pages";
import { PageWithDisplayGrid } from "@/pages";
import { PageWithDisplayOther } from "@/pages";
import { PageWithPosition } from "@/pages";
import { PageWithTransform } from "@/pages";
import { PageWithFrames } from "@/pages";
import { PageWithIndents } from "@/pages";
import { PageWithOther } from "@/pages";
import { PageWithSelectors } from "@/pages";
import { PageWithPseudoClasses } from "@/pages";
import { PageWithPseudoElements } from "@/pages";
import { PageWithMath } from "@/pages";
import { PageWithMeasurementUnits } from "@/pages";
import { PageWithColorAndBackground } from "@/pages";
import { PageWithSize } from "@/pages";

import { PageWithTagsInHead } from "@/pages";
import { PageWithHtmlIntroduction } from "@/pages";
import { PageWithTextTags } from "@/pages";
import { PageWithLists } from "@/pages";
import { PageWithBlocksTags } from "@/pages";
import { PageWithInputs } from "@/pages";
import { PageWithOtherTags } from "@/pages";
import { PageWithStyleAttrs } from "@/pages";

import { MainPage } from "@/pages";
import { Page404 } from "@/pages";

export const routes = [
    {path: '/', component: <MainPage/>},

    {path: '/html/introduction-to-HTML', component: <PageWithHtmlIntroduction/>},
    {path: '/html/tags-in-head', component: <PageWithTagsInHead/>},
    {path: '/html/text-tags', component: <PageWithTextTags/>},
    {path: '/html/lists', component: <PageWithLists/>},
    {path: '/html/block-elements', component: <PageWithBlocksTags/>},
    {path: '/html/inputs', component: <PageWithInputs/>},
    {path: '/html/other-tags', component: <PageWithOtherTags/>},
    {path: '/html/style-attrs', component: <PageWithStyleAttrs/>},

    {path: '/cssPages/selectors', component: <PageWithSelectors/>},
    {path: '/cssPages/size', component: <PageWithSize/>},
    {path: '/cssPages/color-and-background', component: <PageWithColorAndBackground/>},
    {path: '/cssPages/measurement', component: <PageWithMeasurementUnits/>},
    {path: '/cssPages/pseudo-classes', component: <PageWithPseudoClasses/>},
    {path: '/cssPages/pseudo-elements', component: <PageWithPseudoElements/>},
    {path: '/cssPages/math', component: <PageWithMath/>},
    {path: '/cssPages/text', component: <PageWithText/>},
    {path: '/cssPages/animation', component: <PageWithAnimation/>},
    {path: '/cssPages/display-flex', component: <PageWithDisplayFlex/>},
    {path: '/cssPages/display-grid', component: <PageWithDisplayGrid/>},
    {path: '/cssPages/display-other', component: <PageWithDisplayOther/>},
    {path: '/cssPages/position', component: <PageWithPosition/>},
    {path: '/cssPages/transform', component: <PageWithTransform/>},
    {path: '/cssPages/frames', component: <PageWithFrames/>},
    {path: '/cssPages/indents', component: <PageWithIndents/>},
    {path: '/cssPages/other', component: <PageWithOther/>},

    {path: '*', component: <Page404/>},
]