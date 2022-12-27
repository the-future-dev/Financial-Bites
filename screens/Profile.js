import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { colors, fonts, dim } from "../style/styles";

const Line = () => {
  return(
    <View style={styles.line}></View>
)};


export function Home ({ navigation }) {
    const logged = false;

    const toggleLog = () => {
      this.logged = !logged;
    }

    const onPressSignUp = () =>{
      toggleLog();
      navigation.navigate('Signup');
    }

    return(
        <ScrollView style={styles.container}>
            {/* <Text style={[fonts.basic, styles.title]}>{"Account".toLocaleUpperCase()}</Text>
            { logged ?
                <>
                  <View style={styles.div}>
                    <Text style={[fonts.light, styles.subtitle]}>Salvati</Text>
                    <Text style={[fonts.light, styles.subtitle]}>Notifiche</Text>
                    <Text style={[fonts.light, styles.subtitle]} >Sign out</Text>
                  </View>
                </>
              :
                <>
                  <View style={[styles.div]}>
                    <TouchableOpacity onPress={ () => navigation.navigate("Login") }>
                      <Text style={[fonts.light, styles.subtitle] }>Log in</Text>
                    </TouchableOpacity>
                    <TouchableWithoutFeedback onPress={ () => onPressSignUp() }>
                      <Text style={[fonts.light, styles.subtitle]}>Sign up</Text>
                    </TouchableWithoutFeedback>
                  </View>
                </>              
            } */}
            <Text style={[fonts.basic, styles.title]}>{"Informazioni".toLocaleUpperCase()}</Text>
            <View style={[styles.div]}>
            {/* <TouchableWithoutFeedback onPress={() => navigation.navigate("Work", {title: "Privacy"})}>
              <Text style={[fonts.light, styles.subtitle]} >Privacy</Text>
            </TouchableWithoutFeedback> */}
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Feedback")}>
              <Text style={[fonts.light, styles.subtitle]} >Feedback</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("AboutUs")}>
              <Text style={[fonts.light, styles.subtitle]} >About Us</Text>
            </TouchableWithoutFeedback>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.light,
      paddingHorizontal: dim.windowHeight/30, 
    },

    title: {
      fontSize: 18,
      marginTop: dim.windowHeight/45,
      marginBottom: dim.windowHeight/100,
    },

    subtitle: {
      fontSize: 16,
      marginVertical: dim.windowHeight/45,
    },

    div: {
      borderTopWidth: 1,
      borderColor: 'black',
    },

    line: {
      borderTopColor: 'black',
      borderTopWidth: 1,
    },
  });
