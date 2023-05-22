import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Modal } from 'react-native';
import PickerSelect from 'react-native-picker-select';
import { useTodosDocument } from '../../../contexts/documentContexts';
import TableComponent from '../../../utils/tableComponent';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import ResponsiveView from '../../../utils/responsiveViewComponent';

const BillInitScreen: React.FC = () => {
  const { todosTypeDocuments, obtenerTodosTypeDocuments } = useTodosDocument();
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [searchText] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [tableHeaders] = useState<string[]>(['Email', 'Nombre', 'Tel 3']);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleSearch = () => {

    setModalVisible(true);
  };

  useEffect(() => {
    obtenerTodosTypeDocuments();
  }, []);

  return (
    <ResponsiveView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tipo de Documento</Text>
      </View>
      <View style={styles.inputContainer}>
        <PickerSelect
          value={selectedOption}
          onValueChange={handleOptionChange}
          items={todosTypeDocuments.map((typeDocument) => ({
            label: typeDocument.description,
            value: typeDocument.id,
          }))}
          style={{ ...pickerSelectStyles, ...styles.input }}
          placeholder={{
            label: 'Selecciona un elemento',
            value: null,
            color: '#9EA0A4',
          }}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Búsqueda de Cliente</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={searchText}
          placeholder="Ingrese un cliente"
          editable={false}
        />
      </View>
      <Button title="Buscar" onPress={handleSearch} />
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TableComponent headers={tableHeaders} />
          <Button title="Cerrar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </ResponsiveView>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    backgroundColor: 'blue',
  },
  titleContainer: {
    flex: 1,
    width: '90%',
    marginBottom: 20,
    alignSelf: 'center', // Align the title container to the center horizontally
  },
  title: {
    fontSize: heightPercentageToDP('4%'),
    color: 'black',
    textAlign: 'center', // Center the title text
  },
  inputContainer: {
    flex: 1,
    width: '80%',
    marginBottom: 20,
    alignSelf: 'center', // Align the input container to the center horizontally
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 4,
    color: 'blue',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: heightPercentageToDP('4%'), // Utilize responsive font size
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'blue',
    borderRadius: 8,
    color: 'blue',
    paddingRight: 30,
    height: 20,
    width: '100%', // Set the width to 100% to fill the container
  },
});



export default BillInitScreen;
