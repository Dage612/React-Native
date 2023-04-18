import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import { useTodos } from "../../contexts/inventoryContexts";
import { Todo } from "../../models/inventoryModel";

const InventoryScreen = () => {
  const { todos, cargandoTodos, obtenerTodos } = useTodos();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    obtenerTodos();
  }, []);

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const filteredTodos = todos.filter((item: Todo) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }).slice(startIndex, endIndex);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  if (cargandoTodos) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Cargando datos...</Text>
      </View>
    );
  }

  return (
    <View>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Buscar"
          style={styles.searchInput}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      <ScrollView contentContainerStyle={styles.listContainer}>
        {filteredTodos.map((item: Todo) => (
          <View style={styles.card} key={item.id}>
            <Image source={{ uri: 'https://picsum.photos/id/237/536/354'}} style={styles.image} />
            <View style={styles.cardDetails}>
              <Text style={[styles.title, { color: '#000' }]}>{item.title}</Text>
              <Text style={[styles.description, { color: '#000' }]}>{item.title}</Text>
              <Text style={[styles.price, { color: '#000' }]}>${item.title}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        {/* {endIndex < todos.length && (
          <TouchableOpacity
            style={styles.loadMoreButton}
            onPress={handleLoadMore}
          >
            <Text style={styles.loadMoreButtonText}>Cargar más</Text>
          </TouchableOpacity>
        )} */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  cardDetails: {
    marginLeft: 20,
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  addButton: {
    backgroundColor: 'blue',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-end'
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 50,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
});


export default InventoryScreen;