import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { BaseModal } from "../baseModal";

const children = <h4>Test me</h4>;

test("Test BaseModal", () => {
  const snap = renderer
    .create(
      <BaseModal handleClose={() => null} isVisible={true}>
        {children}
      </BaseModal>
    )
    .toJSON();

  expect(snap).toMatchSnapshot();
});
