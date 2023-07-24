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
        },
        {
          text: "Angry",
          nextFeeling: 4
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
          nextFeeling: 20
        },
        {
          text: "Content",
          nextFeeling: 20
        },
        {
          text: "Interested",
          nextFeeling: 20
        },
        {
          text: "Proud",
          nextFeeling: 20
        },
        {
          text: "Accepted",
          nextFeeling: 20
        },
        {
          text: "Powerful",
          nextFeeling: 20
        },
        {
          text: "Peaceful",
          nextFeeling: 20
        },
        {
          text: "Trusting",
          nextFeeling: 20
        },
        {
          text: "Optimistict",
          nextFeeling: 20
        }
      ]
    },
    {
        id: 3,
        question: "Sad. Lets find a more specific description.",
        options: [
          {
            text: 'Nevermind, go back.',
            nextFeeling: 1
          },
          {
            text: "Lonely",
            nextFeeling: 30
          },
          {
            text: "Vulnerable",
            nextFeeling: 30
          },
          {
            text: "Despair",
            nextFeeling: 30
          },
          {
            text: "Guilty",
            nextFeeling: 30
          },
          {
            text: "Depressed",
            nextFeeling: 30
          },
          {
            text: "Hurt",
            nextFeeling: 30
          }
        ]
      },
      {
          id: 4,
          question: "Angry. Lets find a more specific description.",
          options: [
            {
              text: 'Nevermind, go back.',
              nextFeeling: 1
            },
            {
              text: "Let down",
              nextFeeling: 40
            },
            {
              text: "Humiliated",
              nextFeeling: 40
            },
            {
              text: "Bitter",
              nextFeeling: 40
            },
            {
              text: "Mad",
              nextFeeling: 40
            },
            {
              text: "Aggressive",
              nextFeeling: 40
            },
            {
              text: "Frusterated",
              nextFeeling: 40
            },
            {
              text: "Distant",
              nextFeeling: 40
            },
            {
              text: "Critical",
              nextFeeling: 40
            }
          ]
        },
        {
            id: 20,
            question: "Happy. Once I can develop this app further, there will be more information here!",
            options: [
              {
                text: 'Nevermind, go back.',
                nextFeeling: 2
              },
              {
                text: "Restart",
                nextFeeling: 1
              }

            ]
          },
          {
              id: 30,
              question: "Sad. Once I can develop this app further, there will be more information here!",
              options: [
                {
                  text: 'Nevermind, go back.',
                  nextFeeling: 3
                },
                {
                  text: "Restart",
                  nextFeeling: 1
                }
  
              ]
            },
            {
                id: 40,
                question: "Angry. Once I can develop this app further, there will be more information here!",
                options: [
                  {
                    text: 'Nevermind, go back.',
                    nextFeeling: 4
                  },
                  {
                    text: "Restart",
                    nextFeeling: 1
                  }
    
                ]
              }
  ]