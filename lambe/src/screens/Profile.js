import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'

class Profile extends Component {
  logout = () => {

  }

  render() {
    const options = {email: 'fulano@gmail.com', secure: true}
    return (
      <View style={styles.container} >
        <Gravatar options={options} style={styles.avatar} />
        <Text style={styles.nickname}>Fulano de tal</Text>
        <Text style={styles.email}>fulano@mgail.com</Text>
        <TouchableOpacity onPress={this.logout} style={styles.buttom}>
          <Text style={styles.buttomText}>Sair</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

