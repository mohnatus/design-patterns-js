/*
interface Component {
    name
    value
    add(Component)
    remove(Component)
    execute()
}
*/

class Leaf {
  constructor(name, value) {
      this.name = name;
      this.value = value;
  }

  execute() {
      console.log(`${this.name}: ${this.value} руб.`);
      return this.value;
  }
}

class Composite {
  constructor(name, value) {
      this.name = name;
      this.items = [];
      this.value = value || 0;
  }

  add(component) {
      this.items.push(component);
  }

  remove(componentName) {
      this.items = this.items.filter(item => {
          return item.name !== componentName;
      })
  }

  execute() {
      this.value = this.items.reduce((total, item) => {
          return total += item.execute();
      }, 0);
      console.log(`Секция ${this.name}: ${this.value} руб.`);
      return this.value;
  }
}

export { Leaf, Composite };