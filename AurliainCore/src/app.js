import { HttpClient, json } from 'aurelia-fetch-client';

export class App {
  message = "Hello World";

  activate(params, routeConfig, navigationInstruction) {
    let httpClient = new HttpClient();
    httpClient.fetch("https://api.ipify.org/?format=json", { method: 'get' })
                    .then(response => response.json())
                    .then(data => this.message = JSON.stringify(data))

  }
}
