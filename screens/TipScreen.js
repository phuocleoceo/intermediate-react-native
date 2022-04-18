import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import React, { useState, useEffect } from "react";
import { TextInput } from 'react-native-paper';

export default function TipScreen()
{
    const [total, setTotal] = useState(0.0);
    const [bill, setBill] = useState("");
    const [split, setSplit] = useState(1);
    const [tip, setTip] = useState(0.0);
    const [sliderValue, setSliderValue] = useState(0);
    const [tipBoxHeight, setTipBoxHeight] = useState(120);

    useEffect(() =>
    {
        // Set chiều cao cho Tip Box
        if (bill !== "")
        {
            setTipBoxHeight(370);
            setTotal(0.0);
        }
        else
        {
            setTipBoxHeight(120);
        }

        const newTotal = (parseFloat(bill) + tip) / split;
        setTotal(newTotal);
    }, [bill, split, tip]);

    useEffect(() =>
    {
        if (bill !== "")
        {
            setTip(parseFloat(bill) * sliderValue / 100);
        }
        else
        {
            setTip(0.0);
        }
    }, [sliderValue]);


    const handleMinusSplit = () =>
    {
        if (split > 1) setSplit(split - 1);
    };

    const handlePlusSplit = () =>
    {
        setSplit(split + 1);
    };

    return (
        <View style={styles.container}>
            <View style={styles.totalBox}>
                <Text style={styles.totalTitle}>
                    Total Per Person
                </Text>
                <Text style={styles.totalText}>
                    {"$" + total.toFixed(2)}
                </Text>
            </View>

            <View style={[styles.tipBox, { maxHeight: tipBoxHeight }]}>
                <View style={styles.billText}>
                    <TextInput
                        label="Total Bill"
                        mode="outlined"
                        onChangeText={num => setBill(num)}
                    />
                </View>

                {
                    bill !== "" &&
                    <View style={{ flex: 3 }}>
                        <View style={styles.split}>
                            <Text style={styles.splitLabel}>Split</Text>

                            <TouchableOpacity style={styles.splitButton} onPress={handleMinusSplit}>
                                <Text style={styles.splitButtonText}>-</Text>
                            </TouchableOpacity>

                            <Text style={styles.splitValue}>{split}</Text>

                            <TouchableOpacity style={styles.splitButton} onPress={handlePlusSplit}>
                                <Text style={styles.splitButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.tipText}>
                            <Text style={styles.tipLabel}>Tip</Text>
                            <Text style={styles.tipValue}>{"$ " + tip.toFixed(2)}</Text>
                        </View>

                        <View style={styles.tipSlider}>
                            <Text style={styles.sliderVal}>{sliderValue + " %"}</Text>
                            <Slider
                                maximumValue={100}
                                minimumValue={0}
                                minimumTrackTintColor="#f2bdf2"
                                maximumTrackTintColor="#f2bdf2"
                                step={1}
                                onSlidingComplete={(value) => setSliderValue(value)}
                                thumbTintColor="#733573"
                                style={styles.sliderBar}
                            />
                            {/* onValueChange or onSlidingComplete*/}
                        </View>
                    </View>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    // ---------------------------------------------
    totalBox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        margin: 25,
        marginTop: 35,
        borderRadius: 15,
        backgroundColor: "#ef9ef7",
        maxHeight: 150
    },
    totalTitle: {
        fontWeight: "bold",
        fontSize: 20
    },
    totalText: {
        fontWeight: "bold",
        fontSize: 35,
        color: "#431c47"
    },
    // ---------------------------------------------
    tipBox: {
        flex: 4,
        margin: 20,
        marginTop: 0,
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#cfcacf",
        // maxHeight: 370
    },
    // ---------------------------------------------
    billText: {
        flex: 1,
    },
    // ---------------------------------------------
    split: {
        flex: 1,
        flexDirection: "row"
    },
    splitLabel: {
        fontSize: 20,
        marginRight: 100,
        margin: 10
    },
    splitButton: {
        backgroundColor: "white",
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 120,
        // Android
        elevation: 2,
        // iOS
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    splitButtonText: {
        fontSize: 20
    },
    splitValue: {
        fontSize: 20,
        margin: 10,
        marginLeft: 15,
        marginRight: 15
    },
    // ---------------------------------------------
    tipText: {
        flex: 1,
        flexDirection: "row",
    },
    tipLabel: {
        fontSize: 20,
        marginRight: 135,
        margin: 10
    },
    tipValue: {
        fontSize: 20,
        margin: 10
    },
    // ---------------------------------------------
    tipSlider: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    sliderVal: {
        fontSize: 17
    },
    sliderBar: {
        width: 300,
        height: 60
    }
});
