import { myContainer } from "../config/inversify.config";
import { TYPES } from "../types";
import { IFramework } from "../contract";
import { expect, test, beforeEach, afterEach } from "vitest";

beforeEach(async () => {
  // create a snapshot so each unit test can modify
  // it without breaking other unit tests
  myContainer.snapshot();
});

afterEach(async () => {
  // Restore to last snapshot so each unit test
  // takes a clean copy of the application container
  myContainer.restore();
});

// each test is executed with a snapshot of the container

test("should instantiate nextjs from factory", async () => {
  const nextjs = myContainer.getNamed<IFramework>(TYPES.IFramework, "nextjs");
  expect(await nextjs.addAuth()).toBe("à");
});
