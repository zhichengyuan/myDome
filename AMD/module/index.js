define(['demo'],function(m1) {
    var msg = 'index';
    function showMsg() {
        console.log(msg,m1.getName());
    }
    return {showMsg};
})