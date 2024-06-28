import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/logo.jpg')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 300,
    marginBottom: 8,
  },
})
