const textElement = document.getElementById('question')
const feelingButtonsElement = document.getElementById('feeling-buttons') 

let state = {}

function startDiary() {
    state = {}
    showFeelingNode(1)
}


function showFeelingNode(feelingNodeIndex) {
    const feelingNode = feelingNodes.find(feelingNode => feelingNode.id === feelingNodeIndex)
    textElement.innerText = feelingNode.question
    while (feelingButtonsElement.firstChild) {
      feelingButtonsElement.removeChild(feelingButtonsElement.firstChild)
    }

    feelingNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add("btn")
            button.addEventListener('click', () => selectOption(option))
            feelingButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    // return option.requiredState == null || option.requiredState(state)
    return true
 }

function selectOption(option) {
    const nextFeelingNodeId = option.nextFeeling
    if (nextFeelingNodeId <= 0 ) {
        return startDiary()
    }
    state = Object.assign(state, option.setState)
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
          nextFeeling: 2
        }
      ]
    },
    {
      id: 2,
      question: "Happy! Now, let's get more specific..",
      options: [
        {
          text: 'Trade the goo for a sword',
          requiredState: (currentState) => currentState.blueGoo,
          setState: { blueGoo: false, sword: true },
          nextFeeling: 3
        },
        {
          text: "Playful",
          nextFeeling: 3
        },
        {
          text: "Content",
          nextFeeling: 3
        }
      ]
    },

  ]
  

startDiary()