// deno-lint-ignore-file ban-types no-explicit-any
import './mod.ts'

const ResolveDependencies = Symbol('resolve:dependencies')

class Container {
  static [ResolveDependencies](target: Object) {
    const { dependencies }: any =
      Reflect.getMetadata('di:injectable', target) ?? {}

    if (dependencies) {
      return new (target as any)(...dependencies.map((dep: any) => {
        return Container[ResolveDependencies](dep)
      }))
    }

    return new (target as any)()
  }

  static get(target: Object) {
    return Container[ResolveDependencies](target)
    // return new registered()
  }
}

function Injectable() {
  return function (target: Object) {
    Reflect.defineMetadata('di:injectable', {
      dependencies: Reflect.getMetadata('design:paramtypes', target),
    }, target)
  }
}

@Injectable()
class _Db {
  message() {
    console.log('Hello world')
  }
}

@Injectable()
class Test {
  constructor(private readonly db: _Db) {}

  test() {
    this.db.message()
  }
}

const instance = Container.get(Test)

instance.test()
