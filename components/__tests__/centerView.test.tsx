import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { CenterView } from "../centerView";
import { BaseText } from "../baseText";

const children = <BaseText>TEST ME </BaseText>;

test(`CenterView snapshot`, () => {
  const snap = renderer.create(<CenterView>{children}</CenterView>).toJSON();

  expect(snap).toMatchSnapshot();
});
