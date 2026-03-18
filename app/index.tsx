import useIsDarkMode from '@/components/CheckDarkMode';
import mystyles from '@/styles/mystyles';
import * as Device from 'expo-device';
import { Text, View } from "react-native";

export default function Index() {
  const IsDarkMode = useIsDarkMode();
  const styles = mystyles(IsDarkMode);
  return (
    <View
      style={styles.homeview}
    >
      <Text style={styles.text}>Manufacturer: {Device.manufacturer}</Text>
      <Text style={styles.text}>Modelname: {Device.modelName}</Text>
      <Text style={styles.text}>Brand: {Device.brand}</Text>
      <Text style={styles.text}>OS Name: {Device.osName}</Text>
      <Text style={styles.text}>OS Version: {Device.osVersion}</Text>
      <Text style={styles.text}>Platform API level: {Device.platformApiLevel}</Text>
      <Text style={styles.text}>Productname: {Device.productName}</Text>
      <Text style={styles.text}>Devicename: {Device.deviceType}</Text>
      <Text style={styles.text}>Supported CPU architectures: {Device.supportedCpuArchitectures}</Text>
      <Text style={styles.text}>Total memory: {Device.totalMemory}</Text>
    </View>
  );
}
