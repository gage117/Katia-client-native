import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './src/Components/Landing/Landing';

const Stack = createStackNavigator();

export default function App() {
  return (
<<<<<<< HEAD
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Landing' component={Landing} />
      </Stack.Navigator>
    </NavigationContainer>
=======
    <View style={styles.container}>
      <Text>Jose is kewl</Text>
    </View>
>>>>>>> 6b7387a9c0dd2c6d5e6e99c9ace1dbbb23f242bc
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