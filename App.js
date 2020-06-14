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
    Title, Item, Label, Input, Textarea, Form,
} from 'native-base';

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
import {Token} from "./Utils/Token";

function HomeScreen({navigation}) {
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
    <>
      <Appbar.Header style={getStyles().appbar}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Notifications" subtitle="" />
      </Appbar.Header>

      <View style={getStyles().container}>
        <TouchableHighlight
          style={getStyles().submit}
          onPress={() => navigation.navigate('CreatePost')}
          underlayColor="#fff">
          <Text style={getStyles().submitText}>Create Post</Text>
        </TouchableHighlight>
      </View>
    </>
  );
}
const Drawer = createDrawerNavigator();

Navbar = ({navigation}) => {
  return (
    <Appbar.Header style={getStyles().appbar}>
      <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
      <Appbar.Content title="Home page" subtitle="" />
    </Appbar.Header>
  );
};

export default class App extends React.Component {
    constructor(props) {
        console.log("TOKEN = ", props.token)
        super(props);

        this.state = {
            switchValue: window.darkMode,
            token: new Token()
        };
    }

    LogInScreen = ({navigation}) => {
        return (
            <>
                <Appbar.Header style={getStyles().appbar}>
                    <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
                    <Appbar.Content title="Log In" subtitle="" />
                </Appbar.Header>

                <View style={getStyles().container}>
                    <Form>
                        <Item
                            floatingLabel
                            style={{
                                borderColor: '#29434e',
                            }}>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item
                            floatingLabel
                            style={{
                                borderColor: '#29434e',
                            }}>
                            <Label>Password</Label>
                            <Input />
                        </Item>

                        <TouchableHighlight
                            style={getStyles().submit}
                            underlayColor="#fff"
                            onPress={() => {
                                this.state.token.setToken("333")
                                navigation.navigate('Home')
                            }}>
                            <Text style={getStyles().submitText}>Log In</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={getStyles().submit}
                            underlayColor="#fff"
                            onPress={() => {
                                this.state.token.setToken("333")
                                navigation.navigate('Home')
                            }}>
                            <Text style={getStyles().submitText}>Sign Up</Text>
                        </TouchableHighlight>
                    </Form>
                </View>
            </>
        );
    }

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
      let logInOutButton = !this.state.token.isValid()
            ? (
                <ListItem
                    icon
                    style={{marginTop: 30}}
                    onPress={() => navigation.navigate('LogIn')}>
                    <Text style={getStyles().submitText}>Log In</Text>
                </ListItem>
            )
            : (
                <ListItem
                    icon
                    style={{marginTop: 30}}
                    onPress={() => {
                        this.state.token.clear()
                        navigation.navigate('Home')
                    }}>
                    <Text style={getStyles().submitText}>Log Out</Text>
                </ListItem>
            )

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
              value={this.state.switchValue}
            />
          </Right>
        </ListItem>

        {logInOutButton}

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
          onPress={() => navigation.navigate('PostList', {nav: 'cs'})}>
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
          <Drawer.Screen name="LogIn" component={this.LogInScreen} />
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          <Drawer.Screen name="CreatePost" component={() => new CreatePost({token: this.state.token})} />
          <Drawer.Screen name="PostList" component={() => new PostList({token: this.state.token})} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
