import React, { Component } from 'react'
import {
  Modal, 
  View, 
  StyleSheet, 
  TouchableWithoutFeedback, 
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native'
import commonStyles from '../commonStyles'

export default class AddTask extends Component {
  render () {
    return (
      <Modal transparent={true} visible={this.props.isVisible} 
        onRequestClose={this.props.onCancel} 
        animationType='slide'>
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.background}></View>
        </TouchableWithoutFeedback>
        <View style={styles.container}>
          <Text style={styles.header}>Nova tarefa</Text>
          <TextInput style={styles.input} />
          <View style={styles.bottons}>
            <TouchableOpacity>
              <Text style={styles.botton}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.botton}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.background}></View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    fontFamily: commonStyles.fontFamily,
    backgroundColor: commonStyles.colors.today,
    color: commonStyles.colors.secondary,
    textAlign: 'center',
    padding: 15,
    fontSize: 18
  },
  input: {
    fontFamily: commonStyles.fontFamily,
    width: '90%',
    height: 40,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 6
  },
  bottons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  botton: {
    margin: 20,
    marginRight: 30,
    color: commonStyles.colors.today,
  }
})