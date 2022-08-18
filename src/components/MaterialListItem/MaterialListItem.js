import React from 'react';

const MaterialListItem = ({ title, link, id, onDelete, onUpdate }) => {
    
    console.log( id );
    
    return (
        <>
            <br />
                <p>Title: { title }</p>
                <b>Link: { link }</b>
                <br />
                    <button 
                        onClick={() => onDelete( id )} 
                        type="button">
                            Delete
                    </button>
                    <button 
                        onClick={() => onUpdate({ id, title: "Editted title by update func" }) } 
                        style={{marginLeft: "10px"}}
                        type="button">
                            Update title
                    </button>
            <br />
        </>
    );
};

export default MaterialListItem;