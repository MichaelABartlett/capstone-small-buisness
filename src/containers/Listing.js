import { connect } from "react-redux";
import Listing from '../components/Listing'

const mapStateToProps = (state) => {
    return {
        listing: state.listing
    }
}

export default connect(mapStateToProps)(Listing)