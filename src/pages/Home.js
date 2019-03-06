import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableOpacity ,TextInput} from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container} >
      <Text> this is hoooooooooome </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({



    container:{
        flex:1,
        backgroundColor:'grey',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

)
