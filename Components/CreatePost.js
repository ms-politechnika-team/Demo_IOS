import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Picker} from 'native-base';
import {Appbar} from 'react-native-paper';
import {
  Container,
  Header,
  Content,
  Textarea,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text,
} from 'native-base';
import {TouchableHighlight, TouchableOpacity, View} from 'react-native';

import {TextInput} from 'react-native';
import {styles} from './StylesImpl.js';
import {cameraStyles, getStyles} from './StylesImpl';
import {RNCamera} from 'react-native-camera';

function GoOnButton({navigation}) {
  return (
    <TouchableHighlight
      style={styles.submit}
      // onPress={() => navigation.navigate('PostList')} // nie wiem czemu to nie działa, powinno od razu włączć widok postów
      underlayColor="#fff">
      <Text style={styles.submitText}>Go to Post List</Text>
    </TouchableHighlight>
  );
}
Navbar = ({navigation}) => {
  return (
    <Appbar.Header style={getStyles().appbar}>
      <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
      <Appbar.Content title="Home page" subtitle="" />
    </Appbar.Header>
  );
};

export default class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCamera: false,
      photo: null,
    };
  }
  render() {
    if (this.state.showCamera) {
      return (
        <View style={cameraStyles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={cameraStyles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({barcodes}) => {
              console.log(barcodes);
            }}
          />
          <View
            style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style={cameraStyles.capture}>
              <Text style={{fontSize: 14}}> SNAP </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return (
      <>
        <Navbar />
        <Container style={getStyles().container}>
          <Content padder>
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

              <Textarea
                style={{
                  borderRadius: 20,
                  borderColor: '#29434e',
                  marginTop: 20,
                }}
                rowSpan={5}
                bordered
                placeholder="Textarea"
              />

              <TouchableHighlight
                style={getStyles().submit}
                underlayColor="#fff">
                <Text style={getStyles().submitText}>Send Post</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={getStyles().submit}
                underlayColor="#fff"
                onPress={() =>
                  this.setState({
                    ...this.state,
                    showCamera: true,
                  })
                }>
                <Text style={getStyles().submitText}>Upload photo</Text>
              </TouchableHighlight>

              <GoOnButton />
            </Form>
          </Content>
        </Container>
      </>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      this.setState({
        ...this.state,
        showCamera: false,
        photo: data.uri,
      });
    }
  };
}
