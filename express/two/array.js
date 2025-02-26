const express=require("express");
const app=express();
const port=3000;
const array=[
    {id:1,name:"person01",detail:"qwer12@gmail.com"},
    {id:2,name:"person02",detail:"qwe23@gmail.com"},
    {id:3,name:"person3",detail:"q23jnn@gmail.com"}
];
app.get('/array', (req, res) => {
    res.json({array});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/array`);
});
