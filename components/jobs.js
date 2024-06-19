import { View, Text, Image, FlatList, StyleSheet } from "react-native";

const categoryData = [
  { key: 1, name: "Software Engineering", company: "Google", price: 50000, city: "New York", image: require("../assets/google.jpg") },
  { key: 2, name: "Tech Company", company: "Apple", price: 65000, city: "San Francisco", image: require("../assets/apple.jpg") },
  { key: 3, name: "Software & Cloud Services", company: "Microsoft", price: 75000, city: "Florida", image: require("../assets/microsoft.jpeg") },
  { key: 4, name: "Database & Cloud Services", company: "Oracle", price: 80000, city: "Atlanta", image: require("../assets/oracle.jpg") },
  { key: 5, name: "Streaming & Content ", company: "Netflix", price: 90000, city: "Washington DC", image: require("../assets/netflix.webp") },
  { key: 6, name: "E-commerce & Web Services", company: "Amazon", price: 70000, city: "Califonia", image: require("../assets/amazon.jpg") },
  { key: 7, name: "Electric & Autonomous vehicles", company: "Tesla", price: 85000, city: "Texas", image: require("../assets/tesla.jpeg") },
  { key: 8, name: "Emerging Technologies", company: "IBM", price: 75000, city: "Alaska", image: require("../assets/IBM.jpeg") },
];

function renderCategoryData({ item }) {
  return (
    <View style={styles.listItem}>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemNameSmall}>{item.company}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.price}>${item.price.toLocaleString()}</Text>
        <Text style={styles.city}>{item.city}</Text>
      </View>
    </View>
  );
}

export default function Jobs() {
  return (
    <View>
      <View>
        <View style={styles.popularJobsHeader}>
          <Text style={styles.categories}>Featured Jobs</Text>
          <Text style={{color: '#AFB0B6',fontSize: 15}}>See all</Text>
        </View>
        <FlatList
          data={categoryData}
          horizontal={true}
          renderItem={renderCategoryData}
          keyExtractor={(item) => item.key.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 20 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categories: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  popularJobsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16, 
  },
  listItem: {
    backgroundColor: 'white',
    marginRight: 20,
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 200,
    width: 300,
    justifyContent: 'space-between',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageContainer: {
    marginRight: 16,
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  nameContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemNameSmall: {
    fontSize: 14,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  city: {
    color: '#666',
    fontSize: 16,
  },
});