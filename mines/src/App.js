import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import params from './params'
import MineField from './components/MineField'
import { createMineBoard } from './functions'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return {
      board: createMineBoard(rows, cols, this.minesAmount())
    }
  }

  render() {
    return (
      <View >
        <Text style={styles.container}>Iniciando o mines</Text>
        <Text>Tamanho da grade: 
          {params.getRowsAmount()} x {params.getColumnsAmount()}</Text>
        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
})