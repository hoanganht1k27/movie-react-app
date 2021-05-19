import React from 'react';
import { Pagination } from '@material-ui/lab';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark'
    }
})

function CustomPagination({setPage, numOfPages = 10}) {

    const handlePageChange = (page) => {
        setPage(page)
        window.scroll(0, 0)
    }

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
            }}
        >
            <ThemeProvider theme={darkTheme}>
                <Pagination 
                    onChange={(e) => handlePageChange(e.target.textContent)} 
                    count={numOfPages}
                    hideNextButton
                    hidePrevButton
                    color="secondary"
                />
            </ThemeProvider>
        </div>
    );
}

export default CustomPagination;