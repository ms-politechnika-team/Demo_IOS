/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

//import {Router, Scene} from 'react-native-router-flux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import PostList from './Components/PostsList.js';
import CreatePost from './Components/CreatePost.js';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  Switch,
} from 'react-native';
import {Button, ListItem, Icon, Left, Body, Right} from 'native-base';
import Styles from "./Components/Styles";

//tutaj są style czyli wszystkie kolory itd
// import {getStyles, reloadStyles, setDarkMode, styles} from "./Components/StylesImpl";

function HomeScreen({navigation}) {
  // panel HOME
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={Styles.get().getStyles().container}>
      <Image
        source={{
          uri:
            'https://images-na.ssl-images-amazon.com/images/I/51xylwZFuvL.png',
        }}
        style={{width: 200, height: 200}}
      />

      <TouchableHighlight
        style={Styles.get().getStyles().submit}
        onPress={() => navigation.navigate('Notifications')}
        underlayColor="#fff">
        <Text style={Styles.get().getStyles().submitText}>Go to notifications</Text>
      </TouchableHighlight>
    </View>
  );
}
function NotificationsScreen({navigation}) {
  // panel NOTIFICATOPNS
  return (
    <View style={Styles.get().getStyles().container}>
      <TouchableHighlight
        style={Styles.get().getStyles().submit}
        onPress={() => navigation.navigate('CreatePost')}
        underlayColor="#fff">
        <Text style={Styles.get().getStyles().submitText}>Create Post</Text>
      </TouchableHighlight>
    </View>
  );
}
var Drawer = createDrawerNavigator();

export default class App extends React.Component {
  state = {
    swichValue: window.darkMode,
  };

  handleToggleSwich = () => {
      Styles.get().changeStyleMode()
      this.setState(this.state)
  }
  item = ({navigation}) => {
    //to jest cały boczne menu aplikacji
    return (
      <>
        {/* <TouchableHighlight
      style={styles.submit}
      onPress={() => navigation.navigate('CreatePost')}
      underlayColor='#fff'>
        <Text style={styles.submitText} >Create Post</Text>
    </TouchableHighlight> */}

        <ListItem icon>
          <Left />
          <Body>
            <Text>Dark Mode</Text>
          </Body>
          <Right>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              onValueChange={this.handleToggleSwich}
              value={Styles.get().isDarkMode()}
            />
          </Right>
        </ListItem>

        <ListItem
          icon
          style={{marginTop: 30}}
          onPress={() => navigation.navigate('Home')}>
          <Text style={Styles.get().getStyles().submitText}>Home</Text>
        </ListItem>

        <ListItem
          icon
          style={{marginTop: 30}}
          onPress={() => navigation.navigate('Notifications')}>
          <Text style={Styles.get().getStyles().submitText}>Notifications</Text>
        </ListItem>

        <ListItem
          icon
          style={{marginTop: 30}}
          onPress={() => navigation.navigate('CreatePost')}>
          <Text style={Styles.get().getStyles().submitText}>Create Post</Text>
        </ListItem>

        <ListItem
          icon
          style={{marginTop: 30}}
          onPress={() => navigation.navigate('PostList')}>
          <Text style={Styles.get().getStyles().submitText}>Post List</Text>
        </ListItem>
      </>
    );
  };

  async callForStorage() {
      await Styles.get().init()
      this.setState(this.state);
  }

  render() {
      if(Styles.get().isReady()) {
          return (
              <NavigationContainer>
                  <Drawer.Navigator
                      drawerContent={this.item}
                      drawerStyle={{
                          backgroundColor: Styles.get().getStyles().container.backgroundColor,
                      }}
                      drawerContentOptions={{
                          activeTintColor: '#ffeb3b',
                      }}
                      initialRouteName="Home">
                      <Drawer.Screen name="Home" component={HomeScreen} />
                      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                      <Drawer.Screen name="CreatePost" component={CreatePost} />
                      <Drawer.Screen name="PostList" component={PostList} />
                  </Drawer.Navigator>
              </NavigationContainer>
          );
      } else {
          this.promise = this.callForStorage()
          return (
              // todo: loading screen
              <Text>Marcin, weź tu wpierdol coś ładnego :)</Text>
          )
      }

  }
}
