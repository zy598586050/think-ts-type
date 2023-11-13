/*
 * @Author: zhangyu
 * @Date: 2023-10-17 16:37:09
 * @LastEditTime: 2023-11-13 11:06:30
 */
declare module 'think-ts-lib' {
    export const start: (config?: Record<string, any>) => void
    export const appConfig: Record<string, any>
    export interface RouteType {
        get: (url: string, str: string, middleware?: any) => void
        post: (url: string, str: string, middleware?: any) => void
        put: (url: string, str: string, middleware?: any) => void
        delete: (url: string, str: string, middleware?: any) => void
        group: (prefix: string, callback: any, middleware?: any) => void
    }
    export type ExceptionType = (msg?: string, errorCode?: number, statusCode?: number) => void
    export interface Context {}
    export class Controller {
        ShowSuccess(data?: any, msg?: string, code?: number, statusCode?: number): Object
        ApiException(msg?: string, errorCode?: number, statusCode?: number): void
        GetParams(ctx: Context, validate?: boolean, url?: string): Object
        View(url: string, data?: Object, type?: string): string
    }
    export const ShowSuccess: (data?: any, msg?: string, code?: number, statusCode?: number) => Object
    export const ApiException: (msg?: string, errorCode?: number, statusCode?: number) => void
    export const GetParams: (ctx: Context, validate?: boolean, url?: string) => Object
    export const View: (url: string, data?: Object, type?: string) => string
}