import React, {Component} from 'react';
import {Appbar} from 'react-native-paper';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from 'native-base';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Switch,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {getStyles} from './StylesImpl';

export default function Unlogged() {
  const navigation = useNavigation();
  return (
    <>
      <Appbar.Header style={getStyles().appbar}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Plis login" subtitle="" />
      </Appbar.Header>

      <View style={getStyles().container}>
        <Icon active style={{fontSize: 100}} name="md-warning" />

        <TouchableHighlight
          style={getStyles().submit}
          onPress={() => navigation.navigate('LogInScreen')}
          underlayColor="#fff">
          <Text style={getStyles().submitText}>Click to login </Text>
        </TouchableHighlight>
      </View>
    </>
  );
}
