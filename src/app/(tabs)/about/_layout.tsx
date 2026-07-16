import { Stack } from "expo-router";
import { i18n } from "../../../../utils/mylocalisation";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="about-content" options={{ title: i18n.t("about"), headerLargeTitle: true }} />
        </Stack>
    )
}