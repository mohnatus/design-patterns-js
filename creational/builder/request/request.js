/**
 * Сборка объекта запроса с помощью паттерна Строитель
 */

class Request {
  constructor() {
    this.url = '';
    this.method = '';
    this.payload = {};
  }
}

class RequestBuilder {
  constructor() {
    this.request = new Request();
  }

  forUrl(url) {
    this.request.url = url;
    console.log('Установлен url запроса', url);
    return this;
  }

  useMethod(method) {
    this.request.method = method;
    console.log('Установлен метод запроса', method)
    return this;
  }

  payload(payload) {
    this.request.payload = payload;
    console.log('Добавлено тело запроса', payload);
    return this;
  }

  build() {
    console.log('Готовый запрос:', this.request);
    return this.request;
  }
}

export default RequestBuilder;