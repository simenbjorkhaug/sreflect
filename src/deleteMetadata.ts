// deno-lint-ignore-file ban-types
import { isObject } from './isObject.ts'

export function deleteMetadata(
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
    delete target[Symbol.metadata][key]
  }
}
