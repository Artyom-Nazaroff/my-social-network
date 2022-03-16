import React from 'react';
import stl from "../../Users/Users.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={stl.pageNumbersContainer}>
            {pages.map(page => {
                return <span
                    className={currentPage === page ? stl.selectedPageNumber : stl.pageNumber}
                    onClick={() => {
                        onPageChanged(page)
                    }}
                >{page}</span>
            })}
        </div>
    );
};

export default Paginator;