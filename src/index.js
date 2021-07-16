export default {
    install: (app, options) => {
        /* declare global component */
        app.component('my-header', MyHeader)
    }
}