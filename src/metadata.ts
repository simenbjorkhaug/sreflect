// deno-lint-ignore-file ban-types
import { defineMetadata } from './defineMetadata.ts'

export function metadata(
  metadataKey: string | symbol,
  // deno-lint-ignore no-explicit-any
  metadataValue: any,
) {
  return function (target: Object, propertyKey?: string | symbol) {
    return defineMetadata(metadataKey, metadataValue, target, propertyKey)
  }
}
