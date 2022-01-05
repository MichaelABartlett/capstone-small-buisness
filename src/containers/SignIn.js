import { connect } from "react-redux";
import SignIn from "../components/SignIn";
import { logInUser , logOutUser } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logInUser : (user) => dispatch(logInUser(user)),
        logOutUser : (user) => dispatch(logOutUser(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)