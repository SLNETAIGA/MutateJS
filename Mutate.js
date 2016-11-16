// Created by SLNETAIGA
// Usage: mutate(str) - mutates string
//        mutateint(int) - mutates integer

function randstr(len){
var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var out = new Array();

a = a.split("");

for(var i=0;i<len;i++){
	var r = getRandomInt(0,a.length);
	out.push(a[r]);
}

return out.join("");
}

function getRandomInt(min, max){
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mutate(ins){
var str = ins.split("");
for(var t=0;t<str.length;t++){
var c = getRandomInt(1,5);
if(c == 4){
str[t] = String.fromCharCode(mutateint(str[t].charCodeAt(0)));
}
}
return str.join("");
}

function mutateint(it){
var c = getRandomInt(1,5);
if(c==4){
var r = Math.round(Math.random()) * 0.030;
it-=r;
}else{
var r = Math.round(Math.random()) * 0.030;
it+=r;
}
return it;
}
