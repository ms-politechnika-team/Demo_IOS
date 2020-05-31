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

import {getStyles} from './StylesImpl';

// const getStyles() = StyleSheet.create({
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
    <Container style={getStyles().scrollView}>
      <Content>
        <Card style={getStyles().scrollView}>
          <CardItem style={getStyles().postCard}>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://www.pinclipart.com/picdir/middle/387-3870193_message-clipart-letter-post-icon-email-unread-png.png',
                }}
              />
              <Body>
                <Text>Autor - {props.id}</Text>
                <Text note>{props.title}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem style={getStyles().postCard}>
            <Body>
              <Image
                source={{
                  uri: props.img,
                }}
                style={{height: 200, width: 300, borderRadius: 10, flex: 1}}
                resizeMode="cover"
              />
              <Text>{props.text}</Text>
            </Body>
          </CardItem>
          <CardItem style={getStyles().postCard}>
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
