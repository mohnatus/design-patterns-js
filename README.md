# Шаблоны проектирования (JavaScript)

* [creational - порождающие шаблоны](./creational)
  * [Абстрактная фабрика (Abstract factory)](./creational/abstractFactory)
  * [Строитель (Builder)](./creational/builder)
  * [Фабричный метод (Factory method)](./creational/factoryMethod)
  * [Отложенная инициализация (Lazy initialization)](./creational/lazyInitialization)
  * [Пул объектов (Object pool)](./creational/pool)
  * [Прототип (Prototype)](./creational/prototype)
  * [Одиночка (Ssingleton)](./creational/singleton)
* [structural - структурные шаблоны](./structural)
  * [Адаптер (Adapter)](./structural/adapter)
  * [Мост (Bridge)](./structural/bridge)
  * [Компоновщик (Composite)](./structural/composite)
  * [Декоратор (Decorator)](./structural/decorator)
  * [Фасад (Facade)](./structural/facade)
  * [Приспособленец (Flyweight)](./structural/flyweight)
  * [Заместитель (Proxy)](./structural/proxy)
* [behavioral - поведенческие шаблоны](./behavioral)
  * Цепочка обязанностей (Chain of responsibilily)
  * [Команда (Command)](./behavioral/command)
  * Интерпретатор (Interpreter)
  * [Итератор (Iterator)](./behavioral/iterator)
  * [Посредник (Mediator)](./behavioral/mediator)
  * Хранитель (Memento)
  * Null Object
  * [Наблюдатель (Observer)](./behavioral/observer)
  * Издатель-подписчик (Pub-Sub)
  * Слуга (Servant)
  * Состояние (State)
  * [Стратегия (Strategy)](./behavioral/strategy)
  * Шаблонный метод (Template method)
  * Посетитель (Visitor)

## Примеры
Некоторые примеры описаний взяты из книги Паттерны проектирования (Э. Фримен, Э. Фримен) издательства O'Reilly, некоторые - из [википедии](https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F), остальные - собраны по интернету или придуманы мной.

## Особенности языка
Так как в JavaScript нет интерфейсов (и абстрактных классов), придется положиться на внимательность разработчиков и просто договориться о необходимом формате.

В примерах интерфейс при необходимости будет описываться в комментариях со словом ```Interface```.