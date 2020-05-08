import React, {Component} from 'react';
import {Image} from 'react-native';
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

// const styles = StyleSheet.create({
//   item: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 30,
//     margin: 2,
//    borderRadius: 30,
//     backgroundColor: '#d2f7f1',
//   },
// });

export default function Post(props) {
  return (
    <Container style={{backgroundColor: '#29434e'}}>
      <Content>
        <Card style={{flex: 0, backgroundColor: '#819ca9'}}>
          <CardItem style={{flex: 0, backgroundColor: '#819ca9'}}>
            <Left>
              <Thumbnail source={{uri: 'Image URL'}} />
              <Body>
                <Text>Autor - {props.id}</Text>
                <Text note>{props.title}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem style={{flex: 0, backgroundColor: '#819ca9'}}>
            <Body>
              <Image
                source={{
                  uri: props.img,
                }}
                style={{height: 200, width: 200, flex: 1}}
              />
              <Text>{props.text}</Text>
            </Body>
          </CardItem>
          <CardItem style={{flex: 0, backgroundColor: '#819ca9'}}>
            <Left>
              <Button transparent textStyle={{color: '#ffeb3b'}}>
                <Text style={{color: '#ffeb3b'}}>{props.data}</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
