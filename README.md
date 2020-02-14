# Шаблоны проектирования (JavaScript)

* [Порождающие шаблоны (Creational patterns)](./creational)
  * [Абстрактная фабрика (Abstract factory)](./creational/abstractFactory)
  * [Строитель (Builder)](./creational/builder)
  * [Фабричный метод (Factory method)](./creational/factoryMethod)
  * [Отложенная инициализация (Lazy initialization)](./creational/lazyInitialization)
  * [Пул объектов (Object pool)](./creational/pool)
  * [Прототип (Prototype)](./creational/prototype)
  * [Одиночка (Singleton)](./creational/singleton)
* [Структурные шаблоны (Structural patterns)](./structural)
  * [Адаптер (Adapter)](./structural/adapter)
  * [Мост (Bridge)](./structural/bridge)
  * [Компоновщик (Composite)](./structural/composite)
  * [Декоратор (Decorator)](./structural/decorator)
  * [Фасад (Facade)](./structural/facade)
  * [Приспособленец (Flyweight)](./structural/flyweight)
  * [Заместитель (Proxy)](./structural/proxy)
* [Поведенческие шаблоны (Behavioral patterns)](./behavioral)
  * [Цепочка обязанностей (Chain of responsibility)](./behavioral/chainOfResponsibility)
  * [Команда (Command)](./behavioral/command)
  * [Интерпретатор (Interpreter)](./behavioral/interpreter)
  * [Итератор (Iterator)](./behavioral/iterator)
  * [Посредник (Mediator)](./behavioral/mediator)
  * [Хранитель (Memento)](./behavioral/memento)
  * [Наблюдатель (Observer)](./behavioral/observer)
  * [Состояние (State)](./behavioral/state)
  * [Стратегия (Strategy)](./behavioral/strategy)
  * [Шаблонный метод (Template method)](./behavioral/template)
  * [Посетитель (Visitor)](./behavioral/visitor)

## Источники

* Паттерны проектирования (Э. Фримен, Э. Фримен), издательство O'Reilly
* [Википедия](https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F)
* [Design Pattern Game](https://designpatternsgame.com/)
* Просторы интернета

## Особенности языка

В JavaScript нет интерфейсов и абстрактных классов. Поэтому соответствие структуры классов необходимому формату достигается в основном путем следования договоренностям. Разработчик определяет интерфейс (набор методов и свойств, которым должен обладать класс) и самостоятельно контролирует его соблюдение в каждом классе.

В примерах интерфейс при необходимости будет описываться в комментариях со словом `Interface`.

## Выполнение кода

Чтобы запускать код примеров, установите зависимости проекта:

```
npm install
```

Команды для запуска приведены в описании примеров.
