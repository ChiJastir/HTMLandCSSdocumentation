import {useTranslation} from "react-i18next";
import {CardInfo} from "@/shared";
import hexagon from "@/shared/assets/ui/hexagon.svg";
import support from "@/shared/assets/ui/support.svg";
import update from "@/shared/assets/ui/update.svg";

export const useCardsInfo = () => {
    const { t } = useTranslation()

    const WHY_NOUSHI_INFO: CardInfo[] = [
        {
            heading: t('whyNoushiCardFirstT'),
            description: t('whyNoushiCardFirstP1'),
            image: hexagon,
        },
        {
            heading: t('whyNoushiCardSecondT'),
            description: t('whyNoushiCardSecondP1'),
            image: support,
        },
        {
            heading: t('whyNoushiCardThirdT'),
            description: t('whyNoushiCardThirdP1'),
            image: update,
        },
    ]

    return WHY_NOUSHI_INFO
}