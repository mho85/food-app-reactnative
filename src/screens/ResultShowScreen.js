import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={p => p}
                renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10
    },
    image: {
        width: 300,
        height: 200,
        marginVertical: 5,
        borderRadius: 4
    }
});

export default ResultShowScreen;