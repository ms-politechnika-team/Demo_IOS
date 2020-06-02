import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Picker } from 'native-base';
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
import {
  TouchableHighlight,
  
} from 'react-native';

import { TextInput } from 'react-native';
import {styles} from "./StylesImpl.js"
// import {getStyles} from "./StylesImpl";





function GoOnButton({navigation}) {
  return (
<TouchableHighlight
  style={styles.submit}
  //onPress={() => navigation.navigate('PostList')} // nie wiem czemu to nie działa, powinno od razu włączć widok postów
  underlayColor='#fff'>
    <Text style={styles.submitText} >Go to Post List</Text>
</TouchableHighlight>
 
  );
}


export default class CreatePost extends Component  {
  render() {
    return (
      <Container style={Styles.get().getStyles().container}>
        <Content padder>
          <Form>
            <Item floatingLabel
            style={{
              
              borderColor: '#29434e',
              
            }}
            >
              <Label>Username</Label>
              <Input  />
            </Item>
            <Item floatingLabel
            style={{
              
              borderColor: '#29434e',
              
            }}
            >
              <Label>Password</Label>
              <Input 
              
              />
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
  style={Styles.get().getStyles().submit}
  
  underlayColor='#fff'>
    <Text style={Styles.get().getStyles().submitText} >Send Post</Text>
</TouchableHighlight>

            <TouchableHighlight
                style={Styles.get().getStyles().submit}

                underlayColor='#fff'>
              <Text style={Styles.get().getStyles().submitText} >Upload photo</Text>
            </TouchableHighlight>

<GoOnButton/>
          </Form>

        </Content>
      </Container>
    );
  }
}
