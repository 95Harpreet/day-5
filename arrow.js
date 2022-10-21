var hello=()=>              //arrow default functiom
{
    var a=12,b=2,c
    c=a+b
    console.log('sum is '+c)
}
var hi=(a,b)=>               //arrow parameter function
{
    c=a-b
    console.log('sub is '+c)
}
var chd=(a,b)=>              //arrow  default function
{
    c=a*b
    return c
}
hello()
hi(12,8)
var ans=chd(12,3)
console.log('multiplication is '+ans)