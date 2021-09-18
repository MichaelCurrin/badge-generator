import { Repo } from "@/core/Repo";
import {
  dashShieldPath,
  ENVIRONMENT,
  ghCounterShieldUrl,
  logoQueryParams,
  nodePkgJsonShieldUrl,
  staticDashUrl, staticParamsUrl, _decodeAngleBrackets,
  _encodeParam,
  _encodeSeparators
} from "@/core/shieldsApi";

describe("#_encodeSeparators", () => {
  it("converts a space to an underscore", () => {
    expect(_encodeSeparators("Foo Bar", true)).toBe("Foo_Bar");
  });
  it("will ignore transforming a space", () => {
    expect(_encodeSeparators("Foo Bar", false)).toBe("Foo Bar");
  });

  it("converts a single dash to two", () => {
    expect(_encodeSeparators("Foo-Bar", true)).toBe("Foo--Bar");
  });

  it("converts a single underscore to two", () => {
    expect(_encodeSeparators("Foo_Bar", true)).toBe("Foo__Bar");
  });

  it("converts a mix of space, underscore and a dash correctly", () => {
    expect(_encodeSeparators("Foo Bar_Baz-Buzz", true)).toBe(
      "Foo_Bar__Baz--Buzz"
    );
  });
});

describe("#_decodeAngleBrackets", () => {
  it("decodes a left angle bracket", () => {
    expect(_decodeAngleBrackets("%3E%3D1")).toBe(">=1");
  });

  it("decodes a right angle bracket", () => {
    expect(_decodeAngleBrackets("foo%3C1")).toBe("foo<1");
  });

  it("decodes an equals sign", () => {
    expect(_decodeAngleBrackets("foo%3D1")).toBe("foo=1");
  });
});

describe("#_encodeParam", () => {
  it("converts a space to an underscore", () => {
    expect(_encodeParam("Foo Bar")).toBe("Foo_Bar");
  });

  it("converts a single dash to two", () => {
    expect(_encodeParam("Foo-Bar")).toBe("Foo--Bar");
  });

  it("converts a single underscore to two", () => {
    expect(_encodeParam("Foo_Bar")).toBe("Foo__Bar");
  });

  it("converts a mix of space, underscore and a dash correctly", () => {
    expect(_encodeParam("Foo Bar_Baz-Buzz")).toBe("Foo_Bar__Baz--Buzz");
  });

  // These could appear when putting a URL as a value in the path, so need to be escaped.
  it("encodes special characters correctly", () => {
    expect(_encodeParam("?")).toBe("%3F");
    expect(_encodeParam("#")).toBe("%23");
    expect(_encodeParam("&")).toBe("%26");
    expect(_encodeParam("/")).toBe("%2F");
  });

  it("encodes a string correctly without converting angle brackets and equals sign", () => {
    expect(_encodeParam(">=3")).toBe(">=3");
    expect(_encodeParam("<2")).toBe("<2");
  });
});

describe("#dashShieldPath", () => {
  it("combines 2 fields", () => {
    expect(dashShieldPath({ message: "Foo", color: "green" })).toBe(
      "Foo-green"
    );
  });

  it("combines 3 fields", () => {
    expect(
      dashShieldPath({ label: "Bar", message: "Foo", color: "green" })
    ).toBe("Bar-Foo-green");
  });

  it("combines 3 fields using a space in one value", () => {
    expect(
      dashShieldPath({ label: "Baz", message: "Foo Bar", color: "green" })
    ).toBe("Baz-Foo_Bar-green");
  });

  it("combines 3 fields and applies encoding", () => {
    expect(
      dashShieldPath({ label: "Foo & #Bar?", message: "Baz!", color: "green" })
    ).toBe("Foo_%26_%23Bar%3F-Baz!-green");
  });

  it("combines 3 fields and applies escaping", () => {
    expect(
      dashShieldPath({ label: "Baz-Buzz", message: "Foo", color: "green" })
    ).toBe("Baz--Buzz-Foo-green");

    expect(
      dashShieldPath({ label: "Baz_Buzz", message: "Foo", color: "green" })
    ).toBe("Baz__Buzz-Foo-green");

    // Ideally this would be >=
    expect(
      dashShieldPath({ label: "Foo", message: ">=1.0.0", color: "green" })
    ).toBe("Foo->=1.0.0-green");
  });
});

