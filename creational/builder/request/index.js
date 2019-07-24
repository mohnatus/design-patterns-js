import RequestPattern from "./request";

let requestBuilder = new RequestPattern();
requestBuilder
  .forUrl('https://example.com')
  .useMethod('POST')
  .payload({data: "Hello, world"})
  .build();
