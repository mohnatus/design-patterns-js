const President = (function() {
  let president;

  return function(name) {
    if (president) {
      console.log('Попытка переназначить существующего президента');
      return president;
    }
    president = {
      name,
      introduce() {
        console.log(`Hello, I am the single President ${this.name}`);
      }
    };
    return president;
  }
})();

export default President;
