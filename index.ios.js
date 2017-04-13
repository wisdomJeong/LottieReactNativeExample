import React, { Component } from 'react';
import {
  AppRegistry,
  Animated,
  View
} from 'react-native';
import Animation from 'lottie-react-native';

export default class LottieProject extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View>
        <Animation
          ref={animation => { this.animation = animation; }}
          style={{
            width: '100%',
            height: '100%',
          }}
          source={require('./animations/LottieLogo1.json')}
        />
      </View>
    );
  }
}


AppRegistry.registerComponent('LottieProject', () => LottieProject);
