import { StatusBar } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projeto TCC</Text>
      <Text style={styles.subtitle}>Estrutura inicial do aplicativo.</Text>
      <StatusBar barStyle="dark-content" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: '#f8fafc' },
  title: { fontSize: 28, fontWeight: '700', color: '#172033' },
  subtitle: { marginTop: 8, fontSize: 16, color: '#475569' },
})

