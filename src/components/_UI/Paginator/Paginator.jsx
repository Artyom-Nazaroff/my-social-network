import React, {useState} from 'react';
import stl from "../../Users/Users.module.css";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10, ...props}) => {
    const [portionNumber, setPortionNumber] = useState(1);

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionsCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={stl.pageNumbersContainer}>
            {portionNumber > 1 && <button
                className={stl.btn}
                onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}
            >PREV</button>}
            {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                    return <span
                        key={page}
                        className={currentPage === page ? stl.selectedPageNumber : stl.pageNumber}
                        onClick={() => {
                            onPageChanged(page)
                        }}
                    >{page}</span>
                })}
            {portionsCount > portionNumber && <button
                className={stl.btn}
                onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}
            >NEXT</button>}
        </div>
    );
};

export default Paginator;