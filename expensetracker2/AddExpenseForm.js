//DimeDart
import { Picker } from '@react-native-picker/picker';
import React, { useContext, useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ChartComponent from './ChartComponent';
import { UserContext } from './UserContext';

const AddExpenseForm = () => {
    const { user, setUser } = useContext(UserContext);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Food');

    const handleAddExpense = () => {
        if (!name || !amount || isNaN(parseFloat(amount))) {
            Alert.alert("Error", "All fields are required and amount must be numeric.");
            return;
        }
        const newExpense = {
            id: Date.now(),
            name,
            amount: parseFloat(amount),
            category
        };
        setUser(prevState => ({
            ...prevState,
            expenses: [...prevState.expenses, newExpense]
        }));
        setName('');
        setAmount('');
        setCategory('Food');
        Alert.alert("Success", "Expense added successfully!");
    };

    const handleDeleteExpense = (id) => {
        setUser(prevState => ({
            ...prevState,
            expenses: prevState.expenses.filter(expense => expense.id !== id)
        }));
    };

    return (
        <ScrollView style={styles.formContainer}>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Expense Name"
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
                <Picker.Item label="Food" value="Food" />
                <Picker.Item label="Clothes" value="Clothes" />
                <Picker.Item label="Others" value="Others" />
            </Picker>
            <Button title="Add Expense" onPress={handleAddExpense} />
            {user.expenses && user.expenses.length > 0 && (
                <ChartComponent data={user.expenses} />
            )}
            {user.expenses.map((expense, index) => (
                <View key={index} style={styles.item}>
                    <Text style={styles.itemText}>{expense.name} - ${expense.amount.toFixed(2)} - {expense.category}</Text>
                    <TouchableOpacity onPress={() => handleDeleteExpense(expense.id)} style={styles.deleteButton}>
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

export default AddExpenseForm;
