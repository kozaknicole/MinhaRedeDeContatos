import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Titulo from './componentes/Titulo';
import Saudacao from './componentes/Saudacao';
import CartaoUsuario from './componentes/CartaoUsuario';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Titulo texto="Minha Rede de Contatos" />
      <Saudacao nome="Nicole"/>

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
