import React, {Component} from 'react';
import {Text, Image, View, StyleSheet, ScrollView} from 'react-native';
import Post from './Post.js';

class PostList extends Component {
  state = {
    names: [
      {name: 'Ben', id: 1},
      {name: 'Susan', id: 2},
      {name: 'Robert', id: 3},
      {name: 'Mary', id: 4},
      {name: 'Daniel', id: 5},
    ],
  };
  render() {
    return (
      <View>
        <ScrollView>
          {this.state.names.map((item, index) => (
            // <View key={item.id} style={styles.item}>
            //   <Text>{item.name}</Text>
            // </View>
            <Post key={item.id} name={item.name} id={item.id} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
export default PostList;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1',
  },
});
