const prompt=require("prompt-sync")();
const b=parseInt(prompt("enter the value of a"));
const d=parseInt(prompt("enter the value of b"));
for(let a=0;a<=d;a++)
{
   var c=a*b;
   console.log(c);
}
