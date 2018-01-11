import { connect } from 'react-redux';
import FarmDetail from '../components/farmDetail';


const mapStateToProps = ({ feed, user, network }) => {

    const data = feed.data;

    return {

    };
};
const mapDispatchToProps = (dispatch, props) => {
    const { navigation } = props;
    return {

    };
};


const FarmDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FarmDetail);

export default FarmDetailContainer;
