import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const BillScreen = () => {
  const [solicitarItems, setSolicitarItems] = useState<string[]>([]);
  const [facturarItems, setFacturarItems] = useState<string[]>([]);

  const renderSolicitarItem = ({ item }: { item: string }) => (
    <Text style={styles.tableItem}>{item}</Text>
  );

  const renderFacturarItem = ({ item }: { item: string }) => (
    <Text style={styles.tableItem}>{item}</Text>
  );

  const facturar = () => {
    // Realizar acciones para facturar o completar el proceso
    console.log('Facturado');
  };

  return (
    <View style={styles.container}>
      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>Artículos solicitados</Text>
        <FlatList
          data={solicitarItems}
          renderItem={renderSolicitarItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.tableList}
        />
      </View>
      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>Artículos facturados</Text>
        <FlatList
          data={facturarItems}
          renderItem={renderFacturarItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.tableList}
        />
      </View>
      <Button title="Facturar" onPress={facturar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  tableContainer: {
    marginBottom: 20,
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
  },
  tableList: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  tableItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default BillScreen;
