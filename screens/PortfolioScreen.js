import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from "react-native-paper";
import React, { useState } from "react";

export default function PortfolioScreen()
{
    const [showProject, setShowProject] = useState(false);

    const handleShow = () => setShowProject(!showProject);

    return (
        <View style={styles.container}>
            <View style={styles.avatarView}>
                <Image
                    style={styles.avatarImage}
                    source={require("../assets/phuocleoceo.jpg")}
                />
            </View>

            <View style={styles.infor}>
                <Text style={styles.name}>phuocleoceo</Text>
                <Text style={styles.position}>Fullstack Developer</Text>
                <Text style={styles.tag}>@themilesCompose</Text>
                <Button
                    mode="contained"
                    onPress={handleShow}
                    style={styles.showButton}
                >
                    Portfolio
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        padding: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "white",
        margin: 15,
        marginTop: 30,
        // Android
        elevation: 2,
        // iOS
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 3,
    },
    avatarView: {
        // Android
        elevation: 2,
        // iOS
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 7,
    },
    avatarImage: {
        display: "flex",
        backgroundColor: "#ddd",
        width: 150,
        height: 150,
        borderRadius: 150,
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#6200ed",
        margin: 10
    },
    position: {
        fontSize: 15,
        alignSelf: "center",
        margin: 7
    },
    tag: {
        fontSize: 15,
        alignSelf: "center",
        margin: 7
    },
    showButton: {
        margin: 10,
        padding: 5,
        width: 150,
        alignSelf: "center"
    }
});
