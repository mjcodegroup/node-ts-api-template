import GetHelloInterface from "../interfaces/exampleInterfaces";

class ExampleService {
  getHello(body: GetHelloInterface) {
    return `Hello World from Example service`;
  }
}

export default new ExampleService();
