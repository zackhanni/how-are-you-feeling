import { FeelingButton } from "./FeelingButton";
import { FeelingQuestion } from "@/components/FeelingQuestion"

import FeelingNodes from "./FeelingNodes";

let nodeId:Number = 1;
const result = FeelingNodes.find(({ id }) => id === nodeId );

export const FeelingSurvey = () => { 

    function changeNode(nodeInput:Number) {
        nodeInput = nodeId
    }

    return (
        <div className="container">
            <FeelingQuestion question={result.question}/> 
            <div id="feeling-buttons" className="btn-grid">
                
                <FeelingButton feeling={result.options[0].text} onClick={changeNode(2)} />
                <FeelingButton feeling={result.options[1].text} onClick={changeNode(3)} />
                <FeelingButton feeling={result.options[2].text} onClick={changeNode(4)} />
                <FeelingButton feeling="other" />
                <h1>result</h1>
            </div>
        </div>
    )
};

export default FeelingSurvey;