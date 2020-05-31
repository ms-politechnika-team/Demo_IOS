/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';

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
import {ListItem} from 'native-base';
import {Appbar} from 'react-native-paper';

//tutaj są style czyli wszystkie kolory itd
import {
  getStyles,
  reloadStyles,
  setDarkMode,
  styles,
} from './Components/StylesImpl';

function HomeScreen({navigation}) {
  // panel HOME
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <>
      <Appbar.Header style={getStyles().appbar}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Home page" subtitle="" />
      </Appbar.Header>

      <View style={getStyles().container}>
        <Image
          source={{
            uri:
              'https://images-na.ssl-images-amazon.com/images/I/51xylwZFuvL.png',
          }}
          style={{width: 200, height: 200}}
        />

        <TouchableHighlight
          style={getStyles().submit}
          onPress={() => navigation.navigate('Notifications')}
          underlayColor="#fff">
          <Text style={getStyles().submitText}>Go to notifications</Text>
        </TouchableHighlight>
      </View>
    </>
  );
}
function NotificationsScreen({navigation}) {
  // panel NOTIFICATOPNS
  return (
    <View style={getStyles().container}>
      <TouchableHighlight
        style={getStyles().submit}
        onPress={() => navigation.navigate('CreatePost')}
        underlayColor="#fff">
        <Text style={getStyles().submitText}>Create Post</Text>
      </TouchableHighlight>
    </View>
  );
}
const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  state = {
    swichValue: window.darkMode,
  };

  handleToggleSwich = () => {
    this.setState(state => ({
      swichValue: !state.swichValue,
    }));
    setDarkMode(false);
    reloadStyles();
    this.forceUpdate();
    this.setState(this.state);
  };
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
              value={this.state.swichValue}
            />
          </Right>
        </ListItem>

        <ListItem
          icon
          style={{marginTop: 30}}
          onPress={() => navigation.navigate('Home')}>
          <Text style={getStyles().submitText}>Home</Text>
        </ListItem>

        <ListItem
          icon
          style={{marginTop: 30}}
          onPress={() => navigation.navigate('Notifications')}>
          <Text style={getStyles().submitText}>Notifications</Text>
        </ListItem>

        <ListItem
          icon
          style={{marginTop: 30}}
          onPress={() => navigation.navigate('CreatePost')}>
          <Text style={getStyles().submitText}>Create Post</Text>
        </ListItem>

        <ListItem
          icon
          style={{marginTop: 30}}
          onPress={() => navigation.navigate('PostList')}>
          <Text style={getStyles().submitText}>Post List</Text>
        </ListItem>
      </>
    );
  };

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={this.item}
          drawerStyle={{
            backgroundColor: getStyles().container.backgroundColor,
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
  }
}
