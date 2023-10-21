export default class Interpreter {
  constructor(text) {
    this.text = String(text);
    this.variables = new Object();
    this.codeShouldContinue = true;
    this.codeError = false;
    this.outputBuffer = [];
    this.endOfCode = false;
    this.askVarName;
  }

  /**
   * main function that takes in raw code and
   */
  main(askValue = null) {
    // debugger;
    let newlineIndex;
    let line;
    let remainder;

    // Resume from input
    if (!this.codeShouldContinue && !this.endOfCode) {
      this.outputBuffer = [];
      this.codeShouldContinue = true;
      this.updateVariable(this.askVarName, askValue);
    }

    while (this.codeShouldContinue) {
      newlineIndex = this.text.indexOf('\n');

      line = this.text.slice(0, newlineIndex);
      remainder = this.text.slice(newlineIndex + 1);

      //   This means it is the last line
      if (newlineIndex == -1) {
        line = this.text.slice(0);
        this.codeShouldContinue = false;
        this.endOfCode = true;
      }

      this.text = remainder;

      this.executeLine(line);
    }

    // {data: ['Hello World', 'What is your name'], endOfCode: false, error: true}
    return {
      data: this.outputBuffer,
      endOfCode: this.endOfCode,
      error: this.codeError,
    };
  }

  /**
       * split on spaces
         call the proper function to run with this line (i.e. write(), ask(), etc),
         check for exceptions
       */
  executeLine(lineOfCode) {
    // debugger;
    const spaceIndex = lineOfCode.indexOf(' ');

    const keyword = lineOfCode.slice(0, spaceIndex).trim();
    const secondPart = lineOfCode.slice(spaceIndex + 1);

    let writePattern = 'write/i';
    let askPattern = 'ask/i';
    let repeatPattern = 'repeat/i';
    let ifPattern = 'if/i';
    let variablePattern = 'is/i';
    let randomPattern = 'random/i';
    // debugger;
    try {
      if (writePattern.match(keyword)) {
        this.write(secondPart);
      } else if (repeatPattern.match(keyword)) {
        // how to pass in the proper amount of code

        this.repeat(secondPart);
      } else if (ifPattern.match(keyword)) {
        this.conditional(secondPart);
      } else if (keyword == '') {
      } else {
        // break off the second word of line
        const spaceIndex = secondPart.indexOf(' ');
        //   debugger;
        const secondWord = secondPart.slice(0, spaceIndex);
        const newSecondPart = secondPart.slice(spaceIndex + 1);

        // break off third word of line
        const newSpaceIndex = newSecondPart.indexOf(' ');
        let thirdWord = newSecondPart.slice(0, newSpaceIndex);
        if (newSpaceIndex == -1) {
          thirdWord = newSecondPart;
        }

        // check for ** is ask ****
        if (askPattern.match(thirdWord) && variablePattern.match(secondWord)) {
          const prompt = newSecondPart.slice(newSpaceIndex + 1);
          this.ask(keyword, prompt);
        }
        // check for ** is random ****
        else if (
          randomPattern.match(thirdWord) &&
          variablePattern.match(secondWord)
        ) {
          this.setVariable(
            keyword,
            this.random(newSecondPart.slice(newSpaceIndex + 1))
          );
        }
        // check to see if the second word is "is"
        else if (variablePattern.match(secondWord)) {
          this.setVariable(keyword, newSecondPart);
        } else {
          throw new Error(
            `ERROR '${lineOfCode}' not a valid line of code ~ check spelling and look at reference list`
          );
        }
      }
    } catch (error) {
      this.raiseError(error.message);
    }
  }

  /**
   * if the given string is a defined variable, returns the value of the variable. Otherwise returns the input string
   */
  getValueFromKey(possibleKey) {
    if (possibleKey in this.variables) {
      return this.variables[possibleKey];
    }
    return possibleKey;
  }

  /**
   * Concatinates a given string and replaces any variables with their value
   */
  concatinateString(inputString) {
    let stringList = inputString.split('|');
    let result = '';
    stringList.forEach((individualString, index) => {
      let trimmedString = individualString.trim();
      stringList[index] = this.getValueFromKey(trimmedString);
    });
    stringList.forEach(individualString => {
      result += individualString + ' ';
    });
    if (this.isMath(result)) {
      result = this.math(result);
    }
    return result;
  }

  /**
   * write textToWrite to the console object
   */
  write(textToWrite) {
    this.outputBuffer.push(this.concatinateString(textToWrite));
  }

  /**
       * save the rest of the text and any variables already defined,
         signal to console to look for input,
         stop running code
       */
  ask(varName, prompt) {
    // debugger;
    this.write(prompt);
    this.askVarName = varName;
    this.setVariable(varName, null);
    // send the message to signal input
    this.codeShouldContinue = false;
  }

  /**
   * if statement
   */
  conditional(remainingTextInLine) {
    debugger;

    if (this.evaluateConditionals(remainingTextInLine)) {
      // keep running code as normal, ignore the indented block
      // they should just run all code
    } else {
      // find how much code to skip
      let keepSkipping = true;
      const tabPattern = /^\t+/; // Regular expression to match one or more tab characters at the start

      while (keepSkipping && this.codeShouldContinue) {
        let newlineIndex = this.text.indexOf('\n');
        let line = this.text.slice(0, newlineIndex);
        let remainder = this.text.slice(newlineIndex + 1);

        if (tabPattern.test(line)) {
          if (newlineIndex == -1) {
            line = this.text.slice(0);
            this.codeShouldContinue = false;
            this.endOfCode = true;
          }

          this.text = remainder;
        } else {
          keepSkipping = false;
        }
      }
    }
  }

  /**
   * handle boolean conditionals
   * return truth value
   */
  evaluateConditionals(expression) {
    const operators = /[+*/%&|<>=!]/; // Regular expression to match the operators
    const match = expression.match(operators);

    if (match) {
      const operatorIndex = match.index;
      const leftOperand = expression.slice(0, operatorIndex).trim();
      const rightOperand = expression.slice(operatorIndex + 1).trim();
      let operator = match[0].trim();

      const leftValue = this.getValueFromKey(leftOperand);
      const rightValue = this.getValueFromKey(rightOperand);
      if (operator == '=') {
        operator = '==';
      }
      if (operator == '!') {
        operator = '!=';
      }
      if (
        eval(`${leftValue} ${operator} ${rightValue}`) != true ||
        eval(`${leftValue} ${operator} ${rightValue}`) != false
      ) {
        throw new Error(
          `ERROR the line '${leftValue} ${operator} ${rightValue}' is not correct ~ check spelling and look at variables list`
        );
      }
      return eval(`${leftValue} ${operator} ${rightValue}`);
    }

    return null;
  }

  // 115de6c git
  // conditional(remainingTextInLine) {
  //   const splitPhrase = this.evaluateConditionals(remainingTextInLine);
  //   let [leftOperand, operator, rightOperand] = splitPhrase;
  //   const leftValue = this.getValueFromKey(leftOperand);
  //   const rightValue = this.getValueFromKey(rightOperand);
  //   if (operator == '=') {
  //     operator = '==';
  //   }

  //   if (eval(`${leftValue} ${operator} ${rightValue}`)) {
  //     // keep running code as normal, ignore the indented block
  //     // they should just run all code
  //   } else {
  //     // find how much code to skip
  //     let keepSkipping = true;
  //     const tabPattern = /^\t+/; // Regular expression to match one or more tab characters at the start

  //     while (keepSkipping && this.codeShouldContinue) {
  //       let newlineIndex = this.text.indexOf('\n');
  //       let line = this.text.slice(0, newlineIndex);
  //       let remainder = this.text.slice(newlineIndex + 1);

  //       if (tabPattern.test(line)) {
  //         if (newlineIndex == -1) {
  //           line = this.text.slice(0);
  //           this.codeShouldContinue = false;
  //           this.endOfCode = true;
  //         }

  //         this.text = remainder;
  //       } else {
  //         keepSkipping = false;
  //       }
  //     }
  //   }
  // }
  // /**
  //  * handle boolean conditionals
  //  * return truth value
  //  */
  // evaluateConditionals(expression) {
  //   const operators = /[+*/%&|<>=!]/; // Regular expression to match the operators
  //   const match = expression.match(operators);

  //   if (match) {
  //     const operatorIndex = match.index;
  //     const leftOperand = expression.slice(0, operatorIndex).trim();
  //     const rightOperand = expression.slice(operatorIndex + 1).trim();
  //     const operator = match[0].trim();
  //     console.log(`${leftOperand} ${operator} ${rightOperand}`);
  //     return [leftOperand, operator, rightOperand];
  //   }

  //   return null;
  // }

  /**
       * check if is math,
         check if is a number,
         creates a variable with value varValue
         save variable to variables object
       */
  setVariable(varName, varValue) {
    if (!isNaN(varName)) {
      throw new Error(
        `ERROR variable names like '${varName}' cannot be a number`
      );
    }
    if (this.isMath(varValue)) {
      varValue = this.math(varValue);
    }
    if (!isNaN(varValue)) {
      varValue = parseFloat(varValue);
    } else {
      varValue = this.concatinateString(varValue);
    }
    this.variables[varName] = varValue;
  }

  /**
   * Update a variables value
   */

  updateVariable(varName, varValue) {
    this.variables[varName] = varValue;
  }

  /**
       * Parse/exectue math that they want to do,
         return the answer
       */
  math(expression) {
    // Define a regular expression to match innermost parentheses
    const innerMostParentheses = /\(([^()]+)\)/;
    // Iterate until there are no more innermost parentheses
    while (innerMostParentheses.test(expression)) {
      expression = expression.replace(innerMostParentheses, (match, group) => {
        // Evaluate the content of the innermost parentheses and replace with the result
        return this.math(group);
      });
    }
    // Now, expression contains no parentheses, so we can use JavaScript's eval() safely
    return eval(expression);
  }

  /**
   * determine if something is math
   */
  isMath(input) {
    const mathRegex = /[-+*/^()]/; // Regex for basic math symbols
    return mathRegex.test(input);
  }
  /**
   * return a random number between the two numbers given
   * i.e. x is random 1 10
   */
  random(inputString) {
    // split the string on spaces
    let inputAsList = inputString.split(' ');
    inputAsList.forEach((item, index) => {
      debugger;
      item = item.trim();
      // if it's a variable, get the value of the variable
      let value = this.getValueFromKey(item);
      if (this.isMath(item)) {
        // if the item is math, do math
        item = this.math(item);
        debugger;
      }
      if (isNaN(value)) {
        // if it's not a number, send an error message
        debugger;
        throw new Error(
          `ERROR! '${item}' is not a number ~ check spelling and look at variables list`
        );
      }
      // if the item is a number, parse it to a float
      inputAsList[index] = parseFloat(value);
    });
    // instantiate the start and stop numbers from the list
    let start = parseFloat(inputAsList[0]);
    let stop = parseFloat(inputAsList[1]);
    // return a random number between start and stop (inclusive)
    return Math.floor(Math.random() * (stop - start + 1)) + start;
  }

  /**
   * raise an error aka write error to buffer
   * codeError to true
   * stop the code
   */
  raiseError(message) {
    this.codeError = true;
    this.codeShouldContinue = false;
    this.write(message);
  }
}
