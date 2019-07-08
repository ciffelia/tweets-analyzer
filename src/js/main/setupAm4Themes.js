import * as am4core from '@amcharts/amcharts4/core'
import am4ThemesAnimated from '@amcharts/amcharts4/themes/animated'
import am4ThemesMaterial from '@amcharts/amcharts4/themes/material'

const setupAm4Themes = () => {
  am4core.useTheme(am4ThemesAnimated)
  am4core.useTheme(am4ThemesMaterial)
}

export default setupAm4Themes
