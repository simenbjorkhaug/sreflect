// deno-lint-ignore-file ban-types
import { isObject } from './isObject.ts'

export function hasMetadata(
  metadataKey: string | symbol,
  target: Object,
  propertyKey?: string | symbol,
) {
  if (!isObject(target)) {
    throw new TypeError('target must be an object')
  }

  const key = propertyKey ?? metadataKey

  if (Object.prototype.hasOwnProperty.call(target, Symbol.metadata)) {
    // deno-lint-ignore ban-ts-comment
    // @ts-expect-error
    return key in target[Symbol.metadata]
  } else {
    return false
  }
}
