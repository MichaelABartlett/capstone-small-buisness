import { connect } from "react-redux";
import LoggedUser from "../components/LoggedUser"

const mapStateToProps = (state) => {
    console.log('inside loggeduser component')
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(LoggedUser)
