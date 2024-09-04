//DimeDart
import { Picker } from '@react-native-picker/picker';
import React, { useContext, useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ChartComponent from './ChartComponent';
import { UserContext } from './UserContext';


const AddSavingsForm = () => {
    const { user, setUser } = useContext(UserContext);
    const [source, setSource] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('General');

    const handleAddSaving = () => {
        if (!source || !amount || isNaN(parseFloat(amount))) {
            Alert.alert("Error", "All fields are required and amount must be numeric.");
            return;
        }
        const newSaving = {
            id: Date.now(),
            source,
            amount: parseFloat(amount),
            category
        };
        setUser(prevState => ({
            ...prevState,
            savings: [...prevState.savings, newSaving]
        }));
        setSource('');
        setAmount('');
        setCategory('General');
        Alert.alert("Success", "Savings added successfully!");
    };

    const handleDeleteSaving = (id) => {
        setUser(prevState => ({
            ...prevState,
            savings: prevState.savings.filter(saving => saving.id !== id)
        }));
    };

    return (
        <ScrollView style={styles.formContainer}>
            <TextInput
                style={styles.input}
                value={source}
                onChangeText={setSource}
                placeholder="Source of Saving"
            />
            <TextInput
                style={styles.input}
                value={amount}
                onChangeText={setAmount}
                placeholder="Amount"
                keyboardType="numeric"
            />
            <Picker
                selectedValue={category}
                onValueChange={newCategory => setCategory(newCategory)}
                style={styles.picker}
            >
                <Picker.Item label="General" value="General" />
                <Picker.Item label="Emergency" value="Emergency" />
                <Picker.Item label="Vacation" value="Vacation" />
            </Picker>
            <Button title="Add Saving" onPress={handleAddSaving} />
            {user.savings && user.savings.length > 0 && (
                <ChartComponent data={user.savings} />
            )}
            {user.savings.map((saving, index) => (
                <View key={index} style={styles.item}>
                    <Text style={styles.itemText}>{saving.source} - ${saving.amount.toFixed(2)} - {saving.category}</Text>
                    <TouchableOpacity onPress={() => handleDeleteSaving(saving.id)} style={styles.deleteButton}>
                        <Text style={styles.deleteButtonText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    input: {
        width: '100%',
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5
    },
    picker: {
        width: '100%',
        marginBottom: 15,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f8f8f8',
        borderRadius: 5
    },
    itemText: {
        color: '#333',
    },
    deleteButton: {
        padding: 10,
        backgroundColor: '#ff4d4d',
        borderRadius: 5
    },
    deleteButtonText: {
        color: '#fff',
    }
});

export default AddSavingsForm;
