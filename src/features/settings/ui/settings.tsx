import { Switch} from "@/shared";
import styled from "styled-components";
import { Select } from "@/shared";
import { useTranslation } from "react-i18next";
import { useSettings } from "../model/useSettings";

export const Settings = () => {
    const { t } = useTranslation()
    const { themeType, setThemeType, setPinNav, pinNav, changeLanguage, languages } = useSettings()

    return (
        <SettingsMenu>
            <h3>{t("settings")}</h3>
            <SettingsItem>
                <p>{t("theme")}:</p>
                <Switch checked={themeType} setChecked={setThemeType}/>
            </SettingsItem>
            {window.innerWidth >= 768 && <SettingsItem>
                <p>{t("menuPin")}:</p>
                <Switch checked={pinNav} setChecked={setPinNav}/>
            </SettingsItem>}
            <SettingsItem>
                <p>{t("language")}:</p>
                <Select onClickFun={changeLanguage} items={languages}/>
            </SettingsItem>
        </SettingsMenu>
    );
};

const SettingsMenu = styled.div`
  h3{
    margin: 0 0 10px 0; 
    text-align: center;
  }
`

const SettingsItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p{
    margin: 10px 0;
  }
`