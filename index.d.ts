/*
 * @Author: zhangyu
 * @Date: 2023-10-17 16:37:09
 * @LastEditTime: 2023-10-21 12:21:12
 */
declare module 'think-ts-lib' {
    export const start: (config?: Record<string, any>) => void
    export const appConfig: Record<string, any>
    export interface RouteType {
        get: (url: string, str: string, middleware?: () => void) => void
    }
}