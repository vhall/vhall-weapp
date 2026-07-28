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
  path = path.trim();

  // 先拆出 hash（# 及之后部分），只对 # 之前的 query 做处理，
  // 避免把参数拼到 hash 后面（如 mch_app_id / open_id 掉进 fragment 导致 H5 取不到）
  let hash = '';
  const hashIndex = path.indexOf('#');
  if (hashIndex !== -1) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  let existingParams = {};
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
  // 重新拼回 hash
  return path + hash;
}
