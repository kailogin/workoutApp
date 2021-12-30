import { SetStateAction, Dispatch } from "react";
import { StyleSheet, TextInput, View, Keyboard } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { Colors } from "../utils/colors";

interface SearchBarProps {
  isSearchBarClicked: boolean;
  searchPhrase: string;
  setSearchPhrase: Dispatch<SetStateAction<string>>;
  setIsSearchBarClicked: Dispatch<SetStateAction<boolean>>;
}

export const SearchBar = ({
  isSearchBarClicked,
  searchPhrase,
  setSearchPhrase,
  setIsSearchBarClicked,
}: SearchBarProps) => {
  // --- RENDER ---

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Feather
          color="black"
          name="search"
          size={20}
          style={{ marginLeft: 1 }}
        />

        <TextInput
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setIsSearchBarClicked(true);
          }}
          placeholder="Search"
          style={isSearchBarClicked ? styles.inputClicked : styles.input}
          value={searchPhrase}
        />

        {isSearchBarClicked && (
          <Entypo
            color="black"
            name="cross"
            onPress={() => {
              setSearchPhrase("");
              Keyboard.dismiss();
              setIsSearchBarClicked(false);
            }}
            size={20}
            style={{ padding: 1 }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 40,
    width: "90%",
  },
  searchBar: {
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    flexDirection: "row",
    padding: 10,
    width: "95%",
  },
  inputClicked: {
    borderColor: "#F2994A",
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});
