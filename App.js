import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView >
      <View style={styles.container}>
      <Image source = {require('./assets/sponge.png')} />
      <Text>Spongebob Squarepants</Text>
      <Text>0000001</Text>
      <Image source = {require('./assets/Pat.png')} />
      <Text>Patrick Star</Text>
      <Text>0000002</Text>
      <Image source = {require('./assets/Squid.png')} />
      <Text>Squidward Tentacle</Text>
      <Text>0000003</Text>
      <Image source = {require('./assets/Sandy.png')} />
      <Text>Sandy Squirell</Text>
      <Text>0000004</Text>
      <Image source = {require('./assets/Crab.png')} />
      <Text>Eugine Crab</Text>
      <Text>0000005</Text>
      <Image source = {require('./assets/Plank.png')} />
      <Text></Text>
      <StatusBar style="auto" />
      </View>
    </ScrollView>
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
