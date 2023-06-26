import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React from 'react'

import {useState} from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    

    const signUp = async() => {
        const after = await createUserWithEmailAndPassword(auth, email, password)
        console.log('Updating-Signup', after);
        alert('Check your email')
    }

    const signIn = async() => {
        const user = await signInWithEmailAndPassword(auth, email, password)
        console.log('Updating', user)
    }


  return (
    
        <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Email" onChangeText = {(text: string) => setEmail(text)} value={email}></TextInput>
 <TextInput style={styles.input} placeholder="Password" textContentType='password' onChangeText = {(text: string) => setPassword(text)} value={password}></TextInput>
 <Button onPress={signUp} title="Create Account"/>
        <Button onPress={signIn} title="Sign in"/>
</View>       
  )
}

export default Login


const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        flexDirection: 'column',
        paddingVertical: 20
    },
    form:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    input: {
        marginVertical: 4,
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: 'fff'
    },
    todoContainer: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 4,
    },
    todoText: {
        flex: 1,
        paddindHorizontal: 4,
        padding: 10

    },
    todo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
})