import React, {useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { colors, dim, fonts } from "../../style/styles";
import { Element } from "./component/Element";
import { firebase } from '../../config';

export function Args ({navigation, glossary, learn}) {
  const sym = { "id": 0, "title": "Glossario", "img": "https://cdn.studenti.stbm.it/images/2019/11/06/alfabeto-greco-orig.jpeg", "darkImg": true,"data": [],}

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity  onPress={() => { navigation.navigate('Glossario', {glossary: glossary});}}>
        <Element item={sym} />
      </TouchableOpacity>

      {learn?.map( (item, index) => (
          <TouchableOpacity key={index} onPress={() => { navigation.navigate('SubArgs', {item: item});}}>
            <Element item={item} />
          </TouchableOpacity>
        ))
      }

    </SafeAreaView>
  );
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors.light,
      alignItems: 'center',
    }
});