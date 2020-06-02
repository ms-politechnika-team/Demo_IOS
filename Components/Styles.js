import {StylesImpl} from "./StylesImpl";

export default class Styles {
    static Instance = null;

    static get() {
        if (Styles.Instance === null) {
            Styles.Instance = new Styles()
        }
        return Styles.Instance
    }

    constructor() {
        this.m_impl = new StylesImpl()
        this.m_isDarkMode = null
    }

    async init() {
        this.m_isDarkMode = await this.m_impl.isDarkMode()
    }

    isReady() {
        return this.m_isDarkMode !== null
    }

    isDarkMode() {
        return this.m_isDarkMode
    }

    getStyles() {
        if (this.isDarkMode()) {
            return this.m_impl.darkModeSheet()
        } else {
            return this.m_impl.lightModeSheet()
        }
    }

    async changeStyleMode() {
        const value = !this.isDarkMode();
        await this.m_impl.setDarkMode(value)
        this.m_isDarkMode = value
    }
}