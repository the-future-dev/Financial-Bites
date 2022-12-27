import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { dim, colors, fonts} from "../../../style/styles";
import Button from "../../../assets/general/Button";

export const Word = ({route, navigation}) => {
    const { word } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style = {[styles.name, fonts.title]}> {word.name} </Text>
            </View>
            <Text style = {[styles.text, fonts.italic]}>
                {word.text} 
            </Text>

            {!!(word.img) ?
                <Image style={styles.img} source={{uri: word.img}}/>
                :
                <></>
            }
            <Button title="Indietro" onPress={() => navigation.goBack()} />
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.light,
      },

    name: {
        fontSize: 20*dim.fontScale,
        textAlign: "center",
    },
    text: {
        margin: 20,
        textAlign: "justify",
        fontSize: 15*dim.fontScale,
    },
    img: {
        height: dim.windowHeight / 3,
        marginHorizontal: 20,
    },
});