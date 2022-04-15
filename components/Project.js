import { StyleSheet, Text, View, Image } from 'react-native';
import React from "react";

export default function Project({ projectImg, projectName, projectDesc })
{
    return (
        <View style={styles.project}>
            <View style={styles.prjImgFrame}>
                <Image
                    style={styles.prjImg}
                    source={require(projectImg)}
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
