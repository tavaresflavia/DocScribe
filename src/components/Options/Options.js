import React from 'react';

const Options = (values) => {
    return (
        <article>
            {values.map((value) => (<p>{value}</p>))}
        </article>
    );
};

export default Options;