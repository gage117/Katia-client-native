import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


export default function Landing() {
    

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Katia</Text>
            <View style={styles.divider} />
            <Text style={styles.subHeader}>Find new teammates. Squad up.</Text>
            <Text style={styles.about}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 20,
    paddingTop: 15,
  },

  subHeader: {
    fontSize: 24,
    fontWeight: '300',
    padding: 20,
  },

  about: {
    fontSize: 18
  }
});