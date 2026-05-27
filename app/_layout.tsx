import { i18n } from "../utils/mylocalisation";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { DarkTheme, DefaultTheme, ThemeProvider, VectorIcon } from "expo-router";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  let title = i18n.t("title")
  let about = i18n.t("about")
  const colorSheme = useColorScheme();
  return (
    <ThemeProvider value={colorSheme === "dark" ? DarkTheme : DefaultTheme}>
      <NativeTabs>
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Icon src={<VectorIcon family={MaterialCommunityIcons} name="home" />} />
          <NativeTabs.Trigger.Label>{title}</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="about">
          <NativeTabs.Trigger.Icon src={<VectorIcon family={MaterialCommunityIcons} name="information" />} />
          <NativeTabs.Trigger.Label>{about}</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    </ThemeProvider>
  );
}
