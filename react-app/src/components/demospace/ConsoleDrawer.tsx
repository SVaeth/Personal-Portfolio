import React from 'react';

type ConsoleDrawerProps = React.HTMLProps<HTMLDivElement> & {
    selectedLang: string | null;
    open: boolean
}

const ConsoleDrawer: React.FC<ConsoleDrawerProps> = ({ selectedLang, open }) => {
    return (
        <>
        {
            !!selectedLang ? (
                <>{selectedLang} console goes here</>
            ) : (
                <>No language selected</>
            )
        }
        </>
    )
}

export default ConsoleDrawer;