// this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
module.exports = {
  success(res) {
    this.body = {
        code:0,
        message:'成功',
        data:res
    }
  },
};
