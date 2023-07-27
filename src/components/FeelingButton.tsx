export const FeelingButton = (props: {feeling: string}) => { 
    return (
        <button className="feeling-btn" onClick={props.onClick} >{props.feeling}</button>
    )
};
