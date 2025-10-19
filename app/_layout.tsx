import { i18n } from "@/utils/mylocalisation";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Icon, NativeTabs, VectorIcon } from "expo-router/unstable-native-tabs";

export default function RootLayout() {
  let title = i18n.t("title")
  let about = i18n.t("about")
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index" options={{ title: title }}>
        <Icon src={<VectorIcon family={MaterialCommunityIcons} name="home" />} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="about" options={{ title: about }}>
        <Icon src={<VectorIcon family={MaterialCommunityIcons} name="information" />} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
