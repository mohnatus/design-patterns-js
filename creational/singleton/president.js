const President = (function() {
  let president;

  return function(name) {
    if (president) return president;
    president = {
      name,
      introduce() {
        console.log(`Hello, I am the single President ${this.name}`);
      }
    };
    return president;
  }
})();

let firstPresident = President('Ivan Ivanovich Ivanov');
firstPresident.introduce(); // Hello, I am the single President Ivan Ivanovich Ivanov

let secondPresident = President('Petr Petrovich Petrov');
secondPresident.introduce(); // Hello, I am the single President Ivan Ivanovich Ivanov
