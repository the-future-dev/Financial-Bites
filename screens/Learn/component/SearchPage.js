import React, { useState } from "react";
import {Text, StyleSheet} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import Button from '../../../assets/general/Button';

import { dim, colors, fonts} from "../../../style/styles";

    /* <Text>{JSON.stringify(resultsLearing)}</Text> */

export function SearchPage ({route, navigation}){
    const {keywords, glossary, learn} = route.params;
    const [searchQuery, onChangeSearch] = useState(keywords);

    const words = keywords.split(' ');      // array di parole cercates
    const resultsGlossary = search(words, glossary);
    const resultsLearing = searchLearning(words, learn);
    const resultsArticles = [];//search(words, articoliJSON);
    
    return(
        <ScrollView style={styles.container}>
            <Searchbar style={styles.search} onIconPress={() => navigation.navigate('SearchPage', {keywords: searchQuery})} placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />

            <Text style={styles.subtitle}>Glossario:</Text>
            
            {(resultsGlossary.length != 0) ?
                resultsGlossary.map( (item, index) => {
                    return(
                        <TouchableOpacity key={index} style={styles.text} onPress={() => navigation.navigate('Word', {word: item})}>
                            <Text>{item.name}</Text>       
                        </TouchableOpacity>
                    )
                })
                :
                <Text style={styles.text}> Nessun Risultato</Text>
            }

            <Text style={styles.subtitle}>Learning:</Text>
            {/* navigation.navigate('Inside', {element: item.element}); */}
            { (resultsLearing.length != 0) ?
                resultsLearing.map( (item, index) => {
                    return(
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('Inside', {element: item})}>
                            <Text style={styles.text}>{item.name}</Text>       
                        </TouchableOpacity>
                    )
                })
                :
                <Text style={styles.text}> Nessun Risultato</Text>
            }

            <Text style={styles.subtitle}>Articoli:</Text>
            {(resultsArticles.length != 0) ?
                resultsArticles.map( (item, index) => {
                    return(
                        <TouchableOpacity key={index} style={styles.text} onPress={() => navigation.navigate('Article', {item: item})}>
                            <Text>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })
                :
                <Text style={styles.text}> Nessun Risultato</Text>
            }
            
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Button />
            </TouchableOpacity>
        </ScrollView>   
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
    },

    search: {
        margin: 20*dim.fontScale,
        borderRadius: 20*dim.fontScale,

    },

    subtitle: {
        marginHorizontal: 40*dim.fontScale,
        marginVertical: 15*dim.fontScale,
        fontSize: 18*dim.fontScale,
        // textAlign: "auto",
    },

    text: {
        marginHorizontal: 60*dim.fontScale,
        marginVertical: 10,
        // textAlign: "justify",
        fontSize: 15*dim.fontScale,
    },
});

function search(strToSearch, objects) {
    let results = [];

    strToSearch.map( word => {
        objects.map( obj => {
            // results.push(obj);
            Object.values(obj).map((value, index) => {
                if (!results.includes(obj) && value.toString().toLowerCase().includes(word.toLowerCase()) ){
                    results.push(obj);
                }
            })
        })
    });

    return results;
}

function searchLearning(strToSearch, objects){
    let results = [];

    //for each word in the phrase searched
    strToSearch.map( word => {
        
        //looking into each object of learn.json
        objects.map( obj => {
            
            //looking into each element of object.data
            obj.data.map(element => {

                Object.values(element).map((value, index) => {
                    if (!results.includes(element) && value.toString().toLowerCase().includes(word.toLowerCase()) ){
                        results.push(element);
                    }
                })
            })

        })
    })
    return results;
}