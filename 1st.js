function hello(a,b,c,d,e,f)                 //program to sum the argument function indices
{
    var sum=0;
    for(var i=0;i<arguments.length;i++)
    {
        sum+=arguments[i]
    }
    console.log('total sum is '+sum)
}
hello(12,34,56,43,65,67)