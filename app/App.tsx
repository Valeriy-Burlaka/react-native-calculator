import { registerRootComponent } from 'expo';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Banner from 'components/Banner';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Banner />
    </View>
  );
}

export default registerRootComponent(App);
