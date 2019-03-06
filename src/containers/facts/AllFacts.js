import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getFacts } from '../../selectors/Ron';
import { connect } from 'react-redux';
import { fetchFacts } from '../../actions/Ron';
import FactList from '../../components/facts/Facts';

class AllFacts extends PureComponent {
    static propTypes = {
        facts: PropTypes.array.isRequired,
        fetch: PropTypes.func.isRequired
    };
    componentDidMount() {
        this.props.fetch(10);
    }
    render() {
        return (
            <>
            hello from ALL FACTS CONTAINER
            <FactList
                facts={this.props.facts}
            />
            </>
        );
    }
}

const mapStateToProps = state => ({
    facts: getFacts(state)
});

const mapDispatchToProps = dispatch => ({
    fetch(count) {
        dispatch(fetchFacts(count));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllFacts);
