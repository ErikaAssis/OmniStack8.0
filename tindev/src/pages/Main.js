import React from 'react';
import { View, Text } from 'react-native';

export default function Main( {_id}) {
    return (
        <View>
            <Text>{_id}</Text>
        </View>
    );
}