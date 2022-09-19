const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const promiseIXX = await promiseTheaterIXX();
  const promiseVGC = await promiseTheaterVGC();
  const arr = [...promiseIXX, ...promiseVGC];
  let arr2 = [];

  return new Promise((resolve) => {
    for (let index = 0; index < arr.length; index++) {
      if (arr[index].hasil == emosi) {
        arr2.push(arr[index].hasil);
      }
    }
    resolve(arr2.length);
  });
};
module.exports = {
  promiseOutput,
};




