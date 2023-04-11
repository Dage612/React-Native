import { View, Text, FlatList } from 'react-native';
import React from 'react';

type Item = {
  id: number;
  name: string;
};

const data: Item[] = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
];

type RenderItemProps = {
  item: Item;
};

const renderItem = ({ item }: RenderItemProps) => (
  <View style={{ padding: 10 }}>
    <Text style={{ color: 'black' }}>{item.name}</Text>
  </View>
);

const InventaryScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bienvenido que buen video</Text>
      <FlatList<Item>
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default InventaryScreen;
