# Reflect-metadata adapted to Symbol.metadata

This implementation does not follow spec completely, but implements some of the
ideas\
from tc39 proposals of decorator metadata and reflect-metadata.

Use at your own risk / caution.

Credit to: <https://github.com/rbuckton/reflect-metadata/>

Typescript must emit metadata for this to work and the polyfill must be imported
at the very\
entrypoint to your application.

## Example of use

---

```typescript
/**
 * Note: it is important to add sreflect to the very
 * beginning of your app to polyfill Reflect
 */
import '@bjorkhaug/sreflect'

// Define metadata on an object
const obj = {}
Reflect.defineMetadata('key', 'value', obj)

// Check if the object has the defined metadata
if (Reflect.hasMetadata('key', obj)) {
  // Metadata exists!
}

// Get the metadata value
const value = Reflect.getMetadata('key', obj)

// Get all metadata keys
const keys = Reflect.getMetadataKeys(obj)

// Delete the metadata
Reflect.deleteMetadata('key', obj)

// Use the decorate function
const decorators = [
  function (target: any) {
    // ...
  },
]
Reflect.decorate(decorators, obj)
```
