import { FeelingButton } from "./FeelingButton";
import { FeelingQuestion } from "@/components/FeelingQuestion"
import HandleClick from "./HandleClick";

import FeelingNodes from "./FeelingNodes";

let nodeId:Number = 1;
const result = FeelingNodes.find(({ id }) => id === nodeId );

export const FeelingSurvey = () => { 

    //{nodeId = (props.nextNode)}

    // onClick={changeNode(result.options[0].nextFeeling)

    return (
        <div className="container">
            <FeelingQuestion question={result.question}/> 
            <div id="feeling-buttons" className="btn-grid">

                <FeelingButton feeling={result.options[0].text} onClick={HandleClick} />
                <FeelingButton feeling={result.options[1].text} onClick={HandleClick} />
                <FeelingButton feeling={result.options[2].text} onClick={HandleClick} />
                <FeelingButton feeling="other" />
            </div>
        </div>
    )
};

export default FeelingSurvey;