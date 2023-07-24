// array for questions and feelings
const feelingNodes = [
    {
      id: 1,
      question: "How are you feeling?",
      options: [
        {
          text: "Happy",
          nextFeeling: 2
        },
        {
          text: "Sad",
          nextFeeling: 3
        }
      ]
    },
    {
      id: 2,
      question: "Happy! Thats great, now, let's get more specific..",
      options: [
        {
          text: 'Nevermind, go back.',
          nextFeeling: 1
        },
        {
          text: "Playful",
          nextFeeling: 2
        },
        {
          text: "Content",
          nextFeeling: 2
        }
      ]
    },
    {
        id: 3,
        question: "Lets find a more specific description.",
        options: [
          {
            text: 'Nevermind, go back.',
            nextFeeling: 1
          },
          {
            text: "Lonely",
            nextFeeling: 3
          },
          {
            text: "Vulnerable",
            nextFeeling: 3
          }
        ]
      },
  ]