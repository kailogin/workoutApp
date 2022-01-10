import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { YouTubeView } from "../youtubeView";

test(`BaseText snapshot`, () => {
  const snap = renderer.create(<YouTubeView youtubeId="testMe" />).toJSON();

  expect(snap).toMatchSnapshot();
});
