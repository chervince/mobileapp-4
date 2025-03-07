import React from 'react';
import { StyleSheet } from 'react-native'; // ✅ Import manquant
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
