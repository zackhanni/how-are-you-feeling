import FeelingData from "./FeelingData";

const FeelingSurvey = (props) => { 

    const feelingNode = FeelingData.find(({ id }) => id === props.id );

    return (
        <div className="container">
            <div id="question">{feelingNode.question}</div>
            <div id="feeling-buttons" className="btn-grid">
                
                {feelingNode?.options.map(option => 
                    // let idValue = {option.nextFeeling};
                    <button className="feeling-btn" id={option.nextFeeling} >
                        {option.text}
                    </button>
                 )}
            </div>
        </div>
    )
};

export default FeelingSurvey;