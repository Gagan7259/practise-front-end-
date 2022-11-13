class Bank{
constructor(withdraw){
this.withdraw=withdraw;
this.minimum=500;
this.balance=1000;
}
getAmount(){
    if((this.balance-this.withdraw)>=this.minimum){
        console.log("successfull");
    }
    else{
        console.log("failed")
    }
}
}
let a=new Bank(1000);
a.getAmount();