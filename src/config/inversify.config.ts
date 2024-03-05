import { Container } from "inversify";
import { TYPES } from "../types";
import { Next } from "../entities/frameworks/nextjs";
import {
  IFramework,
  IInit,
  InitProvider,
} from "../entities/frameworks/contract";
import { IValidation } from "../entities/frameworks/nextjs/validations/contract";
import { IAuth } from "../entities/frameworks/nextjs/auths/contract";
import { NextAuth, ZodValidation } from "../entities";

const myContainer = new Container();

// NEXTJS
myContainer
  .bind<IFramework>(TYPES.IFramework)
  .to(Next)
  .whenTargetNamed("nextjs");
// NEXTJS => ZOD
myContainer
  .bind<IValidation>(TYPES.IValidation)
  .to(ZodValidation)
  .whenTargetNamed("zod");
// NEXTJS => NEXTAUTH
myContainer.bind<IAuth>(TYPES.IAuth).to(NextAuth).whenTargetNamed("next-auth");

myContainer
  .bind<InitProvider>(TYPES.InitProvider)
  .toProvider<IInit>((context) => {
    return () => {
      return new Promise<IInit>((resolve) => {
        let init = context.container.get<IInit>(TYPES.IInit);
        resolve(init);
      });
    };
  });

export { myContainer };
