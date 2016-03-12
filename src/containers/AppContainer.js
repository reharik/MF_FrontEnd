/**
 * Created by reharik on 3/11/16.
 */

import { connect } from 'react-redux'
import { navDown } from '../actions'
import Layout from '../components/Layout'

function mapStateToProps(state) {
    return {
        isLoggedIn : state.auth.isLoggedIn,
        userName   : state.auth.userName
    }
}

export default connect(mapStateToProps)(Layout);