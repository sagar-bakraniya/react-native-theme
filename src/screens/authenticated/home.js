import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SuggetionCard from '../../components/suggetion-card';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
const Home = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={[styles.flexRow, styles.bgWhite, {
                    paddingHorizontal: 13,
                    borderRadius: 13
                }]}>
                    <View style={[styles.justifyContentCenter]}>
                        <Icon name="search-outline" size={25} color={'lightgray'} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput value={'Search'} style={{ fontSize: 18, paddingLeft: 18, fontWeight: 'bold' }} />
                    </View>
                    <View style={[styles.justifyContentCenter]}>
                        <Icon name="menu-outline" size={30} color={'lightgray'} />
                    </View>
                </View>
                <View>
                    <View style={[styles.flexRow, {
                        paddingVertical: 13
                    }]}>
                        <View style={{
                            flex: 1,

                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 28
                            }}>What's New ? </Text>
                        </View>
                        <View style={{
                            justifyContent: 'center'
                        }}>
                            <Text style={{ color: 'orange' }}>
                                See All
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                        <View style={{
                            marginRight: 13
                        }}>
                            <SuggetionCard image={'https://images.unsplash.com/photo-1610697160852-8507f0db7b97?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&w=1000&q=80'} />
                        </View>
                        <View style={{
                            marginRight: 13
                        }}>
                            <SuggetionCard image={'https://images.unsplash.com/photo-1608710316761-8e816d904b1c?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8UzRNS0xBc0JCNzR8fGVufDB8fHw%3D&ixlib=rb-1.2.1&w=1000&q=80'} />
                        </View>
                        <View style={{
                            marginRight: 13
                        }}>
                            <SuggetionCard image={'https://images.unsplash.com/photo-1615801363715-4b886c3d91d7?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfFM0TUtMQXNCQjc0fHxlbnwwfHx8&ixlib=rb-1.2.1&w=1000&q=80'} />
                        </View>
                        <View style={{
                            marginRight: 13
                        }}>
                            <SuggetionCard image={'https://images.unsplash.com/photo-1617182398903-8391212a9a5c?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ3fFM0TUtMQXNCQjc0fHxlbnwwfHx8&ixlib=rb-1.2.1&w=1000&q=80'} />
                        </View>
                        <View style={{
                            marginRight: 13
                        }}>
                            <SuggetionCard image={'https://images.unsplash.com/photo-1608562523235-cf3d9d636e4d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDc2fFM0TUtMQXNCQjc0fHxlbnwwfHx8&ixlib=rb-1.2.1&w=1000&q=80'} />
                        </View>
                    </ScrollView>
                </View>

                <View style={{ marginTop: 13 }}>
                    <Text style={{
                        fontWeight: 'bold',
                        color: 'gray'
                    }}>
                        RECENT FEEDS
                    </Text>
                </View>
                <View style={{
                    marginTop: 13
                }}>

                    <ScrollView>
                        <View>                            </View>
                    </ScrollView>

                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    searchInput: {
        borderWidth: 1,
        borderRadius: 32,
        backgroundColor: 'white'
    },
    justifyContentCenter: {
        justifyContent: 'center'
    },
    bgWhite: {
        backgroundColor: 'white'
    }
});


export default Home;