type METHOD_NAME = string;
type V_NAME = "input" | "output";

function getContent<METHOD_NAME, V_NAME>(
  methodName: METHOD_NAME,
  vName: V_NAME,
  ...args: any[]
): { fName: METHOD_NAME; vName: V_NAME; message: string } {
  let message = JSON.stringify(args);

  return {
    fName: methodName,
    vName: vName,
    message: message,
  };
}

export function METHOD_IO_LOGGER(): ClassDecorator {
  return (target: any) => {
    const classMethods = Object.getOwnPropertyNames(target.prototype);

    classMethods.forEach((methodName: string) => {
      if (methodName !== "constructor") {
        const originalMethod = target.prototype[methodName];

        if (originalMethod.constructor.name === "AsyncFunction") {
          target.prototype[methodName] = async function (...args: any[]) {
            const input = getContent(methodName, "input", args);
            console.log(input);

            const result = await originalMethod.apply(this, args);
            const output = getContent(methodName, "output", result);
            console.log(output);

            return result;
          };
        } else {
          target.prototype[methodName] = function (...args: any[]) {
            const input = getContent(methodName, "input", args);
            console.log(input);

            const result = originalMethod.apply(this, args);
            const output = getContent(methodName, "output", result);
            console.log(output);

            return result;
          };
        }
      }
    });
  };
}
