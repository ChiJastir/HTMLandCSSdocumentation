import { useTranslation } from "react-i18next";

export const useCodeExamplesHtmlIntroduction = () => {
    const { t } = useTranslation()

    const tag = `<div>${t("tagCon1")}</div>`
    const tagOnce = `<input/>`
    const attr = `<div class="container" id="container">${t("tagCon1")}</div>`
    const doctype = `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>index.html</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
  ...
  </body>
</html>`
    return { tag, tagOnce, attr, doctype }
}