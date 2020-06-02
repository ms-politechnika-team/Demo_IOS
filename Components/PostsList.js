import React, {Component} from 'react';
import {Text, Image, View, StyleSheet, ScrollView} from 'react-native';
import Post from './Post.js';
import {Container} from "native-base";
import Styles from "./Styles";

class PostList extends Component {
  state = {
    names: [
      {name: 'Ben', id: 1},
      {name: 'Susan', id: 2},
      {name: 'Robert', id: 3},
      {name: 'Mary', id: 4},
      {name: 'Daniel', id: 5},
    ],
    news: [],
  };

  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const response = await fetch(
      'http://newsapi.org/v2/top-headlines?country=pl&category=technology&apiKey=2728c77ea2384d4ab5010b84c19b27d3',
    );
    const json = await response.json();

    this.setState({news: json.articles});
    console.log(this.state.news);
  };

  render() {
    return (
        <Container style={Styles.get().getStyles().scrollView}>

      <View style={Styles.get().getStyles().scrollView}>
        
        
        
        
        <ScrollView style={Styles.get().getStyles().scrollView}>
        
          {this.state.news.map((item, index) => (
            // <View key={item.id} style={styles.item}>
            //   <Text>{item.name}</Text>
            // </View>
            <Post style={Styles.get().getStyles().scrollView}
              key={item.url}
              name={item.author}
              id={item.author}
              text={item.content}
              data={item.publishedAt}
              title={item.title}
              img={item.urlToImage}
            />
          ))}
        </ScrollView>
      </View>
        </Container>
    );
  }
}
export default PostList;


