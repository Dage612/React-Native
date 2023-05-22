import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Dimensions } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const TableComponent: React.FC<TableComponentProps> = ({ headers }) => {
  const [searchText, setSearchText] = useState('');
  const [tableData, setTableData] = useState([headers]); // Inicializa la tabla con los encabezados

  const handleSearch = () => {
    // Filtra los datos de la tabla según el texto de búsqueda
    const filteredData = tableData.filter((row, index) => {
      if (index === 0) return true; // Mantén siempre el encabezado
      return row.some(cell => cell.includes(searchText));
    });
    setTableData(filteredData);
  };

  // Obtén el ancho de la pantalla
  const screenWidth = Dimensions.get('window').width;

  // Calcula el ancho de las celdas en función del ancho de la pantalla
  const cellWidth = screenWidth / headers.length;

  // Ejemplo de datos de las filas de la tabla
  const rowData1 = ['Dato 1-1', 'Dato 1-2', 'Dato 1-3'];
  const rowData2 = ['Dato 2-1', 'Dato 2-2', 'Dato 2-3'];
  const rowData3 = ['Dato 3-1', 'Dato 3-2', 'Dato 3-3'];
  // Agregar los datos de las filas a la tabla
  const data = [headers, rowData1, rowData2, rowData3];
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.label}>Búsqueda:</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>

      <Table borderStyle={tableStyles.tableBorder}>
        {data.map((rowData, index) => (
          <Row
            key={index}
            data={rowData}
            style={index === 0 ? tableStyles.tableHeaderRow : tableStyles.tableDataRow}
            textStyle={index === 0 ? tableStyles.tableHeaderCell : tableStyles.tableCell}
            widthArr={new Array(rowData.length).fill(cellWidth)}
          />
        ))}
      </Table>
    </View>
  );
};

// Estilos de la tabla
const tableStyles = StyleSheet.create({
  tableBorder: {
    borderWidth: 1,
    borderColor: '#000',
  },
  tableHeaderRow: {
    height: 40,
    backgroundColor: 'lightgray', // Estilo para el encabezado de la tabla
  },
  tableDataRow: {
    height: 40,
  },
  tableHeaderCell: {
    textAlign: 'center',
    fontWeight: 'bold', // Estilo para el texto del encabezado de la tabla
  },
  tableCell: {
    textAlign: 'center',
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
});

export default TableComponent;
