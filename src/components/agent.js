export default function Agent({update_selection,set_selection,selected,AgentName,selections}) {
    
    function todo(){
        update_selection(selected)
        if (selections <5 && !selected ) {
            set_selection(!selected);
        }
        else if (selections <=5 && selected ) {
            set_selection(!selected);
        }
    }
    return (
        <button className="button"

        onClick={ () => {todo()}}
        

        > <img className={selected ? "selected-agent" :"agentImg"} src={AgentName + ".png"} /> </button>
    )
}