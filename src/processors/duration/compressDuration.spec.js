import compressDuration from "./compressDuration";

test("Expect duration of '60 minutes' to be converted to '1 hour'", () => {
  const duration = compressDuration({ h: 0, m: 60 });
  expect(duration.h).toBe(1);
  expect(duration.m).toBe(0);
});

test("Expect duration of '30 minutes' to be not be converted", () => {
  const duration = compressDuration({ h: 0, m: 30 });
  expect(duration.h).toBe(0);
  expect(duration.m).toBe(30);
});

test("Expect duration of '90 minutes' to be not be converted to '1 hour and 30 muntes'", () => {
  const duration = compressDuration({ m: 90 });
  expect(duration.h).toBe(1);
  expect(duration.m).toBe(30);
});
