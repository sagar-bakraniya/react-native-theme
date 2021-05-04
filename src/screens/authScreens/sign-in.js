import React from "react";
import { StyleSheet, View, Text, TextInput } from 'react-native';

import LButton from "../../components/gradient-button";
import CountryPickerModal from '../../components/country-picker';

const SignIn = ({navigation}) => {
    return (
        <>
            <View style={[styles.flex, styles.container]}>
                <View style={[styles.flex - 0.8, { height: '10%' } , styles.alignItemsCenter]}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                        Enter Your Phone Number !
                    </Text>
                </View>
                <View style={{ flex: 0.3 , height: '90%' , flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 0.3, height: 60, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 5, borderRadius: 10 }}>
                        <CountryPickerModal />
                        <TextInput value={'+91'} />
                    </View>
                    <View style={{
                        flex: 0.9,
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        marginLeft: 10,
                        padding: 5,
                        height: 60,
                        borderRadius: 10,
                        
                    }}>
                        <View>
                            <TextInput value={''} keyboardType={'number-pad'} />
                        </View>
                    </View>
                </View>
                <View style={{flex: 1,alignItems:'center',paddingVertical: 13}}>
                    <Text style={{lineHeight: 19}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.
                    </Text>
                </View>
                <View style={{flex: 1,justifyContent:'flex-end'}}>
                <LButton text='next' click={() => navigation.navigate('verify-otp')} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    flex: {
        flex: 1,
        // backgroundColor: 'tras'
    },
    alignItemsCenter: {
        alignItems: 'center'
    }
});

export default SignIn;