import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from "react";

const DATA = [
    {
        id: 1,
        projectImg: require("../assets/project/contact-app.jpg"),
        projectName: "Contact App",
        projectDesc: "Mobile exercise in University"
    },
    {
        id: 2,
        projectImg: require("../assets/project/microservices.png"),
        projectName: "PLC Microservices",
        projectDesc: "Use .NET 6 and Docker"
    },
    {
        id: 3,
        projectImg: require("../assets/project/restaurant.jpg"),
        projectName: "Luxury Restaurant",
        projectDesc: "Combine .NET with ReactJS"
    },
    {
        id: 4,
        projectImg: require("../assets/project/face-recog.png"),
        projectName: "Face Recognition",
        projectDesc: "Project Base Learning 5"
    },
];

const Project = ({ projectImg, projectName, projectDesc }) =>
{
    return (
        <View style={styles.project}>
            <View style={styles.prjImgFrame}>
                <Image
                    style={styles.prjImg}
                    source={projectImg}
                />
            </View>

            <View style={styles.prjInfor}>
                <Text style={styles.prjName}>
                    {projectName}
                </Text>

                <Text style={styles.prjDesc}>
                    {projectDesc}
                </Text>
            </View>
        </View>
    );
}

export default function ProjectList()
{
    const renderItem = ({ item }) => (
        <Project
            projectImg={item.projectImg}
            projectName={item.projectName}
            projectDesc={item.projectDesc}
        />
    );

    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    );
}

const styles = StyleSheet.create({
    project: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        flexDirection: "row",
        margin: 10,
        marginTop: 10,

        padding: 10,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        // Android
        elevation: 2,
        // iOS
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
    prjImgFrame: {
        flex: 1,
        // Android
        elevation: 2,
        // iOS
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 7,
        marginRight: 15
    },
    prjImg: {
        flex: 1,
        backgroundColor: "#ddd",
        width: 100,
        height: 100,
        borderRadius: 150,
    },
    prjInfor: {
        flex: 2,
        flexDirection: "column",
        padding: 10
    },
    prjName: {
        flex: 1,
        fontWeight: "bold"
    },
    prjDesc: {
        flex: 1
    }
});
