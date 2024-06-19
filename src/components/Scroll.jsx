/* eslint-disable react/prop-types */
const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '75vh'}}>
            {props.children}
        </div>
    )
}

export default Scroll