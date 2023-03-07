import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';

function Perfil() {
  const [text1, text2, text3, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.perfil}>
        <Image source={{ uri: "http://pm1.narvii.com/8015/95d0087ba368755e967d0a1f8c6b61a7dd563debr1-883-826v2_00.jpg" }} style={styles.foto} />
        <View style={styles.InfPerfil}>
          <Text style={styles.nome}>Robert Rodrigues de Souza</Text>
          <Text style={styles.bio}>Estudante de Sistemas para Internet na Universidade Católica de Pernambuco 😊</Text>
          <Text style={styles.location}>Pernambuco, Brasil 🇧🇷</Text>
          <TouchableOpacity onPress={() => Linking.openURL("https://github.com/Robert-Rodrigues")}>
            <Text style={styles.site}>https://github.com/Robert-Rodrigues</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
      <View style={styles.imgfeed}>
      <Image source={{ uri: "https://pbs.twimg.com/media/FEaqEprVgAA11em?format=png&name=900x900" }} style={styles.imgfeed} />
      </View>
      <Text style={styles.description}>Arcane Jinx</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text1}
        placeholder="Digite um comentário"
      />
      <View style={styles.imgfeed}>
      <Image source={{ uri: "https://i.pinimg.com/736x/83/ed/b7/83edb732b76042244ffdc3bcf8b33a37.jpg" }} style={styles.imgfeed} />
      </View>
      <Text style={styles.description}>Arcane VI</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text2}
        placeholder="Digite um comentário"
      />
      <View style={styles.imgfeed}>
      <Image source={{ uri: "https://static.wikia.nocookie.net/leagueoflegends/images/8/87/Ekko_Arcane_3_Render.png/revision/latest?cb=20220228021511" }} style={styles.imgfeed} />
        </View>
        <Text style={styles.description}>Arcane Ekko</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text3}
        placeholder="Digite um comentário"
      />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  perfil: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 50,
  },
  foto: {
    width: 180,
    height: 180,
    borderRadius: 120,
    marginRight: 20,
    marginLeft:-40,
  },
  InfPerfil: {
    flex: 1,
  },
  nome: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 14,
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  location: {
    fontSize: 14,
    marginBottom: 5,
  },
  site: {
    fontSize: 14,
    color: '#007AFF',
    marginBottom: 5,
  },
  imgfeed: {
    width: 350,
    height: 350,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginLeft: 20,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 350,
    margin: 30,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
  },
});

export default Perfil;