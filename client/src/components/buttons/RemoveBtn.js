const RemoveBtn = ({ text, action }) => {
    
    return ( 
        <button 
            className="remove-btn" 
            type="button"
            onClick={ () => action(true) }
        >
            { text }
        </button>
    );
}

export default RemoveBtn;