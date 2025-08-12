$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
        // Prevent the form from submitting
        event.preventDefault();
        
        // Reset previous error messages
        $('.error').text('');

        // Fetch form values
        var userName = $('#userName').val();
        var mobile = $('#mobile').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();

        // Validate user name
        if (userName.length < 4) {
            $('#userNameError').text('User name must be at least 4 characters');
            return;
        }

        // Validate mobile number
        if (mobile.length !== 10) {
            alert('Mobile must be ten digits');
            return;
        }

        // Validate email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email address');
            return;
        }

        // Validate password
        if (password !== confirmPassword) {
            $('#passwordError').text('Passwords do not match');
            return;
        }

        // If all validations pass, submit the form
        // You can redirect or perform any additional actions here
        alert('Registration successful!');
        // Uncomment the following line to actually submit the form
         $('#registrationForm')[0].submit();
    });

    // Optional: Show/hide password functionality
    $('#showPassword').change(function() {
        var passwordField = $('#password');
        var passwordFieldType = passwordField.attr('type');
        if (passwordFieldType === 'password') {
            passwordField.attr('type', 'text');
        } else {
            passwordField.attr('type', 'password');
        }
    });
});
