点击控件 = function (view) {
//点击随机偏移
    log(arguments.callee.name + '开始')
    log(view)
    if (view) {
        var x = view.bounds().centerX()+ random(-17, 23)
        var y = view.bounds().centerY()+ random(-21, 19)
        log('将要点击的坐标 %s,%s', x, y)
        press(x , y , 1)
    } else {
        throw '传入点击控件中的view异常'
    }
    log(arguments.callee.name + '结束')
}

停止app = function (appName) {
    var packageName=getPackageName(appName);
    shell('am force-stop ' + packageName,true);
  }
