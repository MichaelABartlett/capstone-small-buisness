import { connect } from "react-redux";
import Navigation from "../components/Navigation";

const mapStateToProps = (state) => {
    console.log('inside navication mstp')
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Navigation)