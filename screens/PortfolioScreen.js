import { StyleSheet, Text, View, Image } from 'react-native';
import ProjectList from "../components/ProjectList";
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

            {
                showProject && <View style={styles.projectList}>
                    <ProjectList />
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
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
        backgroundColor: "#ddd",
        width: 140,
        height: 140,
        borderRadius: 140,
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#6200ed",
        margin: 7
    },
    position: {
        fontSize: 14,
        alignSelf: "center",
        margin: 7
    },
    tag: {
        fontSize: 14,
        alignSelf: "center",
        margin: 7
    },
    showButton: {
        margin: 8,
        padding: 5,
        width: 140,
        alignSelf: "center"
    },
    projectList: {
        width: "98%",
        margin: 3,
        height: 290,

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
