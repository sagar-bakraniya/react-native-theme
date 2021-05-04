import React from 'react';
import { StyleSheet, View, Button, Text, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
const SuggetionCard = (props) => {

    const image = props.image
        ? { uri: props.image }
        : require('../assets/alexandru-zdrobau-BGz8vO3pK8k-unsplash.jpg');


    return (
        <>
            <View style={{
                height: 150,
                width: 110
            }}>
                <ImageBackground source={image} style={{
                    borderRadius: 13,
                    height: 150
                }}
                    imageStyle={{
                        borderRadius: 13
                    }}
                >
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        padding: 13
                    }}>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Icon color={'white'} size={20} style={{
                                fontWeight: 'bold'
                            }} name={'star-outline'} />
                        </View>
                        <View>

                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold'
                            }}>
                                Sandra
                            </Text>
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold'
                            }}>
                                Haythernyte
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </>
    );
}
const styles = StyleSheet.create({

});

export default SuggetionCard;