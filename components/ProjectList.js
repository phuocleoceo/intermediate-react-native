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
        flexDirection: "row"
    },
    prjImgFrame: {
        flex: 1
    },
    prjInfor: {
        flexDirection: "column"
    },
    prjName: {
        flex: 1
    },
    prjDesc: {
        flex: 1
    }
});
