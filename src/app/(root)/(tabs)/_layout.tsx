import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      {/* Hide headers for all screens */}
      <Stack.Screen name="home" options={{ headerShown: false }} />
      
    </Stack>
  );
};

export default Layout;
