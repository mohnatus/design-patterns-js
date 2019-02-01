# Порождающие шаблоны проектирования

## Что абстрагируется?

Создание, инициализация объектов (инстанцирование). 

## Зачем нужны?

Чтобы система не зависела от способа создания объекта (только от интерфейсов). 
Особенно полезны, если в основе проекта лежит композиция (а не наследование).
Можно без проблем заменить один объект другим с иным способом создания (но тем же интерфейсом).

## Шаблоны

* [абстрактная фабрика(abstract factory)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/abstractFactory)
* строитель (builder)
* [фабричный метод (factory method)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/factoryMethod)
* ленивая инициализация (lazy initialization)
* пул объектов (object pool)
* прототип (prototype)
* одиночка (singleton)