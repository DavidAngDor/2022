import { StyleSheet, TextInput, View, Button } from 'react-native';
import { useState } from 'react'

//hooks do React

export default function App() {
  const [lembrete, setLembrete] = useState('')
  const capturarTexto = (lembreteDigitado) => {
    setLembrete(lembreteDigitado)
  }
  const adicionarLembrete = () => {
    console.log("Adicionando...", lembrete)
    setLembrete('')
  }
  //Single Source of Truth
  return (
    <View style={{padding: 40}}>
      <View>
        <TextInput gti
          style={{borderBottomColor: '#CCC', borderBottomWidth: 2, padding: 12, marginBottom: 4}}
          placeholder="Lembrar..."
          onChangeText={capturarTexto}
          value={lembrete}
        />
        <Button 
          title="OK"
          onPress={adicionarLembrete}
        />
      </View>
      <View>

      </View>
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
