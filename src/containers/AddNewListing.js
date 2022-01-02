import { connect } from "react-redux";
import AdminView from "../components/AdminView";
import AddNewListing from "../components/AddNewListing";

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(AddNewListing)