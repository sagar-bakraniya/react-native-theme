import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ForgotPassword from '../screens/authScreens/forgot-password';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Register from '../screens/authScreens/register';
import LinearGradient from 'react-native-linear-gradient';
import Home from '../screens/authenticated/home';

const TabNavigator = createBottomTabNavigator();

import { View, Text, TouchableOpacity } from 'react-native';

const Icon = (route) => {
    let IconName = '';
    switch (route) {
        case 'Home':
            IconName = 'home-outline'
            break;
        case 'chat':
            IconName = 'chatbubble-outline'
            break;
        case 'fav':
            IconName = 'star-outline'
            break;
        case 'profile':
            IconName = 'person-outline'
            break;
        default:
            break;
    }
    return <Ionicons name={IconName} size={30} color='#FFF' />
};

function MyTabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }


    return (
        <LinearGradient style={{
            marginTop: 10,
            height: 70,
            width: null,
            borderTopLeftRadius: 13,
            borderTopRightRadius: 13
        }}
        key={Math.random()* new Date().getMilliseconds()}
            colors={['#ec896c', '#e04388']}
            start={{ x: 0.3, y: 0.60 }}
            end={{ x: 1, y: 1.5 }}
        >
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 1,
                paddingHorizontal: 13,
            }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    if (label === 'explore') {
                        return (
                            <LinearGradient style={{
                                marginTop: 10,
                                width: 75,
                                 
                                height: 75,
                                borderRadius: 100 / 2,
                                marginBottom: 50,
                                borderWidth: 5,
                                borderColor: '#FFF'
                            }}
                                colors={['#ec896c', '#e04388']}
                                start={{ x: 0.3, y: 0.60 }}
                                end={{ x: 1, y: 1.5 }}
                            >
                                <View style={{
                                    justifyContent:'center',
                                    alignItems:'center',
                                    height:'100%',
                                    width:'100%'
                                }}>
                                    <Ionicons name={'copy-outline'} size={30} color={'#FFF'}/>
                                </View>
                            </LinearGradient>
                        );
                    }
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                             
                        >
                            {Icon(label)}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </LinearGradient>

    );
}

 
const Tabs = () => {
    return (

        <TabNavigator.Navigator tabBar={props => <MyTabBar {...props} />}>
            <TabNavigator.Screen   name={'Home'} component={Home} />
            <TabNavigator.Screen  name={'chat'} component={Register} />
            <TabNavigator.Screen  name={'explore'} component={Register} />
            <TabNavigator.Screen  name={'fav'} component={Register} />
            <TabNavigator.Screen   name={'profile'} component={Register} />
            {/* <TabNavigator.Screen name={'e'} component={ForgotPassword} /> */}
        </TabNavigator.Navigator>
    );
}

export default Tabs;