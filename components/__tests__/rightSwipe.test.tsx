import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { RightSwipe } from "../rightSwipe";

const TEXT = "Test Text";

test(`BaseText snapshot`, () => {
  const snap = renderer
    .create(<RightSwipe handleClick={() => null} />)
    .toJSON();

  expect(snap).toMatchSnapshot();
});
