import { i18n } from "@/utils/mylocalisation";
import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function RootLayout() {
  let title = i18n.t("title")
  let about = i18n.t("about")
  return (<NativeTabs>
    <NativeTabs.Trigger name="index" options={{ title: title }} />
    <NativeTabs.Trigger name="about" options={{ title: about }} />
  </NativeTabs>
  );
}
