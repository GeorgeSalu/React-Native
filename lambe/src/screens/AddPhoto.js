import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  Platform,
  ScrollView,
  Alert
} from 'react-native'
import ImagePicker from 'react-native-image-picker'

class AddPhoto extends Component {
  state = {
    image: null,
    comment: '',
  }

  pickerImage = () => {
    ImagePicker.showImagePicker({
      title: 'Escolha a imagem',
      maxHeight: 600,
      maxWidth: 800
    }, res => {
      if(!res.didCancel) {
        this.setState({ image: { uri: res.uri, base64: res.data } })
      }
    })
  }

  save = async () => {
    Alert.alert('Imagem adicionada!', this.state.comment)
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Compartilhe uma imagem</Text>
          <View style={styles.imageContainer}>
            <Image source={this.state.image} style={styles.image}></Image>
          </View>
          <TouchableOpacity onPress={this.pickImage} style={styles.buttom} >
            <Text style={styles.buttomText}>Escolha a foto</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }

}