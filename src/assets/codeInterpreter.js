export default class Interpreter {
  constructor() {
    this.variables = {}; // To store variables
    this.output = []; // To store output messages
  }

  async interpret(code) {
    const lines = code.split('\n');

    for (const line of lines) {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith('set')) {
        // Handle variable assignment
        const [_, variableName, value] = trimmedLine.match(/set (\w+) = (.+)/);
        this.variables[variableName] = value;
      } else if (trimmedLine.startsWith('print')) {
        // Handle print statements
        const [_, variableName] = trimmedLine.match(/print (\w+)/);
        const text = this.variables[variableName];
        this.output.push({ type: 'print', text });
      } else if (trimmedLine.startsWith('prompt')) {
        // Handle prompt statements
        const [_, variableName, promptText] = trimmedLine.match(
          /(\w+) = prompt\('(.+)'\)/
        );
        const userInput = prompt(promptText);
        this.variables[variableName] = userInput;
      }
    }
  }

  getOutput() {
    return this.output;
  }
}
