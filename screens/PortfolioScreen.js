import { StyleSheet, Text, View, Image } from 'react-native';
import ProjectList from "../components/ProjectList";
import { Button } from "react-native-paper";
import React, { useState } from "react";
import AppBar from '../components/AppBar';

export default function PortfolioScreen()
{
    const [showProject, setShowProject] = useState(false);

    const handleShow = () => setShowProject(!showProject);

    return (
        <View style={{ flex: 1 }}>
            <AppBar title="Portfolio Screen" />

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

                {
                    showProject && <View style={styles.projectList}>
                        <ProjectList />
                    </View>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        padding: 9,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "white",
        margin: 12,
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
        backgroundColor: "#ddd",
        width: 120,
        height: 120,
        borderRadius: 120,
    },
    name: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#6200ed",
        margin: 7
    },
    position: {
        fontSize: 14,
        alignSelf: "center",
        margin: 5
    },
    tag: {
        fontSize: 14,
        alignSelf: "center",
        margin: 7
    },
    showButton: {
        margin: 7,
        padding: 3,
        width: 140,
        alignSelf: "center"
    },
    projectList: {
        width: "98%",
        margin: 3,
        height: 270,

        backgroundColor: "white",
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "#bbbec4",
        // Android
        elevation: 2,
        // iOS
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 3,
    }
});
