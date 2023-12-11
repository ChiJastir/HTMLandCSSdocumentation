import { PageWithText } from "@/newPages";
import { PageWithAnimation } from "@/newPages";
import { PageWithDisplayFlex } from "@/newPages";
import { PageWithDisplayGrid } from "@/newPages";
import { PageWithDisplayOther } from "@/newPages";
import { PageWithPosition } from "@/newPages";
import { PageWithTransform } from "@/newPages";
import { PageWithFrames } from "@/newPages";
import { PageWithIndents } from "@/newPages";
import { PageWithOther } from "@/newPages";
import { PageWithSelectors } from "@/newPages";
import { PageWithPseudoClasses } from "@/newPages";
import { PageWithPseudoElements } from "@/newPages";
import { PageWithMath } from "@/newPages";
import { PageWithMeasurementUnits } from "@/newPages";
import { PageWithColorAndBackground } from "@/newPages";
import { PageWithSize } from "@/newPages";

import { PageWithTagsInHead } from "@/newPages";
import { PageWithHtmlIntroduction } from "@/newPages";
import { PageWithTextTags } from "@/newPages";
import { PageWithLists } from "@/newPages";
import { PageWithBlocksTags } from "@/newPages";
import { PageWithInputs } from "@/newPages";
import { PageWithOtherTags } from "@/newPages";
import { PageWithStyleAttrs } from "@/newPages";

import { MainPage } from "@/newPages";
import { Page404 } from "@/newPages";

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