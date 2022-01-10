import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { Separator } from "../separator";

test(`BaseText snapshot`, () => {
  const snap = renderer.create(<Separator />).toJSON();

  expect(snap).toMatchSnapshot();
});
