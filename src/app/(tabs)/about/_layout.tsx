import { Stack } from "expo-router";
import { i18n } from "../../../localisation/mylocalisation";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: i18n.t("about"), headerLargeTitle: true }} />
        </Stack>
    )
}