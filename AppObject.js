function App(Name,State,Memory){
    //Declare your instance variables here.
    this.name = Name;
    this.state = State;
    this.memory = Memory;

    //Declare the instance function open here.
    this.open = function(){
      this.state = "active";
    };
    //Declare the instance function sleep here.
    this.sleep = function(){
      if(this.state == "active"){
        this.state = "sleep";
        this.memory = this.memory/2;
      }
    };

    //Declare the instance function active here.
  this.active = function(){
    if(this.state == "sleep"){
    this.state = "active";
    this.memory = this.memomory*2;
  }
};
    //Declare the instance function close here.
this.close = function(){
  if(this.state != null ){
    this.state = null;
    this.memory = 0;
  };
}

//Use the constructor to create 4 App objects below.
var kevbook = new App(kevbook, active, 4);
var michbook = new App(michbook, null, 6);
var instakev = new App(instakev ,active , 10);
var Ooeeooahah = new App(bingbangwallawallabingbang, active, 24);
//Declare an array named appList, and place all 4 of your apps in that array.
//The order does not matter.
var applist = [kevbook,michbook,instakev,Ooeeooahah];
