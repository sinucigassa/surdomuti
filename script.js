$('.buton-alfabet').click(function (event) {
    var litera = $(this).attr('data-litera'); // Yields a string use data() for other data types
	$('#inputField').val($('#inputField').val()+litera);
});