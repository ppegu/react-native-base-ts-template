import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TransparentView } from './Theme';

const Loading = ({ loading }: { loading: Boolean }) => {
  if (!loading) return null;

  return (
    <TransparentView style={styles.container}>
      <AnimatedLottieView
        source={require('src/assets/lottie/loading.json')}
        loop
        autoPlay
        resizeMode="contain"
      />
    </TransparentView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 2,
  },
});

export default Loading;
