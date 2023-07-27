import FeelingNodes from "@/components/FeelingNodes";
import FeelingSurvey from "@/components/FeelingSurvey";

export default function Home() {

let currentFeelingNode = 1

const feelingNode = FeelingNodes.find(({ id }) => id === currentFeelingNode );

//button onCLick set currentFeelingNode to button.id value

  return (
    <body>
            <h1>We are in node {feelingNode?.id}</h1>
            <FeelingSurvey id={currentFeelingNode} />
    </body>
  ) 
}
