import React from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { dim, colors } from '../../style/styles';
import Button from '../../assets/general/Button';

const Back = ({navigation}) => {
    return(
        <TouchableOpacity onPress={ () => {
            navigation.navigate('Macro')
        }}>
            <Button />
        </TouchableOpacity>
    )
};

export function SubArgs ({route, navigation}) {
    const { item } = route.params;
    const DATA = [];
    item.data.forEach((element, id) => {
        DATA.push({id: id, element: element});
    });

    return (
        <SafeAreaView  style={styles.container}>        
            <FlatList
                ListHeaderComponent={
                    <View style={styles.header}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                }
                data={DATA}
                keyExtractor={({ id }) => id.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator}></View>}
                renderItem={
                    ({ item }) =>
                        <TouchableOpacity  style={styles.item} onPress={() => {
                            navigation.navigate('Inside', {element: item.element});
                        }}>
                            <Text style={styles.itemTxt}>
                                {item.element.name}
                            </Text>
                        </TouchableOpacity>
                }
                ListFooterComponent={
                    <Back navigation={navigation}/>
                }  
            />
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
    },
    
    header: {
        height: dim.windowHeight / 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',  
    },

    item: {
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: colors.dark,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#ffffff',
    },

    back: {
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: colors.dark,
        borderWidth: 1,
        borderRadius: 20,
        textShadowColor: colors.dark,
    },

    title: {
        fontSize: 24,
    },

    itemTxt: {
        fontSize: 20,
    },

    backFirst: {
        backgroundColor: colors.light,
        height: dim.windowHeight/20,
        borderBottomWidth: 0.7,
    },

});


{/* <TouchableOpacity style={styles.backFirst} onPress={OnPressFunction}>
    <EvilIcons name="chevron-left" size={dim.windowHeight/20} />
</TouchableOpacity> */}
{/* stickyHeaderIndices={[0]} */}
