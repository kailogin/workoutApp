import { useTranslation } from "react-i18next";
import { StyleSheet, TouchableOpacity } from "react-native";

import { BaseText } from "../components/baseText";
import { BaseView } from "../components/baseView";
import { RootStackScreenProps } from "../navigation/utils/navigationTypes";

export type NotFoundScreenProps = RootStackScreenProps<"NotFound">;

export const NotFoundScreen = ({ navigation }: NotFoundScreenProps) => {
  const { t } = useTranslation();

  // --- RENDER ---

  return (
    <BaseView>
      <BaseText style={styles.linkText}>{t("nonExist")}</BaseText>

      <TouchableOpacity
        // @ts-ignore
        onPress={() => navigation.replace("Root")}
        style={styles.link}
      >
        <BaseText style={styles.linkText}>{t("home")}</BaseText>
      </TouchableOpacity>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
  },
});
