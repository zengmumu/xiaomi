import Vue from "vue"
var bus  =new Vue()
bus.getTocken = function(){
    return bus.tocken || localStorage["tocken"];
}
bus.setTocken=function(val){
    bus.tocken = val;
    localStorage.setItem("tocken",val);
}
bus.tocken = "";
export default bus;