import React from 'react';
import { Text, ScrollView, View, StyleSheet, Image} from 'react-native';
import Button from '../../assets/general/Button';
import { dim, colors } from '../../style/styles';

export function Inside ({route, navigation}) {
    const { element } = route.params;

    const thereIsAPhoto = !!(element.img) ? true : false;
    const thereIsText = !!(element.text) ? true : false;
    // const thereIsSubtitle = !!(element.subtitle) ? true : false;
    
    const OnPressFunction = () => {
        navigation.goBack();
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{element.name}</Text>
            { thereIsAPhoto ?
                <View>
                    <Image style={styles.img} source={{uri: element.img}} />
                </View>
                :
                <></>
            }
            
            {/* <Image style={styles.img} source={{uri: argument.img}}/>  */}
            {thereIsText ?
                <View>
                    <Text style={styles.txt}>{element.text}</Text>
                </View>
            :
                <></>
            }

            <Button title="back" color={colors.dark} onPress={OnPressFunction}> BACK</Button>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
    },
    
    title: {
        margin: 15,
        textAlign: 'justify',
        
        fontSize: 20,
    },

    txt: {
        marginTop: 20,
        backgroundColor: colors.light,
        color: colors.dark,
        textAlign: 'justify',
        fontSize: 16,


    },

    img: {
        height: dim.windowHeight / 3,
    },
    
});