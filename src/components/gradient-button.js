import React from "react";
import { View  , Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-paper';


const LButton = (props) => {
    return (
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
            <Button onPress={props.click} style={{ width: '110%' }}>
              <Text style={{ color: 'white' }}>
              {props.text}
              </Text>
            </Button>
          </LinearGradient>
    );
}

export default LButton;