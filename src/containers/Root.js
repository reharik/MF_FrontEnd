/**
 * Created by rharik on 5/3/16.
 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./Root.prod')
} else {
    module.exports = require('./Root.dev')
}
