import formatDuration, { pluralize } from "./formatDuration";

describe("formatDuration", () => {
  test("Expect { h: 0, m: 30 } to be converted to '30 mintues'", () => {
    const message = formatDuration({ h: 0, m: 30 });
    expect(message).toBe("30 minutes");
  });

  test("Expect { h: 0, m: 60 } to be converted to '60 mintues'", () => {
    const message = formatDuration({ h: 0, m: 60 });
    expect(message).toBe("1 hour");
  });

  test("Expect duration of '90 minutes' to be not be converted to '1 hour and 30 muntes'", () => {
    const message = formatDuration({ h: 0, m: 90 });
    expect(message).toBe("1 hour 30 minutes");
  });
});

describe("pluralize", () => {
  test("Expect a single item to be spelled without an s", () => {
    const message = pluralize("item", 1);
    expect(message).toBe("item");
  });

  test("Expect multiple items to be spelled with s", () => {
    const message = pluralize("item", 2);
    expect(message).toBe("items");
  });
});
