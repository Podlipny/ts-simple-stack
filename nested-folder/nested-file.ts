interface nestedOobjectInterface {
  name: string;
  description: string;
};

export const nestedObject: nestedOobjectInterface = {
  name: 'nested object',
  description: 'description',
};

export class MyClass {
  myMethod = (): nestedOobjectInterface => {
    return nestedObject
  }
}