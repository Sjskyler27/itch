export const tutorial = [
  {
    title: 'Welcome to Itch!',
    // badge: '',
    description:
      'This is your playground for learning to code! Lets go over some basic concepts and tools you can use in your code!',
    // collapse: {
    //   title: '',
    //   description: "",
    // },
  },
  {
    title: 'The "Write" Tool',
    badge: 'Concept 1',
    // greenBadge: true,
    description:
      'Lets make your first program! Select the green box and type: "write Hello World!". The "write" function writes what you tell it to in the red output box!',
    collapse: {
      title: 'Did you know?',
      description:
        'Hello World is one of the first programs that many programmers start out writing!',
    },
  },
  {
    title: 'The "Play" Button',
    badge: 'Concept 2',
    // greenBadge: true,
    description:
      'Click <i style="background: #2ec2ac; color: white; padding: 10px; border-radius: 5px;" class="fa-solid fa-play"></i> to run your code. If you click the "play" button in the bottom right green box it will execute the code you have written in the green box then show the results in the red output box.',
    collapse: {
      title: 'Practice',
      description:
        'Try using the "write" tool to type your name instead of "Hello World!". Make sure you hit the green play button when you finish writing your code to see your name appear on the otherside.',
    },
  },
  {
    title: 'The "Is" Tool and Variables',
    badge: 'Concept 3',
    // greenBadge: true,
    description:
      'A variable is like a box that stores or hold a number or word(s). To store a variable we simply type a name for a variable and then type "is" to give the variable a word or number it holds. We could store our favorite color in a variable named favoriteColor. Here is an example of what you could type: "favoriteColor is Blue". Another example for a variable could be "cookies is 12" if you have 12 cookies. Whenever you use the write tool to write a variable you must make sure you use the "|" on both sides of the name of the variable.',
    collapse: {
      title: 'Practice',
      description:
        'Make a variable called "favoriteColor" that stores your favorite color. Then use the write tool to write your favorite color in the red output box. Here is my solution: "favoriteColor is Blue" in the next line type this: "|write favoriteColor|. You should see your favorite color then written in the red out box. For my example it shows: "Blue".',
    },
    tags: ['', ''],
  },
  {
    title: 'The "Ask" Tool',
    badge: 'Concept 4',
    // greenBadge: true,
    description:
      'The ask tool asks you or whoever is using your code a question to answer. The ask tool works well with variables as you can store the answer in a variable. To use the ask tool simply type "ask" then type a question.',
    collapse: {
      title: 'Practice',
      description:
        'Lets write a program that asks what your age is and then tells you how old you are. To start lets make a variable called "age" and then use "is" to make it equal to the answer to your "ask" question. Here is what it should look like: "age is ask What is your Age?". Now that we have their age stored in the "age" variable lets use the write tool to tell them how old they are. Here is what we write on the next line: "write You are |age| years old". Make sure you remember to surround the age variable with the "|" pipe symbols.',
    },
    tags: ['', ''],
  },
  {
    title: 'Math',
    badge: 'Concept 5',
    // greenBadge: true,
    description:
      'In Itch we can also do basic math like addition (+), subtraction (-), multiplication (*), division (/). To do this we simply put one of the operator symbols in between two numbers. Try typing "write 2 + 2" and hitting the play button. Remember that if we want our code to show us what it has done that we need to use the "write" tool to have it appear in the red output box. The output box should show the number "4".',
    collapse: {
      title: 'Practice',
      description:
        'Lets make a basic calculator that only multiplies two numbers. First, we need to create two variables to store the numbers we want to multiply. We can name the first variable "number1" and the second number "number2". After we have two variables lets use "is" and "ask" to ask the user what the numbers they want to multiply are and then store them in the variable. Your first two lines should look something like this: "number1 is ask What is the first number?" and "number2 is ask What is the second number?". Now that we have two numbers stored in two variables we need to multiply them. If we want to display the number we have to use the "write" tool and we also must multiply the two variable names together using "*" (remember to put the variables surrounded by the "|" symbols). Here is what your code should look like: "write |number1| * |number2|. Try multipling 6 and 4 to get 24.',
    },
    tags: ['', ''],
  },
  {
    title: 'The "Random" Tool',
    badge: 'Concept 6',
    // greenBadge: true,
    description:
      'The "random" tool is used to get a random number between two numbers you specify. For example, you could write: "random 1 10" and the code would randomly give you any number between 1 and 10 including 1 and 10.',
    collapse: {
      title: 'Practice',
      description:
        'Lets write an exercise program that gives you a random number of times you have to do jumping jacks. To start lets make a variable named jumpingJacks and make it equal to "random 15 30" using the "is" operator: "jumpingJacks is random 15 30". Now that we have our random number stored in the jumpingJacks variable, lets write a message showing the random number of jumping jacks you have to do: "write Stand up and do |jumpingJacks| jumping jacks! Now test your code and see how many jumping jacks you have to do!',
    },
    tags: ['', ''],
  },
  {
    title: 'The "If" Tool',
    badge: 'Concept 7',
    // greenBadge: true,
    description:
      'The If tool checks to see if something you have written is True. To use the if we tool we simply type if then a statement we want it to check. After we right that if we want the code to do something afterwards we have to hit the "Tab" on the next line. A good example is "if 5 = 5" then on the next line tab and type "write This math is correct!". In addition to using "=" with if statements we can also use "!" which means "does not equal". Here is an example: "if 5 ! 6" "This math is correct!". With the if tool we can also use the greater than ">" and less than "<" signs.',
    collapse: {
      title: 'Practice',
      description: '',
    },
    tags: ['', ''],
  },
];