describe("#logoParams", () => {
  it("returns null params", () => {
    expect(logoQueryParams({ isLarge: false })).toStrictEqual({});
  });

  it("returns a large badge", () => {
    expect(logoQueryParams({ isLarge: true })).toStrictEqual({
      style: "for-the-badge",
    });
  });

  it("returns a logo name", () => {
    expect(logoQueryParams({ isLarge: false, logo: "foo" })).toStrictEqual({
      logo: "foo",
    });
  });

  it("returns a logo name and logo color", () => {
    expect(
      logoQueryParams({ isLarge: false, logo: "foo", logoColor: "white" })
    ).toStrictEqual({
      logo: "foo",
      logoColor: "white",
    });
  });

  it("returns a logo name and logo color for a large badge", () => {
    expect(
      logoQueryParams({ isLarge: true, logo: "foo", logoColor: "white" })
    ).toStrictEqual({
      style: "for-the-badge",
      logo: "foo",
      logoColor: "white",
    });
  });

  it("ignores a logo color with no logo name", () => {
    expect(
      logoQueryParams({ isLarge: false, logo: "", logoColor: "white" })
    ).toStrictEqual({});
  });
});

describe("#staticParamsUrl", () => {
  it("returns a valid params URL with empty style params", () => {
    expect(
      staticParamsUrl(
        {
          label: "Foo",
          message: "Bar",
          color: "green",
        },
        {}
      )
    ).toBe(
      "https://img.shields.io/static/v1?label=Foo&message=Bar&color=green"
    );
  });

  it("returns a valid params URL with set style params", () => {
    expect(
      staticParamsUrl(
        {
          label: "Foo",
          message: "Bar",
          color: "green",
        },
        { fizz: "buzz" }
      )
    ).toBe(
      "https://img.shields.io/static/v1?label=Foo&message=Bar&color=green&fizz=buzz"
    );
  });
});

describe("#staticDashUrl", () => {
  it("returns a valid dash URL with empty style params", () => {
    expect(
      staticDashUrl(
        {
          label: "Foo",
          message: "Bar",
          color: "green",
        },
        {}
      )
    ).toBe("https://img.shields.io/badge/Foo-Bar-green");
  });

  it("returns a valid dash URL with set style params", () => {
    expect(
      staticDashUrl(
        {
          label: "Foo",
          message: "Bar",
          color: "green",
        },
        { fizz: "buzz" }
      )
    ).toBe("https://img.shields.io/badge/Foo-Bar-green?fizz=buzz");
  });
});

describe("#ghCounterShieldUrl", () => {
  const repo = {
    username: "MichaelCurrin",
    repoName: "badge-generator",
  };

  it("return a valid stars counter URL", () => {
    expect(ghCounterShieldUrl("stars", repo)).toBe(
      "https://img.shields.io/github/stars/MichaelCurrin/badge-generator?style=social"
    );
  });

  it("return a valid forks counter URL", () => {
    const expectedUrl =
      "https://img.shields.io/github/forks/MichaelCurrin/badge-generator?style=social";

    expect(ghCounterShieldUrl("forks", repo)).toBe(expectedUrl);
  });

  it("return a valid issues counter URL", () => {
    expect(ghCounterShieldUrl("issues", repo)).toBe(
      "https://img.shields.io/github/issues/MichaelCurrin/badge-generator"
    );
  });
});

describe("#nodePkgJsonShieldUrl", () => {
  const repo = new Repo("MichaelCurrin", "badge-generator");

  describe("prod dependency", () => {
    const pkgName = "vue";

    it("return a valid dynamic Node packages URL", () => {
      expect(nodePkgJsonShieldUrl(repo, pkgName, ENVIRONMENT.Prod)).toBe(
        "https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/vue"
      );
    });
  });

  describe("dev dependency", () => {
    const pkgName = "typescript";

    it("return a valid dynamic Node packages URL", () => {
      expect(nodePkgJsonShieldUrl(repo, pkgName, ENVIRONMENT.Dev)).toBe(
        "https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/dev/typescript"
      );
    });
  });
});
