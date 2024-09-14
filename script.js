var first = '', second = '', opration = '';

console.log("js is called");
function handleClick(params) {
    switch (params) {
        case 'plus':           
            opration='+';
            break;
        case 'eq':
            $('#caloutput').val(first+opration+second+' = '+eval(first+opration+second));
            opration='';
            break;      
        default:
           if(opration == ''){
           first=first.concat(params);
           $('#caloutput').val(first);
           }else
           {
            second=second.concat(params);
            $('#caloutput').val(second);
           }
    }
    
    console.log(params)
}  
$(document).ready(function() {
       
});
