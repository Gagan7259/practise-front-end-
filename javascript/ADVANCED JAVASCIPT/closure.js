function outer(){
    let a=10;
    function ab(){
    a++;
    console.log(a);
    }
    ab();
}
outer();