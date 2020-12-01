let str='hello';
function ucFirst(str){
    str=str[0].toUpperCase()+str.slice(1);   
    console.log(str);
}
function checkSpam(data){
    return data.toLowerCase().includes('xxx') || data.toLowerCase().includes('viagra') ? true:false; 
}
function truncate(data,maxLength){
    if(data.length>maxLength-1){
        return data=data.substr(0,maxLength)+'...';
    }
    else{
        return data;
    }
}
function extractCurrencyValue(dollar,rate){
    if (dollar[0]=='$'){
        dollar=dollar.substr(1);
        dollar=parseInt(dollar)*rate;
        return dollar;
    }
    else {
        return 'cannot convert to thai baht'
    }
}

ucFirst(str);
console.log(checkSpam('sViagras'));
console.log(truncate("What I'd like to tell on this topic is:",20 ));
console.log(extractCurrencyValue('$120',30.5));

let styles=["Jazz","Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor(styles.length/2)]="classics";
styles.shift();
styles.unshift("Rap","Reggae");
console.log(styles);

let arr=["t","e","s","t"];
console.log(arr.slice(-3,3))