import { connect } from 'react-redux';
import Admin from './Admin';

const mapStateToProps = ({ adminorders }) => ({ adminorders });

export default connect(mapStateToProps)(Admin);
