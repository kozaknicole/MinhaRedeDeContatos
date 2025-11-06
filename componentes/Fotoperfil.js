import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function FotoPerfil({ foto }) {
  return <Image source={{ uri: foto }} style={styles.img} />;
}

const styles = StyleSheet.create({
  img: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 12,
  },
});
