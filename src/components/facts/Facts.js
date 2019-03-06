import React from 'react';
import PropTypes from 'prop-types';


export default function FactList({ facts }) {
    const list = facts.map((fact, i) => {
        return <li key={i}> {fact} </li>;
    });
    return (
        <ul>
            {list}
        </ul>
    );
}

FactList.propTypes = {
    facts: PropTypes.array.isRequired
};



