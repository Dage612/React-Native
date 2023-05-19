import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PickerSelect from 'react-native-picker-select';
import { useTodosDocument } from '../../../contexts/documentContexts';

const BillInitScreen: React.FC = () => {
  const { todosTypeDocuments, obtenerTodosTypeDocuments } = useTodosDocument();
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    obtenerTodosTypeDocuments(); // Llama a la función para obtener los datos
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola cliente</Text>
      <PickerSelect
        value={selectedOption}
        onValueChange={handleOptionChange}
        items={todosTypeDocuments.map((typeDocument) => ({
          label: typeDocument.description,
          value: typeDocument.id,
        }))}
        style={pickerSelectStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default BillInitScreen;
