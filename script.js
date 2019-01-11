jQuery(document).ready(function() {

$('.userInput').focus(function() {
	$(this).parent().addClass('focus');
}).blur(function() {
	if ($(this).val()==='') {
		$(this).parent().removeClass('focus');
	}
})

$("#question-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: {
				name: $('#form-name').val(),
				email: $('#form-mail').val(),
				phone: $('#form-phone').val(),
				message: $('#form-message').val()
			},
			success: function(data) {
				console.log(data);
			}
		}).done(function() {
			$(this).find("input").val("");
			alert("Thank you for the application! Soon we will contact you.");
			$("#question-form").trigger("reset");
		});
		return false;
});

})