import React, { Component } from 'react'
import {
  Platform,
  Modal, 
  View, 
  StyleSheet, 
  TouchableWithoutFeedback, 
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import commonStyles from '../commonStyles'
import moment from 'moment'

const initialState = { desc: '', date: new Date(), showDatePicker: false }

export default class AddTask extends Component {

  state = {
    ...initialState
  }

  getDatePicker = () => {
    let datePicker =  <DateTimePicker 
                        value={this.state.date}
                        onChange={(_, date) => this.setState({ date, showDatePicker: false })}
                        mode='date' />

    const dateString  = moment(this.state.date).format('ddd, D [de] MMMM [de] YYYY')

    if(Platform.OS === 'android') {
      datePicker = (
        <View>
          <TouchableOpacity onPress={() => this.setState({ showDatePicker: true })}>
            <Text style={styles.date}>
              {dateString}
            </Text>
          </TouchableOpacity>
          {this.state.showDatePicker && datePicker}
        </View>
      )
    }

    return datePicker
  }

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
          <TextInput style={styles.input}  
            placeholder="Informe a descrição ...." 
            value={this.state.desc} 
            onChangeText={desc => this.setState({ desc })} />
          {this.getDatePicker()}
          <View style={styles.bottons}>
            <TouchableOpacity onPress={this.props.onCancel}>
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
  },
  date: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
  }
})