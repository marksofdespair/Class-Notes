function noteDate() {
let todaysDate = new Date ().toLocaleString(
    'default', {weekday: "long"}
);
}

function dividerDash() {
    console.log("----------------------------------------------");
}

module.exports = {
    noteDate: noteDate
}