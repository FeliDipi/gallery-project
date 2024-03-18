const Dot = ({key, handleOnPagination, isCurrent}) =>
{
    const mainStyle = isCurrent?"dot dot-selected":"dot";

    const handleOnClick = () =>
    {
        handleOnPagination(key);
    }

    return (
        <button 
            key={key} 
            onClick={handleOnClick} 
            className={mainStyle}>
        </button>
    );
}

export default Dot;