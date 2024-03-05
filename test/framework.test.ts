import { myContainer } from "../src/config/inversify.config";
import { TYPES } from "../src/types";
import { IFramework } from "../src/entities/frameworks/contract";
import { expect, test, beforeEach, afterEach, describe, expectTypeOf } from "vitest";
import { faker } from "@faker-js/faker";

describe("auth", () => {
  beforeEach(async () => {
    // create a snapshot so each unit test can modify
    // it without breaking other unit tests
    myContainer.snapshot();
    myContainer
      .bind<string>(TYPES.project)
      .toConstantValue(faker.person.firstName());
  });

  afterEach(async () => {
    // Restore to last snapshot so each unit test
    // takes a clean copy of the application container
    myContainer.restore();
  });

  // each test is executed with a snapshot of the container

  test("should implement nextjs", async () => {
    const nextjs = myContainer.getNamed<IFramework>(TYPES.IFramework, "nextjs");
  });
});
