// deno-lint-ignore-file ban-ts-comment no-explicit-any ban-types
import { isObject } from './isObject.ts'

export function defineMetadata(
  metadataKey: string | symbol,
  metadataValue: any,
  target: Object,
  propertyKey?: string | symbol,
) {
  if (!isObject(target)) {
    throw new TypeError('target must be an object')
  }

  const key = propertyKey ?? metadataKey

  if (Object.prototype.hasOwnProperty.call(target, Symbol.metadata)) {
    // @ts-expect-error
    Object.assign(target[Symbol.metadata], {
      [key]: metadataValue,
    })
  } else {
    Object.defineProperty(target, Symbol.metadata, {
      value: {
        [key]: metadataValue,
      },
      enumerable: false,
      configurable: true,
      writable: false,
    })
  }
}
