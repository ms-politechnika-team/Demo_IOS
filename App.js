/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import {Router, Scene} from 'react-native-router-flux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import PostList from './Components/PostsList.js';
import CreatePost from './Components/CreatePost.js';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#546e7a',
  },
});

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Button
        color="#bb4d00"
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}
function NotificationsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Button
        color="#bb4d00"
        onPress={() => navigation.navigate('CreatePost')}
        title="Create new news"
      />
    </View>
  );
}
const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerStyle={{
            backgroundColor: '#718792',
          }}
          drawerContentOptions={{
            activeTintColor: '#ffad42',
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
