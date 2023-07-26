import { FeelingButton } from "./FeelingButton";
import { FeelingQuestion } from "@/components/FeelingQuestion"

import FeelingNodes from "./FeelingNodes";
let nodeId = 0;
let feelingOptions = FeelingNodes[nodeId].options
let question = FeelingNodes[nodeId].question

export const FeelingSurvey = () => { 
    return (
        <div className="container">
            <FeelingQuestion question={question}/> 
        <div id="feeling-buttons" className="btn-grid">
            <FeelingButton feeling={feelingOptions[0].text} />
            <FeelingButton feeling={feelingOptions[1].text}/>
            <FeelingButton feeling={feelingOptions[2].text}/>
            <FeelingButton feeling="other" />
        </div>
        </div>
    )
};

export default FeelingSurvey;