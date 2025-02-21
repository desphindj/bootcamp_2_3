function dj()
{
    var name=document.getElementById("name").value;
    var reg=document.getElementById("reg").value;
    var email=document.getElementById("email").value;
    var num=document.getElementById("num").value;
    var add=document.getElementById("add").value;
    if(!name)
    {
        alert("fill the data");
        return false;
    }
    if(!reg)
    {
        alert("fill your reg number");
        return false;
    }
    if(!email)
    {
        alert("fill the email box");
        return false;
    }
    if(!num)
    {
        alert("enter the number");
        return false;
    }
    if(!add)
    {
        alert("enter the address");
        return false;
    }
    else
    {
        alert("reg success");
        return true;
    }
}