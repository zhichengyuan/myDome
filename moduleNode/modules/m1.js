//暴露模块接口对象
module.exports = {
    msg: 'module1',
    foo:function () {
        console.log(this.msg);
    }
}