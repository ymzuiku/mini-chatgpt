// Unit Test, Jest, Vitest

import { expect, test } from "vitest";
import { isEmail } from "./is-email";

test("is email", () => {
  expect(isEmail("aaa")).toBeFalsy();
  expect(isEmail("ym@qq.com")).toBeTruthy();
  expect(isEmail("ymjfdklsajfkdlsaf@qq.com")).toBeTruthy();
  expect(isEmail("ymjfdklsajfkdlsaf@qqcom")).toBeFalsy();
  expect(isEmail("ymjfdklsajfkdlsaf@gmail.com")).toBeTruthy();
});
