//DimeDart
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from "react";
import AddExpenseForm from "./AddExpenseForm";
import AddIncomeForm from "./AddIncomeForm";
import AddSavingsForm from "./AddSavingsForm";
import HomeScreen from "./HomeScreen";
import LoginComponent from "./LoginComponent";
import { UserContext } from './UserContext';

const Stack = createNativeStackNavigator();

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions={{
                    headerStyle: { backgroundColor: '#000' },
                    headerTintColor: '#fff'
                }}>
                    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
                    <Stack.Screen name="Login" component={LoginComponent} options={{ headerShown: false }} />
                    <Stack.Screen name="AddSavings" component={AddSavingsForm} options={{ title: 'Add Savings' }} />
                    <Stack.Screen name="AddIncome" component={AddIncomeForm} options={{ title: 'Add Income' }} />
                    <Stack.Screen name="AddExpense" component={AddExpenseForm} options={{ title: 'Add Expense' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </UserContext.Provider>
    );
};

export default App;
