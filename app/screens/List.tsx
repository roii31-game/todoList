import { View, Text, Button } from 'react-native'
import React from 'react'
import {FIRESTORE_DB} from '../../firebaseConfig'
import {useEffect} from 'react'
import {addDoc, collection} from 'firebase/firestore'

const List = ({navigation}: any) => {

    useEffect(() => {
        addDoc(collection(FIRESTORE_DB, 'todos'), { title: "I am a test", done: false})
    }, [])
  return (
    <View>
      <Text>List</Text>
      <Button onPress={() => navigation.navigate('Details')} title="Open Details"/>
    </View>
  )
}

export default List