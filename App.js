import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

function Perfil() {
  return (
    <View style={styles.container}>
      <View style={styles.perfil}>
        <Image source={{ uri: "http://pm1.narvii.com/8015/95d0087ba368755e967d0a1f8c6b61a7dd563debr1-883-826v2_00.jpg" }} style={styles.avatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Robert Rodrigues de Souza</Text>
          <Text style={styles.bio}>Estudante de Sistemas para Internet na Universidade Católica de Pernambuco</Text>
          <Text style={styles.location}>Brasil, PE</Text>
          <TouchableOpacity onPress={() => Linking.openURL("https://github.com/Robert-Rodrigues")}>
            <Text style={styles.website}>https://github.com/Robert-Rodrigues</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imgfeed}>
      <Image source={{ uri: "https://pbs.twimg.com/media/FEaqEprVgAA11em?format=png&name=900x900" }} style={styles.imgfeed} />
      </View>
      <View style={styles.imgfeed}>
      <Image source={{ uri: "https://pbs.twimg.com/media/FEaqEprVgAA11em?format=png&name=900x900" }} style={styles.imgfeed} />
      </View>
      <View style={styles.imgfeed}>
      <Image source={{ uri: "https://pbs.twimg.com/media/FEaqEprVgAA11em?format=png&name=900x900" }} style={styles.imgfeed} />
        </View>
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
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 120,
    marginRight: 20,
    marginLeft:-40,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 14,
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    marginBottom: 5,
  },
  website: {
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
  }
});

export default Perfil;