import convertDurationToMinutes from "./convertDurationToMinutes";

test("Expect { h: 0, m: 30 } duration to be converted to 30", () => {
  const minutes = convertDurationToMinutes({ h: 0, m: 30 });
  expect(minutes).toBe(30);
});

test("Expect { h: 1, m: 0 } duration to be converted to 60", () => {
  const minutes = convertDurationToMinutes({ h: 1, m: 0 });
  expect(minutes).toBe(60);
});

test("Expect { h: 1, m: 30 } duration to be converted to 90", () => {
  const minutes = convertDurationToMinutes({ h: 1, m: 30 });
  expect(minutes).toBe(90);
});
