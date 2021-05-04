import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LButton from "../../components/gradient-button";
import { LinearTextGradient } from "react-native-text-gradient";

const ForgotPassword = ({ navigation}) => {
    return (
        <>
            <View style={[
                styles.container
            ]}>
                <View style={[{
                    alignItems: 'center',
                    paddingTop: 20,
                }]}>
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 100 / 2
                        }}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <LinearTextGradient
                        style={{ fontWeight: 'bold', fontSize: 24 }}
                        locations={[0, 1]}
                        colors={['#ec896c', '#e04388']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text>React Native</Text>
                    </LinearTextGradient>
                    <LinearTextGradient
                        style={{ fontWeight: 'bold', fontSize: 24 }}
                        locations={[0, 1]}
                        colors={['#ec896c', '#e04388']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={{ fontSize: 24, fontWeight: 'bold', }}>
                            Learn once, write anywhere
                        </Text>
                    </LinearTextGradient>
                    <Text style={{ fontSize: 26, fontWeight: 'bold', marginTop: 8 }}>
                        Forgot Password ?
                        </Text>
                    <View style={{ alignItems: 'center', justifyContent: 'center' , paddingHorizontal: 80 }}>

                        <Text style={{ fontSize: 20, fontWeight: '100', marginTop: 8, textAlign:'center'}}>
                            Enter your email address to reset password.
                        </Text>
                    </View>
                </View>


                <View style={{
                    padding: 20,
                    flex: 1
                }}>
                    <View style={{ marginVertical: 10 }}>
                        <Icon style={{ position: 'absolute', top: 13, left: 13 }} name={'mail-outline'} size={20} />
                        <TextInput value={'E-Mail'} style={{ borderBottomWidth: 1, paddingLeft: 50 }} />
                    </View>

                    <View style={{
                        marginVertical: 20
                    }}>
                        <LButton text='submit' />
                    </View>
                    <View style={[{
                        alignItems: 'center',
                        marginTop: 10
                    }]}>
                        <Text onPress={() => navigation.navigate('login')}>
                            Already have an account ? Login
                        </Text>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default ForgotPassword;