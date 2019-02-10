# Порождающие шаблоны проектирования

## Что абстрагируется?

Создание, инициализация объектов (инстанцирование). 

## Зачем нужны?

Чтобы система не зависела от способа создания объекта (только от интерфейсов). 
Особенно полезны, если в основе проекта лежит композиция (а не наследование).
Можно без проблем заменить один объект другим с иным способом создания (но тем же интерфейсом).

## Шаблоны

* [Абстрактная фабрика (Abstract factory)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/abstractFactory)
* [Строитель (Builder)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/builder)
* [Фабричный метод (Factory method)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/factoryMethod)
* [Отложенная инициализация (Lazy initialization)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/lazyInitialization)
* [Пул объектов (Object pool)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/pool)
* [Прототип (Prototype)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/prototype)
* [Одиночка (Singleton)](https://github.com/Mohnatus/design-patterns-js/tree/master/creational/singleton)