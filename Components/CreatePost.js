import React, {Component} from 'react';
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

export default class CreatePost extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#546e7a'}}>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Textarea
              style={{
                borderRadius: 20,
                borderColor: '#bb4d00',
                marginTop: 20,
              }}
              rowSpan={5}
              bordered
              placeholder="Textarea"
            />
            <Button
              full
              style={{
                backgroundColor: '#bb4d00',
                borderRadius: 20,
                marginTop: 20,
              }}>
              <Text>Send new Post</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
