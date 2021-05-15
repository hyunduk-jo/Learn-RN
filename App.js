import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false)
  const preload = () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map(font => Font.loadAsync(font));
    const imagesToLoad = ["https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png"]
    const imagePromises = imagesToLoad.map(image => Asset.loadAsync(image))
    return Promise.all([...fontPromises, ...imagePromises]);
  }
  if (loading) {
    return <AppLoading startAsync={preload} onFinish={onFinish} onError={console.warn} />
  }
  return (
    <View style={styles.container}>
      <Text>Ho~~</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
