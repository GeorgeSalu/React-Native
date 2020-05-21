import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import params from './params'
import Field from './components/Field'
import Flag from './components/Flag'

export default class App extends Component {
  render() {
    return (
      <View >
        <Text >Iniciando o mines</Text>
        <Text>Tamanho da grade: 
          {params.getRowsAmount()} x {params.getColumnsAmount()}</Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={3} />
        <Field opened nearMines={6} />
        <Field mined />
        <Field mined opened />
        <Field mined opened exploded />
        <Field flagged />
        <Field flagged opened/>
        <Flag bigger />
      </View>
    )
  }
}