export const challenges = [
  {
    title: 'Hello World!',
    badge: 'Easy',
    description: "Have the output box write 'Hello World!'",
    collapse: {
      title: 'How to...',
      description: 'Type: <p><code>write Hello World!</code></p>',
    },
    tags: ['write'],
  },
  {
    title: 'Hi! My name is __!',
    badge: 'Easy',
    description:
      "Write a program that has the output box write: 'Hi! My name is (Your Full Name)!",
    collapse: {
      title: 'How to...',
      description:
        'Create variables by typing: <p><code>firstName is (Your first name)</code></p> Do the same for both your middle and last name. After that you need to type this: <p><code>write Hi! My name is | firstName | middleName | lastName |!</code></p> Another way to get the same result is store your name in one variable: <p><code>fullName is John Brown Smith<br>write Hi! My name is | fullName</code></p>',
    },
    tags: ['write', 'is', 'variables'],
  },
  {
    title: 'Favorite Color',
    badge: 'Easy',
    description:
      'Write a program that asks a user for their favorite color, then allow them to type in their color. Finally, have the program respond to them by displaying the text "Your favorite color is" followed by the color they typed.',
    collapse: {
      title: 'How to...',
      description:
        "Ask for the user's favorite color and tell them it by typing: <p><code>favorite_color is ask what is your favorite color?<br>write Your favorite color is |favorite_color|.</code></p>",
    },
    tags: ['write', 'is', 'ask', 'variables'],
  },
  {
    title: 'Mad Libs',
    badge: 'Medium',
    description:
      'Write a program that has the output box make a mad libs based on nouns, adjectives, and verbs you put in. Do not forget to put "|" around your variables in your mad libs text that you write. ',
    collapse: {
      title: 'How to...',
      description:
        'Create variables named after the words in brackets in the mad lib text. For each variable you need to ask the user for a word that is what the variable is asking for. For example, for adjective1 you could type<p><code>adjective1 is ask Type an Adjective</code></p> mad lib text: <p>write Once upon a time in a |Adjective1| forest, there lived a mischievous |Animal|. This clever creature |Past Tense Verb| through the |Noun| near the |Place| in the middle of the night. It moved |Adverb| and was the color |Color|. It had |Number| |Adjective2| spots on its back and was known for its love of |Food|. ',
    },
    tags: ['write', 'is', 'ask', 'variables'],
  },
  {
    title: 'Choose your Own Adventure',
    badge: 'Hard',
    description:
      'Write a story that different outcomes based on what a user decides to do. When given a choice on the island, do they go through the dark forest or across the bridge over the fiery volcano?',
    tags: ['write', 'is', 'ask', 'variable', 'if'],
    collapse: {
      title: 'How to...',
      description:
        'You will need to use if statements in order to accomplish this challenge. Here is an example code to type: <p><code>choice is ask Do you turn left or right?<br>if choice = left<br><span style="white-space: pre;">    write story1</span></code></p>',
    },
  },
];
