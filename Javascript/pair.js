let number =3;
let star="";
function draw(num){
    for(let i=0;i<num;i++){
        star+="*"
    }
    console.log(star)
}
let sta="";
function draw2(num){
    for(let i=0;i<num;i++){
        for(let j=0;j<num;j++){
        sta+="*"
    }sta+='\n'}
    console.log(sta)
}
let str="";
function draw3(num){
    for(let i=0;i<num;i++){
        for(let j=1;j<=num;j++){
        str+=j
    }str+='\n'}
    console.log(str)
}


function draw4(num){
    let stri="";
    for(let i=1;i<=num;i++){
        for(let j=1;j<=num;j++){
        stri+=i
    }stri+='\n'}
    console.log(stri)
}

function draw5(num){
    let stri="";
    for(let i=num;i>0;i--){
        for(let j=num;j>0;j--){
        stri+=i
    }stri+='\n'}
    console.log(stri)
}

function draw6(num){
    let str="";
    let integer=1
    for(let i=0;i<num;i++){
        for(let j=1;j<=num;j++){
        str+=integer++
    }str+='\n'}
    console.log(str)
}

function draw7(num){
    let str="";
    let integer=num**2;
    for(let i=0;i<num;i++){
        for(let j=1;j<=num;j++){
        str+=integer--
    }str+='\n'}
    console.log(str);
}

function draw8(num){
    let str="";
    for(let i=0;i<num;i++){
        str+=i*2;
        str+='\n';
    }
    console.log(str);
}

function draw9(num){
    let str="";
    for(let i=1;i<=num;i++){
        str+=i*2;
        str+='\n';
    }
    console.log(str);
}

function draw10(num){
    let str="";
    for(let i =1;i<=num;i++){
        for(let j=1;j<=num;j++){
            str+=(i*j)
        }str+="\n"
    }console.log(str);
}

function draw11(num){
    let str='';
    for(let i =1;i<=num;i++){
        for(let j=1;j<=num;j++){
            if(i==j){
                str+='_';
            }
            else{
                str+='*'
            }
            
        }str+="\n"
    }console.log(str);
}

function draw12(num){
    let str='';
    for(let i =0;i<=num-1;i++){
        for(let j=0;j<=num-1;j++){
            if(i+j==num-1){
                str+='_';
            }
            else{
                str+='*'
            }
            
        }str+="\n"
    }console.log(str);
}

function draw13(num){
    let str='';
    for(let i =0;i<=num-1;i++){
        for(let j=0;j<=num-1;j++){
            if(i-j<0){
                str+='_';
            }
            else{
                str+='*'
            }
            
        }str+="\n"
    }console.log(str);
}

function draw14(num){
    let str='';
    for(let i =0;i<=num-1;i++){
        for(let j=0;j<=num-1;j++){
            if(i+j>=num){
                str+='_';
            }
            else{
                str+='*'
            }
            
        }str+="\n"
    }console.log(str);
}

function draw15(num){
    let row=num+(num-1);
    let str="";
    for(let i =0;i<row;i++){
        for(let j =0;j<num;j++){
            if(i<num){
                if(i-j<0){
                    str+='_';
                }
                else{
                    str+='*';
                } 
            }
            else{
                if(i+j>=row){
                    str+='_';
                }
                else{
                    str+='*';
                }

            }
        }str+="\n"
    }console.log(str);
}

function draw17(num){
    let str='';
    for(let i =0;i<=num-1;i++){
        for(let j=0;j<=num-1;j++){
            if(i+j>=num-1){
                str+='*';
            }
            else{
                str+='_'
            }
            
        }str+="\n"
    }console.log(str);

}

function draw18(num){
    let str='';
    for(let i =0;i<=num-1;i++){
        for(let j=0;j<=num-1;j++){
            if(i-j>0){
                str+='_';
            }
            else{
                str+='*'
            }
            
        }str+="\n"
    }console.log(str);

}

function draw19(num){
    let row=num+(num-1);
    let str="";
    for(let i =0;i<row;i++){
        for(let j =0;j<num;j++){
            if(i<num){
                if(i+j>=num-1){
                    str+='*';
                }
                else{
                    str+='_'
                }
            }
        else{
            if(i-j>=num){
                str+='_';
            }
            else{
                str+='*'
            }

        }  } str+="\n"
        
    }
    console.log(str);
}

function draw20(num){
    let row=num+(num-1);
    let str="";
    let inte=1
    for(let i =0;i<row;i++){
        for(let j =0;j<num;j++){
            if(i<num){
                if(i+j>=num-1){
                    str+=inte++;
                }
                else{
                    str+='_'
                }
            }
        else{
            if(i-j>=num){
                str+='_';
            }
            else{
                str+=inte++;
            }

        }  } str+="\n"
        
    }
    console.log(str);
}

function draw21(num){
    let col=num+(num-1);
    let str="";
    for(let i =0;i<num;i++){
        for(let j =0;j<col;j++){
            if(j<num){
                if(i+j<num-1){
                    str+="_";
                }
                else{
                    str+='*'
                }
            }
            else{
                if(i-j<=-num){
                    str+='_';
                }
                else{
                    str+="*";
                }

            }  
        } str+="\n"
        
    }
    console.log(str);
}

function draw22(num){
    let col=num+(num-1);
    let str="";
    for(let i =0;i<num;i++){
        for(let j =0;j<col;j++){
            if(j<num){
                if(i-j>0){
                    str+="_";
                }
                else{
                    str+='*'
                }
            }
            else{
                if(i+j>=col){
                    str+='_';
                }
                else{
                    str+="*";
                }

            }  
        } str+="\n"
        
    }
    console.log(str);
}

function draw23(num){
    let col=num+(num-1);
    let str="";
    for(let i =0;i<col;i++){
        for(let j =0;j<col;j++){
            if(i<num){
                if(j<num){
                    if(i+j<num-1){
                        str+="-";
                    }
                    else{
                        str+="*";
                    }

                }
                else{
                    if(j-i>=num){
                        str+="-";
                    }
                    else{
                        str+="*";
                    }

                }
                
            }
            else{
                if(j<num){
                    if(i-j>=num){
                        str+="-";
                    }
                    else{
                        str+="*";
                    }

                }
                else{
                    if(i+j>=num+col-1){
                        str+="-";
                    }
                    else{
                        str+="*";
                    }

                }
               

            }  
        } str+="\n"
        
    }
    console.log(str);
}

function draw24(num){
    let number=1;
    let col=num+(num-1);
    let str="";
    for(let i =0;i<col;i++){
        for(let j =0;j<col;j++){
            if(i<num){
                if(j<num){
                    if(i+j<num-1){
                        str+="-";
                    }
                    else{
                        str+=number++;
                    }

                }
                else{
                    if(j-i>=num){
                        str+="-";
                    }
                    else{
                        str+=number++;
                    }

                }
                
            }
            else{
                if(j<num){
                    if(i-j>=num){
                        str+="-";
                    }
                    else{
                        str+=number++;
                    }

                }
                else{
                    if(i+j>=num+col-1){
                        str+="-";
                    }
                    else{
                        str+=number++;
                    }

                }
               

            }  
        } str+="\n"
        
    }
    console.log(str);
}

draw(number)
draw2(number)
draw3(number)
draw4(number)
draw5(number)
draw6(number)
draw7(number)
draw8(number)
draw9(number)
draw10(number)
draw11(number)
draw12(number)
draw13(number)
draw14(number)
draw15(number)
draw17(number)
draw18(number)
draw19(number)
draw20(number)

draw21(number)
draw22(number)
draw23(number)
draw24(number)