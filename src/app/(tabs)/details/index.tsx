import { Stack } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function Details() {
    return (
        <>
            <Stack.Screen options={{ title: "Details" }} />
            <ScrollView contentContainerStyle={{
                gap: 16,
                padding: 16
            }}>
                <Text>Details</Text>
            </ScrollView>
        </>
    )
}