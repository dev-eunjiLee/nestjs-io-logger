function createAsyncFunctionWithLog(
  methodName: string,
  originalMethod: (...args: any[]) => Promise<any>
): (...args: any[]) => Promise<any> {
  return async function (...args: any[]) {
    console.log(`
            fName: ${methodName},
            vname: input,
            message: ${args}
        `);

    const result = await originalMethod.apply(this, args);
    console.log(`
            fName: ${methodName},
            vName: output,
            message: ${result},
        `);

    return result;
  };
}

function createFunctionWithLog(
  methodName: string,
  originalMethod: (...args: any[]) => any
): (...args: any[]) => any {
  return function (...args: any[]) {
    console.log(`
            fName: ${methodName},
            vname: input,
            message: ${args}
        `);

    const result = originalMethod.apply(this, args);
    console.log(`
            fName: ${methodName},
            vName: output,
            message: ${result},
        `);

    return result;
  };
}

function METHOD_IO_LOGGER(): ClassDecorator {
  return (target: any) => {
    const classMethods = Object.getOwnPropertyNames(target.prototype);

    classMethods.forEach((methodName: string) => {
      if (methodName !== "constructor") {
        const originalMethod = target.prototype[methodName];

        if (originalMethod.constructor.name === "AsyncFunction") {
          target.prototype[methodName] = createAsyncFunctionWithLog(
            methodName,
            originalMethod
          );
        } else {
          target.prototype[methodName] = createFunctionWithLog(
            methodName,
            originalMethod
          );
        }
      }
    });
  };
}
