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

//tutaj są style czyli wszystkie kolory itd
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#819ca9',
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
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
});

function HomeScreen({navigation}) {
  // panel HOME
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://images-na.ssl-images-amazon.com/images/I/51xylwZFuvL.png',
        }}
        style={{width: 200, height: 200}}
      />

      <TouchableHighlight
        style={styles.submit}
        onPress={() => navigation.navigate('Notifications')}
        underlayColor="#fff">
        <Text style={styles.submitText}>Go to notifications</Text>
      </TouchableHighlight>
    </View>
  );
}
function NotificationsScreen({navigation}) {
  // panel NOTIFICATOPNS
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.submit}
        onPress={() => navigation.navigate('CreatePost')}
        underlayColor="#fff">
        <Text style={styles.submitText}>Create Post</Text>
      </TouchableHighlight>
    </View>
  );
}
const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  state = {
    swichValue: true,
  };

  handleToggleSwich = () =>
    this.setState(state => ({
      swichValue: !state.swichValue,
    }));

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
          <Text style={styles.submitText}>Home</Text>
        </ListItem>

        <ListItem
          icon
          style={{marginTop: 30}}
          onPress={() => navigation.navigate('Notifications')}>
          <Text style={styles.submitText}>Notifications</Text>
        </ListItem>

        <ListItem
          icon
          style={{marginTop: 30}}
          onPress={() => navigation.navigate('CreatePost')}>
          <Text style={styles.submitText}>Create Post</Text>
        </ListItem>

        <ListItem
          icon
          style={{marginTop: 30}}
          onPress={() => navigation.navigate('PostList')}>
          <Text style={styles.submitText}>Post List</Text>
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
            backgroundColor: '#819ca9',
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
