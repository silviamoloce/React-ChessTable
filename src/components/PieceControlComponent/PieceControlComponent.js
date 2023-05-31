import './PieceControlComponent.css';

function PieceControlComponent() {
    return (
        <div>
            <br />
            <div className="control-container">

                <button> top </button>

                <div className="left-right-container">
                    <button> left </button>
                    <button> right </button>
                </div>

                <button> bottom </button>


            </div>
        </div>)
}

export default PieceControlComponent;