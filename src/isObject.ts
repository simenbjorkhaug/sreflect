// deno-lint-ignore-file ban-types
export function isObject(
  target: unknown,
): target is Object {
  return target !== null &&
    (
      typeof target === 'object' ||
      typeof target === 'function'
    )
}
