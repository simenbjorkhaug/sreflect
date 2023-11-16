// deno-lint-ignore-file no-explicit-any
import { isObject } from './isObject.ts'

export function decorate(
  decorators: any[],
  target: any,
  propertyKey: symbol | string | undefined,
  descriptor: any,
) {
  if (typeof propertyKey !== 'undefined') {
    for (const decorator of decorators.toReversed()) {
      const decorated = decorator(target, propertyKey, descriptor)
      if (typeof decorated !== 'undefined' && decorated !== null) {
        if (!isObject(decorated)) {
          throw new TypeError('decorated value must be an object')
        }

        descriptor = decorated
      }
    }

    return descriptor
  } else {
    for (const decorator of decorators.toReversed()) {
      const decorated = decorator(target)
      if (typeof decorated !== 'undefined' && decorated !== null) {
        if (typeof decorated !== 'function') {
          throw new TypeError('decorated value must be an object')
        }
        target = decorated
      }
    }

    return target
  }
}
