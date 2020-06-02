import {StylesImpl} from "./StylesImpl";

export default class Styles {
    static get = Styles.get || new Styles()

    constructor() {
        this.m_impl = new StylesImpl()
    }

    getStyles() {
        if (this.m_impl.isDarkMode()) {
            return this.m_impl.darkModeSheet()
        } else {
            return this.m_impl.lightModeSheet()
        }
    }

    changeStyleMode() {
        this.m_impl.setDarkMode(!this.m_impl.isDarkMode())
    }
}