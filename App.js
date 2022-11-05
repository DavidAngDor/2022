import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'
import { Button } from 'react-native-web';
//hooks do React

export default function App() {
  const [contador, setContador] = useState(0)
  const incrementar = () => {
    setContador(contador + 1)
  }
  return (
    <View style={styles.container}>
      <Text>{contador}</Text>
      <Button
        title='Incrementar'
        onPress={incrementar}
      />
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
