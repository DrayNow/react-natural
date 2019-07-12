import parseDuration from "./parseDuration";

describe("parseDuration", () => {
  test("Expect '2 hours and 30 minutes' to be converted to { h: 2, m: 30 }", () => {
    const duration = parseDuration("2 hours and 30 minutes");
    expect(duration.h).toBe(2);
    expect(duration.m).toBe(30);
  });

  test("Expect '3 hr' to be converted to { h: 3, m: 0 }", () => {
    const duration = parseDuration("3 hr");
    expect(duration.h).toBe(3);
    expect(duration.m).toBe(0);
  });

  test("Expect '5hr20m' to be converted to { h: 5, m: 20 }", () => {
    const duration = parseDuration("5hr20m");
    expect(duration.h).toBe(5);
    expect(duration.m).toBe(20);
  });

  test("Expect '90m' to be converted to { h: 2, m: 30 }", () => {
    const duration = parseDuration("90m");
    expect(duration.h).toBe(1);
    expect(duration.m).toBe(30);
  });
});
