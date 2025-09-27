import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SignOutButton from "@/components/SignOut";
import { useUserSync } from "@/hooks/useUserSync";

const HomeScreen = () => {
  useUserSync();
  return (
    <SafeAreaView className="flex-row justify-between flex-1 p-10">
      <Text>HomeScreen</Text>
      <SignOutButton />
    </SafeAreaView>
  );
};

export default HomeScreen;
