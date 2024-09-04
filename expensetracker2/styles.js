//DimeDart
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    heading: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
    },
    formContainer: {
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#f8f8f8'
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333'
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    listContainer: {
        maxHeight: 200,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#eee',
        marginBottom: 5,
    },
    listItemText: {
        color: '#333',
    },
    loginContainer: {
        flex: 1,
        backgroundColor: "#1c1c1e",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    button: {
        backgroundColor: "#0abde3",
        color: "white",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        color: "white",
    }
});
