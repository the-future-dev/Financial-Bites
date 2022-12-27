import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { FlatList, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons'; 
import { colors, dim} from "../../style/styles";

// dataJson.sort( (a, b) => a.name.localeCompare(b.name));

const Slice = ({navigation, item}) =>{
    item.values.sort( (a, b) => a.name.localeCompare(b.name));
    const [showing, setShow] = useState(false);
    
    return(
        <SafeAreaView style={styles.subContainer}>
            <TouchableWithoutFeedback style={styles.letterContainer} onPress={() => setShow(!showing)}>
                <Text style={styles.letter}>{item.letter}</Text>
                {showing ?
                    <AntDesign name="left" size={24} color="black" />
                :
                    <AntDesign name="down" size={24} color="black" />
                }
            </TouchableWithoutFeedback>
            
            {showing ?
                <FlatList   
                    data={item.values}
                    keyExtractor={ (item, index) => item.id+""+index}
                    renderItem={( {item}) =>
                        <TouchableWithoutFeedback style={styles.word} onPress={() => navigation.navigate('Word', {word: item})}>
                            <Text style={styles.txt}>{item.name}</Text>
                        </TouchableWithoutFeedback>
                    } />
                    : <></>
            }
        </SafeAreaView>
    )
}

export function Glossario ({route, navigation}) {
    const { glossary } = route.params;

    // glossary.sort( (a, b) => a.name.localeCompare(b.name));

    let arrayByLetter = [];
    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i<alph.length; i++){
        let elements = glossary.filter(el => el.name[0].toUpperCase() == alph.charAt(i));
        if (elements.length != 0){
            arrayByLetter.push({
                "letter": alph.charAt(i),
                "values": elements,
            });
        }
    }


    const renderItem = ({item}) => (
        <Slice navigation={navigation} item={item}/>
    )

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                ListHeaderComponent={ () => (
                    <Text style={styles.title}>
                        GLOSSARIO:
                    </Text>
                )}
                data={arrayByLetter}
                renderItem={ renderItem }
                keyExtractor={ (item) => item.letter}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors.light,
      alignItems: 'stretch',
    },
    subContainer: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 25*dim.fontScale,
        textAlign: 'auto',
        padding: 20,
    },
    word: {
        borderWidth: 10,
        borderColor: colors.light,
    },
    
    letterContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: colors.dark,
        padding: 10,
        paddingHorizontal: dim.windowWidth / 10,
    },
    letter: {
        fontSize: 20*dim.fontScale,
    },

    txt: {
        paddingHorizontal: dim.windowWidth / 7,
        fontSize: 20*dim.fontScale,
    },
});


// array.map((item) => {
//     return(
//         <Slice navigation={navigation} item={item} key={item.letter}/>
//     )
// })