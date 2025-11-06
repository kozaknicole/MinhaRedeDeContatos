import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Titulo from './components/Titulo';
import Saudacao from './components/Saudacao';
import CartaoUsuario from './components/CartaoUsuario';
import contatos from './data/contatos';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Titulo />
      <Saudacao nome="Nicole" />

      <View style={styles.lista}>
        {contatos.map((item) => (
          <CartaoUsuario
            key={item.id}
            nome={item.nome}
            descricao={item.descricao}
            foto={item.foto}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
  },
  lista: {
    padding: 12,
  },
});
