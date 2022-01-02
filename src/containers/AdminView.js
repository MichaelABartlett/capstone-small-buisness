import { connect } from "react-redux";
import AdminView from "../components/AdminView";

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(AdminView)