/**
 * A utility type that extracts the type that a function returns if it is a Promise.
 * If the function does not return a Promise, it resolves to `never`.
 *
 * @template T - The function type to extract the return type from.
 * @example
 * type Example = ReturnTypeWithoutPromise<() => Promise<string>>; // string
 * type Example2 = ReturnTypeWithoutPromise<() => number>; // never
 *
 * Um tipo utilitário que extrai o tipo que uma função retorna se for uma Promise.
 * Se a função não retornar uma Promise, resolve para `never`.
 *
 * @template T - O tipo de função para extrair o tipo de retorno.
 * @example
 * type Exemplo = ReturnTypeWithoutPromise<() => Promise<string>>; // string
 * type Exemplo2 = ReturnTypeWithoutPromise<() => number>; // never
 */
export type ReturnTypeWithoutPromise<T extends (...args: any) => any> =
    T extends (...args: any) => Promise<infer U> ? U : never;