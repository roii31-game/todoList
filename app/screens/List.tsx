import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {FIRESTORE_DB} from '../../firebaseConfig'
import {useEffect, useState} from 'react'
import {addDoc, collection, onSnapshot, doc, updateDoc} from 'firebase/firestore'
import { FlatList } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import {Entypo} from '@expo/vector-icons'

export interface Todo {
    title: string;
    done: boolean;
    id: string;
}

const List = ({navigation}: any) => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [todo, setTodo] = useState('')


    //Adding todos into our screen after we submit them

    useEffect(() => {
        const todoRef = collection(FIRESTORE_DB, 'todos')
        
        const subscriber = onSnapshot(todoRef, {
            next: (snapshot) => {
                console.log("UPDATED")
                const todos: Todo[] = [];
                snapshot.docs.forEach(doc => {
                    todos.push({
                        id: doc.id,
                        ...doc.data()
                    } as Todo)
                })
                setTodos(todos)
            }
        })
        return () => subscriber();
    }, [])


    const addTodo = async() => {
        const doc = addDoc(collection(FIRESTORE_DB, 'todos'), {title: todo, done: false});
        setTodo('')
        
    }


    const renderTodo = ({item} : any) => {

        const ref = doc(FIRESTORE_DB, `todos/${item.id}`)

        const toggleDone = async() => {
            updateDoc(ref, {done: !item.done})
        }

        const deleteItem = async() => {

        }


        return(
            <View style={styles.todoContainer}>
                <TouchableOpacity onPress={toggleDone} style={styles.todo}>
                {item.done && <Ionicons name='md-checkmark-circle' size={32} color="green"/>}
                {!item.done && <Entypo name="circle" size={32} color="black"/>}
                <Text style={styles.todoText}>{item.title}</Text>
                </TouchableOpacity>
                <Ionicons name="trash-bin-outline" size={24} color="red" onPress={deleteItem} />
            </View>
        )
    }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput placeholder="Add new todo" onChangeText = {(text: string) => setTodo(text)} value={todo}></TextInput>
        <Button onPress={addTodo} title="Add todo" disabled={todo===''}/>
      </View>


      {/* Login Screen */}
    {todos.length > 0 && (
              <View>
                <FlatList
                data={todos}
                renderItem={(item) => renderTodo(item)}
                keyExtractor={(todo: Todo) => todo.id}
                />
            </View>  
    )}
    </View>
  )
}

export default List


const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20
    },
    form:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    input: {
        flex: 1,
        height: 40,
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