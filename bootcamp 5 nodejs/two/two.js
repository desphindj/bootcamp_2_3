const prompt=require("prompt-sync")();
const a=parseInt(prompt("enter the value of a"));
if(a%2==0)
{
    console.log("a is a EVEN number");
}
else
{
    console.log("a is a ODD number");
}