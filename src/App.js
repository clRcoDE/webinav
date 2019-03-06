import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import BrowserApp from './routes/index.web'
export default class App extends Component {
  render() {
    return (<BrowserApp/>)
  }
}

