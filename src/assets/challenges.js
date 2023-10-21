export const challenges = [
  {
    title: 'Hello World!',
    badge: 'Easy',
    description: "Have the output box write 'Hello World!'",
    collapse: {
      title: 'How To...',
      description: "Type 'write Hello World!'",
    },
  },
  {
    title: 'Hi! My name is __!',
    badge: 'Easy',
    description:
      "Write a program that has the output box write: 'Hi! My name is (Your Full Name)!",
    collapse: {
      title: 'How To...',
      description:
        "Create variables by typing 'firstName is (Your first name). Do the same for both your middle and last name. After that you need to type this: 'write Hi! My name is + firstName + middleName + lastName!'. Another way to get the same result is store your name in one variable: 'fullName = John Brown Smith', and then write Hi! My name is + fullName!'",
    },
  },
  {
    title: 'Mad Libs',
    badge: 'Medium',
    description:
      'Write a program that has the output box make a mad libs based on nouns, adjectives, and verbs you put in.',
    collapse: {
      title: 'How To...',
      description:
        "Create variables named after the words in brackets in the mad lib text. For each variable you need to ask the user for a word that is what the variable is asking for. For example, for adjective1 you could write 'adjective1 is ask Type an Adjective:' ",
      'mad lib text':
        'Once upon a time in a [Adjective1] forest, there lived a mischievous [Animal]. This clever creature [Past Tense Verb] through the [Noun] near the [Place] in the middle of the night. It moved [Adverb] and was the color [Color]. It had [Number] [Adjective2] spots on its back and was known for its love of [Food]. ',
    },
  },
  {
    title: 'Choose your Own Adventure',
    badge: 'Hard',
    description:
      'Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).',
    tags: ['String', 'Algorithm'],
  },
];
