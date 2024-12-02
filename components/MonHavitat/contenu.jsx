import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    Button,
    TextInput
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

const generatedId = () => Math.random().toString(36).substr(2, 9);

const MonHabitat = () => {
    const [inputText1, setInputText1] = useState('');
    const [inputText2, setInputText2] = useState('');
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [TotalEnergie, setTotalEnergie] = useState(0);

    useEffect(() => {
        const total = data.reduce((accumulator, currentValue) => {
            if (!isNaN(currentValue.title2)) {
                return accumulator + parseInt(currentValue.title2);
            }
            return accumulator;
        }, 0);
        setTotalEnergie(total);
    }, [data]);

    const handleAddItem = async () => {
        if (inputText1.trim() !== '' && !isNaN(inputText2.trim())) {
            const newItem = {
                id: generatedId(),
                title1: inputText1,
                title2: inputText2
            };
            setData([...data, newItem]);
            setInputText1('');
            setInputText2('');
        }
    };

    const handleDelete = (id) => {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
    };

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#d38a67" : "#F8AE85";
        const color = item.id === selectedId ? 'white' : 'black';

        const handlePress = () => {
            setSelectedId(selectedId === item.id ? null : item.id);
        };

        return (
            <Item
                item={item}
                onPress={handlePress}
                backgroundColor={backgroundColor}
                textColor={color}
                onDelete={handleDelete}
            />
        );
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ajouter équipement"
                value={inputText1}
                onChangeText={setInputText1}
                placeholderTextColor="#aaa"
            />
            <TextInput
                style={styles.input}
                placeholder="Nombre de watts"
                value={inputText2}
                onChangeText={(text) => {
                    // Vérifiez si le texte entré est un nombre avant de le définir
                    if (/^\d+$/.test(text) || text === '') {
                        setInputText2(text);
                    }
                }}
                placeholderTextColor="#aaa"
                keyboardType="numeric"
            />
            <Button title="Ajouter" onPress={handleAddItem} color="#007bff" />
            <Text style={styles.totalEnergie}>TotalEnergie: {TotalEnergie}</Text>
            <SafeAreaView style={styles.container2}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </SafeAreaView>
        </View>
    );
};

const Item = ({ item, onPress, backgroundColor, textColor, onDelete }) => (
    <View style={[styles.itemContainer, { backgroundColor }]}>
        <TouchableOpacity onPress={onPress} style={[styles.item2, { backgroundColor }]}>
            <Text style={[styles.title, { color: textColor }]}>{`${item.title1} - ${item.title2}`} W</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Ionicons name="trash" size={25} color="red" onPress={() => onDelete(item.id)} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    container2: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    item2: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 8,
        borderRadius: 5,
    },
    totalEnergie: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default MonHabitat;
