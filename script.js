const textElement = document.getElementById('question')
const feelingButtonsElement = document.getElementById('feeling-buttons') 

function startDiary() {
    showFeelingNode(1)
}

function showFeelingNode(feelingNodeIndex) {
    const feelingNode = feelingNodes.find(feelingNode => feelingNode.id === feelingNodeIndex)
    textElement.innerText = feelingNode.question
    while (feelingButtonsElement.firstChild) {
      feelingButtonsElement.removeChild(feelingButtonsElement.firstChild)
    }

    feelingNode.options.forEach(option => {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add("btn")
            button.addEventListener('click', () => selectOption(option))
            feelingButtonsElement.appendChild(button)

    })
}

function selectOption(option) {
    const nextFeelingNodeId = option.nextFeeling
    if (nextFeelingNodeId <= 0 ) {
        return startDiary()
    }
    showFeelingNode(nextFeelingNodeId)
}

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
  

startDiary()