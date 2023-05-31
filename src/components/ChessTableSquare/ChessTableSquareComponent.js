function ChessTableSquareComponent(props) {
    let style = {
        backgroundColor: props.boxColor,
        height: '100px',
        width: '100px'
    }

    if (props.piece && props.piece === 'knight') {
        style = {
            ...style,
            backgroundImage: "url(\"https://m.media-amazon.com/images/I/61H664bymAL._AC_UF1000,1000_QL80_.jpg\")",
            backgroundSize: "100px",
            backgroundRepeat: "no-repeat"
        }
    }

    return (
        <div>
            <div style={style}></div>
        </div>
    );
}
export default ChessTableSquareComponent;