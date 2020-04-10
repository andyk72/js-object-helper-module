import { getItem, setItem } from "./modules/object-helper";

const obj = {
  andy: {
    name: "Andy",
    age: 48
  },
  mark: {
    name: "Mark",
    age: 30
  }
};

console.log("-> Original object");
console.log(obj);

console.log("-> Read andy.name");
console.log("andy.nanme = " + getItem("andy.name", obj));

console.log("-> Read mark.name");
console.log("mark.name = " + getItem("mark.name", obj));

console.log("-> Write mark.age = 99");
setItem("mark.age", 99, obj);

console.log("-> Updated object");
console.log(obj);
