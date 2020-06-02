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
    async isDarkMode() {
        var darkMode = null;
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem(darkModeKey)
                if (value !== null) {
                    darkMode = JSON.parse(value);
                    console.log("read!")
                    console.log(value)
                } else {
                    const storeData = async () => {
                        try {
                            await AsyncStorage.setItem(darkModeKey, JSON.stringify(false))
                            console.log("Init")
                            darkMode = false
                        } catch (e) {
                            // todo: maybe later
                        }
                    }

                    await storeData()
                }
            } catch (e) {
                // todo: maybe later
            }
        }
        await getData();
        return darkMode
    }

    async setDarkMode(state) {
        const storeData = async(state) => {
            try {
                await AsyncStorage.setItem(darkModeKey, JSON.stringify(state))
            } catch (e) {
                // todo: maybe later
            }
        }

        await storeData(state)
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