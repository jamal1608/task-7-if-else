//assignment #07


var time = prompt('enter your 24hrs time')

var hr12 = time - 1200

if(time.length ===4 && hr12 < 1200){ alert(hr12 + ':' + 'PM')}
else if(time.length ===4 && hr12 > 0){alert( 'AM')}
else{alert ('enter correct 24hrs time')}