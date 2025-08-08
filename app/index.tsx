import { Link } from "expo-router";
import { Text, View  } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl  font-bold text-secondary ">Welcome</Text>
    <Link href="/onboarding" className="text-blue-500 mt-4">
      <Text className="text-blue-500 mt-4">Go to Onboarding</Text>
    </Link>
    <Link href="/movie/avangers" className="text-blue-500 mt-4">
      <Text className="text-blue-500 mt-4">Go to Avenger Movie</Text>
    </Link>
    </View>
  );
}
