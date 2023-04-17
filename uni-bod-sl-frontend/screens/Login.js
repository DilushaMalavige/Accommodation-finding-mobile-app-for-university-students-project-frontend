import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder='Username' style={{
        borderColor:"#000",
        borderWidth:1
      }} />
      <TouchableOpacity style={styles.buttonStyle}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    buttonStyle:{
        padding:8,
        margin:8,
        backgroundColor:'#00ff00'
    }
})