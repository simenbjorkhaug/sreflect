import '../mod.ts'
import {
  assert,
  assertEquals,
  assertThrows,
} from 'https://deno.land/std@0.206.0/assert/mod.ts'

Deno.test('A function should have defined Symbol.metadata when metadata is set', () => {
  function targetFunction() {}
  const metadataKey = 'testKey'
  const metadataValue = 'testValue'

  Reflect.defineMetadata(metadataKey, metadataValue, targetFunction)

  // deno-lint-ignore no-prototype-builtins
  assert(targetFunction.hasOwnProperty(Symbol.metadata))
})

Deno.test('Define metadata with invalid target (non-object)', () => {
  assertThrows(
    () => {
      // cast to unknown to avoid TS error
      Reflect.defineMetadata('testKey', 'testValue', 123 as unknown as object)
    },
    TypeError,
    'target must be an object',
  )
})

Deno.test('Define metadata with existing metadata', () => {
  function targetFunction() {}
  const metadataKey = 'testKey'
  const metadataValue = 'testValue'
  const metadataValue2 = 'testValue2'

  Reflect.defineMetadata(metadataKey, metadataValue, targetFunction)
  Reflect.defineMetadata(metadataKey, metadataValue2, targetFunction)

  // deno-lint-ignore no-prototype-builtins
  assert(targetFunction.hasOwnProperty(Symbol.metadata))
  assert(Reflect.getMetadata(metadataKey, targetFunction) === metadataValue2)
})

Deno.test('Test metadata overwrite', () => {
  // deno-lint-ignore no-explicit-any
  const target: any = {}
  const metadataKey = 'testKey'
  Reflect.defineMetadata(metadataKey, 'initialValue', target)
  Reflect.defineMetadata(metadataKey, 'newValue', target)
  assertEquals(target[Symbol.metadata][metadataKey], 'newValue')
})
