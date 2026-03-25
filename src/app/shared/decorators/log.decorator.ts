export function Log(label?: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const originalMethod = descriptor.value;
    const tag = label ?? propertyKey;

    descriptor.value = function (...args: any[]) {
      console.log(`[Log] ${tag} called with args:`, args);
      const result = originalMethod.apply(this, args);
      console.log(`[Log] ${tag} returned:`, result);
      return result;
    };

    return descriptor;
  };
}
