import RequestBuilder from "./request";

let requestBuilder = new RequestBuilder();
requestBuilder
  .forUrl('https://example.com')
  .useMethod('POST')
  .payload({data: "Hello, world"})
  .build();
