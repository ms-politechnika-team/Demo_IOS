import {StyleSheet} from 'react-native';

export var darkMode = true;

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
  submit: {
    marginRight: 40,
    marginLeft: 70,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#29434e',
    borderRadius: 10,
    width: 200,
    textAlign: 'center',
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
  },
  card: {
    color: '#fff',
  },
  appbar: {
    backgroundColor: '#29434e',
  },
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
    borderColor: 'black',
  },
  postCard: {
    backgroundColor: '#6d6d6d',
  },
  submit: {
    marginRight: 70,
    marginLeft: 70,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#1b1b1b',
    borderRadius: 10,
    width: 200,
    textAlign: 'center',
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
  },
  card: {
    color: '#fff',
  },
  appbar: {
    backgroundColor: '#1b1b1b',
  },
});

export const cameraStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export var styles;

function loadStyles() {
  styles = darkMode ? darkStyles : lightStyles;
}

export function reloadStyles() {
  loadStyles();
}

loadStyles();
export function setDarkMode(isDarkMode) {
  darkMode = isDarkMode;
}

export function getStyles() {
  return styles;
}
