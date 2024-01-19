import { View } from "app/design/view";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <View className="antialiased flex flex-col min-h-screen mx-auto bg-slate-300">
      {children}
    </View>
  );
};
