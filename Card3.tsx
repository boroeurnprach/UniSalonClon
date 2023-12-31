import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const Card3 = ({ image, description, date }) => {
    const [fontsLoaded] = useFonts({
        'KantumruyPro': require('./assets/fonts/KantumruyPro-VariableFont_wght.ttf'),
        'Suwannaphum-Regular': require('./assets/fonts/Suwannaphum-Regular.ttf'),
    });
    return (
        <View style={{ height: 80, width: '95%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 4, flexDirection: 'row', marginBottom: 3, marginTop: 3, elevation: 3 }}>
            <Image style={{ width: '50%', height: '100%', borderRadius: 2 }} source={image} />
            <View style={{ flex: 1, marginLeft: 6, marginRight: 4, justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 11, fontFamily: 'Suwannaphum-Regular' }}>
                    {description}
                </Text>
                <Text style={{ fontSize: 10, color: 'grey' }}>
                    {date}
                </Text>
            </View>

        </View>
    )
}

export default Card3
