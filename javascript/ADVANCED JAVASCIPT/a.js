let a=10;
function ab(){
    let b=20;
    function inner(){
        let c=30;
        console.log(a,b,c);
    }
    inner();
}
ab();