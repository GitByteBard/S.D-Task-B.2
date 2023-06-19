const nano = { a: 3, b: true };
console.log(nano);

const beta = nano;
beta.c = "abc";

const alfa = nano;
alfa.a = 20;

const c = () => {
  console.log("Hey there");
};

const myCity = {
  city: "Dublin",
};

myCity["popular"] = true;

const coutryPropertyName = "country";
myCity[coutryPropertyName] = "USA";
