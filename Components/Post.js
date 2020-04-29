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

export default function Post(props) {
  return (
    <Container style={{backgroundColor: '#29434e'}}>
      <Content>
        <Card style={{flex: 0, backgroundColor: '#819ca9'}}>
          <CardItem style={{flex: 0, backgroundColor: '#819ca9'}}>
            <Left>
              <Thumbnail source={{uri: 'Image URL'}} />
              <Body>
                <Text>NativeBase {props.id}</Text>
                <Text note>{props.name}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem style={{flex: 0, backgroundColor: '#819ca9'}}>
            <Body>
              <Image
                source={require('./img/design.png')}
                style={{height: 200, width: 200, flex: 1}}
              />
              <Text>
                {props.name} - W ciągu kolejnych dni możemy liczyć na
                wyczekiwane opady deszczu. Pojawią się też burze - w nich deszcz
                może padać intensywnie. W czwartek termometry wskażą nawet 24
                stopnie Celsjusza. A co czeka nas dalej? W ciągu kolejnych dni
                możemy liczyć na wyczekiwane opady deszczu. Pojawią się też
                burze - w nich deszcz może padać intensywnie. W czwartek
                termometry wskażą nawet 24 stopnie Celsjusza. A co czeka nas
                dalej?
              </Text>
            </Body>
          </CardItem>
          <CardItem style={{flex: 0, backgroundColor: '#819ca9'}}>
            <Left>
              <Button transparent textStyle={{color: '#f57c00'}}>
                <Text style={{color: '#f57c00'}}>1,926 stars</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
