
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Client
 * 
 */
export type Client = {
  id: string
  dni: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: number
  isActive: boolean
}

/**
 * Model Benefits
 * 
 */
export type Benefits = {
  id: string
  name: string
  discountPercentage: number
  refoundCap: number
  valideSince: Date
  valideTo: Date
  isActive: boolean
}

/**
 * Model Coin
 * 
 */
export type Coin = {
  id: string
  name: string
  description: string
  quotationReference: number
  annualPerformance: number
  isActive: boolean
}

/**
 * Model MovementData
 * 
 */
export type MovementData = {
  id: string
  date: Date
  type: string
  clientId: string
  senderWalletAddress: string
  receiverWalletAddress: string
  coinId: string
  amount: number
  fee: number
  isActive: boolean
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clients
 * const clients = await prisma.client.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): PrismaPromise<Prisma.JsonObject>;

      /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<GlobalReject>;

  /**
   * `prisma.benefits`: Exposes CRUD operations for the **Benefits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Benefits
    * const benefits = await prisma.benefits.findMany()
    * ```
    */
  get benefits(): Prisma.BenefitsDelegate<GlobalReject>;

  /**
   * `prisma.coin`: Exposes CRUD operations for the **Coin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coins
    * const coins = await prisma.coin.findMany()
    * ```
    */
  get coin(): Prisma.CoinDelegate<GlobalReject>;

  /**
   * `prisma.movementData`: Exposes CRUD operations for the **MovementData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovementData
    * const movementData = await prisma.movementData.findMany()
    * ```
    */
  get movementData(): Prisma.MovementDataDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Extensions
   */
  export type Extension = runtime.Extension 

  /**
   * Prisma Client JS version: 4.5.0
   * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export type JsonArray = Array<JsonValue>

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export type InputJsonArray = ReadonlyArray<InputJsonValue | null>

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends bigint
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends boolean, B2 extends boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Client: 'Client',
    Benefits: 'Benefits',
    Coin: 'Coin',
    MovementData: 'MovementData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientCountOutputType
   */


  export type ClientCountOutputType = {
    movementData: number
  }

  export type ClientCountOutputTypeSelect = {
    movementData?: boolean
  }

  export type ClientCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ClientCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ClientCountOutputType
    : S extends undefined
    ? never
    : S extends ClientCountOutputTypeArgs
    ?'include' extends U
    ? ClientCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ClientCountOutputType ? ClientCountOutputType[P] : never
  } 
    : ClientCountOutputType
  : ClientCountOutputType




  // Custom InputTypes

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     * 
    **/
    select?: ClientCountOutputTypeSelect | null
  }



  /**
   * Count Type CoinCountOutputType
   */


  export type CoinCountOutputType = {
    movementData: number
  }

  export type CoinCountOutputTypeSelect = {
    movementData?: boolean
  }

  export type CoinCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CoinCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CoinCountOutputType
    : S extends undefined
    ? never
    : S extends CoinCountOutputTypeArgs
    ?'include' extends U
    ? CoinCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CoinCountOutputType ? CoinCountOutputType[P] : never
  } 
    : CoinCountOutputType
  : CoinCountOutputType




  // Custom InputTypes

  /**
   * CoinCountOutputType without action
   */
  export type CoinCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CoinCountOutputType
     * 
    **/
    select?: CoinCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Client
   */


  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    phoneNumber: number | null
  }

  export type ClientSumAggregateOutputType = {
    phoneNumber: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    dni: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: number | null
    isActive: boolean | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    dni: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: number | null
    isActive: boolean | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    dni: number
    firstName: number
    lastName: number
    email: number
    phoneNumber: number
    isActive: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    phoneNumber?: true
  }

  export type ClientSumAggregateInputType = {
    phoneNumber?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    dni?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    isActive?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    dni?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    isActive?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    dni?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    isActive?: true
    _all?: true
  }

  export type ClientAggregateArgs = {
    /**
     * Filter which Client to aggregate.
     * 
    **/
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     * 
    **/
    orderBy?: Enumerable<ClientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs = {
    where?: ClientWhereInput
    orderBy?: Enumerable<ClientOrderByWithAggregationInput>
    by: Array<ClientScalarFieldEnum>
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }


  export type ClientGroupByOutputType = {
    id: string
    dni: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: number
    isActive: boolean
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect = {
    id?: boolean
    dni?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    movementData?: boolean | MovementDataFindManyArgs
    _count?: boolean | ClientCountOutputTypeArgs
  }

  export type ClientInclude = {
    movementData?: boolean | MovementDataFindManyArgs
    _count?: boolean | ClientCountOutputTypeArgs
  }

  export type ClientGetPayload<
    S extends boolean | null | undefined | ClientArgs,
    U = keyof S
      > = S extends true
        ? Client
    : S extends undefined
    ? never
    : S extends ClientArgs | ClientFindManyArgs
    ?'include' extends U
    ? Client  & {
    [P in TrueKeys<S['include']>]:
        P extends 'movementData' ? Array < MovementDataGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? ClientCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'movementData' ? Array < MovementDataGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? ClientCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Client ? Client[P] : never
  } 
    : Client
  : Client


  type ClientCountArgs = Merge<
    Omit<ClientFindManyArgs, 'select' | 'include'> & {
      select?: ClientCountAggregateInputType | true
    }
  >

  export interface ClientDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClientFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Client'> extends True ? CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>> : CheckSelect<T, Prisma__ClientClient<Client | null, null>, Prisma__ClientClient<ClientGetPayload<T> | null, null>>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClientFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Client'> extends True ? CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>> : CheckSelect<T, Prisma__ClientClient<Client | null, null>, Prisma__ClientClient<ClientGetPayload<T> | null, null>>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClientFindManyArgs>(
      args?: SelectSubset<T, ClientFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Client>>, PrismaPromise<Array<ClientGetPayload<T>>>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
    **/
    create<T extends ClientCreateArgs>(
      args: SelectSubset<T, ClientCreateArgs>
    ): CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>>

    /**
     * Create many Clients.
     *     @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     *     @example
     *     // Create many Clients
     *     const client = await prisma.client.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientCreateManyArgs>(
      args?: SelectSubset<T, ClientCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
    **/
    delete<T extends ClientDeleteArgs>(
      args: SelectSubset<T, ClientDeleteArgs>
    ): CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientUpdateArgs>(
      args: SelectSubset<T, ClientUpdateArgs>
    ): CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientDeleteManyArgs>(
      args?: SelectSubset<T, ClientDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientUpdateManyArgs>(
      args: SelectSubset<T, ClientUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
    **/
    upsert<T extends ClientUpsertArgs>(
      args: SelectSubset<T, ClientUpsertArgs>
    ): CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>>

    /**
     * Find zero or more Clients that matches the filter.
     * @param {ClientFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const client = await prisma.client.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ClientFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Client.
     * @param {ClientAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const client = await prisma.client.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ClientAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Client that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ClientFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>>

    /**
     * Find the first Client that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ClientFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>>

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClientClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    movementData<T extends MovementDataFindManyArgs = {}>(args?: Subset<T, MovementDataFindManyArgs>): CheckSelect<T, PrismaPromise<Array<MovementData>| Null>, PrismaPromise<Array<MovementDataGetPayload<T>>| Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Client base type for findUnique actions
   */
  export type ClientFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * Filter, which Client to fetch.
     * 
    **/
    where: ClientWhereUniqueInput
  }

  /**
   * Client: findUnique
   */
  export interface ClientFindUniqueArgs extends ClientFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Client base type for findFirst actions
   */
  export type ClientFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * Filter, which Client to fetch.
     * 
    **/
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     * 
    **/
    orderBy?: Enumerable<ClientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     * 
    **/
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     * 
    **/
    distinct?: Enumerable<ClientScalarFieldEnum>
  }

  /**
   * Client: findFirst
   */
  export interface ClientFindFirstArgs extends ClientFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Client findMany
   */
  export type ClientFindManyArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * Filter, which Clients to fetch.
     * 
    **/
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     * 
    **/
    orderBy?: Enumerable<ClientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     * 
    **/
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ClientScalarFieldEnum>
  }


  /**
   * Client create
   */
  export type ClientCreateArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * The data needed to create a Client.
     * 
    **/
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }


  /**
   * Client createMany
   */
  export type ClientCreateManyArgs = {
    /**
     * The data used to create many Clients.
     * 
    **/
    data: Enumerable<ClientCreateManyInput>
  }


  /**
   * Client update
   */
  export type ClientUpdateArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * The data needed to update a Client.
     * 
    **/
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     * 
    **/
    where: ClientWhereUniqueInput
  }


  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs = {
    /**
     * The data used to update Clients.
     * 
    **/
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     * 
    **/
    where?: ClientWhereInput
  }


  /**
   * Client upsert
   */
  export type ClientUpsertArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * The filter to search for the Client to update in case it exists.
     * 
    **/
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     * 
    **/
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }


  /**
   * Client delete
   */
  export type ClientDeleteArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * Filter which Client to delete.
     * 
    **/
    where: ClientWhereUniqueInput
  }


  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs = {
    /**
     * Filter which Clients to delete
     * 
    **/
    where?: ClientWhereInput
  }


  /**
   * Client findRaw
   */
  export type ClientFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Client aggregateRaw
   */
  export type ClientAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Client: findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs = ClientFindUniqueArgsBase
      

  /**
   * Client: findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs = ClientFindFirstArgsBase
      

  /**
   * Client without action
   */
  export type ClientArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
  }



  /**
   * Model Benefits
   */


  export type AggregateBenefits = {
    _count: BenefitsCountAggregateOutputType | null
    _avg: BenefitsAvgAggregateOutputType | null
    _sum: BenefitsSumAggregateOutputType | null
    _min: BenefitsMinAggregateOutputType | null
    _max: BenefitsMaxAggregateOutputType | null
  }

  export type BenefitsAvgAggregateOutputType = {
    discountPercentage: number | null
    refoundCap: number | null
  }

  export type BenefitsSumAggregateOutputType = {
    discountPercentage: number | null
    refoundCap: number | null
  }

  export type BenefitsMinAggregateOutputType = {
    id: string | null
    name: string | null
    discountPercentage: number | null
    refoundCap: number | null
    valideSince: Date | null
    valideTo: Date | null
    isActive: boolean | null
  }

  export type BenefitsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    discountPercentage: number | null
    refoundCap: number | null
    valideSince: Date | null
    valideTo: Date | null
    isActive: boolean | null
  }

  export type BenefitsCountAggregateOutputType = {
    id: number
    name: number
    discountPercentage: number
    refoundCap: number
    valideSince: number
    valideTo: number
    isActive: number
    _all: number
  }


  export type BenefitsAvgAggregateInputType = {
    discountPercentage?: true
    refoundCap?: true
  }

  export type BenefitsSumAggregateInputType = {
    discountPercentage?: true
    refoundCap?: true
  }

  export type BenefitsMinAggregateInputType = {
    id?: true
    name?: true
    discountPercentage?: true
    refoundCap?: true
    valideSince?: true
    valideTo?: true
    isActive?: true
  }

  export type BenefitsMaxAggregateInputType = {
    id?: true
    name?: true
    discountPercentage?: true
    refoundCap?: true
    valideSince?: true
    valideTo?: true
    isActive?: true
  }

  export type BenefitsCountAggregateInputType = {
    id?: true
    name?: true
    discountPercentage?: true
    refoundCap?: true
    valideSince?: true
    valideTo?: true
    isActive?: true
    _all?: true
  }

  export type BenefitsAggregateArgs = {
    /**
     * Filter which Benefits to aggregate.
     * 
    **/
    where?: BenefitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     * 
    **/
    orderBy?: Enumerable<BenefitsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BenefitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Benefits
    **/
    _count?: true | BenefitsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BenefitsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BenefitsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BenefitsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BenefitsMaxAggregateInputType
  }

  export type GetBenefitsAggregateType<T extends BenefitsAggregateArgs> = {
        [P in keyof T & keyof AggregateBenefits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBenefits[P]>
      : GetScalarType<T[P], AggregateBenefits[P]>
  }




  export type BenefitsGroupByArgs = {
    where?: BenefitsWhereInput
    orderBy?: Enumerable<BenefitsOrderByWithAggregationInput>
    by: Array<BenefitsScalarFieldEnum>
    having?: BenefitsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BenefitsCountAggregateInputType | true
    _avg?: BenefitsAvgAggregateInputType
    _sum?: BenefitsSumAggregateInputType
    _min?: BenefitsMinAggregateInputType
    _max?: BenefitsMaxAggregateInputType
  }


  export type BenefitsGroupByOutputType = {
    id: string
    name: string
    discountPercentage: number
    refoundCap: number
    valideSince: Date
    valideTo: Date
    isActive: boolean
    _count: BenefitsCountAggregateOutputType | null
    _avg: BenefitsAvgAggregateOutputType | null
    _sum: BenefitsSumAggregateOutputType | null
    _min: BenefitsMinAggregateOutputType | null
    _max: BenefitsMaxAggregateOutputType | null
  }

  type GetBenefitsGroupByPayload<T extends BenefitsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BenefitsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BenefitsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BenefitsGroupByOutputType[P]>
            : GetScalarType<T[P], BenefitsGroupByOutputType[P]>
        }
      >
    >


  export type BenefitsSelect = {
    id?: boolean
    name?: boolean
    discountPercentage?: boolean
    refoundCap?: boolean
    valideSince?: boolean
    valideTo?: boolean
    isActive?: boolean
  }

  export type BenefitsGetPayload<
    S extends boolean | null | undefined | BenefitsArgs,
    U = keyof S
      > = S extends true
        ? Benefits
    : S extends undefined
    ? never
    : S extends BenefitsArgs | BenefitsFindManyArgs
    ?'include' extends U
    ? Benefits 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Benefits ? Benefits[P] : never
  } 
    : Benefits
  : Benefits


  type BenefitsCountArgs = Merge<
    Omit<BenefitsFindManyArgs, 'select' | 'include'> & {
      select?: BenefitsCountAggregateInputType | true
    }
  >

  export interface BenefitsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Benefits that matches the filter.
     * @param {BenefitsFindUniqueArgs} args - Arguments to find a Benefits
     * @example
     * // Get one Benefits
     * const benefits = await prisma.benefits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BenefitsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BenefitsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Benefits'> extends True ? CheckSelect<T, Prisma__BenefitsClient<Benefits>, Prisma__BenefitsClient<BenefitsGetPayload<T>>> : CheckSelect<T, Prisma__BenefitsClient<Benefits | null, null>, Prisma__BenefitsClient<BenefitsGetPayload<T> | null, null>>

    /**
     * Find the first Benefits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitsFindFirstArgs} args - Arguments to find a Benefits
     * @example
     * // Get one Benefits
     * const benefits = await prisma.benefits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BenefitsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BenefitsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Benefits'> extends True ? CheckSelect<T, Prisma__BenefitsClient<Benefits>, Prisma__BenefitsClient<BenefitsGetPayload<T>>> : CheckSelect<T, Prisma__BenefitsClient<Benefits | null, null>, Prisma__BenefitsClient<BenefitsGetPayload<T> | null, null>>

    /**
     * Find zero or more Benefits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Benefits
     * const benefits = await prisma.benefits.findMany()
     * 
     * // Get first 10 Benefits
     * const benefits = await prisma.benefits.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const benefitsWithIdOnly = await prisma.benefits.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BenefitsFindManyArgs>(
      args?: SelectSubset<T, BenefitsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Benefits>>, PrismaPromise<Array<BenefitsGetPayload<T>>>>

    /**
     * Create a Benefits.
     * @param {BenefitsCreateArgs} args - Arguments to create a Benefits.
     * @example
     * // Create one Benefits
     * const Benefits = await prisma.benefits.create({
     *   data: {
     *     // ... data to create a Benefits
     *   }
     * })
     * 
    **/
    create<T extends BenefitsCreateArgs>(
      args: SelectSubset<T, BenefitsCreateArgs>
    ): CheckSelect<T, Prisma__BenefitsClient<Benefits>, Prisma__BenefitsClient<BenefitsGetPayload<T>>>

    /**
     * Create many Benefits.
     *     @param {BenefitsCreateManyArgs} args - Arguments to create many Benefits.
     *     @example
     *     // Create many Benefits
     *     const benefits = await prisma.benefits.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BenefitsCreateManyArgs>(
      args?: SelectSubset<T, BenefitsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Benefits.
     * @param {BenefitsDeleteArgs} args - Arguments to delete one Benefits.
     * @example
     * // Delete one Benefits
     * const Benefits = await prisma.benefits.delete({
     *   where: {
     *     // ... filter to delete one Benefits
     *   }
     * })
     * 
    **/
    delete<T extends BenefitsDeleteArgs>(
      args: SelectSubset<T, BenefitsDeleteArgs>
    ): CheckSelect<T, Prisma__BenefitsClient<Benefits>, Prisma__BenefitsClient<BenefitsGetPayload<T>>>

    /**
     * Update one Benefits.
     * @param {BenefitsUpdateArgs} args - Arguments to update one Benefits.
     * @example
     * // Update one Benefits
     * const benefits = await prisma.benefits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BenefitsUpdateArgs>(
      args: SelectSubset<T, BenefitsUpdateArgs>
    ): CheckSelect<T, Prisma__BenefitsClient<Benefits>, Prisma__BenefitsClient<BenefitsGetPayload<T>>>

    /**
     * Delete zero or more Benefits.
     * @param {BenefitsDeleteManyArgs} args - Arguments to filter Benefits to delete.
     * @example
     * // Delete a few Benefits
     * const { count } = await prisma.benefits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BenefitsDeleteManyArgs>(
      args?: SelectSubset<T, BenefitsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Benefits
     * const benefits = await prisma.benefits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BenefitsUpdateManyArgs>(
      args: SelectSubset<T, BenefitsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Benefits.
     * @param {BenefitsUpsertArgs} args - Arguments to update or create a Benefits.
     * @example
     * // Update or create a Benefits
     * const benefits = await prisma.benefits.upsert({
     *   create: {
     *     // ... data to create a Benefits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Benefits we want to update
     *   }
     * })
    **/
    upsert<T extends BenefitsUpsertArgs>(
      args: SelectSubset<T, BenefitsUpsertArgs>
    ): CheckSelect<T, Prisma__BenefitsClient<Benefits>, Prisma__BenefitsClient<BenefitsGetPayload<T>>>

    /**
     * Find zero or more Benefits that matches the filter.
     * @param {BenefitsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const benefits = await prisma.benefits.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: BenefitsFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Benefits.
     * @param {BenefitsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const benefits = await prisma.benefits.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: BenefitsAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Benefits that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {BenefitsFindUniqueOrThrowArgs} args - Arguments to find a Benefits
     * @example
     * // Get one Benefits
     * const benefits = await prisma.benefits.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BenefitsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BenefitsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__BenefitsClient<Benefits>, Prisma__BenefitsClient<BenefitsGetPayload<T>>>

    /**
     * Find the first Benefits that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitsFindFirstOrThrowArgs} args - Arguments to find a Benefits
     * @example
     * // Get one Benefits
     * const benefits = await prisma.benefits.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BenefitsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BenefitsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__BenefitsClient<Benefits>, Prisma__BenefitsClient<BenefitsGetPayload<T>>>

    /**
     * Count the number of Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitsCountArgs} args - Arguments to filter Benefits to count.
     * @example
     * // Count the number of Benefits
     * const count = await prisma.benefits.count({
     *   where: {
     *     // ... the filter for the Benefits we want to count
     *   }
     * })
    **/
    count<T extends BenefitsCountArgs>(
      args?: Subset<T, BenefitsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BenefitsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BenefitsAggregateArgs>(args: Subset<T, BenefitsAggregateArgs>): PrismaPromise<GetBenefitsAggregateType<T>>

    /**
     * Group by Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BenefitsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BenefitsGroupByArgs['orderBy'] }
        : { orderBy?: BenefitsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BenefitsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBenefitsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Benefits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BenefitsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Benefits base type for findUnique actions
   */
  export type BenefitsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Benefits
     * 
    **/
    select?: BenefitsSelect | null
    /**
     * Filter, which Benefits to fetch.
     * 
    **/
    where: BenefitsWhereUniqueInput
  }

  /**
   * Benefits: findUnique
   */
  export interface BenefitsFindUniqueArgs extends BenefitsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Benefits base type for findFirst actions
   */
  export type BenefitsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Benefits
     * 
    **/
    select?: BenefitsSelect | null
    /**
     * Filter, which Benefits to fetch.
     * 
    **/
    where?: BenefitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     * 
    **/
    orderBy?: Enumerable<BenefitsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Benefits.
     * 
    **/
    cursor?: BenefitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Benefits.
     * 
    **/
    distinct?: Enumerable<BenefitsScalarFieldEnum>
  }

  /**
   * Benefits: findFirst
   */
  export interface BenefitsFindFirstArgs extends BenefitsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Benefits findMany
   */
  export type BenefitsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Benefits
     * 
    **/
    select?: BenefitsSelect | null
    /**
     * Filter, which Benefits to fetch.
     * 
    **/
    where?: BenefitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     * 
    **/
    orderBy?: Enumerable<BenefitsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Benefits.
     * 
    **/
    cursor?: BenefitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BenefitsScalarFieldEnum>
  }


  /**
   * Benefits create
   */
  export type BenefitsCreateArgs = {
    /**
     * Select specific fields to fetch from the Benefits
     * 
    **/
    select?: BenefitsSelect | null
    /**
     * The data needed to create a Benefits.
     * 
    **/
    data: XOR<BenefitsCreateInput, BenefitsUncheckedCreateInput>
  }


  /**
   * Benefits createMany
   */
  export type BenefitsCreateManyArgs = {
    /**
     * The data used to create many Benefits.
     * 
    **/
    data: Enumerable<BenefitsCreateManyInput>
  }


  /**
   * Benefits update
   */
  export type BenefitsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Benefits
     * 
    **/
    select?: BenefitsSelect | null
    /**
     * The data needed to update a Benefits.
     * 
    **/
    data: XOR<BenefitsUpdateInput, BenefitsUncheckedUpdateInput>
    /**
     * Choose, which Benefits to update.
     * 
    **/
    where: BenefitsWhereUniqueInput
  }


  /**
   * Benefits updateMany
   */
  export type BenefitsUpdateManyArgs = {
    /**
     * The data used to update Benefits.
     * 
    **/
    data: XOR<BenefitsUpdateManyMutationInput, BenefitsUncheckedUpdateManyInput>
    /**
     * Filter which Benefits to update
     * 
    **/
    where?: BenefitsWhereInput
  }


  /**
   * Benefits upsert
   */
  export type BenefitsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Benefits
     * 
    **/
    select?: BenefitsSelect | null
    /**
     * The filter to search for the Benefits to update in case it exists.
     * 
    **/
    where: BenefitsWhereUniqueInput
    /**
     * In case the Benefits found by the `where` argument doesn't exist, create a new Benefits with this data.
     * 
    **/
    create: XOR<BenefitsCreateInput, BenefitsUncheckedCreateInput>
    /**
     * In case the Benefits was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BenefitsUpdateInput, BenefitsUncheckedUpdateInput>
  }


  /**
   * Benefits delete
   */
  export type BenefitsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Benefits
     * 
    **/
    select?: BenefitsSelect | null
    /**
     * Filter which Benefits to delete.
     * 
    **/
    where: BenefitsWhereUniqueInput
  }


  /**
   * Benefits deleteMany
   */
  export type BenefitsDeleteManyArgs = {
    /**
     * Filter which Benefits to delete
     * 
    **/
    where?: BenefitsWhereInput
  }


  /**
   * Benefits findRaw
   */
  export type BenefitsFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Benefits aggregateRaw
   */
  export type BenefitsAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Benefits: findUniqueOrThrow
   */
  export type BenefitsFindUniqueOrThrowArgs = BenefitsFindUniqueArgsBase
      

  /**
   * Benefits: findFirstOrThrow
   */
  export type BenefitsFindFirstOrThrowArgs = BenefitsFindFirstArgsBase
      

  /**
   * Benefits without action
   */
  export type BenefitsArgs = {
    /**
     * Select specific fields to fetch from the Benefits
     * 
    **/
    select?: BenefitsSelect | null
  }



  /**
   * Model Coin
   */


  export type AggregateCoin = {
    _count: CoinCountAggregateOutputType | null
    _avg: CoinAvgAggregateOutputType | null
    _sum: CoinSumAggregateOutputType | null
    _min: CoinMinAggregateOutputType | null
    _max: CoinMaxAggregateOutputType | null
  }

  export type CoinAvgAggregateOutputType = {
    quotationReference: number | null
    annualPerformance: number | null
  }

  export type CoinSumAggregateOutputType = {
    quotationReference: number | null
    annualPerformance: number | null
  }

  export type CoinMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    quotationReference: number | null
    annualPerformance: number | null
    isActive: boolean | null
  }

  export type CoinMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    quotationReference: number | null
    annualPerformance: number | null
    isActive: boolean | null
  }

  export type CoinCountAggregateOutputType = {
    id: number
    name: number
    description: number
    quotationReference: number
    annualPerformance: number
    isActive: number
    _all: number
  }


  export type CoinAvgAggregateInputType = {
    quotationReference?: true
    annualPerformance?: true
  }

  export type CoinSumAggregateInputType = {
    quotationReference?: true
    annualPerformance?: true
  }

  export type CoinMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    quotationReference?: true
    annualPerformance?: true
    isActive?: true
  }

  export type CoinMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    quotationReference?: true
    annualPerformance?: true
    isActive?: true
  }

  export type CoinCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    quotationReference?: true
    annualPerformance?: true
    isActive?: true
    _all?: true
  }

  export type CoinAggregateArgs = {
    /**
     * Filter which Coin to aggregate.
     * 
    **/
    where?: CoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coins to fetch.
     * 
    **/
    orderBy?: Enumerable<CoinOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coins.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coins
    **/
    _count?: true | CoinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoinMaxAggregateInputType
  }

  export type GetCoinAggregateType<T extends CoinAggregateArgs> = {
        [P in keyof T & keyof AggregateCoin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoin[P]>
      : GetScalarType<T[P], AggregateCoin[P]>
  }




  export type CoinGroupByArgs = {
    where?: CoinWhereInput
    orderBy?: Enumerable<CoinOrderByWithAggregationInput>
    by: Array<CoinScalarFieldEnum>
    having?: CoinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoinCountAggregateInputType | true
    _avg?: CoinAvgAggregateInputType
    _sum?: CoinSumAggregateInputType
    _min?: CoinMinAggregateInputType
    _max?: CoinMaxAggregateInputType
  }


  export type CoinGroupByOutputType = {
    id: string
    name: string
    description: string
    quotationReference: number
    annualPerformance: number
    isActive: boolean
    _count: CoinCountAggregateOutputType | null
    _avg: CoinAvgAggregateOutputType | null
    _sum: CoinSumAggregateOutputType | null
    _min: CoinMinAggregateOutputType | null
    _max: CoinMaxAggregateOutputType | null
  }

  type GetCoinGroupByPayload<T extends CoinGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CoinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoinGroupByOutputType[P]>
            : GetScalarType<T[P], CoinGroupByOutputType[P]>
        }
      >
    >


  export type CoinSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    quotationReference?: boolean
    annualPerformance?: boolean
    isActive?: boolean
    movementData?: boolean | MovementDataFindManyArgs
    _count?: boolean | CoinCountOutputTypeArgs
  }

  export type CoinInclude = {
    movementData?: boolean | MovementDataFindManyArgs
    _count?: boolean | CoinCountOutputTypeArgs
  }

  export type CoinGetPayload<
    S extends boolean | null | undefined | CoinArgs,
    U = keyof S
      > = S extends true
        ? Coin
    : S extends undefined
    ? never
    : S extends CoinArgs | CoinFindManyArgs
    ?'include' extends U
    ? Coin  & {
    [P in TrueKeys<S['include']>]:
        P extends 'movementData' ? Array < MovementDataGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? CoinCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'movementData' ? Array < MovementDataGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? CoinCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Coin ? Coin[P] : never
  } 
    : Coin
  : Coin


  type CoinCountArgs = Merge<
    Omit<CoinFindManyArgs, 'select' | 'include'> & {
      select?: CoinCountAggregateInputType | true
    }
  >

  export interface CoinDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Coin that matches the filter.
     * @param {CoinFindUniqueArgs} args - Arguments to find a Coin
     * @example
     * // Get one Coin
     * const coin = await prisma.coin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CoinFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CoinFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Coin'> extends True ? CheckSelect<T, Prisma__CoinClient<Coin>, Prisma__CoinClient<CoinGetPayload<T>>> : CheckSelect<T, Prisma__CoinClient<Coin | null, null>, Prisma__CoinClient<CoinGetPayload<T> | null, null>>

    /**
     * Find the first Coin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinFindFirstArgs} args - Arguments to find a Coin
     * @example
     * // Get one Coin
     * const coin = await prisma.coin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CoinFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CoinFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Coin'> extends True ? CheckSelect<T, Prisma__CoinClient<Coin>, Prisma__CoinClient<CoinGetPayload<T>>> : CheckSelect<T, Prisma__CoinClient<Coin | null, null>, Prisma__CoinClient<CoinGetPayload<T> | null, null>>

    /**
     * Find zero or more Coins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coins
     * const coins = await prisma.coin.findMany()
     * 
     * // Get first 10 Coins
     * const coins = await prisma.coin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coinWithIdOnly = await prisma.coin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CoinFindManyArgs>(
      args?: SelectSubset<T, CoinFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Coin>>, PrismaPromise<Array<CoinGetPayload<T>>>>

    /**
     * Create a Coin.
     * @param {CoinCreateArgs} args - Arguments to create a Coin.
     * @example
     * // Create one Coin
     * const Coin = await prisma.coin.create({
     *   data: {
     *     // ... data to create a Coin
     *   }
     * })
     * 
    **/
    create<T extends CoinCreateArgs>(
      args: SelectSubset<T, CoinCreateArgs>
    ): CheckSelect<T, Prisma__CoinClient<Coin>, Prisma__CoinClient<CoinGetPayload<T>>>

    /**
     * Create many Coins.
     *     @param {CoinCreateManyArgs} args - Arguments to create many Coins.
     *     @example
     *     // Create many Coins
     *     const coin = await prisma.coin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CoinCreateManyArgs>(
      args?: SelectSubset<T, CoinCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Coin.
     * @param {CoinDeleteArgs} args - Arguments to delete one Coin.
     * @example
     * // Delete one Coin
     * const Coin = await prisma.coin.delete({
     *   where: {
     *     // ... filter to delete one Coin
     *   }
     * })
     * 
    **/
    delete<T extends CoinDeleteArgs>(
      args: SelectSubset<T, CoinDeleteArgs>
    ): CheckSelect<T, Prisma__CoinClient<Coin>, Prisma__CoinClient<CoinGetPayload<T>>>

    /**
     * Update one Coin.
     * @param {CoinUpdateArgs} args - Arguments to update one Coin.
     * @example
     * // Update one Coin
     * const coin = await prisma.coin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CoinUpdateArgs>(
      args: SelectSubset<T, CoinUpdateArgs>
    ): CheckSelect<T, Prisma__CoinClient<Coin>, Prisma__CoinClient<CoinGetPayload<T>>>

    /**
     * Delete zero or more Coins.
     * @param {CoinDeleteManyArgs} args - Arguments to filter Coins to delete.
     * @example
     * // Delete a few Coins
     * const { count } = await prisma.coin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CoinDeleteManyArgs>(
      args?: SelectSubset<T, CoinDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coins
     * const coin = await prisma.coin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CoinUpdateManyArgs>(
      args: SelectSubset<T, CoinUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Coin.
     * @param {CoinUpsertArgs} args - Arguments to update or create a Coin.
     * @example
     * // Update or create a Coin
     * const coin = await prisma.coin.upsert({
     *   create: {
     *     // ... data to create a Coin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coin we want to update
     *   }
     * })
    **/
    upsert<T extends CoinUpsertArgs>(
      args: SelectSubset<T, CoinUpsertArgs>
    ): CheckSelect<T, Prisma__CoinClient<Coin>, Prisma__CoinClient<CoinGetPayload<T>>>

    /**
     * Find zero or more Coins that matches the filter.
     * @param {CoinFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const coin = await prisma.coin.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CoinFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Coin.
     * @param {CoinAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const coin = await prisma.coin.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CoinAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Coin that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CoinFindUniqueOrThrowArgs} args - Arguments to find a Coin
     * @example
     * // Get one Coin
     * const coin = await prisma.coin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CoinFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CoinFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CoinClient<Coin>, Prisma__CoinClient<CoinGetPayload<T>>>

    /**
     * Find the first Coin that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinFindFirstOrThrowArgs} args - Arguments to find a Coin
     * @example
     * // Get one Coin
     * const coin = await prisma.coin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CoinFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CoinFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CoinClient<Coin>, Prisma__CoinClient<CoinGetPayload<T>>>

    /**
     * Count the number of Coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinCountArgs} args - Arguments to filter Coins to count.
     * @example
     * // Count the number of Coins
     * const count = await prisma.coin.count({
     *   where: {
     *     // ... the filter for the Coins we want to count
     *   }
     * })
    **/
    count<T extends CoinCountArgs>(
      args?: Subset<T, CoinCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoinAggregateArgs>(args: Subset<T, CoinAggregateArgs>): PrismaPromise<GetCoinAggregateType<T>>

    /**
     * Group by Coin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoinGroupByArgs['orderBy'] }
        : { orderBy?: CoinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoinGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Coin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CoinClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    movementData<T extends MovementDataFindManyArgs = {}>(args?: Subset<T, MovementDataFindManyArgs>): CheckSelect<T, PrismaPromise<Array<MovementData>| Null>, PrismaPromise<Array<MovementDataGetPayload<T>>| Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Coin base type for findUnique actions
   */
  export type CoinFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Coin
     * 
    **/
    select?: CoinSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoinInclude | null
    /**
     * Filter, which Coin to fetch.
     * 
    **/
    where: CoinWhereUniqueInput
  }

  /**
   * Coin: findUnique
   */
  export interface CoinFindUniqueArgs extends CoinFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Coin base type for findFirst actions
   */
  export type CoinFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Coin
     * 
    **/
    select?: CoinSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoinInclude | null
    /**
     * Filter, which Coin to fetch.
     * 
    **/
    where?: CoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coins to fetch.
     * 
    **/
    orderBy?: Enumerable<CoinOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coins.
     * 
    **/
    cursor?: CoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coins.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coins.
     * 
    **/
    distinct?: Enumerable<CoinScalarFieldEnum>
  }

  /**
   * Coin: findFirst
   */
  export interface CoinFindFirstArgs extends CoinFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Coin findMany
   */
  export type CoinFindManyArgs = {
    /**
     * Select specific fields to fetch from the Coin
     * 
    **/
    select?: CoinSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoinInclude | null
    /**
     * Filter, which Coins to fetch.
     * 
    **/
    where?: CoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coins to fetch.
     * 
    **/
    orderBy?: Enumerable<CoinOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coins.
     * 
    **/
    cursor?: CoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coins.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CoinScalarFieldEnum>
  }


  /**
   * Coin create
   */
  export type CoinCreateArgs = {
    /**
     * Select specific fields to fetch from the Coin
     * 
    **/
    select?: CoinSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoinInclude | null
    /**
     * The data needed to create a Coin.
     * 
    **/
    data: XOR<CoinCreateInput, CoinUncheckedCreateInput>
  }


  /**
   * Coin createMany
   */
  export type CoinCreateManyArgs = {
    /**
     * The data used to create many Coins.
     * 
    **/
    data: Enumerable<CoinCreateManyInput>
  }


  /**
   * Coin update
   */
  export type CoinUpdateArgs = {
    /**
     * Select specific fields to fetch from the Coin
     * 
    **/
    select?: CoinSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoinInclude | null
    /**
     * The data needed to update a Coin.
     * 
    **/
    data: XOR<CoinUpdateInput, CoinUncheckedUpdateInput>
    /**
     * Choose, which Coin to update.
     * 
    **/
    where: CoinWhereUniqueInput
  }


  /**
   * Coin updateMany
   */
  export type CoinUpdateManyArgs = {
    /**
     * The data used to update Coins.
     * 
    **/
    data: XOR<CoinUpdateManyMutationInput, CoinUncheckedUpdateManyInput>
    /**
     * Filter which Coins to update
     * 
    **/
    where?: CoinWhereInput
  }


  /**
   * Coin upsert
   */
  export type CoinUpsertArgs = {
    /**
     * Select specific fields to fetch from the Coin
     * 
    **/
    select?: CoinSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoinInclude | null
    /**
     * The filter to search for the Coin to update in case it exists.
     * 
    **/
    where: CoinWhereUniqueInput
    /**
     * In case the Coin found by the `where` argument doesn't exist, create a new Coin with this data.
     * 
    **/
    create: XOR<CoinCreateInput, CoinUncheckedCreateInput>
    /**
     * In case the Coin was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CoinUpdateInput, CoinUncheckedUpdateInput>
  }


  /**
   * Coin delete
   */
  export type CoinDeleteArgs = {
    /**
     * Select specific fields to fetch from the Coin
     * 
    **/
    select?: CoinSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoinInclude | null
    /**
     * Filter which Coin to delete.
     * 
    **/
    where: CoinWhereUniqueInput
  }


  /**
   * Coin deleteMany
   */
  export type CoinDeleteManyArgs = {
    /**
     * Filter which Coins to delete
     * 
    **/
    where?: CoinWhereInput
  }


  /**
   * Coin findRaw
   */
  export type CoinFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Coin aggregateRaw
   */
  export type CoinAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Coin: findUniqueOrThrow
   */
  export type CoinFindUniqueOrThrowArgs = CoinFindUniqueArgsBase
      

  /**
   * Coin: findFirstOrThrow
   */
  export type CoinFindFirstOrThrowArgs = CoinFindFirstArgsBase
      

  /**
   * Coin without action
   */
  export type CoinArgs = {
    /**
     * Select specific fields to fetch from the Coin
     * 
    **/
    select?: CoinSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoinInclude | null
  }



  /**
   * Model MovementData
   */


  export type AggregateMovementData = {
    _count: MovementDataCountAggregateOutputType | null
    _avg: MovementDataAvgAggregateOutputType | null
    _sum: MovementDataSumAggregateOutputType | null
    _min: MovementDataMinAggregateOutputType | null
    _max: MovementDataMaxAggregateOutputType | null
  }

  export type MovementDataAvgAggregateOutputType = {
    amount: number | null
    fee: number | null
  }

  export type MovementDataSumAggregateOutputType = {
    amount: number | null
    fee: number | null
  }

  export type MovementDataMinAggregateOutputType = {
    id: string | null
    date: Date | null
    type: string | null
    clientId: string | null
    senderWalletAddress: string | null
    receiverWalletAddress: string | null
    coinId: string | null
    amount: number | null
    fee: number | null
    isActive: boolean | null
  }

  export type MovementDataMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    type: string | null
    clientId: string | null
    senderWalletAddress: string | null
    receiverWalletAddress: string | null
    coinId: string | null
    amount: number | null
    fee: number | null
    isActive: boolean | null
  }

  export type MovementDataCountAggregateOutputType = {
    id: number
    date: number
    type: number
    clientId: number
    senderWalletAddress: number
    receiverWalletAddress: number
    coinId: number
    amount: number
    fee: number
    isActive: number
    _all: number
  }


  export type MovementDataAvgAggregateInputType = {
    amount?: true
    fee?: true
  }

  export type MovementDataSumAggregateInputType = {
    amount?: true
    fee?: true
  }

  export type MovementDataMinAggregateInputType = {
    id?: true
    date?: true
    type?: true
    clientId?: true
    senderWalletAddress?: true
    receiverWalletAddress?: true
    coinId?: true
    amount?: true
    fee?: true
    isActive?: true
  }

  export type MovementDataMaxAggregateInputType = {
    id?: true
    date?: true
    type?: true
    clientId?: true
    senderWalletAddress?: true
    receiverWalletAddress?: true
    coinId?: true
    amount?: true
    fee?: true
    isActive?: true
  }

  export type MovementDataCountAggregateInputType = {
    id?: true
    date?: true
    type?: true
    clientId?: true
    senderWalletAddress?: true
    receiverWalletAddress?: true
    coinId?: true
    amount?: true
    fee?: true
    isActive?: true
    _all?: true
  }

  export type MovementDataAggregateArgs = {
    /**
     * Filter which MovementData to aggregate.
     * 
    **/
    where?: MovementDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovementData to fetch.
     * 
    **/
    orderBy?: Enumerable<MovementDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MovementDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovementData from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovementData.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovementData
    **/
    _count?: true | MovementDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovementDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovementDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovementDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovementDataMaxAggregateInputType
  }

  export type GetMovementDataAggregateType<T extends MovementDataAggregateArgs> = {
        [P in keyof T & keyof AggregateMovementData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovementData[P]>
      : GetScalarType<T[P], AggregateMovementData[P]>
  }




  export type MovementDataGroupByArgs = {
    where?: MovementDataWhereInput
    orderBy?: Enumerable<MovementDataOrderByWithAggregationInput>
    by: Array<MovementDataScalarFieldEnum>
    having?: MovementDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovementDataCountAggregateInputType | true
    _avg?: MovementDataAvgAggregateInputType
    _sum?: MovementDataSumAggregateInputType
    _min?: MovementDataMinAggregateInputType
    _max?: MovementDataMaxAggregateInputType
  }


  export type MovementDataGroupByOutputType = {
    id: string
    date: Date
    type: string
    clientId: string
    senderWalletAddress: string
    receiverWalletAddress: string
    coinId: string
    amount: number
    fee: number
    isActive: boolean
    _count: MovementDataCountAggregateOutputType | null
    _avg: MovementDataAvgAggregateOutputType | null
    _sum: MovementDataSumAggregateOutputType | null
    _min: MovementDataMinAggregateOutputType | null
    _max: MovementDataMaxAggregateOutputType | null
  }

  type GetMovementDataGroupByPayload<T extends MovementDataGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MovementDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovementDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovementDataGroupByOutputType[P]>
            : GetScalarType<T[P], MovementDataGroupByOutputType[P]>
        }
      >
    >


  export type MovementDataSelect = {
    id?: boolean
    date?: boolean
    type?: boolean
    client?: boolean | ClientArgs
    clientId?: boolean
    senderWalletAddress?: boolean
    receiverWalletAddress?: boolean
    coin?: boolean | CoinArgs
    coinId?: boolean
    amount?: boolean
    fee?: boolean
    isActive?: boolean
  }

  export type MovementDataInclude = {
    client?: boolean | ClientArgs
    coin?: boolean | CoinArgs
  }

  export type MovementDataGetPayload<
    S extends boolean | null | undefined | MovementDataArgs,
    U = keyof S
      > = S extends true
        ? MovementData
    : S extends undefined
    ? never
    : S extends MovementDataArgs | MovementDataFindManyArgs
    ?'include' extends U
    ? MovementData  & {
    [P in TrueKeys<S['include']>]:
        P extends 'client' ? ClientGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'coin' ? CoinGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'client' ? ClientGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'coin' ? CoinGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof MovementData ? MovementData[P] : never
  } 
    : MovementData
  : MovementData


  type MovementDataCountArgs = Merge<
    Omit<MovementDataFindManyArgs, 'select' | 'include'> & {
      select?: MovementDataCountAggregateInputType | true
    }
  >

  export interface MovementDataDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one MovementData that matches the filter.
     * @param {MovementDataFindUniqueArgs} args - Arguments to find a MovementData
     * @example
     * // Get one MovementData
     * const movementData = await prisma.movementData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MovementDataFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MovementDataFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MovementData'> extends True ? CheckSelect<T, Prisma__MovementDataClient<MovementData>, Prisma__MovementDataClient<MovementDataGetPayload<T>>> : CheckSelect<T, Prisma__MovementDataClient<MovementData | null, null>, Prisma__MovementDataClient<MovementDataGetPayload<T> | null, null>>

    /**
     * Find the first MovementData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementDataFindFirstArgs} args - Arguments to find a MovementData
     * @example
     * // Get one MovementData
     * const movementData = await prisma.movementData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MovementDataFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MovementDataFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MovementData'> extends True ? CheckSelect<T, Prisma__MovementDataClient<MovementData>, Prisma__MovementDataClient<MovementDataGetPayload<T>>> : CheckSelect<T, Prisma__MovementDataClient<MovementData | null, null>, Prisma__MovementDataClient<MovementDataGetPayload<T> | null, null>>

    /**
     * Find zero or more MovementData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovementData
     * const movementData = await prisma.movementData.findMany()
     * 
     * // Get first 10 MovementData
     * const movementData = await prisma.movementData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movementDataWithIdOnly = await prisma.movementData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MovementDataFindManyArgs>(
      args?: SelectSubset<T, MovementDataFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<MovementData>>, PrismaPromise<Array<MovementDataGetPayload<T>>>>

    /**
     * Create a MovementData.
     * @param {MovementDataCreateArgs} args - Arguments to create a MovementData.
     * @example
     * // Create one MovementData
     * const MovementData = await prisma.movementData.create({
     *   data: {
     *     // ... data to create a MovementData
     *   }
     * })
     * 
    **/
    create<T extends MovementDataCreateArgs>(
      args: SelectSubset<T, MovementDataCreateArgs>
    ): CheckSelect<T, Prisma__MovementDataClient<MovementData>, Prisma__MovementDataClient<MovementDataGetPayload<T>>>

    /**
     * Create many MovementData.
     *     @param {MovementDataCreateManyArgs} args - Arguments to create many MovementData.
     *     @example
     *     // Create many MovementData
     *     const movementData = await prisma.movementData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MovementDataCreateManyArgs>(
      args?: SelectSubset<T, MovementDataCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a MovementData.
     * @param {MovementDataDeleteArgs} args - Arguments to delete one MovementData.
     * @example
     * // Delete one MovementData
     * const MovementData = await prisma.movementData.delete({
     *   where: {
     *     // ... filter to delete one MovementData
     *   }
     * })
     * 
    **/
    delete<T extends MovementDataDeleteArgs>(
      args: SelectSubset<T, MovementDataDeleteArgs>
    ): CheckSelect<T, Prisma__MovementDataClient<MovementData>, Prisma__MovementDataClient<MovementDataGetPayload<T>>>

    /**
     * Update one MovementData.
     * @param {MovementDataUpdateArgs} args - Arguments to update one MovementData.
     * @example
     * // Update one MovementData
     * const movementData = await prisma.movementData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MovementDataUpdateArgs>(
      args: SelectSubset<T, MovementDataUpdateArgs>
    ): CheckSelect<T, Prisma__MovementDataClient<MovementData>, Prisma__MovementDataClient<MovementDataGetPayload<T>>>

    /**
     * Delete zero or more MovementData.
     * @param {MovementDataDeleteManyArgs} args - Arguments to filter MovementData to delete.
     * @example
     * // Delete a few MovementData
     * const { count } = await prisma.movementData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MovementDataDeleteManyArgs>(
      args?: SelectSubset<T, MovementDataDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovementData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovementData
     * const movementData = await prisma.movementData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MovementDataUpdateManyArgs>(
      args: SelectSubset<T, MovementDataUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one MovementData.
     * @param {MovementDataUpsertArgs} args - Arguments to update or create a MovementData.
     * @example
     * // Update or create a MovementData
     * const movementData = await prisma.movementData.upsert({
     *   create: {
     *     // ... data to create a MovementData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovementData we want to update
     *   }
     * })
    **/
    upsert<T extends MovementDataUpsertArgs>(
      args: SelectSubset<T, MovementDataUpsertArgs>
    ): CheckSelect<T, Prisma__MovementDataClient<MovementData>, Prisma__MovementDataClient<MovementDataGetPayload<T>>>

    /**
     * Find zero or more MovementData that matches the filter.
     * @param {MovementDataFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const movementData = await prisma.movementData.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MovementDataFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MovementData.
     * @param {MovementDataAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const movementData = await prisma.movementData.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MovementDataAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one MovementData that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {MovementDataFindUniqueOrThrowArgs} args - Arguments to find a MovementData
     * @example
     * // Get one MovementData
     * const movementData = await prisma.movementData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MovementDataFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MovementDataFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__MovementDataClient<MovementData>, Prisma__MovementDataClient<MovementDataGetPayload<T>>>

    /**
     * Find the first MovementData that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementDataFindFirstOrThrowArgs} args - Arguments to find a MovementData
     * @example
     * // Get one MovementData
     * const movementData = await prisma.movementData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MovementDataFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MovementDataFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__MovementDataClient<MovementData>, Prisma__MovementDataClient<MovementDataGetPayload<T>>>

    /**
     * Count the number of MovementData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementDataCountArgs} args - Arguments to filter MovementData to count.
     * @example
     * // Count the number of MovementData
     * const count = await prisma.movementData.count({
     *   where: {
     *     // ... the filter for the MovementData we want to count
     *   }
     * })
    **/
    count<T extends MovementDataCountArgs>(
      args?: Subset<T, MovementDataCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovementDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovementData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovementDataAggregateArgs>(args: Subset<T, MovementDataAggregateArgs>): PrismaPromise<GetMovementDataAggregateType<T>>

    /**
     * Group by MovementData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovementDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovementDataGroupByArgs['orderBy'] }
        : { orderBy?: MovementDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovementDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovementDataGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for MovementData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovementDataClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    client<T extends ClientArgs = {}>(args?: Subset<T, ClientArgs>): CheckSelect<T, Prisma__ClientClient<Client | Null>, Prisma__ClientClient<ClientGetPayload<T> | Null>>;

    coin<T extends CoinArgs = {}>(args?: Subset<T, CoinArgs>): CheckSelect<T, Prisma__CoinClient<Coin | Null>, Prisma__CoinClient<CoinGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MovementData base type for findUnique actions
   */
  export type MovementDataFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the MovementData
     * 
    **/
    select?: MovementDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovementDataInclude | null
    /**
     * Filter, which MovementData to fetch.
     * 
    **/
    where: MovementDataWhereUniqueInput
  }

  /**
   * MovementData: findUnique
   */
  export interface MovementDataFindUniqueArgs extends MovementDataFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MovementData base type for findFirst actions
   */
  export type MovementDataFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the MovementData
     * 
    **/
    select?: MovementDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovementDataInclude | null
    /**
     * Filter, which MovementData to fetch.
     * 
    **/
    where?: MovementDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovementData to fetch.
     * 
    **/
    orderBy?: Enumerable<MovementDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovementData.
     * 
    **/
    cursor?: MovementDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovementData from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovementData.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovementData.
     * 
    **/
    distinct?: Enumerable<MovementDataScalarFieldEnum>
  }

  /**
   * MovementData: findFirst
   */
  export interface MovementDataFindFirstArgs extends MovementDataFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MovementData findMany
   */
  export type MovementDataFindManyArgs = {
    /**
     * Select specific fields to fetch from the MovementData
     * 
    **/
    select?: MovementDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovementDataInclude | null
    /**
     * Filter, which MovementData to fetch.
     * 
    **/
    where?: MovementDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovementData to fetch.
     * 
    **/
    orderBy?: Enumerable<MovementDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovementData.
     * 
    **/
    cursor?: MovementDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovementData from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovementData.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MovementDataScalarFieldEnum>
  }


  /**
   * MovementData create
   */
  export type MovementDataCreateArgs = {
    /**
     * Select specific fields to fetch from the MovementData
     * 
    **/
    select?: MovementDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovementDataInclude | null
    /**
     * The data needed to create a MovementData.
     * 
    **/
    data: XOR<MovementDataCreateInput, MovementDataUncheckedCreateInput>
  }


  /**
   * MovementData createMany
   */
  export type MovementDataCreateManyArgs = {
    /**
     * The data used to create many MovementData.
     * 
    **/
    data: Enumerable<MovementDataCreateManyInput>
  }


  /**
   * MovementData update
   */
  export type MovementDataUpdateArgs = {
    /**
     * Select specific fields to fetch from the MovementData
     * 
    **/
    select?: MovementDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovementDataInclude | null
    /**
     * The data needed to update a MovementData.
     * 
    **/
    data: XOR<MovementDataUpdateInput, MovementDataUncheckedUpdateInput>
    /**
     * Choose, which MovementData to update.
     * 
    **/
    where: MovementDataWhereUniqueInput
  }


  /**
   * MovementData updateMany
   */
  export type MovementDataUpdateManyArgs = {
    /**
     * The data used to update MovementData.
     * 
    **/
    data: XOR<MovementDataUpdateManyMutationInput, MovementDataUncheckedUpdateManyInput>
    /**
     * Filter which MovementData to update
     * 
    **/
    where?: MovementDataWhereInput
  }


  /**
   * MovementData upsert
   */
  export type MovementDataUpsertArgs = {
    /**
     * Select specific fields to fetch from the MovementData
     * 
    **/
    select?: MovementDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovementDataInclude | null
    /**
     * The filter to search for the MovementData to update in case it exists.
     * 
    **/
    where: MovementDataWhereUniqueInput
    /**
     * In case the MovementData found by the `where` argument doesn't exist, create a new MovementData with this data.
     * 
    **/
    create: XOR<MovementDataCreateInput, MovementDataUncheckedCreateInput>
    /**
     * In case the MovementData was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MovementDataUpdateInput, MovementDataUncheckedUpdateInput>
  }


  /**
   * MovementData delete
   */
  export type MovementDataDeleteArgs = {
    /**
     * Select specific fields to fetch from the MovementData
     * 
    **/
    select?: MovementDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovementDataInclude | null
    /**
     * Filter which MovementData to delete.
     * 
    **/
    where: MovementDataWhereUniqueInput
  }


  /**
   * MovementData deleteMany
   */
  export type MovementDataDeleteManyArgs = {
    /**
     * Filter which MovementData to delete
     * 
    **/
    where?: MovementDataWhereInput
  }


  /**
   * MovementData findRaw
   */
  export type MovementDataFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * MovementData aggregateRaw
   */
  export type MovementDataAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * MovementData: findUniqueOrThrow
   */
  export type MovementDataFindUniqueOrThrowArgs = MovementDataFindUniqueArgsBase
      

  /**
   * MovementData: findFirstOrThrow
   */
  export type MovementDataFindFirstOrThrowArgs = MovementDataFindFirstArgsBase
      

  /**
   * MovementData without action
   */
  export type MovementDataArgs = {
    /**
     * Select specific fields to fetch from the MovementData
     * 
    **/
    select?: MovementDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovementDataInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BenefitsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    discountPercentage: 'discountPercentage',
    refoundCap: 'refoundCap',
    valideSince: 'valideSince',
    valideTo: 'valideTo',
    isActive: 'isActive'
  };

  export type BenefitsScalarFieldEnum = (typeof BenefitsScalarFieldEnum)[keyof typeof BenefitsScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    dni: 'dni',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    isActive: 'isActive'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const CoinScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    quotationReference: 'quotationReference',
    annualPerformance: 'annualPerformance',
    isActive: 'isActive'
  };

  export type CoinScalarFieldEnum = (typeof CoinScalarFieldEnum)[keyof typeof CoinScalarFieldEnum]


  export const MovementDataScalarFieldEnum: {
    id: 'id',
    date: 'date',
    type: 'type',
    clientId: 'clientId',
    senderWalletAddress: 'senderWalletAddress',
    receiverWalletAddress: 'receiverWalletAddress',
    coinId: 'coinId',
    amount: 'amount',
    fee: 'fee',
    isActive: 'isActive'
  };

  export type MovementDataScalarFieldEnum = (typeof MovementDataScalarFieldEnum)[keyof typeof MovementDataScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type ClientWhereInput = {
    AND?: Enumerable<ClientWhereInput>
    OR?: Enumerable<ClientWhereInput>
    NOT?: Enumerable<ClientWhereInput>
    id?: StringFilter | string
    dni?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    email?: StringFilter | string
    phoneNumber?: IntFilter | number
    isActive?: BoolFilter | boolean
    movementData?: MovementDataListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    dni?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    movementData?: MovementDataOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = {
    id?: string
    dni?: string
    email?: string
    phoneNumber?: number
  }

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    dni?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClientScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClientScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClientScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    dni?: StringWithAggregatesFilter | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    phoneNumber?: IntWithAggregatesFilter | number
    isActive?: BoolWithAggregatesFilter | boolean
  }

  export type BenefitsWhereInput = {
    AND?: Enumerable<BenefitsWhereInput>
    OR?: Enumerable<BenefitsWhereInput>
    NOT?: Enumerable<BenefitsWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    discountPercentage?: FloatFilter | number
    refoundCap?: FloatFilter | number
    valideSince?: DateTimeFilter | Date | string
    valideTo?: DateTimeFilter | Date | string
    isActive?: BoolFilter | boolean
  }

  export type BenefitsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    discountPercentage?: SortOrder
    refoundCap?: SortOrder
    valideSince?: SortOrder
    valideTo?: SortOrder
    isActive?: SortOrder
  }

  export type BenefitsWhereUniqueInput = {
    id?: string
  }

  export type BenefitsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    discountPercentage?: SortOrder
    refoundCap?: SortOrder
    valideSince?: SortOrder
    valideTo?: SortOrder
    isActive?: SortOrder
    _count?: BenefitsCountOrderByAggregateInput
    _avg?: BenefitsAvgOrderByAggregateInput
    _max?: BenefitsMaxOrderByAggregateInput
    _min?: BenefitsMinOrderByAggregateInput
    _sum?: BenefitsSumOrderByAggregateInput
  }

  export type BenefitsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BenefitsScalarWhereWithAggregatesInput>
    OR?: Enumerable<BenefitsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BenefitsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    discountPercentage?: FloatWithAggregatesFilter | number
    refoundCap?: FloatWithAggregatesFilter | number
    valideSince?: DateTimeWithAggregatesFilter | Date | string
    valideTo?: DateTimeWithAggregatesFilter | Date | string
    isActive?: BoolWithAggregatesFilter | boolean
  }

  export type CoinWhereInput = {
    AND?: Enumerable<CoinWhereInput>
    OR?: Enumerable<CoinWhereInput>
    NOT?: Enumerable<CoinWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    quotationReference?: FloatFilter | number
    annualPerformance?: FloatFilter | number
    isActive?: BoolFilter | boolean
    movementData?: MovementDataListRelationFilter
  }

  export type CoinOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quotationReference?: SortOrder
    annualPerformance?: SortOrder
    isActive?: SortOrder
    movementData?: MovementDataOrderByRelationAggregateInput
  }

  export type CoinWhereUniqueInput = {
    id?: string
  }

  export type CoinOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quotationReference?: SortOrder
    annualPerformance?: SortOrder
    isActive?: SortOrder
    _count?: CoinCountOrderByAggregateInput
    _avg?: CoinAvgOrderByAggregateInput
    _max?: CoinMaxOrderByAggregateInput
    _min?: CoinMinOrderByAggregateInput
    _sum?: CoinSumOrderByAggregateInput
  }

  export type CoinScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CoinScalarWhereWithAggregatesInput>
    OR?: Enumerable<CoinScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CoinScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    quotationReference?: FloatWithAggregatesFilter | number
    annualPerformance?: FloatWithAggregatesFilter | number
    isActive?: BoolWithAggregatesFilter | boolean
  }

  export type MovementDataWhereInput = {
    AND?: Enumerable<MovementDataWhereInput>
    OR?: Enumerable<MovementDataWhereInput>
    NOT?: Enumerable<MovementDataWhereInput>
    id?: StringFilter | string
    date?: DateTimeFilter | Date | string
    type?: StringFilter | string
    client?: XOR<ClientRelationFilter, ClientWhereInput>
    clientId?: StringFilter | string
    senderWalletAddress?: StringFilter | string
    receiverWalletAddress?: StringFilter | string
    coin?: XOR<CoinRelationFilter, CoinWhereInput>
    coinId?: StringFilter | string
    amount?: FloatFilter | number
    fee?: FloatFilter | number
    isActive?: BoolFilter | boolean
  }

  export type MovementDataOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    client?: ClientOrderByWithRelationInput
    clientId?: SortOrder
    senderWalletAddress?: SortOrder
    receiverWalletAddress?: SortOrder
    coin?: CoinOrderByWithRelationInput
    coinId?: SortOrder
    amount?: SortOrder
    fee?: SortOrder
    isActive?: SortOrder
  }

  export type MovementDataWhereUniqueInput = {
    id?: string
  }

  export type MovementDataOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    clientId?: SortOrder
    senderWalletAddress?: SortOrder
    receiverWalletAddress?: SortOrder
    coinId?: SortOrder
    amount?: SortOrder
    fee?: SortOrder
    isActive?: SortOrder
    _count?: MovementDataCountOrderByAggregateInput
    _avg?: MovementDataAvgOrderByAggregateInput
    _max?: MovementDataMaxOrderByAggregateInput
    _min?: MovementDataMinOrderByAggregateInput
    _sum?: MovementDataSumOrderByAggregateInput
  }

  export type MovementDataScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MovementDataScalarWhereWithAggregatesInput>
    OR?: Enumerable<MovementDataScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MovementDataScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
    type?: StringWithAggregatesFilter | string
    clientId?: StringWithAggregatesFilter | string
    senderWalletAddress?: StringWithAggregatesFilter | string
    receiverWalletAddress?: StringWithAggregatesFilter | string
    coinId?: StringWithAggregatesFilter | string
    amount?: FloatWithAggregatesFilter | number
    fee?: FloatWithAggregatesFilter | number
    isActive?: BoolWithAggregatesFilter | boolean
  }

  export type ClientCreateInput = {
    id?: string
    dni: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: number
    isActive?: boolean
    movementData?: MovementDataCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    dni: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: number
    isActive?: boolean
    movementData?: MovementDataUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    dni?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    movementData?: MovementDataUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    dni?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    movementData?: MovementDataUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    dni: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: number
    isActive?: boolean
  }

  export type ClientUpdateManyMutationInput = {
    dni?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClientUncheckedUpdateManyInput = {
    dni?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BenefitsCreateInput = {
    id?: string
    name: string
    discountPercentage: number
    refoundCap: number
    valideSince: Date | string
    valideTo: Date | string
    isActive?: boolean
  }

  export type BenefitsUncheckedCreateInput = {
    id?: string
    name: string
    discountPercentage: number
    refoundCap: number
    valideSince: Date | string
    valideTo: Date | string
    isActive?: boolean
  }

  export type BenefitsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    discountPercentage?: FloatFieldUpdateOperationsInput | number
    refoundCap?: FloatFieldUpdateOperationsInput | number
    valideSince?: DateTimeFieldUpdateOperationsInput | Date | string
    valideTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BenefitsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    discountPercentage?: FloatFieldUpdateOperationsInput | number
    refoundCap?: FloatFieldUpdateOperationsInput | number
    valideSince?: DateTimeFieldUpdateOperationsInput | Date | string
    valideTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BenefitsCreateManyInput = {
    id?: string
    name: string
    discountPercentage: number
    refoundCap: number
    valideSince: Date | string
    valideTo: Date | string
    isActive?: boolean
  }

  export type BenefitsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    discountPercentage?: FloatFieldUpdateOperationsInput | number
    refoundCap?: FloatFieldUpdateOperationsInput | number
    valideSince?: DateTimeFieldUpdateOperationsInput | Date | string
    valideTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BenefitsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    discountPercentage?: FloatFieldUpdateOperationsInput | number
    refoundCap?: FloatFieldUpdateOperationsInput | number
    valideSince?: DateTimeFieldUpdateOperationsInput | Date | string
    valideTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CoinCreateInput = {
    id?: string
    name: string
    description: string
    quotationReference: number
    annualPerformance: number
    isActive?: boolean
    movementData?: MovementDataCreateNestedManyWithoutCoinInput
  }

  export type CoinUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    quotationReference: number
    annualPerformance: number
    isActive?: boolean
    movementData?: MovementDataUncheckedCreateNestedManyWithoutCoinInput
  }

  export type CoinUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quotationReference?: FloatFieldUpdateOperationsInput | number
    annualPerformance?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    movementData?: MovementDataUpdateManyWithoutCoinNestedInput
  }

  export type CoinUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quotationReference?: FloatFieldUpdateOperationsInput | number
    annualPerformance?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    movementData?: MovementDataUncheckedUpdateManyWithoutCoinNestedInput
  }

  export type CoinCreateManyInput = {
    id?: string
    name: string
    description: string
    quotationReference: number
    annualPerformance: number
    isActive?: boolean
  }

  export type CoinUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quotationReference?: FloatFieldUpdateOperationsInput | number
    annualPerformance?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CoinUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quotationReference?: FloatFieldUpdateOperationsInput | number
    annualPerformance?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovementDataCreateInput = {
    id?: string
    date: Date | string
    type: string
    client: ClientCreateNestedOneWithoutMovementDataInput
    senderWalletAddress: string
    receiverWalletAddress: string
    coin: CoinCreateNestedOneWithoutMovementDataInput
    amount: number
    fee: number
    isActive?: boolean
  }

  export type MovementDataUncheckedCreateInput = {
    id?: string
    date: Date | string
    type: string
    clientId: string
    senderWalletAddress: string
    receiverWalletAddress: string
    coinId: string
    amount: number
    fee: number
    isActive?: boolean
  }

  export type MovementDataUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutMovementDataNestedInput
    senderWalletAddress?: StringFieldUpdateOperationsInput | string
    receiverWalletAddress?: StringFieldUpdateOperationsInput | string
    coin?: CoinUpdateOneRequiredWithoutMovementDataNestedInput
    amount?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovementDataUncheckedUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    senderWalletAddress?: StringFieldUpdateOperationsInput | string
    receiverWalletAddress?: StringFieldUpdateOperationsInput | string
    coinId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovementDataCreateManyInput = {
    id?: string
    date: Date | string
    type: string
    clientId: string
    senderWalletAddress: string
    receiverWalletAddress: string
    coinId: string
    amount: number
    fee: number
    isActive?: boolean
  }

  export type MovementDataUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    senderWalletAddress?: StringFieldUpdateOperationsInput | string
    receiverWalletAddress?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovementDataUncheckedUpdateManyInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    senderWalletAddress?: StringFieldUpdateOperationsInput | string
    receiverWalletAddress?: StringFieldUpdateOperationsInput | string
    coinId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type MovementDataListRelationFilter = {
    every?: MovementDataWhereInput
    some?: MovementDataWhereInput
    none?: MovementDataWhereInput
  }

  export type MovementDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    dni?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    phoneNumber?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    dni?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    dni?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    phoneNumber?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BenefitsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    discountPercentage?: SortOrder
    refoundCap?: SortOrder
    valideSince?: SortOrder
    valideTo?: SortOrder
    isActive?: SortOrder
  }

  export type BenefitsAvgOrderByAggregateInput = {
    discountPercentage?: SortOrder
    refoundCap?: SortOrder
  }

  export type BenefitsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    discountPercentage?: SortOrder
    refoundCap?: SortOrder
    valideSince?: SortOrder
    valideTo?: SortOrder
    isActive?: SortOrder
  }

  export type BenefitsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    discountPercentage?: SortOrder
    refoundCap?: SortOrder
    valideSince?: SortOrder
    valideTo?: SortOrder
    isActive?: SortOrder
  }

  export type BenefitsSumOrderByAggregateInput = {
    discountPercentage?: SortOrder
    refoundCap?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type CoinCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quotationReference?: SortOrder
    annualPerformance?: SortOrder
    isActive?: SortOrder
  }

  export type CoinAvgOrderByAggregateInput = {
    quotationReference?: SortOrder
    annualPerformance?: SortOrder
  }

  export type CoinMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quotationReference?: SortOrder
    annualPerformance?: SortOrder
    isActive?: SortOrder
  }

  export type CoinMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quotationReference?: SortOrder
    annualPerformance?: SortOrder
    isActive?: SortOrder
  }

  export type CoinSumOrderByAggregateInput = {
    quotationReference?: SortOrder
    annualPerformance?: SortOrder
  }

  export type ClientRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type CoinRelationFilter = {
    is?: CoinWhereInput
    isNot?: CoinWhereInput
  }

  export type MovementDataCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    clientId?: SortOrder
    senderWalletAddress?: SortOrder
    receiverWalletAddress?: SortOrder
    coinId?: SortOrder
    amount?: SortOrder
    fee?: SortOrder
    isActive?: SortOrder
  }

  export type MovementDataAvgOrderByAggregateInput = {
    amount?: SortOrder
    fee?: SortOrder
  }

  export type MovementDataMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    clientId?: SortOrder
    senderWalletAddress?: SortOrder
    receiverWalletAddress?: SortOrder
    coinId?: SortOrder
    amount?: SortOrder
    fee?: SortOrder
    isActive?: SortOrder
  }

  export type MovementDataMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    clientId?: SortOrder
    senderWalletAddress?: SortOrder
    receiverWalletAddress?: SortOrder
    coinId?: SortOrder
    amount?: SortOrder
    fee?: SortOrder
    isActive?: SortOrder
  }

  export type MovementDataSumOrderByAggregateInput = {
    amount?: SortOrder
    fee?: SortOrder
  }

  export type MovementDataCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<MovementDataCreateWithoutClientInput>, Enumerable<MovementDataUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<MovementDataCreateOrConnectWithoutClientInput>
    createMany?: MovementDataCreateManyClientInputEnvelope
    connect?: Enumerable<MovementDataWhereUniqueInput>
  }

  export type MovementDataUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<MovementDataCreateWithoutClientInput>, Enumerable<MovementDataUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<MovementDataCreateOrConnectWithoutClientInput>
    createMany?: MovementDataCreateManyClientInputEnvelope
    connect?: Enumerable<MovementDataWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MovementDataUpdateManyWithoutClientNestedInput = {
    create?: XOR<Enumerable<MovementDataCreateWithoutClientInput>, Enumerable<MovementDataUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<MovementDataCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<MovementDataUpsertWithWhereUniqueWithoutClientInput>
    createMany?: MovementDataCreateManyClientInputEnvelope
    set?: Enumerable<MovementDataWhereUniqueInput>
    disconnect?: Enumerable<MovementDataWhereUniqueInput>
    delete?: Enumerable<MovementDataWhereUniqueInput>
    connect?: Enumerable<MovementDataWhereUniqueInput>
    update?: Enumerable<MovementDataUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<MovementDataUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<MovementDataScalarWhereInput>
  }

  export type MovementDataUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<Enumerable<MovementDataCreateWithoutClientInput>, Enumerable<MovementDataUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<MovementDataCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<MovementDataUpsertWithWhereUniqueWithoutClientInput>
    createMany?: MovementDataCreateManyClientInputEnvelope
    set?: Enumerable<MovementDataWhereUniqueInput>
    disconnect?: Enumerable<MovementDataWhereUniqueInput>
    delete?: Enumerable<MovementDataWhereUniqueInput>
    connect?: Enumerable<MovementDataWhereUniqueInput>
    update?: Enumerable<MovementDataUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<MovementDataUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<MovementDataScalarWhereInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MovementDataCreateNestedManyWithoutCoinInput = {
    create?: XOR<Enumerable<MovementDataCreateWithoutCoinInput>, Enumerable<MovementDataUncheckedCreateWithoutCoinInput>>
    connectOrCreate?: Enumerable<MovementDataCreateOrConnectWithoutCoinInput>
    createMany?: MovementDataCreateManyCoinInputEnvelope
    connect?: Enumerable<MovementDataWhereUniqueInput>
  }

  export type MovementDataUncheckedCreateNestedManyWithoutCoinInput = {
    create?: XOR<Enumerable<MovementDataCreateWithoutCoinInput>, Enumerable<MovementDataUncheckedCreateWithoutCoinInput>>
    connectOrCreate?: Enumerable<MovementDataCreateOrConnectWithoutCoinInput>
    createMany?: MovementDataCreateManyCoinInputEnvelope
    connect?: Enumerable<MovementDataWhereUniqueInput>
  }

  export type MovementDataUpdateManyWithoutCoinNestedInput = {
    create?: XOR<Enumerable<MovementDataCreateWithoutCoinInput>, Enumerable<MovementDataUncheckedCreateWithoutCoinInput>>
    connectOrCreate?: Enumerable<MovementDataCreateOrConnectWithoutCoinInput>
    upsert?: Enumerable<MovementDataUpsertWithWhereUniqueWithoutCoinInput>
    createMany?: MovementDataCreateManyCoinInputEnvelope
    set?: Enumerable<MovementDataWhereUniqueInput>
    disconnect?: Enumerable<MovementDataWhereUniqueInput>
    delete?: Enumerable<MovementDataWhereUniqueInput>
    connect?: Enumerable<MovementDataWhereUniqueInput>
    update?: Enumerable<MovementDataUpdateWithWhereUniqueWithoutCoinInput>
    updateMany?: Enumerable<MovementDataUpdateManyWithWhereWithoutCoinInput>
    deleteMany?: Enumerable<MovementDataScalarWhereInput>
  }

  export type MovementDataUncheckedUpdateManyWithoutCoinNestedInput = {
    create?: XOR<Enumerable<MovementDataCreateWithoutCoinInput>, Enumerable<MovementDataUncheckedCreateWithoutCoinInput>>
    connectOrCreate?: Enumerable<MovementDataCreateOrConnectWithoutCoinInput>
    upsert?: Enumerable<MovementDataUpsertWithWhereUniqueWithoutCoinInput>
    createMany?: MovementDataCreateManyCoinInputEnvelope
    set?: Enumerable<MovementDataWhereUniqueInput>
    disconnect?: Enumerable<MovementDataWhereUniqueInput>
    delete?: Enumerable<MovementDataWhereUniqueInput>
    connect?: Enumerable<MovementDataWhereUniqueInput>
    update?: Enumerable<MovementDataUpdateWithWhereUniqueWithoutCoinInput>
    updateMany?: Enumerable<MovementDataUpdateManyWithWhereWithoutCoinInput>
    deleteMany?: Enumerable<MovementDataScalarWhereInput>
  }

  export type ClientCreateNestedOneWithoutMovementDataInput = {
    create?: XOR<ClientCreateWithoutMovementDataInput, ClientUncheckedCreateWithoutMovementDataInput>
    connectOrCreate?: ClientCreateOrConnectWithoutMovementDataInput
    connect?: ClientWhereUniqueInput
  }

  export type CoinCreateNestedOneWithoutMovementDataInput = {
    create?: XOR<CoinCreateWithoutMovementDataInput, CoinUncheckedCreateWithoutMovementDataInput>
    connectOrCreate?: CoinCreateOrConnectWithoutMovementDataInput
    connect?: CoinWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutMovementDataNestedInput = {
    create?: XOR<ClientCreateWithoutMovementDataInput, ClientUncheckedCreateWithoutMovementDataInput>
    connectOrCreate?: ClientCreateOrConnectWithoutMovementDataInput
    upsert?: ClientUpsertWithoutMovementDataInput
    connect?: ClientWhereUniqueInput
    update?: XOR<ClientUpdateWithoutMovementDataInput, ClientUncheckedUpdateWithoutMovementDataInput>
  }

  export type CoinUpdateOneRequiredWithoutMovementDataNestedInput = {
    create?: XOR<CoinCreateWithoutMovementDataInput, CoinUncheckedCreateWithoutMovementDataInput>
    connectOrCreate?: CoinCreateOrConnectWithoutMovementDataInput
    upsert?: CoinUpsertWithoutMovementDataInput
    connect?: CoinWhereUniqueInput
    update?: XOR<CoinUpdateWithoutMovementDataInput, CoinUncheckedUpdateWithoutMovementDataInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type MovementDataCreateWithoutClientInput = {
    id?: string
    date: Date | string
    type: string
    senderWalletAddress: string
    receiverWalletAddress: string
    coin: CoinCreateNestedOneWithoutMovementDataInput
    amount: number
    fee: number
    isActive?: boolean
  }

  export type MovementDataUncheckedCreateWithoutClientInput = {
    id?: string
    date: Date | string
    type: string
    senderWalletAddress: string
    receiverWalletAddress: string
    coinId: string
    amount: number
    fee: number
    isActive?: boolean
  }

  export type MovementDataCreateOrConnectWithoutClientInput = {
    where: MovementDataWhereUniqueInput
    create: XOR<MovementDataCreateWithoutClientInput, MovementDataUncheckedCreateWithoutClientInput>
  }

  export type MovementDataCreateManyClientInputEnvelope = {
    data: Enumerable<MovementDataCreateManyClientInput>
  }

  export type MovementDataUpsertWithWhereUniqueWithoutClientInput = {
    where: MovementDataWhereUniqueInput
    update: XOR<MovementDataUpdateWithoutClientInput, MovementDataUncheckedUpdateWithoutClientInput>
    create: XOR<MovementDataCreateWithoutClientInput, MovementDataUncheckedCreateWithoutClientInput>
  }

  export type MovementDataUpdateWithWhereUniqueWithoutClientInput = {
    where: MovementDataWhereUniqueInput
    data: XOR<MovementDataUpdateWithoutClientInput, MovementDataUncheckedUpdateWithoutClientInput>
  }

  export type MovementDataUpdateManyWithWhereWithoutClientInput = {
    where: MovementDataScalarWhereInput
    data: XOR<MovementDataUpdateManyMutationInput, MovementDataUncheckedUpdateManyWithoutMovementDataInput>
  }

  export type MovementDataScalarWhereInput = {
    AND?: Enumerable<MovementDataScalarWhereInput>
    OR?: Enumerable<MovementDataScalarWhereInput>
    NOT?: Enumerable<MovementDataScalarWhereInput>
    id?: StringFilter | string
    date?: DateTimeFilter | Date | string
    type?: StringFilter | string
    clientId?: StringFilter | string
    senderWalletAddress?: StringFilter | string
    receiverWalletAddress?: StringFilter | string
    coinId?: StringFilter | string
    amount?: FloatFilter | number
    fee?: FloatFilter | number
    isActive?: BoolFilter | boolean
  }

  export type MovementDataCreateWithoutCoinInput = {
    id?: string
    date: Date | string
    type: string
    client: ClientCreateNestedOneWithoutMovementDataInput
    senderWalletAddress: string
    receiverWalletAddress: string
    amount: number
    fee: number
    isActive?: boolean
  }

  export type MovementDataUncheckedCreateWithoutCoinInput = {
    id?: string
    date: Date | string
    type: string
    clientId: string
    senderWalletAddress: string
    receiverWalletAddress: string
    amount: number
    fee: number
    isActive?: boolean
  }

  export type MovementDataCreateOrConnectWithoutCoinInput = {
    where: MovementDataWhereUniqueInput
    create: XOR<MovementDataCreateWithoutCoinInput, MovementDataUncheckedCreateWithoutCoinInput>
  }

  export type MovementDataCreateManyCoinInputEnvelope = {
    data: Enumerable<MovementDataCreateManyCoinInput>
  }

  export type MovementDataUpsertWithWhereUniqueWithoutCoinInput = {
    where: MovementDataWhereUniqueInput
    update: XOR<MovementDataUpdateWithoutCoinInput, MovementDataUncheckedUpdateWithoutCoinInput>
    create: XOR<MovementDataCreateWithoutCoinInput, MovementDataUncheckedCreateWithoutCoinInput>
  }

  export type MovementDataUpdateWithWhereUniqueWithoutCoinInput = {
    where: MovementDataWhereUniqueInput
    data: XOR<MovementDataUpdateWithoutCoinInput, MovementDataUncheckedUpdateWithoutCoinInput>
  }

  export type MovementDataUpdateManyWithWhereWithoutCoinInput = {
    where: MovementDataScalarWhereInput
    data: XOR<MovementDataUpdateManyMutationInput, MovementDataUncheckedUpdateManyWithoutMovementDataInput>
  }

  export type ClientCreateWithoutMovementDataInput = {
    id?: string
    dni: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: number
    isActive?: boolean
  }

  export type ClientUncheckedCreateWithoutMovementDataInput = {
    id?: string
    dni: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: number
    isActive?: boolean
  }

  export type ClientCreateOrConnectWithoutMovementDataInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutMovementDataInput, ClientUncheckedCreateWithoutMovementDataInput>
  }

  export type CoinCreateWithoutMovementDataInput = {
    id?: string
    name: string
    description: string
    quotationReference: number
    annualPerformance: number
    isActive?: boolean
  }

  export type CoinUncheckedCreateWithoutMovementDataInput = {
    id?: string
    name: string
    description: string
    quotationReference: number
    annualPerformance: number
    isActive?: boolean
  }

  export type CoinCreateOrConnectWithoutMovementDataInput = {
    where: CoinWhereUniqueInput
    create: XOR<CoinCreateWithoutMovementDataInput, CoinUncheckedCreateWithoutMovementDataInput>
  }

  export type ClientUpsertWithoutMovementDataInput = {
    update: XOR<ClientUpdateWithoutMovementDataInput, ClientUncheckedUpdateWithoutMovementDataInput>
    create: XOR<ClientCreateWithoutMovementDataInput, ClientUncheckedCreateWithoutMovementDataInput>
  }

  export type ClientUpdateWithoutMovementDataInput = {
    dni?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClientUncheckedUpdateWithoutMovementDataInput = {
    dni?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CoinUpsertWithoutMovementDataInput = {
    update: XOR<CoinUpdateWithoutMovementDataInput, CoinUncheckedUpdateWithoutMovementDataInput>
    create: XOR<CoinCreateWithoutMovementDataInput, CoinUncheckedCreateWithoutMovementDataInput>
  }

  export type CoinUpdateWithoutMovementDataInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quotationReference?: FloatFieldUpdateOperationsInput | number
    annualPerformance?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CoinUncheckedUpdateWithoutMovementDataInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quotationReference?: FloatFieldUpdateOperationsInput | number
    annualPerformance?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovementDataCreateManyClientInput = {
    id?: string
    date: Date | string
    type: string
    senderWalletAddress: string
    receiverWalletAddress: string
    coinId: string
    amount: number
    fee: number
    isActive?: boolean
  }

  export type MovementDataUpdateWithoutClientInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    senderWalletAddress?: StringFieldUpdateOperationsInput | string
    receiverWalletAddress?: StringFieldUpdateOperationsInput | string
    coin?: CoinUpdateOneRequiredWithoutMovementDataNestedInput
    amount?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovementDataUncheckedUpdateWithoutClientInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    senderWalletAddress?: StringFieldUpdateOperationsInput | string
    receiverWalletAddress?: StringFieldUpdateOperationsInput | string
    coinId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovementDataUncheckedUpdateManyWithoutMovementDataInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    senderWalletAddress?: StringFieldUpdateOperationsInput | string
    receiverWalletAddress?: StringFieldUpdateOperationsInput | string
    coinId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovementDataCreateManyCoinInput = {
    id?: string
    date: Date | string
    type: string
    clientId: string
    senderWalletAddress: string
    receiverWalletAddress: string
    amount: number
    fee: number
    isActive?: boolean
  }

  export type MovementDataUpdateWithoutCoinInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutMovementDataNestedInput
    senderWalletAddress?: StringFieldUpdateOperationsInput | string
    receiverWalletAddress?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovementDataUncheckedUpdateWithoutCoinInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    senderWalletAddress?: StringFieldUpdateOperationsInput | string
    receiverWalletAddress?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}