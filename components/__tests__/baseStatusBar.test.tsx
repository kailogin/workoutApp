import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { BaseStatusBar } from "../baseStatusBar";

test(`BaseText snapshot`, () => {
  const snap = renderer.create(<BaseStatusBar />).toJSON();

  expect(snap).toMatchSnapshot();
});
