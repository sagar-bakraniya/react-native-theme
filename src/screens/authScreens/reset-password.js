import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LButton from "../../components/gradient-button";
import { LinearTextGradient } from "react-native-text-gradient";

const ResetPassword = ({ navigation}) => {
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
                        Reset Password 
                        </Text>
                </View>


                <View style={{
                    padding: 20,
                    flex: 1
                }}>
                    <View style={{ marginVertical: 10 }}>
                        <TextInput value={'New Password'} style={{ borderBottomWidth: 1 }} />
                        <Icon style={{ position: 'absolute', top: 13, right: 13 }} name={'eye-off-outline'} size={20} />
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <TextInput value={'Confirm Password'} style={{ borderBottomWidth: 1 }} />
                        <Icon style={{ position: 'absolute', top: 13, right: 13 }} name={'eye-off-outline'} size={20} />
                    </View>
                    <View style={{
                        marginVertical: 20
                    }}>
                        <LButton text='Reset' />
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

export default ResetPassword;