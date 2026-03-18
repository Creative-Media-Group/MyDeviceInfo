import useIsDarkMode from '@/components/CheckDarkMode';
import mystyles from '@/styles/mystyles';
import * as Device from 'expo-device';
import { Link } from 'expo-router';
import { Text, View } from "react-native";

export default function Index() {
  const IsDarkMode = useIsDarkMode();
  const styles = mystyles(IsDarkMode);
  return (
    <View
      style={styles.homeview}
    >
      <Text style={styles.text}>Manufacturer: {Device.manufacturer?.toString()}</Text>
      <Text style={styles.text}>Modelname: {Device.modelName?.toString()}</Text>
      <Text style={styles.text}>Brand: {Device.brand?.toString()}</Text>
      <Text style={styles.text}>OS Name: {Device.osName?.toString()}</Text>
      <Text style={styles.text}>OS Version: {Device.osVersion?.toString()}</Text>
      <Text style={styles.text}>Platform API level: {Device.platformApiLevel?.toString()}</Text>
      <Text style={styles.text}>Productname: {Device.productName?.toString()}</Text>
      <Text style={styles.text}>Devicename: {Device.deviceType?.toString()}</Text>
      <Text style={styles.text}>Supported CPU architectures: {Device.supportedCpuArchitectures?.toString()}</Text>
      <Text style={styles.text}>Total memory: {Device.totalMemory?.toString()}</Text>
      <Link
        style={{ color: "blue" }}
        href="/details"
      >
        <Text>Details</Text>
      </Link>;
    </View>
  );
}
