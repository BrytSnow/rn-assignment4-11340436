
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const taskData = [
  { key: 1, name: "Jnr Executive", description: "Burger King", image: require('../assets/burger.jpeg'), price: "$96,000/y", city: "New York" },
  { key: 2, name: "Product Manager", description: "Beats", image: require('../assets/beats.jpeg'), price: "$84,000/y", city: "Florida, US" },
  { key: 3, name: "Product Manager", description: "Facebook", image: require('../assets/facebook.jpg'), price: "$86,000", city: "Florida, US" },
];

export default function Task() {
  return (
    <View style={styles.ongoingStyles}>
      <View style={styles.popularJobsHeader}>
        <Text style={styles.title}>Popular Jobs</Text>
        <Text style={{color: '#AFB0B6',fontSize: 15}}>see all</Text>
      </View>
      <View>
        {taskData.map((tasks) => {
          return (
            <View key={tasks.key} style={styles.ongoingContainer}>
              <Image source={tasks.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.ongoingtask}>{tasks.name}</Text>
                <Text style={styles.description}>{tasks.description}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>{tasks.price}</Text>
                <Text style={styles.city}>{tasks.city}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ongoingStyles:{
 marginVertical:20
  },
  title:{
  fontWeight: 'bold',
  fontSize: 20,
  marginVertical:20
  },
  popularJobsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  ongoingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  ongoingtask: {
    // your existing styles
    fontWeight: 'bold'
  },
  description: {
    color: '#666',
    fontSize: 14,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  city: {
    color: '#666',
    fontSize: 14,
  },
});