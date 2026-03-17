import { i18n } from "@/utils/mylocalisation";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Icon, Label, VectorIcon } from "expo-router";
import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function RootLayout() {
  let title = i18n.t("title")
  let about = i18n.t("about")
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Icon src={<VectorIcon family={MaterialCommunityIcons} name="home" />} />
        <Label>{title}</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="about">
        <Icon src={<VectorIcon family={MaterialCommunityIcons} name="information" />} />
        <Label>{about}</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
