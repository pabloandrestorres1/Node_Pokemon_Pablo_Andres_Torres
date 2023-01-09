var EventEmitter = require('events').EventEmitter
var Clock = function ()
{
    setInterval(function (){
        console.log('ET SECH')
    }, 1000)    
}
Clock.prototype.theTime = function ()
{
    var date = new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        msg = hrs + ':' + min + ':' + sec
    console.log(msg)
}
var tula = new Clock()
tula.on('tictac', function(){
    tula.theTime()
})

