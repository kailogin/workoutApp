import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { BaseView } from "../baseView";
import { BaseStatusBar } from "../baseStatusBar";

const children = <BaseStatusBar />;

test(`BaseView snapshot`, () => {
  const snap = renderer.create(<BaseView>{children}</BaseView>).toJSON();

  expect(snap).toMatchSnapshot();
});
