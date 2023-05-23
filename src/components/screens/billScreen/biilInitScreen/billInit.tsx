import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Modal,Dimensions  } from 'react-native';
import PickerSelect from 'react-native-picker-select';
import { useTodosDocument } from '../../../contexts/documentContexts';
import TableComponent from '../../../utils/tableComponent';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import ResponsiveView from '../../../utils/responsiveViewComponent';
import { TextInput } from 'react-native';
const { width, height } = Dimensions.get('window');
const BillInitScreen: React.FC = () => {
  // const { todosTypeDocuments, obtenerTodosTypeDocuments } = useTodosDocument();
  // const [selectedOption, setSelectedOption] = useState<string>('');
  // const [searchText] = useState<string>('');
  // const [modalVisible, setModalVisible] = useState<boolean>(false);
  // const [tableHeaders] = useState<string[]>(['Email', 'Nombre', 'Tel 3']);

  // const handleOptionChange = (option: string) => {
  //   setSelectedOption(option);
  // };

  // const handleSearch = () => {

  //   setModalVisible(true);
  // };

  // useEffect(() => {
  //   obtenerTodosTypeDocuments();
  // }, []);

  return (
    <ResponsiveView>
      {/* <View style={styles.titleContainer}>
        <Text style={styles.title}>Tipo de documento</Text>
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
      </Modal> */}
    </ResponsiveView>
  );
  
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#000',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: height * 0.04,
//     fontWeight: 'bold',
//     marginBottom: height * 0.02,
//     color: '#fff',
//     textAlign: 'center',
//   },
//   inputContainer: {
//     width: width * 0.8,
//     marginBottom: height * 0.02,
//     alignItems: 'center',
//   },
//   input: {
//     height: height * 0.04,
//     borderWidth: 1,
//     borderColor: '#fff',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     color: '#fff',
//     width: '100%',
//     textAlign: 'center',
//   },
//   searchButton: {
//     backgroundColor: '#007bff',
//     borderRadius: 8,
//     paddingVertical: height * 0.02,
//     paddingHorizontal: width * 0.1,
//   },
//   searchButtonText: {
//     fontSize: height * 0.025,
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign: 'center',
//   },
// });

// const pickerSelectStyles = StyleSheet.create({
//   inputIOS: {
//     fontSize: 16,
//     paddingVertical: 12,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: 'blue',
//     borderRadius: 4,
//     color: 'blue',
//     paddingRight: 30,
//   },
//   inputAndroid: {
//     fontSize: heightPercentageToDP('40%'), // Utilize responsive font size
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     borderWidth: 5.5,
//     borderColor: 'blue',
//     borderRadius: 8,
//     color: 'blue',
//     paddingRight: 30,
//     height: 20,
//     width: '100%', // Set the width to 100% to fill the container
//   },
// });



export default BillInitScreen;
