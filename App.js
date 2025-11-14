import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import FotoPerfil from './componentes/Fotoperfil';
import Titulo from './componentes/Titulo';
import Saudacao from './componentes/Saudacao';
import CartaoUsuario from './componentes/CartaoUsuario';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Titulo texto="Minha Rede de Contatos" />
      <Saudacao nome="Nicole" />
      <FotoPerfil />

      <CartaoUsuario
        nome='Nicole '
        descricao='Departamento de TI'
        img='perfil03'
      />

      <CartaoUsuario
        nome='Maria'
        descricao='Analista de Sistemas'
        img='perfil01'
      />

      <CartaoUsuario
        nome='Ana'
        descricao='Programação Mobile'
        img='perfil02'
      />

      <CartaoUsuario
        nome='Laura'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Lara'
        descricao='Professora'
        img='perfil05'
      />

      <CartaoUsuario
        nome='Izadora'
        descricao='Professora'
        img='perfil06'
      />

      <CartaoUsuario
        nome='Bruno'
        descricao='Professora'
        img='perfil07'
      />

      <CartaoUsuario
        nome='Emanuelly'
        descricao='Professora'
        img='perfil08'
      />

      <CartaoUsuario
        nome='Natalia'
        descricao='Professora'
        img='perfil09'
      />

      <CartaoUsuario
        nome='Mariele'
        descricao='Professora'
        img='perfil10'
      />

      <CartaoUsuario
        nome='Cauan'
        descricao='Professora'
        img='perfil11'
      />

      <CartaoUsuario
        nome='Pedro'
        descricao='Professora'
        img='perfil12'
      />

      <CartaoUsuario
        nome='João'
        descricao='Professora'
        img='perfil13'
      />

      <CartaoUsuario
        nome='Mariana'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Livia'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Diego'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Camila'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Elisa'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Felipe'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Gabriela'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Henrique'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Isabela'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Karina'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Nicolas'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Olivia'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Sabrina'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Thiago'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Vitoria'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Yasmin'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Bianca'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Eduardo'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Caio'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Fernanda'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Guilherme'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Kauã'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Igor'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Juliana'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Daniela'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Helena'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Rodrigo'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Samara'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Vinicius'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Zoe'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Ursula'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Yago'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Xênia'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Priscilla'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Bianca'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Rafaele'
        descricao='Professora'
        img='perfil04'
      />

      <CartaoUsuario
        nome='Zeca'
        descricao='Professora'
        img='perfil04'
      />
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
