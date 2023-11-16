// deno-lint-ignore-file ban-ts-comment ban-types
import { isObject } from './isObject.ts'

export function getMetadata(
  metadataKey: string | symbol,
  target: Object,
  propertyKey?: string | symbol,
): unknown {
  if (!isObject(target)) {
    throw new TypeError('target must be an object')
  }

  const key = propertyKey ?? metadataKey

  if (Object.prototype.hasOwnProperty.call(target, Symbol.metadata)) {
    // @ts-expect-error
    return target[Symbol.metadata][key]
  } else {
    return undefined
  }
}
