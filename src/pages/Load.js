import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableOpacity ,ActivityIndicator} from 'react-native'

export default class Home extends Component {



    gotoDelay=()=>{
        setTimeout(()=>this.props.navigation.navigate('Login'), 2000 )
    }
    componentDidMount(){
        this.gotoDelay()
    }
    render(){
    return (
      <View style={styles.container} >

      <View style={styles.welcomeMessageBox}>
      <Text style={styles.welcomeText} >W8</Text>
<ActivityIndicator animating={true} size={'large'}/>
</View>
      </View>
    )
    }
  
}

const styles = StyleSheet.create({



    container:{
        flex:1,
        backgroundColor:'grey',
        justifyContent:'center',
    alignItems: 'center',  
  },
  welcomeMessageBox:{
      backgroundColor:'#f55',
      height:150,
      width:150,
      padding: 25,
      justifyContent: 'space-evenly',
      alignItems:'center'
  },
  welcomeText:{
      fontFamily:'sans-serif',
      fontSize:25,
      color:'#eee'
  }
}

)
