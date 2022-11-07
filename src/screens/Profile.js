import React, { useRef, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Animated,
  PanResponder,
  StyleSheet
} from 'react-native';
import { useState } from 'react/cjs/react.production.min';
export const Profile = () => {
  useState
    const progress = useRef(new Animated.Value(0.5)).current;
    const scale = useRef(new Animated.Value(1)).current;
    useEffect(() => {
        Animated.loop(
          Animated.parallel([
            Animated.sequence([
              Animated.spring(progress, { toValue: 1, useNativeDriver: true }),
              Animated.spring(progress, { toValue: 0.5, useNativeDriver: true }),
            ]),
            Animated.sequence([
              Animated.spring(scale, { toValue: 2, useNativeDriver: true }),
              Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
            ]),
          ]),
          { iterations: 3 }
        ).start();
      }, []);
    return (
        // <SafeAreaView>
            <View style={styles.container}>
              <Animated.View
              style={[
                styles.square,
                {
                  borderRadius: progress.interpolate({
                    inputRange: [0.5, 1],
                    outputRange: [SIZE / 4, SIZE / 2],
                  }),
                  opacity: progress,
                  transform: [
                    { scale },
                    {
                      rotate: progress.interpolate(
                        {
                          inputRange: [0.5, 1],
                          outputRange: [`${Math.PI}deg`, `${2 * Math.PI}deg`],
                        }
                      ),
                    },
                  ],
                },
              ]}
            />
          </View>
        // </SafeAreaView>
    )
}

const SIZE = 100.0;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    square: {
      width: SIZE,
      height: SIZE,
      backgroundColor: 'rgba(0,0,256,0.5)',
    },
  });