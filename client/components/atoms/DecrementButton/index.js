import { connect } from 'react-redux';
import * as R from 'ramda';
import { decrement } from '_store/actions/counter';

import DecrementButton from './DecrementButton';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DecrementButton);