import * as Implementation from './src/index.ts'
// deno-lint-ignore ban-ts-comment
// @ts-expect-error
Symbol.metadata ??= Symbol.for('Symbol.metadata')

declare global {
  namespace Reflect {
    let defineMetadata: typeof Implementation.defineMetadata
    let getMetadata: typeof Implementation.getMetadata
    let deleteMetadata: typeof Implementation.deleteMetadata
    let getMetadataKeys: typeof Implementation.getMetadataKeys
    let hasMetadata: typeof Implementation.hasMetadata
    let metadata: typeof Implementation.metadata
    let decorate: typeof Implementation.decorate
  }
}

export const Reflected = Object.assign(Reflect, {
  defineMetadata: Implementation.defineMetadata,
  getMetadata: Implementation.getMetadata,
  deleteMetadata: Implementation.deleteMetadata,
  getMetadataKeys: Implementation.getMetadataKeys,
  hasMetadata: Implementation.hasMetadata,
  metadata: Implementation.metadata,
  decorate: Implementation.decorate,
})
