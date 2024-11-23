import { describe, it, expect } from "vitest";

import { divideNgos } from "@/components/BubbleCarousel";

describe("divideNgo()", () => {
  it("should return empty when array is empty", () => {
    const arr = [] as any;
    const chunkSize = 6;
    const limit = 18;

    const result = divideNgos(arr, chunkSize, limit);

    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });

  it("should return an array with 3 elements when array has 18 elements and chunkSize is 6", () => {
    const arr = new Array(18).fill({});
    const chunkSize = 6;
    const limit = 18;

    const result = divideNgos(arr, chunkSize, limit);

    expect(result).toHaveLength(3);
  });

  it("should return an array with 2 elements when array has 12 elements and chunkSize is 6", () => {
    const arr = new Array(12).fill({});
    const chunkSize = 6;
    const limit = 18;

    const result = divideNgos(arr, chunkSize, limit);

    expect(result).toHaveLength(2);
  });

  it("should return an array with 2 elements when array has 100 elements, chunkSize is 6 but the limit is 10", () => {
    const arr = new Array(100).fill({});
    const chunkSize = 6;
    const limit = 10;

    const result = divideNgos(arr, chunkSize, limit);

    expect(result).toHaveLength(2);
  });
});
