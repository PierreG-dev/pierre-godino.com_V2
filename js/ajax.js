function sendMail(e, _name, _phone, _mail, _content) {
    $.ajax({
        type: "POST",
        url: "../php/mail.php",
        data: {
            name: _name,
            phone: _phone,
            mail: _mail,
            content: _content
        },
        success: function(result, status, xhr) {
            $("#message").html(result);
        }
    })
}