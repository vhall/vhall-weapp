/**
 * 给指定的 path 拼接查询参数，并且支持处理原路径上已经存在同名参数的情况，你可以选择是否覆盖这些参数
 * @param {string} path 原路径
 * @param {object} params 待拼接的参数对象
 * @param {boolean} override 是否覆盖同名参数,默认false
 * @returns
 */
export function appendQueryParamsToPath(
  path: string,
  params: object,
  override: boolean = false
): string {
  if (!path) return '';
  let existingParams = {};
  path = path.trim();
  const queryIndex = path.indexOf('?');
  if (queryIndex !== -1) {
    // 存在问号, 取问号后面存在的参数放入existingParams对象
    const existingQuery = path.slice(queryIndex + 1);
    const pairs = existingQuery.split('&');
    for (const pair of pairs) {
      const [key, value] = pair.split('=');
      if (key) {
        existingParams[decodeURIComponent(key)] = decodeURIComponent(
          value || ''
        );
      }
    }
  }
  let newQueryString = '';
  for (const [key, value] of Object.entries(params)) {
    if (override || !(key in existingParams)) {
      if (newQueryString) {
        newQueryString += '&';
      }
      newQueryString += `${encodeURIComponent(key)}=${encodeURIComponent(
        value
      )}`;
    }
  }
  if (newQueryString) {
    if (queryIndex == -1) {
      path = path + '?' + newQueryString; // 没有问号
    } else {
      // 有问号的情况。区分？后面有参数和没有参数
      const isExistingParamsEmpty = Object.keys(existingParams).length === 0;
      path = isExistingParamsEmpty
        ? path + newQueryString
        : path + '&' + newQueryString;
    }
  }
  return path;
}
