import { connect } from "react-redux";
import AddNewListing from "../components/AddNewListing";
import { addListing } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listing: state.listing
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addListing: (aListing) => dispatch(addListing(aListing))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddNewListing)