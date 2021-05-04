import React , { useRef } from 'react';
import { StyleSheet, View, ScrollView, Text, Image, ImageBackground , Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-paper';


const Landing = ({ navigation }) => {
    const [cardColor, setCardColor] = React.useState('red')
     
    return (
        <>
            <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80' }}>
                <LinearGradient  start={{ x: 1.5, y: 0.5 }}
                  end={{ x: 1, y: 1.5 }} style={{ flex: 1, padding: 13, flexDirection: 'column', opacity: 0.9 }}  colors={['#ec896c', '#e04388']} >
                    <View style={{ flex: 2 , justifyContent:'flex-end' , alignItems:'center'  }}>
                        <Text style={{fontSize: 28, fontWeight:'bold',color:'white'}}>
                            React Native
                        </Text>
                        <Text style={{fontSize: 24, fontWeight:'bold',color:'white'}}>
                        Learn once, write anywhere
                        </Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Button onPress={() => navigation.navigate('slider')} style={{ backgroundColor: 'white', height: 50, justifyContent: 'center', width: null }}>
                            <Text style={{color:'black'}}>Get Started </Text>
                        </Button>

                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',marginVertical: 13}}>
                        <Text style={{color:'white'}}>
                            Already have and account ? Login
                        </Text>
                    </View>

                    {/*             
             <View style={{ flex: 1, padding: 13, flexDirection: 'column' }}>
                <View style={{ backgroundColor: cardColor, height: 250, width: null, borderRadius: 13, padding: 13 }}>
                    <View style={{flex: 1}}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Image
                                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                                    style={{ width: 75, height: 75, borderRadius: 100 / 2 }}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: 'white' }}>
                                    Mobile : +91 9903345561
                            </Text>
                                <Text style={{ color: 'white', fontSize: 11 }}>
                                    Address: Khodiyar color - 6 , near crystal mall , jamnagar - 361004
                            </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', flex: 0.3, justifyContent:'center',alignItems:'center' , backgroundColor:'rgba(0,0,0,0.5)',borderRadius: 10}}>
                                <View >
                                    <Text style={{color:'white',fontWeight:'bold',}}>
                                            www.jamnagar.com
                                    </Text>
                                </View>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 0.5, marginVertical: 13 }}>
                    <ScrollView horizontal>
                        {
                            ['red', 'green', 'yellow', 'black'].map(x => <View onTouchEnd={() => setCardColor(x)} style={{
                                display: 'flex',
                                justifyContent: 'center',
                                backgroundColor: x,
                                height: 100,
                                width: 150,
                                borderRadius: 13,
                                marginRight: 13
                            }}>
                            </View>)
                        }

                    </ScrollView>

                </View>
                <View style={{ flex: 1 }}>
                    <ScrollView >
                        <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            {
                                ['red', 'green', 'yellow', 'black', 'green', 'yellow', 'yellow', 'black', 'green'].map(x => <View onTouchEnd={() => setCardColor(x)} style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    backgroundColor: x,
                                    height: 100,
                                    width: 110,
                                    borderRadius: 13,
                                    margin: 5
                                }}>
                                </View>)
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>   */}
                </LinearGradient>
            </ImageBackground>
        </>
    );
}
const styles = StyleSheet.create({
    flex: {
        flex: 1,
        display: 'flex'
    }
});

export default Landing;