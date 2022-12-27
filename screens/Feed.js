import React, {useState, useEffect} from "react";
import {StyleSheet, FlatList, View, Text} from "react-native";
import { colors, fonts } from "../style/styles";
import { Post } from './Bites/Post';
import { firebase } from '../config';

export function Feed({navigation}) {
  const [articlesFeed, setArticles] = useState([]);
  const feedRef = firebase.firestore().collection('feed');

  useEffect(() => {
    const fetchFeed = async () => {
        feedRef
        .onSnapshot(
            querySnapshot => {
                const users = []
                querySnapshot.forEach((doc) => {
                    const {author, date, img, subtitle, text, time, title} = doc.data();
                    users.push({
                        id: doc.id,
                        author,
                        date,
                        img,
                        subtitle,
                        text,
                        time,
                        title,
                    })
                })
                setArticles(users)
            }
        )
      }
    
    fetchFeed()
}, [])

    return (
      <View style={styles.container}>
          <FlatList
            data={articlesFeed}
            key={({item}) => item.id}
            renderItem={({item})=>
              <Post navigation={navigation} item={item} />
            }
            ItemSeparatorComponent={() => 
              <View style={styles.separator}></View>
            }
          />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },

  separator: {
    height: 50,
  },

});

