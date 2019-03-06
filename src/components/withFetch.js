import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export const withFetch = component => {
    class withFetch extends PureComponent {
        static PropTypes = {
            fetch: PropTypes.func.isRequired

        };

        componentDidMount() {
            // this.props.fetch();
        }
        render() {
            return <component {...this.props}/>;
        }

    }
    return withFetch;
};
