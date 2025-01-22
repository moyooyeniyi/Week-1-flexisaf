// Initial Array
const array = [10, 20, 30, 40, 50];
document.getElementById("array-display").textContent = array.join(", ");

// Map Function
const mapFunction = () => {
  const result = array.map(num => num * 2); // Multiply each element by 2
  document.getElementById("map-result").textContent = result.join(", ");
};

// Filter Function
const filterFunction = () => {
  const result = array.filter(num => num > 25); // Keep numbers greater than 25
  document.getElementById("filter-result").textContent = result.join(", ");
};

// Reduce Function
const reduceFunction = () => {
  const result = array.reduce((acc, curr) => acc + curr, 0); // Sum of all elements
  document.getElementById("reduce-result").textContent = result;
};

// ForEach Function
const forEachFunction = () => {
  let result = [];
  array.forEach(num => result.push(num * 3)); // Multiply each by 3
  document.getElementById("foreach-result").textContent = result.join(", ");
};

// Splice Function
const spliceFunction = () => {
  const newArray = [...array]; // Clone array to avoid mutation
  newArray.splice(1, 2, 60, 70); // Remove 2 elements at index 1 and add 60, 70
  document.getElementById("splice-result").textContent = newArray.join(", ");
};

// Object Example
const objectFunction = () => {
  const person = {
    name: "Moyosoreoluwa",
    age: 25,
    skills: ["HTML", "CSS", "JavaScript"],
    introduce: () => `Hi, I'm ${person.name}, and I know ${person.skills.join(", ")}.`,
  };
  document.getElementById("object-result").textContent = person.introduce();
};
