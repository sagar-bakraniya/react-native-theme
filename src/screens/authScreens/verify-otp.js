import React from "react";
import { StyleSheet, View, Text, TextInput } from 'react-native';

import LButton from "../../components/gradient-button";
import CountryPickerModal from '../../components/country-picker';

const VerifyOtp = () => {
    return (
        <>
            <View style={[styles.flex, styles.container]}>
                <View style={[styles.alignItemsCenter ], { flex: 0.1 , justifyContent:'center' , alignItems:'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                        Enter Your Code !
                    </Text>
                </View>
                <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginEnd: 10, flex: 0.3, height: 60, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 5, borderRadius: 10 }}>
                        <TextInput value={''} />
                    </View>
                    <View style={{ marginEnd: 10, flex: 0.3, height: 60, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 5, borderRadius: 10 }}>
                        <TextInput value={''} />
                    </View>
                    <View style={{ marginEnd: 10, flex: 0.3, height: 60, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 5, borderRadius: 10 }}>
                        <TextInput value={''} />
                    </View>
                    <View style={{ marginEnd: 10, flex: 0.3, height: 60, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 5, borderRadius: 10 }}>
                        <TextInput value={''} />
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View>
                        <LButton text='CONTINUE' click={() => console.log('log')} />
                    </View>
                    <View style={{ alignItems: 'center', marginVertical: 10 }}>
                        <Text>
                            I didn't receive a code
                    </Text>
                    </View>
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

export default VerifyOtp;