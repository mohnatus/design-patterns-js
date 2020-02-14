# Шаблоны проектирования (JavaScript)

* [Порождающие шаблоны (Creational patterns)](./creational#readme)
  * [Фабричный метод (Factory method)](./creational/factoryMethod#readme)
  * [Абстрактная фабрика (Abstract factory)](./creational/abstractFactory#readme)
  * [Строитель (Builder)](./creational/builder#readme)
  * [Отложенная инициализация (Lazy initialization)](./creational/lazyInitialization#readme)
  * [Пул объектов (Object pool)](./creational/pool#readme)
  * [Прототип (Prototype)](./creational/prototype#readme)
  * [Одиночка (Singleton)](./creational/singleton#readme)
* [Структурные шаблоны (Structural patterns)](./structural#readme)
  * [Адаптер (Adapter)](./structural/adapter#readme)
  * [Мост (Bridge)](./structural/bridge#readme)
  * [Компоновщик (Composite)](./structural/composite#readme)
  * [Декоратор (Decorator)](./structural/decorator#readme)
  * [Фасад (Facade)](./structural/facade#readme)
  * [Приспособленец (Flyweight)](./structural/flyweight#readme)
  * [Заместитель (Proxy)](./structural/proxy#readme)
* [Поведенческие шаблоны (Behavioral patterns)](./behavioral#readme)
  * [Цепочка обязанностей (Chain of responsibility)](./behavioral/chainOfResponsibility#readme)
  * [Команда (Command)](./behavioral/command#readme)
  * [Интерпретатор (Interpreter)](./behavioral/interpreter#readme)
  * [Итератор (Iterator)](./behavioral/iterator#readme)
  * [Посредник (Mediator)](./behavioral/mediator#readme)
  * [Хранитель (Memento)](./behavioral/memento#readme)
  * [Наблюдатель (Observer)](./behavioral/observer#readme)
  * [Состояние (State)](./behavioral/state#readme)
  * [Стратегия (Strategy)](./behavioral/strategy#readme)
  * [Шаблонный метод (Template method)](./behavioral/template#readme)
  * [Посетитель (Visitor)](./behavioral/visitor#readme)

## Источники

* Паттерны проектирования (Э. Фримен, Э. Фримен), издательство O'Reilly
* [Википедия](https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F)
* [Design Pattern Game](https://designpatternsgame.com/)
* [refactoring.guru](https://refactoring.guru/)
* Просторы интернета

## Особенности языка

В JavaScript нет интерфейсов и абстрактных классов. Поэтому соответствие структуры классов необходимому формату достигается в основном путем следования договоренностям. Разработчик определяет интерфейс (набор методов и свойств, которым должен обладать класс) и самостоятельно контролирует его соблюдение в каждом классе.

В примерах интерфейс при необходимости будет описываться в комментариях со словом `Interface`.

Для каждого паттерна по возможности приводится как абстрактные, так и реальные примеры, встречающиеся в JS-разработке.

## Выполнение кода

Чтобы запускать код примеров, установите зависимости проекта:

```
npm install
```

Команды для запуска приведены в описании примеров.
