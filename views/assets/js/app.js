function openCommandDialog() {
    $(".command-dialog").show();
}

function sendCommand() {
    var command = $(".command-field").val();

    // Check if empty
    if (command == "" || command.trim() == "" || command == null) {
        alert("Empty command!");
        return;
    }

    window.location.href = "/send-command?cmd=" + command.split(" ")[0];
}