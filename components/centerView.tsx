import { View } from "react-native";

interface CenterViewProps {}

export const CenterView: React.FC<CenterViewProps> = ({ children }) => {
  return <View>{children}</View>;
};
