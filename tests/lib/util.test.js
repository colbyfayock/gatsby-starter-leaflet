import { isDomAvailable } from "lib/util";

describe("lib::util", () => {
  describe("isDomAvailable", () => {
    let originalWindow = { ...global.window };

    afterEach(() => {
      Object.defineProperty(global, "window", {
        value: originalWindow,
        writable: true,
      });
    });

    it("should return true when document create is available", () => {
      Object.defineProperty(global, "window", {
        value: {
          document: {
            createElement: () => {},
          },
        },
        writable: true,
      });
      expect(isDomAvailable()).toEqual(true);
    });

    it("should return false with window not available", () => {
      expect(isDomAvailable()).toEqual(false);
    });

    it("should return false with document create not available", () => {
      Object.defineProperty(global, "window", {
        value: {
          document: undefined,
        },
        writable: true,
      });
      expect(isDomAvailable()).toEqual(false);
    });
  });
});
