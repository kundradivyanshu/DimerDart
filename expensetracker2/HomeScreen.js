//DimeDart
import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { UserContext } from './UserContext';

const HomeScreen = ({ navigation }) => {
    const { user, setUser } = useContext(UserContext);

    if (!user) {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Please log in</Text>
            </View>
        );
    }

    const handleLogout = () => {
        setUser(null);
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome To {user.username}</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button color="#0abde3" title="Add Expense" onPress={() => navigation.navigate('AddExpense')} />
                </View>
                <View style={styles.button}>
                    <Button color="#0abde3" title="Add Income" onPress={() => navigation.navigate('AddIncome')} />
                </View>
                <View style={styles.button}>
                    <Button color="#0abde3" title="Add Savings" onPress={() => navigation.navigate('AddSavings')} />
                </View>
                <View style={styles.button}>
                    <Button color="#ee5253" title="Logout" onPress={handleLogout} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    heading: {
        fontSize: 24,
        color: "#fff",
        marginBottom: 20,
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        width: '80%',
        marginVertical: 10,
        backgroundColor: "#222",
        borderRadius: 5,
        overflow: 'hidden',
    }
});

export default HomeScreen;
