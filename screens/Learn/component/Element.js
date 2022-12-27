import { StyleSheet, Text, SafeAreaView, View, ImageBackground} from "react-native";
import EvilIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors, dim, fonts } from "../../../style/styles";

export const Element = ({item}) => {
    return(
       <SafeAreaView style={styles.container}>
        {
        (!!item.darkImg && item.darkImg) 
        ?
          <ImageBackground source={{ uri: item.img}} imageStyle={{ borderRadius: 20}} style={(styles.img)}>
            <View style={styles.inbutton}>
              <View style={{backgroundColor: colors.dark}}>
                <Text style={[styles.txt, {color:colors.light}, fonts.title]}>{item.title.toUpperCase()}</Text>
              </View>
              <View style={[styles.arrow, {color:colors.light, backgroundColor: colors.dark }]}>
                <EvilIcons name="chevron-right" size={36*dim.fontScale} color={colors.light}/>
              </View>
            </View>
          </ImageBackground>
        :
          <ImageBackground source={{ uri: item.img}} imageStyle={{ borderRadius: 20}} style={(styles.img)}>
            <View style={styles.inbutton}>
              <View style={{backgroundColor: colors.light}}>
                <Text style={[styles.txt, {color:colors.dark}, fonts.title]}>{item.title.toUpperCase()}</Text>
              </View>
              <View style={[styles.arrow, {color:colors.dark, backgroundColor: colors.light}]}>
                <EvilIcons name="chevron-right" size={36*dim.fontScale} color={colors.dark}/>
              </View>
            </View>
          </ImageBackground>
        }
       </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
    container: {
        height: dim.windowHeight/ 7,
        width: dim.windowWidth*0.94,
        marginHorizontal: dim.windowWidth*0.03,
        backgroundColor: '#2e874e',
        fontSize: 24,
        marginVertical: 10,
        borderColor: colors.dark,
        borderWidth: 1,
        borderRadius: 20,
    },
    
    img: {
      width: '100%',
      height: '100%',
    },

    inbutton: {
      marginLeft: 10,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    txt: {
      fontSize: 20*dim.fontScale,
    },

    arrow: {
      // borderLeftWidth: 1,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }
});