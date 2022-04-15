import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from "react";

export default function TapScreen()
{
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.countText}>
                {count}
            </Text>

            <TouchableOpacity
                onPress={() => setCount(count + 1)}
                style={styles.tapButton}
            >
                <Text style={styles.tapText}>Tap</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    countText: {
        fontSize: 50,
        fontWeight: "bold",
        color: "#03fcdf"
    },
    tapButton: {
        backgroundColor: "white",
        marginTop: 20,
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 120,
        borderWidth: 1,
        borderColor: "white",

        // Android
        elevation: 2,

        // iOS
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    tapText: {
        fontSize: 25,
    }
});
