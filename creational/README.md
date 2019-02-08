# Порождающие шаблоны проектирования

## Что абстрагируется?

Создание, инициализация объектов (инстанцирование). 

## Зачем нужны?

Чтобы система не зависела от способа создания объекта (только от интерфейсов). 
Особенно полезны, если в основе проекта лежит композиция (а не наследование).
Можно без проблем заменить один объект другим с иным способом создания (но тем же интерфейсом).

## Шаблоны

* [Абстрактная фабрика(abstract factory)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/abstractFactory)
* [Строитель (builder)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/builder)
* [Фабричный метод (factory method)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/factoryMethod)
* [Отложенная инициализация (lazy initialization)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/lazyInitialization)
* Пул объектов (object pool)
* Прототип (prototype)
* [Одиночка (singleton)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/singleton)