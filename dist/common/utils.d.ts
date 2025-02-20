/**
 * 给指定的 path 拼接查询参数，并且支持处理原路径上已经存在同名参数的情况，你可以选择是否覆盖这些参数
 * @param {string} path 原路径
 * @param {object} params 待拼接的参数对象
 * @param {boolean} override 是否覆盖同名参数,默认false
 * @returns
 */
export declare function appendQueryParamsToPath(path: string, params: object, override?: boolean): string;
