import { FeelingButtons } from "@/components/FeelingButtons"
import { FeelingQuestion } from "@/components/FeelingQuestion"


export const FeelingContainer = () => { 
    return (
        <div className="container">
            <FeelingQuestion /> 
            <FeelingButtons />
        </div>
    )
};
