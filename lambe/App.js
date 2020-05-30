import React, {Component} from 'react';
import Header from './src/components/Header'
import { View, Text } from 'react-native'
import Post from './src/components/Post'

export default class App extends Component {
  render() {
    const comments = [{
      nickname: 'joaa elena silva',
      comment: 'excelente foto'
    },{
      nickname: 'rafael',
      comment: 'muito ruim'
    }]

    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')}
          comments={comments} />
      </View>
    );
  }
}
