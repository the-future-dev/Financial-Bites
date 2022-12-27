import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

import { colors, dim, fonts } from '../../style/styles';

export function Post ({navigation, item})  {
    const thereIsAPhoto = !!(item.img) ? true : false;
    const thereIsTime = !!(item.time) ? true : false;
    const thereIsSubtitle = !!(item.subtitle) ? true : false;
    thereIsAuthor = !!(item.author) ? true : false;
    const thereIsDate = !!(item.date) ? true : false;

    const [saved, setSaved] = useState(false);

    const OnPressFunction = () => {
        navigation.navigate('Article', {item: item})
    }
    return(
        <View>
            <TouchableWithoutFeedback onPress={OnPressFunction}>
                { thereIsAPhoto ? (
                    <Image style={styles.img} source={{uri: item.img}}/>
                ) : (
                    <></>
                )}
            </TouchableWithoutFeedback>
            <View style={[styles.slice, {justifyContent: (thereIsAuthor ? 'space-between' : 'flex-end'), marginTop: 10}]}>
                    {thereIsDate ? (
                        <Text style={[styles.end, fonts.italic]}>{item.date.toDate().toISOString().slice(0, 10)}</Text>
                    ): <></>}
                    { thereIsTime ? (
                        <Text style={[styles.end, fonts.italic]}>Lettura: {item.time}'</Text>
                    ) : <></>
                    }
            </View>
            <TouchableWithoutFeedback onPress={OnPressFunction}>
                <View style={[styles.postContainer]}>
                    <Text style={[styles.title, fonts.title]}  >{item.title}</Text>
                    { thereIsSubtitle ?
                    (
                        <View>
                            <Text style={[styles.subtitle, fonts.light]} >{item.subtitle}</Text>
                        </View>)
                    :
                    ( <></>)
                    }
                </View>
            </TouchableWithoutFeedback>
            <View style={[styles.slice, {justifyContent: (thereIsAuthor ? 'space-between' : 'flex-end')}]}>
                {thereIsAuthor ? (
                    <Text style={[styles.end, fonts.italic]}>{item.author}</Text>
                ):
                    <></>
                }

                {saved ?
                    <TouchableWithoutFeedback onPress={() => setSaved(!saved)}>
                        <Ionicons name="bookmark" size={24} color="black" />
                    </TouchableWithoutFeedback>
                :
                    <TouchableWithoutFeedback onPress={() => setSaved(!saved)}>
                        <Ionicons name="bookmark-outline" size={24} color="black" />
                    </TouchableWithoutFeedback>
                }
            </View>
            <View style={styles.line}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    postContainer: {
        // backgroundColor: '#abcdef',
        // borderRadius: 10,
        //#e6ffe6
        //#
        //e1e1e1
        backgroundColor: colors.light,
        marginHorizontal: 20,
    },
    img: {
        height: dim.windowHeight/5,
        justifyContent: "center",
        // width: '100%',
        // height: '100%',
        height: dim.windowHeight / 2,
        // borderBottomLeftRadius: 20,
        // borderBottomRightRadius: 20,
    },
    title: {
        marginTop:7,
        marginBottom: 0,
        textAlign: 'justify',
        
        fontSize: 20,
    },
    
    subtitle: {
        marginTop: 6,
        marginBottom: 5,
        textAlign: 'justify',
        
        fontSize: 18,
    },
    
    text: {
        marginVertical: 5,
        textAlign: 'justify',
    },
    line: {
        borderTopColor: 'black',
        borderTopWidth: 1,
        marginHorizontal: 20,
    },
    slice: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    end : {
    },
    
});

// import styled from 'styled-components/native';
// const BookView = styled.ScrollView`
//     padding: 10px;
// `;
// readButton: {
    //     margin: 10,
    //     backgroundColor: '#c6e9f9',
    //     borderColor: '#4169e1',
    //     borderWidth: windowHeight/200,
    //     textAlign: 'center',
    //     textAlignVertical: 'center',
    // },