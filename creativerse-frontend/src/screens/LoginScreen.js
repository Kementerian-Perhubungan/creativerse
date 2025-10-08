import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CreatiVerse</Text>
      <Text style={styles.subtitle}>Wellcome!</Text>
      <Text style={styles.desc}>Login to your Account</Text>

      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername}/>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail}/>
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword}/>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Don’t have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>Sign up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4e1d2', padding: 30, justifyContent: 'center' },
  title: { fontSize: 30, textAlign: 'center', fontWeight: '600', color: '#6e4d3e', marginBottom: 20 },
  subtitle: { fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
  desc: { fontSize: 14, textAlign: 'center', marginBottom: 20 },
  input: {
    backgroundColor: '#f7ede2',
    padding: 12,
    borderRadius: 20,
    marginVertical: 6,
  },
  button: {
    backgroundColor: '#c7a17a',
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  footer: { textAlign: 'center', marginTop: 20, color: '#6e4d3e' },
  link: { color: '#0084ff' },
});
