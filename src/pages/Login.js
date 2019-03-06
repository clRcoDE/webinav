import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableOpacity ,TextInput} from 'react-native'
import {Link} from '@react-navigation/web'
export default class Login extends Component {

    goto=(route)=>{


        this.props.navigation.navigate(route)
    }
  render() {
    return (
      <View style={styles.container} >
       <View style={styles.header}></View>
       <View style={styles.body}>
       <View style={styles.inputWrapper}>
       <TextInput placeholder={'username'} />
       <TextInput placeholder={'password'} />
       </View>
       <TouchableOpacity style={styles.loginButton}  onPress={()=>this.goto('Home')} >

       <Text>Login</Text>
       </TouchableOpacity>


       <Link routeName="Signup"  style={{textDecorationLine:'none', textDecoration:'none'}} >
      <Text style={styles.signupText} >  or create new account? </Text>
</Link>

          
       </View>
       <View style={styles.footer}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({



    container:{
        flex:1,
        backgroundColor:'#19f'
    },
    header:{
        flex:1,
        backgroundColor:'#ff1'
    },
    body:{
        flex:3,
        backgroundColor:'#5f5'
    },
    footer:{
        flex:1,
        backgroundColor:'#f44'
    },
    signupText:{
        textDecorationLine:'none',
        textDecoration:'none'
    }
})
