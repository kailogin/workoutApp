import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { SearchBar } from "../searchBar";

test(`SearchBar snapshot`, () => {
  const snap = renderer
    .create(
      <SearchBar
        isSearchBarClicked={true}
        searchPhrase="TEST"
        setSearchPhrase={() => {}}
        setIsSearchBarClicked={() => {}}
      />
    )
    .toJSON();

  expect(snap).toMatchSnapshot();
});
