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
    <Container style={Styles.get.getStyles().scrollView}>
      <Content>
        <Card style={Styles.get.getStyles().scrollView}>
          <CardItem style={Styles.get.getStyles().postCard}>
            <Left>
              <Thumbnail source={{uri: 'Image URL'}} />
              <Body>
                <Text>Autor - {props.id}</Text>
                <Text note>{props.title}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem style={Styles.get.getStyles().postCard}>
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
          <CardItem style={Styles.get.getStyles().postCard}>
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
