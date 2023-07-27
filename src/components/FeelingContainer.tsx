import HandleClick from "./HandleClick";

import FeelingNodes from "./FeelingNodes";

// let nodeId:Number = 1;

const FeelingContainer = (props) => { 

    const feelingNode = FeelingNodes.find(({ id }) => id === props.id );

    return (
        <div className="container">
            <div id="question">{feelingNode.question}</div>
            <div id="feeling-buttons" className="btn-grid">
                {feelingNode?.options.map(option => 
                    <button className="feeling-btn" onClick="" >
                        {option.text}
                    </button>
                 )}
            </div>
        </div>
    )
};

export default FeelingContainer;