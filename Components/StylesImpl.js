import {StyleSheet} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

export var darkMode = false;

const darkModeKey = '@styles_IsDarkMode'

// it's a fucking joke
const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#819ca9',
    },
    scrollView: {
        backgroundColor: '#29434e',
    },
    postCard: {
        backgroundColor: '#819ca9',
    },
    submit:{
        marginRight:40,
        marginLeft:70,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#29434e',
        borderRadius:10,
        width: 200,
        textAlign:'center'
    },
    submitText:{
        color:'#fff',
        textAlign:'center',
    },
    card:{
        color:'#fff'
    }

});

const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6d6d6d',
    },
    scrollView: {
        backgroundColor: '#1b1b1b',
    },
    postCard: {
        backgroundColor: '#6d6d6d',
    },
    submit:{
        marginRight:40,
        marginLeft:70,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#1b1b1b',
        borderRadius:10,
        width: 200,
        textAlign:'center'
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
    },
    card:{
        color:'#fff'
    }


});

export class StylesImpl {
    constructor() {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem(darkModeKey)
                if (value !== null) {
                    this.m_IsDarkMode = value;
                } else {
                    const storeData = async () => {
                        try {
                            await AsyncStorage.setItem(darkModeKey, false)
                            this.m_IsDarkMode = false
                        } catch (e) {
                            // todo: maybe later
                        }
                    }

                    await storeData()
                }
            } catch (e) {
                // todo: maybe later
            }
        };

        const promise = getData();
    }

    get isDarkMode() {
        return this.m_IsDarkMode
    }

    setDarkMode(state) {
        if (this.m_IsDarkMode !== state) {
            const storeData = async(state) => {
                try {
                    await AsyncStorage.setItem(darkModeKey, state)
                } catch (e) {
                    // todo: maybe later
                }
            }

            storeData(state).then(r => {
                this.m_IsDarkMode = state
            })
        }
    }

    lightModeSheet() {
        return lightStyles
    }

    darkModeSheet() {
        return darkStyles
    }

}

export var styles;

// function loadStyles() {
//     styles = darkMode ? darkStyles : lightStyles;
// }
//
// export function reloadStyles() {
//     loadStyles();
// }
//
// loadStyles();
// export function setDarkMode(isDarkMode) {
//     darkMode = isDarkMode;
// }
//
// export function getStyles() {
//     return styles;
// }