import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import params from './params'

export default class App extends Component {
  render() {
    return (
      <View >
        <Text >Iniciando o mines</Text>
        <Text>Tamanho da grade: 
          {params.getRowsAmount()} x {params.getColumnsAmount()}</Text>
      </View>
    )
  }
}