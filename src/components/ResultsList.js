import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ResultsList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text>{results.length} result(s)</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(r) => r.id}
                renderItem={({ item }) => {
                    return (
                        <Text>{item.name}</Text>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;