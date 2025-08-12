$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Clear previous error messages
        $('.error').text('');

        // Get form values
        var userName = $('#userName').val().trim();
       // var mobile = $('#mobile').val().trim();
       // var email = $('#email').val().trim();
        var password = $('#password').val();
        //var confirmPassword = $('#confirmPassword').val();
        
        var isValid = true;

        // Validate User Name
        if (userName === '') {
            $('#userNameError').text('User Name is required.');
            isValid = false;
        }

        // Validate Email
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || !emailPattern.test(email)) {
            $('#emailError').text('Valid Email is required.');
            isValid = false;
        }

        // Validate Password
        if (password === '') {
            $('#passwordError').text('Password is required.');
            isValid = false;
        } //else if (password !== confirmPassword) {
            $('#passwordError').text('Passwords do not match.');
            isValid = false;
        }

        // If valid, redirect to home page
        if (isValid) {
            window.location.href = 'home.html';
        }
    });

    // Toggle password visibility
    $('#showPassword').on('change', function() {
        if ($(this).is(':checked')) {
            $('#password').attr('type', 'text');
            $('#confirmPassword').attr('type', 'text');
        } else {
            $('#password').attr('type', 'password');
            $('#confirmPassword').attr('type', 'password');
        }
    });
});
