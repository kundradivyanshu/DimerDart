//DimeDart
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const ChartComponent = ({ data }) => {
    if (!data || data.length === 0) {
        return <Text style={styles.noDataText}>No data to display.</Text>;
    }

    const chartData = data.map((item, index) => ({
        name: item.category,
        amount: item.amount,
        color: getRandomColor(index),
        legendFontColor: "#FFFFFF",
        legendFontSize: 15
    }));

    return (
        <View style={styles.chartContainer}>
            <PieChart
                data={chartData}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={"amount"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                absolute
            />
        </View>
    );
};

const getRandomColor = (index) => {
    const baseColors = ['#E38627', '#C13C37', '#6A2135', '#FFD700', '#FF8C00', '#FF4500', '#ADFF2F', '#32CD32'];
    return baseColors[index % baseColors.length];
};

const styles = StyleSheet.create({
    chartContainer: {
        alignItems: "center",
        marginTop: 20,
        backgroundColor: '#000'
    },
    noDataText: {
        color: '#FFF',
        textAlign: 'center',
        marginTop: 20
    }
});

const chartConfig = {
    backgroundColor: "#000",
    backgroundGradientFrom: "#1E1E1E",
    backgroundGradientTo: "#3F3F3F",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16
    },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
    }
};

export default ChartComponent;
