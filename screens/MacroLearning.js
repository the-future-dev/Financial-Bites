import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Args as Arguments } from './Learn/Args';

import { colors, dim, fonts } from "../style/styles";
import { Searchbar } from 'react-native-paper';
import { ScrollView } from "react-native-gesture-handler";

import { firebase } from '../config';

export function Macro({navigation}) {
  const [glossary, setGlossary] = useState([]);
  const [learn, setLearn] = useState([]);

  const glosRef = firebase.firestore().collection('glossary');  
  const learnRef = firebase.firestore().collection('learn');

  useEffect(() => {
    const fetchFeed = async () => {
      glosRef
        .onSnapshot(
            querySnapshot => {
                const users = []
                querySnapshot.forEach((doc) => {
                    const {name, text} = doc.data();
                    users.push({
                        id: doc.id,
                        name,
                        text,
                    })
                })
                setGlossary(users)
            }
        )
      }
      const fetchLearn = async () => {
        learnRef
          .onSnapshot(
              querySnapshot => {
                  const users = []
                  querySnapshot.forEach((doc) => {
                    const {data, img, title, darkImg} = doc.data();
                    users.push({
                        id: doc.id,
                        data,
                        img,
                        title,
                        darkImg,
                    })
                  })
                  setLearn(users)
              }
          )
        }
    fetchLearn()
    fetchFeed()
}, [])

  const [searchQuery, onChangeSearch] = useState("");

  return (
    <ScrollView style={styles.container}>
      <Searchbar
        style={styles.search}
        onIconPress={() => navigation.navigate('SearchPage', {keywords: searchQuery, glossary: glossary, learn: learn})}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Arguments navigation={navigation} glossary={glossary} learn={learn}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: colors.light,
  // alignItems: 'center',
  },
  search: {
    margin: 20*dim.fontScale,
    borderRadius: 20*dim.fontScale,

  },
});