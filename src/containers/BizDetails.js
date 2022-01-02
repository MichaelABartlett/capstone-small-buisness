import { connect } from "react-redux";
import BizDetails from "../components/BizDetails";

const mapStateToProps = (state) => {
    return {
        listing: state.listing
    }
}

export default connect(mapStateToProps)(BizDetails)