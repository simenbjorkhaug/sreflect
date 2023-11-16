// deno-lint-ignore-file ban-ts-comment ban-types
import { isObject } from './isObject.ts'

export function getMetadataKeys(
  target: Object,
) {
  if (!isObject(target)) {
    throw new TypeError('target must be an object')
  }

  if (Object.prototype.hasOwnProperty.call(target, Symbol.metadata)) {
    // @ts-expect-error
    return Object.keys(target[Symbol.metadata])
  } else {
    return []
  }
}
