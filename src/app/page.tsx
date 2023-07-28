import FeelingSurveyApp from "@/components/FeelingSurveyApp";

export default function Home() {

  return (
    <body>

      <FeelingSurveyApp />

      {/* <div className="container">

        <div id="question"><h3>{feelingNode.question}(node {feelingNode?.id})</h3></div>

        <div id="feeling-buttons" className="btn-grid">
      
          {feelingNode.options.map(option =>
          <FeelingButton text={option.text} click={option.nextFeeling}/>  
          )}

        </div>
      </div> */}


    </body>
  ) 
}