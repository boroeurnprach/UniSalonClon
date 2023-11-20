import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React, { Component } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/Entypo';
import { Image, Dimensions } from 'react-native';
import Card from '../../../../Card';
import Card2 from '../../../../Card2';
import { MaterialIcons } from '@expo/vector-icons';
const ShopScreen = () => {
    return (

        <View>
            <View style={{ backgroundColor: '#144389', height: 80, justifyContent: 'center', paddingTop: 20, }}>
                <View style={{
                    position: 'absolute',
                    left: 10,
                    paddingTop: 20,
                }}>
                    <MaterialIcons name="menu" size={30} color="white" />
                </View>
                <View style={{ width: Dimensions.get('window').width }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, }}>Shop</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>


                {/* <View style={styles.cardView}>
                <View style={styles.inputView}>

                <TextInput
                    style={styles.inputText}
                    placeholder="Search Salon"
                    placeholderTextColor="#003f5c"
                />
                </View>
            </View> */}

                <View style={{
                    marginTop: 10,
                    backgroundColor: 'white',
                    width: '90%',
                    height: 60,
                    alignSelf: 'center',
                    borderRadius: 5,
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    justifyContent: 'center',



                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 12 }}>
                        <MaterialIcon name="search" size={25} color='grey' />
                        <TextInput placeholder="Salon search..." />
                    </View>

                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center', padding: 10 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />

                </View>
                <View style={{ margin: 10, paddingBottom: 70 }}>
                    <View><Text style={{ color: '#144389', fontWeight: 'bold', marginBottom: 20 }}>Recommend Salons</Text></View>
                    {/* Card */}

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Card imageSource={require('./android/app/src/assets/lambo_car.jpg')} location="None" customerCount={27} userName="មែន ស្ដាយ" />

                        </View>
                    </ScrollView>
                    {/* Card */}
                    <Text style={{ color: '#144389', fontWeight: 'bold', marginBottom: 20 }}>More Salon</Text>
                    {/* more collumn card */}

                    <Card2 shopName="ស្រស់ស្អាត" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/lambo_car.jpg')} location="Svay Rieng" rate="⭐⭐⭐⭐⭐(4)" status="Opening" />
                    <Card2 shopName="មែន ស្ដាយ" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/barber.png')} location="Banan" rate="⭐⭐⭐⭐⭐(4)" status="Opening" />
                    <Card2 shopName="Mr. Mey" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/lambo_car.jpg')} location="Takeo" rate="⭐⭐⭐⭐⭐(4)" status="Opening" />
                    <Card2 shopName="Mr. Mey" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/lambo_car.jpg')} location="Banan" rate="⭐⭐⭐⭐⭐(4)" status="Closing" />
                    <Card2 shopName="Mr. Mey" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/lambo_car.jpg')} location="Banan" rate="⭐⭐⭐⭐⭐(8)" status="Opening" />
                    <Card2 shopName="Mr. Mey" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/barber.png')} location="Banan" rate="⭐⭐⭐⭐⭐(4)" status="Opening" />
                    <Card2 shopName="Mr. Diya" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/lambo_car.jpg')} location="Prey Veng" rate="⭐⭐⭐⭐⭐(4)" status="Opening" />
                    <Card2 shopName="Mr. Oudom" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/barber.png')} location="Phnom Penh" rate="⭐⭐⭐⭐⭐(4)" status="Opening" />
                    <Card2 shopName="Mr. Mey" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/lambo_car.jpg')} location="Banan" rate="⭐⭐⭐⭐⭐(4)" status="Opening" />
                    <Card2 shopName="Mr. Mey" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/lambo_car.jpg')} location="Banan" rate="⭐⭐⭐⭐⭐(4)" status="Opening" />

                </View>
            </ScrollView>
        </View>

    )
}

export default ShopScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        backgroundColor: '#144389',
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        // marginRight: '50%',
        // justifyContent: 'center',


    },
    icon: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textShop: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    searchInput: {
        height: 30,
        paddingLeft: 10,
    },
    iconsearchLangNotify: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginLeft: '35%',
        justifyContent: 'space-between',
    },
    inputText: {
        height: 50,
        color: 'black',

    },
    inputView: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 50,
        marginBottom: 20,
        alignItems: 'center',
    },
    cardView: {
        alignSelf: 'center'
    }
})