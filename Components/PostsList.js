import React, {Component} from 'react';
import {Text, Image, View, StyleSheet, ScrollView} from 'react-native';
import Post from './Post.js';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {getStyles} from './StylesImpl';
import {Container} from 'native-base';
import {Appbar} from 'react-native-paper';
import {fetchMyPosts} from "../Utils/BackendConnection";

Navbar = () => {
  const navigation = useNavigation();
  return (
    <Appbar.Header style={getStyles().appbar}>
      <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
      <Appbar.Content title="Navigation" subtitle="" />
    </Appbar.Header>
  );
};

export class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      token: props.token,
      myPosts: props.myPosts
    }
  }



  componentDidMount() {
    this.fetchData();
  }
  //http://newsapi.org/v2/top-headlines?country=pl&category=technology&apiKey=2728c77ea2384d4ab5010b84c19b27d3
  fetchData = async () => {
    const response = !this.state.myPosts ? await fetch(
      'http://ec2-54-160-124-180.compute-1.amazonaws.com:2137/api/posts/newest',
    ) : await fetch("http://ec2-54-160-124-180.compute-1.amazonaws.com:2137/api/posts/my-posts", {
      headers: {
        'Content-Type' : "application/json",
        "Authorization" : `JWT ${this.state.token}`
      },
      method: 'GET'
    });

    let json = await response.json();

    if (typeof json === 'undefined') {
      json = []
    }

    this.setState({news: json, token: this.state.token, myPost: this.state.myPosts});
    console.log(this.state.news);
  };

  render() {
    return (
      <Container style={getStyles().scrollView}>
        <Navbar />
        <View style={getStyles().scrollView}>
          <ScrollView style={getStyles().scrollView}>
            {this.state.news.map((item, index) => (
              // <View key={item.id} style={styles.item}>
              //   <Text>{item.name}</Text>
              // </View>
              <Post
                style={getStyles().scrollView}
                key={item.id}
                name={item.id} //id
                id={item.id} //id
                text={item.comment} //comment
                data={item.createdAt} //createdAt
                title={item.title}
                img={item.fileUrl} //file url
              />
            ))}
          </ScrollView>
        </View>
      </Container>
    );
  }
}
export default PostList;
