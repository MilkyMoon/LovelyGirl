/**
 * Created by PengZong on 16/11/22.
 */
var s = 'Happy birthday to you!';
var con = $('.typed-quotes');
var index = 0;
var length = s.length;
var tId = null;

function start(){
    con.text('');

    tId=setInterval(function(){
        con.append(s.charAt(index));
        if(index++ === length){
            clearInterval(tId);
            index = 0;
            start()
        }
    },100);
}

start();