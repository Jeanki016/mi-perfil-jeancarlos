import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  Alert,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function App() {
  const contactar = () => {
    Alert.alert('Contacto', '¡Gracias por querer contactarme!');
  };

  const verPortafolio = () => {
    Alert.alert('Mi portafolio', 'Próximamente podrás ver mis proyectos.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#EAF2F8" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Image
            source={require('./mi-foto.jpg')}
            style={styles.profileImage}
          />

          <Text style={styles.title}>Jean Carlos Ramos Belén</Text>

          <Text style={styles.subtitle}>
            Estudiante de Licenciatura en Informática
          </Text>

          <Text style={styles.description}>
            Apasionado por la tecnología, el desarrollo de software,
            las redes y la ciberseguridad.
          </Text>

          <Text style={styles.sectionTitle}>Mis habilidades</Text>

          <View style={styles.badgesContainer}>
            <Text style={styles.badge}>JavaScript</Text>
            <Text style={styles.badge}>HTML y CSS</Text>
            <Text style={styles.badge}>Soporte Técnico</Text>
            <Text style={styles.badge}>Redes y CCNA</Text>
          </View>

          <View style={styles.buttonsContainer}>
            <Pressable style={styles.button} onPress={contactar}>
              <Text style={styles.buttonText}>📩 Contáctame</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={verPortafolio}>
              <Text style={styles.buttonText}>🌐 Mi portafolio</Text>
            </Pressable>
          </View>
        </View>

        <Text style={styles.footer}>
          Hecho con ❤️ usando React Native y Expo
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2F8',
    paddingTop: StatusBar.currentHeight || 0,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    width: '90%',
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#2563A6',
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#173F67',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: '#555555',
    marginTop: 12,
    textAlign: 'center',
  },

  description: {
    fontSize: 15,
    color: '#555555',
    textAlign: 'center',
    marginTop: 15,
    lineHeight: 22,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563A6',
    marginTop: 25,
    marginBottom: 12,
    alignSelf: 'flex-start',
  },

  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },

  badge: {
    backgroundColor: '#DCEBFA',
    color: '#173F67',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 'bold',
    overflow: 'hidden',
  },

  buttonsContainer: {
    width: '100%',
    marginTop: 25,
    gap: 12,
  },

  button: {
    backgroundColor: '#173F67',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  footer: {
    marginTop: 20,
    fontSize: 12,
    color: '#777777',
    textAlign: 'center',
  },
});