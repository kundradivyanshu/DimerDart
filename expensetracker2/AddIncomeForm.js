//DimeDart
import { Picker } from '@react-native-picker/picker';
import React, { useContext, useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ChartComponent from './ChartComponent';
import { UserContext } from './UserContext';

const AddIncomeForm = () => {
    const { user, setUser } = useContext(UserContext);
    const [source, setSource] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Monthly');

    const handleAddIncome = () => {
        if (!source || !amount || isNaN(parseFloat(amount))) {
            Alert.alert("Error", "Please ensure all fields are filled and amount is numeric.");
            return;
        }
        const newIncome = {
            id: Date.now(),
            source,
            amount: parseFloat(amount),
            category
        };
        setUser(prevState => ({
            ...prevState,
            incomes: [...prevState.incomes, newIncome]
        }));
        setSource('');
        setAmount('');
        setCategory('Monthly');
        Alert.alert("Success", "Income added successfully!");
    };

    const handleDeleteIncome = (id) => {
        setUser(prevState => ({
            ...prevState,
            incomes: prevState.incomes.filter(income => income.id !== id)
        }));
    };

    return (
        <ScrollView style={styles.formContainer}>
            <TextInput
                style={styles.input}
                value={source}
                onChangeText={setSource}
                placeholder="Income Source"
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
                <Picker.Item label="Monthly" value="Monthly" />
                <Picker.Item label="Yearly" value="Yearly" />
            </Picker>
            <Button title="Add Income" onPress={handleAddIncome} />
            {user.incomes && user.incomes.length > 0 && (
                <ChartComponent data={user.incomes} />
            )}
            {user.incomes.map((income, index) => (
                <View key={index} style={styles.item}>
                    <Text style={styles.itemText}>{income.source} - ${income.amount.toFixed(2)} - {income.category}</Text>
                    <TouchableOpacity onPress={() => handleDeleteIncome(income.id)} style={styles.deleteButton}>
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

export default AddIncomeForm;
