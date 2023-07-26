const questionElement = document.querySelector("#question")
const feelingButtonsElement = document.querySelector("#feeling-buttons")


function startDiary() {
    showFeelingNode(1)
}

function showFeelingNode(feelingNodeIndex) {
    const feelingNode = feelingNodes.find(feelingNode => feelingNode.id === feelingNodeIndex)
    questionElement.innerText = feelingNode.question
    while (feelingButtonsElement.firstChild) {
      feelingButtonsElement.removeChild(feelingButtonsElement.firstChild)
    }
    //create a button for each option.text in feelingNodes
    feelingNode.options.forEach(option => {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add("feeling-btn")
            button.addEventListener('click', () => selectOption(option), colorChange())
            feelingButtonsElement.appendChild(button)
    })
    // button onclick run function color change
    function colorChange() {
        color = document.documentElement.style
        if (feelingNode.id === 1) {
            color.setProperty("--body-bg", "#fff" ) //
            color.setProperty("--container-bg", "#fff" ) //
            color.setProperty("--text-color", "#111827" ) //
            color.setProperty("--text-hv-color", "#111827" ) //
            color.setProperty("--btn-color", "#fff" ) //
            color.setProperty("--btn-hv-color", "#ffe599" ) // dark yellow
            color.setProperty("--btn-color-border", "#111827" ) //
        } else if (feelingNode.id > 1 && feelingNode.id <10) {
            color.setProperty("--body-bg", "#fff" ) //
            color.setProperty("--container-bg", "#FFF2CC" ) // yellow
            color.setProperty("--text-color", "#111827" ) //
            color.setProperty("--text-hv-color", "#111827" ) //
            color.setProperty("--btn-color", "#fff" ) //
            color.setProperty("--btn-hv-color", "#c27ba0" ) // lavender
            color.setProperty("--btn-color-border", "#111827" ) //
        } else if ( feelingNode.id > 10 && feelingNode.id < 100) {
            color.setProperty("--body-bg", "#FFF2CC" ) // yellow
            color.setProperty("--container-bg", "#ffe599" ) // dark yellow
            color.setProperty("--text-color", "#111827" ) //
            color.setProperty("--text-hv-color", "#111827" ) //
            color.setProperty("--btn-color", "#c27ba0" ) // blush
            color.setProperty("--btn-hv-color", "#b4a7d6" ) // lavender
            color.setProperty("--btn-color-border", "#c27ba0" ) // blush
        }
    }
}
function selectOption(option) {
    const nextFeelingNodeId = option.nextFeeling
    if (nextFeelingNodeId <= 0 ) {
        return startDiary()
    }
    showFeelingNode(nextFeelingNodeId)
}

startDiary()