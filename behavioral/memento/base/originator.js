class Memento {
  constructor(value) {
    this.value = value;
  }
}

const originator = {
  store: function(val) {
    console.log('Сохранение состояния');
    return new Memento(val);
  },
  restore: function(pattern) {
    console.log('Восстановление состояния');
    return pattern.value;
  }
};

export default originator;