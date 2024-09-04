//DimeDart
import React, { useContext, useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { UserContext } from './UserContext';

const LoginComponent = ({ navigation }) => {
    const { setUser } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (username === "Dime" && password === "123") {
            setUser({ username, expenses: [], incomes: [], savings: [] });
            navigation.navigate('Home');
        } else {
            Alert.alert("Login Failed", "Incorrect username or password");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>LOGIN TO DIME DART</Text>
            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
                placeholder="Username"
                placeholderTextColor="#ccc"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                placeholderTextColor="#ccc"
                secureTextEntry={true}
                autoCapitalize="none"
            />
            <Button
                title="Login"
                onPress={handleLogin}
                color="#10ac84"
            />
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
    input: {
        width: "90%",
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#333",
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    heading: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 30,
        textTransform: "uppercase",
        letterSpacing: 2,
    }
});

export default LoginComponent;
