import { computeStatsFromQuotes } from "./computeStatsFromQuotes";
import { Quote } from "../types";
import { findLostQuotes } from "./findLostQuotes";

test("should compute right stats", () => {
  const quotes: Quote[] = [
    {
      id: 0,
      value: 233,
    },
    {
      id: 9,
      value: 444,
    },
  ];
  const startTime = Date.now();
  const record = computeStatsFromQuotes(quotes);
  const lostQuotes = findLostQuotes(quotes);
  const endTime = Date.now();

  const timeSpent = endTime - startTime;

  expect(record.max_value).toBe(444);
  expect(record.mode).toBe(233);
  expect(record.mode_count).toBe(1);
  expect(record.min_value).toBe(233);
  expect(record.avg).toBe(338.5);
  expect(lostQuotes).toBe(8);
  expect(record.standard_deviation).toBe(149.19953083036154);
  expect(record.quotes_count).toBe(2);

  expect(timeSpent).toBeLessThan(1000); // 1 second
  expect(timeSpent).toBeGreaterThanOrEqual(0);
});

test("should compute right stats 2", () => {
  const quotes: Quote[] = [
    {
      id: 1,
      value: 233,
    },
    {
      id: 2,
      value: 101,
    },
    {
      id: 4,
      value: 444,
    },
    {
      id: 5,
      value: 2000,
    },
    {
      id: 21,
      value: 233,
    },
  ];
  const startTime = Date.now();
  const record = computeStatsFromQuotes(quotes);
  const lostQuotes = findLostQuotes(quotes);
  const endTime = Date.now();

  const timeSpent = endTime - startTime;

  expect(record.max_value).toBe(2000);
  expect(record.mode).toBe(233);
  expect(record.mode_count).toBe(2);
  expect(record.min_value).toBe(101);
  expect(record.avg).toBe(602.2);
  expect(lostQuotes).toBe(16);
  expect(record.standard_deviation).toBe(790.9947534592123);
  expect(timeSpent).toBeLessThan(1000); // 1 second
  expect(timeSpent).toBeGreaterThanOrEqual(0);
  expect(record.quotes_count).toBe(5);
});

test("should compute right stats 3", () => {
  const quotes: Quote[] = [
    {
      id: 1,
      value: 1,
    },
    {
      id: 2,
      value: -5032,
    },
    {
      id: 4,
      value: 1,
    },
    {
      id: 5,
      value: 5003,
    },
    {
      id: 6,
      value: 2233,
    },
    {
      id: 7,
      value: 2233,
    },
  ];
  const startTime = Date.now();
  const record = computeStatsFromQuotes(quotes);
  const lostQuotes = findLostQuotes(quotes);
  const endTime = Date.now();

  const timeSpent = endTime - startTime;
  expect(record.max_value).toBe(5003);
  expect(record.mode).toBe(1);
  expect(record.mode_count).toBe(2);
  expect(record.min_value).toBe(-5032);
  expect(record.avg).toBe(739.8333333333334);
  expect(lostQuotes).toBe(1);
  expect(record.standard_deviation).toBe(3377.5580774676055);
  expect(timeSpent).toBeLessThan(1000); // 1 second
  expect(timeSpent).toBeGreaterThanOrEqual(0);
  expect(record.quotes_count).toBe(6);
});

// test("should compute stats for less than 1 second for 50 millions quotes", () => {
//   const quotes: Quote[] = [];
//   const values: number[] = [];
//   for (let i = 0; i < 50_000_000; i++) {
//     const value = Math.ceil(Math.random() * 5000);
//     quotes.push({
//       id: i + 1,
//       value,
//     });
//     values.push(value);
//   }

//   const minValueProfile = profile(() => {
//     return findMinValue(quotes);
//   }, "findMinValue");

//   expect(minValueProfile.timeSpent).toBeLessThanOrEqual(1000);

//   const lostQuotesProfile = profile(() => {
//     return findLostQuotes(quotes);
//   }, "findLostQuotes");
//   expect(lostQuotesProfile.timeSpent).toBeLessThanOrEqual(1000);

//   const computeStatsFromQuotesProfile = profile(() => {
//     return computeStatsFromQuotes(quotes);
//   }, "computeStatsFromQuotes");

//   profile(() => {
//     return computeStandardDeviation2(quotes);
//   }, "computeStandardDevation2");

//   profile(() => {
//     return computeStandardDeviation(values);
//   }, "computeStandardDevation");

//   profile(() => {
//     return calculateMode(quotes)
//   }, 'calculate mode')

//   expect(computeStatsFromQuotesProfile.timeSpent).toBeLessThanOrEqual(1000); // 1 second
// });
