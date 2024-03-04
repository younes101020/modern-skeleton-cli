import { Container } from "inversify";
import { TYPES } from "../types";
import Next from "../entities/frameworks/nextjs/next";
import { NextAuth, NextValidation } from "../entities";
import { IFramework } from "../contract";

const myContainer = new Container();
// NEXTJS
myContainer
  .bind<IFramework>(TYPES.IFramework)
  .to(Next)
  .whenTargetNamed("nextjs");
myContainer.bind<NextAuth>(TYPES.IAuth).to(NextAuth);
myContainer.bind<NextValidation>(TYPES.IValidation).to(NextValidation);

export { myContainer };
