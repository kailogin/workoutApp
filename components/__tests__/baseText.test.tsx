import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { FlatList } from "react-native";

import { BaseText } from "../baseText";

const TEXT = "Test Text";

test(`BaseText snapshot`, () => {
  const snap = renderer.create(<BaseText>{TEXT}</BaseText>).toJSON();

  expect(snap).toMatchSnapshot();
});

it("renders the Flatlist component with BaseText as renderItem", () => {
  const tree = renderer
    .create(
      <FlatList
        data={["Item1", "Item2", "Item3"]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <BaseText>{item}</BaseText>}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
