
function task1(){
    if(input1.value==input2.value){
        return true
    }
    ErorDiv.innerHTML=`  <span style="color:Red">*The number don't match<span>*`;
    return false
}
function task2(){
    if(input1.value>input2.value){
        return true
    }
    ErorDiv.innerHTML=`  <span style="color:Red">*The first number is not bigger than the last number<span>*`
    return false
}
function task3(){
    if(input1.value===input2.value){
        return true
    }
    ErorDiv.innerHTML=`  <span style="color:Red">*The text don't match<span>*`
    return false
}
function task4(){
    if(input1.value.length==input2.value.length){
        return true
    }
    ErorDiv.innerHTML=`  <span style="color:Red">*The length of the text are not the same<span>*`
    return false
}
function task5(){
    if(input1.value[0]==input2.value[0]){
        return true
    }
    ErorDiv.innerHTML=`  <span style="color:Red">*The first char is not the same<span>*`
    return false
}


