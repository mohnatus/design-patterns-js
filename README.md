# Шаблоны проектирования (JavaScript)

* [creational - порождающие шаблоны](https://github.com/Mohnatus/design-patterns-js/tree/master/creational)
  * [Абстрактная фабрика (Abstract factory)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/abstractFactory)
  * [Строитель (Builder)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/builder)
  * [Фабричный метод (Factory method)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/factoryMethod)
  * [Отложенная инициализация (Lazy initialization)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/lazyInitialization)
  * [Пул объектов (Object pool)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/pool)
  * [Прототип (Prototype)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/prototype)
  * [Одиночка (Ssingleton)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/singleton)
* [structural - структурные шаблоны](https://github.com/Mohnatus/design-patterns-js/tree/master/structural)
  * [Адаптер (Adapter)](https://github.com/Mohnatus/design-patterns-js/tree/master/adapter)
  * [Мост (Bridge)](https://github.com/Mohnatus/design-patterns-js/tree/master/bridge)
  * [Компоновщик (Composite)](https://github.com/Mohnatus/design-patterns-js/tree/master/structural/composite)
  * [Декоратор (Decorator)](https://github.com/Mohnatus/design-patterns-js/tree/master/structural/decorator)
  * [Фасад (Facade)](https://github.com/Mohnatus/design-patterns-js/tree/master/facade)
  * [Приспособленец (Flyweight)](https://github.com/Mohnatus/design-patterns-js/tree/master/flyweight)
  * Заместитель (Proxy)
* [behavioral - поведенческие шаблоны](https://github.com/Mohnatus/design-patterns-js/tree/master/behavioral)
  * Цепочка обязанностей (Chain of responsibilily)
  * [Команда (Command)](https://github.com/Mohnatus/design-patterns-js/tree/master/behavioral/command)
  * Интерпретатор (Interpreter)
  * [Итератор (Iterator)](https://github.com/Mohnatus/design-patterns-js/tree/master/behavioral/iterator)
  * [Посредник (Mediator)](https://github.com/Mohnatus/design-patterns-js/tree/master/behavioral/mediator)
  * Хранитель (Memento)
  * Null Object
  * [Наблюдатель (Observer)](https://github.com/Mohnatus/design-patterns-js/tree/master/behavioral/observer)
  * Издатель-подписчик (Pub-Sub)
  * Слуга (Servant)
  * Состояние (State)
  * [Стратегия (Strategy)](https://github.com/Mohnatus/design-patterns-js/tree/master/behavioral/strategy)
  * Шаблонный метод (Template method)
  * Посетитель (Visitor)

## Примеры
Некоторые примеры описаний взяты из книги Паттерны проектирования (Э. Фримен, Э. Фримен) издательства O'Reilly, некоторые - из [википедии](https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F), остальные - собраны по интернету или придуманы мной.

## Особенности языка
Так как в JavaScript нет интерфейсов (и абстрактных классов), придется положиться на внимательность разработчиков и просто договориться о необходимом формате.

В примерах интерфейс при необходимости будет описываться в комментариях со словом Interface.