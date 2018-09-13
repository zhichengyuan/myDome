(function () {
    require.config({
        paths:{
            index:'../module/index',
            demo:'../module/demo',
            jquery:'../libs/jquery'
        }
    })
    require(['index','jquery'],function(index,$) {

    })
})