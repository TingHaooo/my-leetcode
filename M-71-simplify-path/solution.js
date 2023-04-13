/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let result = [];
  const pathArr = path.split("/");
  for (let i = 0; i < pathArr.length; ++i) {
    if (pathArr[i] === "" || pathArr[i] === ".") continue;
    if (pathArr[i] === "..") {
      result.pop();
      continue;
    }
    result.push(pathArr[i]);
  }

  return "/" + result.join("/");
};
