import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    SafeAreaView
} from 'react-native';

const LoginScreen = () => {
    const onPressLogin = () => {
        // Do something about the login operation
    };

    const onPressForgotPassword = () => {
        // Do something about the forgot password operation
    };

    const [state, setState] = useState({
        number: '',
        password: '',
    });


    return (
        <SafeAreaView style={{ backgroundColor: '#fff11', justifyContent: 'center', alignItems: 'center', height: '100%', }}>

            <Image source={require('../assets/unisalon_logo.png')} />
            <TextInput
                style={{
                    width: '90%',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    height: 50,
                    marginBottom: 20,
                    alignItems: 'center',
                }}
                placeholder="Enter your number"
                placeholderTextColor="#003f5c"
                onChangeText={(text) => setState({ ...state, number: text })}
            />
            <View style={{
                width: '90%',
                backgroundColor: 'white', borderRadius: 10,
                height: 50,
                marginBottom: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <TextInput
                    secureTextEntry
                    placeholder="Enter your password"
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setState({ ...state, password: text })}
                />
                {/* <Text>

                    <Icon name="eye" size={30} />;
                </Text> */}

            </View>
            <TouchableOpacity onPress={onPressLogin} style={{
                width: '90%',
                backgroundColor: '#134286',
                borderRadius: 10,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
                marginBottom: 40,

            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 14,
                }}>ចូល</Text>
            </TouchableOpacity>
            <Text style={{ marginBottom: 30, color: 'white' }}>Forgot password?</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '10%', marginRight: '10%' }}>

                <View style={{ backgroundColor: 'white', height: 40, flexDirection: 'row', margin: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                    <Image style={{ width: 30, height: 30 }} source={require('../assets/google_logo.png')} />
                    <Text style={{ padding: 10 }}>Login with Google</Text>
                </View>
                <View style={{ backgroundColor: 'white', flexDirection: 'row', height: 40, margin: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                    <Image style={{ width: 30, height: 30 }} source={require('../assets/facebook_logo.png')} />
                    <Text style={{ padding: 10 }}>Login with Faceboook</Text>
                </View>
            </View>
        </SafeAreaView>

    );
};





export default LoginScreen;