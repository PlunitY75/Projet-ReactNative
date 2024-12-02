import * as React from "react";
import { View, Text, StyleSheet, Platform, Button, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

export default function ReservationScreen() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedStartTime, setSelectedStartTime] = useState(null);
    const [selectedEndTime, setSelectedEndTime] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showStartTimePicker, setShowStartTimePicker] = useState(false);
    const [showEndTimePicker, setShowEndTimePicker] = useState(false);
    const [text, setText] = useState("Planifie ta journée ! ");

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || selectedDate;
        setShowDatePicker(Platform.OS === "ios");
        setSelectedDate(currentDate);
    };

    const handleStartTimeChange = (event, selectedTime) => {
        const currentTime = selectedTime || selectedStartTime;
        setShowStartTimePicker(Platform.OS === "ios");
        setSelectedStartTime(currentTime);
    };

    const handleEndTimeChange = (event, selectedTime) => {
        const currentTime = selectedTime || selectedEndTime;
        setShowEndTimePicker(Platform.OS === "ios");
        setSelectedEndTime(currentTime);
    };

    const showDatePickerMode = () => {
        setShowDatePicker(true);
    };

    const showStartTimePickerMode = () => {
        setShowStartTimePicker(true);
    };

    const showEndTimePickerMode = () => {
        setShowEndTimePicker(true);
    };

    const handleConfirm = () => {
        // Logic to handle the selected date and time
        const dateString = selectedDate.toLocaleDateString();
        const startTimeString = selectedStartTime ? selectedStartTime.toLocaleTimeString() : "";
        const endTimeString = selectedEndTime ? selectedEndTime.toLocaleTimeString() : "";
        setText(`Date: ${dateString} \nStart Time: ${startTimeString} \nEnd Time: ${endTimeString}`);
        // Perform any other actions here based on the selected date and time
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{text}</Text>
            <TouchableOpacity style={styles.button} onPress={showDatePickerMode}>
                <Text style={styles.buttonText}>Choisir une date</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={showStartTimePickerMode}>
                <Text style={styles.buttonText}>Choisir une heure de début</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={showEndTimePickerMode}>
                <Text style={styles.buttonText}>Choisir une heure de fin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#4CAF50' }]} onPress={handleConfirm}>
                <Text style={styles.buttonText}>Confirmer</Text>
            </TouchableOpacity>

            {showDatePicker && (
                <DateTimePicker
                    testID="dateDateTimePicker"
                    value={selectedDate}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}

            {showStartTimePicker && (
                <DateTimePicker
                    testID="startDateTimePicker"
                    value={selectedStartTime || selectedDate}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={handleStartTimeChange}
                />
            )}

            {showEndTimePicker && (
                <DateTimePicker
                    testID="endDateTimePicker"
                    value={selectedEndTime || selectedDate}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={handleEndTimeChange}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ebecf0",
        paddingHorizontal: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
