import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TextInput } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.location}>📍 Jakarta Selatan, Indo</Text>
      </View>

      <TextInput placeholder="Search for your choice" style={styles.search} />

      <View style={styles.banner}>
        <Text style={styles.bannerText}>Check Out New Collection</Text>
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categories}>
        <Text style={styles.category}>🎨 Art</Text>
        <Text style={styles.category}>📸 Photography</Text>
        <Text style={styles.category}>🖼️ Exhibition</Text>
      </View>

      <Text style={styles.sectionTitle}>New</Text>
      <View style={styles.gallery}>
        <Image source={require('../../assets/images/art1.png')} style={styles.image}/>
        <Image source={require('../../assets/images/art1.png')} style={styles.image}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1 },
  header: { padding: 20 },
  location: { color: '#7b5e50' },
  search: {
    backgroundColor: '#f5ede3',
    margin: 20,
    borderRadius: 20,
    padding: 12,
  },
  banner: {
    backgroundColor: '#e5cdb5',
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  bannerText: { color: '#4e3a2e', fontWeight: '600' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginHorizontal: 20, marginTop: 20 },
  categories: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
  category: { backgroundColor: '#f4e1d2', padding: 10, borderRadius: 15 },
  gallery: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
  image: { width: 150, height: 150, borderRadius: 10 },
});
