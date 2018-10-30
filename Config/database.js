if(process.env.Node_ENV === "production") {
    module.exports = {mongoURI: "mongodb://CHANGEME"}
} else {
    module.exports = {mongoURI: "mongodb://localhost/vidjot-dev"}
}
