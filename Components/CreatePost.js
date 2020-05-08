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
  StyleSheet,
  
} from 'react-native';
import { TextInput } from 'react-native';




const styles = StyleSheet.create({
  container: {
    // flex: 1,
  // alignItems: 'center',
    // justifyContent: 'center',
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
  }


});



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
      <Container style={styles.container}>
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
  style={styles.submit}
  
  underlayColor='#fff'>
    <Text style={styles.submitText} >Send Post</Text>
</TouchableHighlight>
<GoOnButton/>
          </Form>

        </Content>
      </Container>
    );
  }
}
