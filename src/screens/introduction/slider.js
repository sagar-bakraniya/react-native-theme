import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Dimensions, Animated, ImageBackground, } from 'react-native';
import { Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons';
const SCREEN_WIDTH = Dimensions.get("window").width;
const xOffset = new Animated.Value(0);


const transitionAnimation = index => {
  return {
    transform: [
      { perspective: 400 },
      {
        opacity: opacity.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: [0, 1, 0]
        })
      }
      // {
      //   rotateX: xOffset.interpolate({
      //     inputRange: [
      //       (index - 1) * SCREEN_WIDTH,
      //       index * SCREEN_WIDTH,
      //       (index + 1) * SCREEN_WIDTH
      //     ],
      //     outputRange: ["45deg", "0deg", "45deg"]
      //   })
      // },
      // {
      //   rotateY: xOffset.interpolate({
      //     inputRange: [
      //       (index - 1) * SCREEN_WIDTH,
      //       index * SCREEN_WIDTH,
      //       (index + 1) * SCREEN_WIDTH
      //     ],
      //     outputRange: ["-45deg", "0deg", "45deg"]
      //   })
      // }
    ]
  };
};

const Slider = ({navigation}) => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <ScrollView snapToInterval={SCREEN_WIDTH} snapToAlignment={"center"} horizontal>
          <View>
            <ImageBackground
              source={require('../../assets/alexandru-zdrobau-BGz8vO3pK8k-unsplash.jpg')}
              style={{ flex: 1 }} >
              <View style={{
                flex: 1, backgroundColor: 'rgba(0,0,0,.1)',
                justifyContent: 'flex-end', paddingVertical: 10, width: SCREEN_WIDTH
              }}>
                <LinearGradient
                  start={{ x: 0.3, y: 0.60 }}
                  end={{ x: 1, y: 1.5 }}
                  //  locations={[0,0.5,1]}
                  colors={['#ec896c', '#e04388']}
                  style={
                    {
                      backgroundColor: 'red',
                      height: '35%', width: '90%',
                      borderTopRightRadius: 30,
                      borderBottomRightRadius: 30
                    }}>
                  <View style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white' }}>
                      React Native
                        </Text>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>
                      Learn once, write anywhere
                        </Text>
                  </View>
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Button
                      icon={'arrow-right'}
                      color={'white'}

                      style={
                        {
                          backgroundColor: 'transparent',
                          height: 60,
                          justifyContent: 'center',
                          width: 30,
                        }}>
                    </Button>

                  </View>
                </LinearGradient>
              </View>
            </ImageBackground>

          </View>
          <View>
            <ImageBackground
              source={require('../../assets/christian-ferrer-8vT-DgHZDG4-unsplash.jpg')}
              style={{ flex: 1, width: SCREEN_WIDTH }} >
              <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.1)', justifyContent: 'flex-end', width: 400 }}>
                <LinearGradient
                  start={{ x: 0.3, y: 0.60 }}
                  end={{ x: 1, y: 1.5 }}
                  //  locations={[0,0.5,1]}
                  colors={['#ec896c', '#e04388']}
                  style={
                    {
                      backgroundColor: 'red',
                      height: '35%',
                    }}>
                  <View style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white' }}>
                      React Native
                        </Text>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>
                      Learn once, write anywhere
                        </Text>
                  </View>
                  <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
                    <Button
                      style={
                        {
                          backgroundColor: 'white',
                          height: 45,
                          borderRadius: 13,
                          justifyContent: 'center',
                        }}>
                      <Text style={{ color: 'black' }}>
                        GET STARTED
                          </Text>
                    </Button>


                  </View>
                  <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>
                      Already have an account ? Login
                          </Text>
                  </View>
                </LinearGradient>
              </View>
            </ImageBackground>
          </View>
          <View style={{ flex: 1, width: SCREEN_WIDTH }}>
            <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 28, fontWeight: 'bold', }}>
                React Native
                        </Text>
              <Text style={{ fontSize: 24, fontWeight: 'bold', }}>
                Learn once, write anywhere
                        </Text>
            </View>
            <View style={{
              alignItems: 'center',
              padding: 20,
              flex: 0.75,
            }}>
              <Image style={{
                height: 400,
                width: '80%',
                borderRadius: 13
              }} source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80' }} />

            </View>
            <View style={{ paddingHorizontal: 30, marginTop: 120 , marginBottom: 20  }}>
              <LinearGradient style={{
                marginTop: 10,
                borderRadius: 13,
                justifyContent: 'center',
                alignItems: 'center',
                height: 45,
                width: null
              }}
                colors={['#ec896c', '#e04388']}
                start={{ x: 0.3, y: 0.60 }}
                end={{ x: 1, y: 1.5 }}
              >
                <Button style={{ width: '110%' }}>
                  <Text style={{ color: 'white' }}>
                    LOG IN WITH FACEBOOK
                  </Text>
                </Button>

              </LinearGradient>
              <Button onPress={() => navigation.navigate('signIn')} style={{ height: 45, justifyContent: 'center', alignItems: 'center', marginTop: 10, backgroundColor: 'white' }}>
                <Text style={{ color: 'black' }}>
                  LOG IN WITH PHONE NUMBER
                  </Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "row",
    backgroundColor: "#00d4ff",
  },
  scrollPage: {
    width: 300,
    padding: 20
  },
  screen: {
    height: 600,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "white"
  },
  text: {
    fontSize: 45,
    fontWeight: "bold"
  }
});

export default Slider;