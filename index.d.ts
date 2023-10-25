/*
 * @Author: zhangyu
 * @Date: 2023-10-17 16:37:09
 * @LastEditTime: 2023-10-24 19:10:59
 */
declare module 'think-ts-lib' {
    export const start: (config?: Record<string, any>) => void
    export const appConfig: Record<string, any>
    export interface RouteType {
        get: (url: string, str: string, middleware?: () => void) => void
    }
    export interface Context {}
    export class Controller {
        ShowSuccess(data?: any, msg?: string, code?: number, statusCode?: number): Object
        ApiException(msg?: string, errorCode?: number, statusCode?: number): void
        GetParams(ctx: Context, validate: boolean): Object
        View(url: string, data: Object, type?: string): string
    }
    export const ShowSuccess: (data?: any, msg?: string, code?: number, statusCode?: number) => Object
    export const ApiException: (msg?: string, errorCode?: number, statusCode?: number) => void
    export const GetParams: (ctx: Context, validate: boolean) => Object
    export const View: (url: string, data: Object, type: string) => string
}