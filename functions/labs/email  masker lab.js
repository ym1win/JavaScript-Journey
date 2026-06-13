function maskEmail(mail){
let a=mail.indexOf("@");
let f=mail.slice(a-1);
let b=mail.slice(1,a-1);
let l=b.length;
let c="*"
let e=c.repeat(l);
let newmail=mail.charAt(0)+e+f;
return newmail;
}

let email="yashmaurya370@gmail.com";
console.log(maskEmail(email));