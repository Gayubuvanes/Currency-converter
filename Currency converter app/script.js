var app = angular.module("converterApp", []);

app.controller("temperatureController", function($scope) {
    $scope.convertTemperature = function() {
        var src = $scope.fromUnit;
        var dst = $scope.toUnit;
        var value = parseFloat($scope.amount);

        if (isNaN(value)) {
            $scope.output = "Please enter a valid number.";
            return;
        }

        if (src === "celsius") {
            if (dst === "fahrenheit") {
                $scope.output = "Celsius to Fahrenheit is " + ((value * 9/5) + 32);
            } else if (dst === "celsius") {
                $scope.output = "Celsius to Celsius is " + value;
            } else {
                $scope.output = "Invalid conversion type";
            }
        } else if (src === "fahrenheit") {
            if (dst === "celsius") {
                $scope.output = "Fahrenheit to Celsius is " + ((value - 32) * 5/9);
            } else if (dst === "fahrenheit") {
                $scope.output = "Fahrenheit to Fahrenheit is " + value;
            } else {
                $scope.output = "Invalid conversion type";
            }
        } else {
            $scope.output = "Invalid conversion type";
        }
    };
});

app.controller("currencyController", function($scope) {
    $scope.convertCurrency = function() {
        var src = $scope.fromCurrency;
        var dst = $scope.toCurrency;
        var value = parseFloat($scope.amount);

        if (isNaN(value)) {
            $scope.output = "Please enter a valid number.";
            return;
        }

        if (src === "INR") {
            if (dst === "USD") {
                $scope.output = "Rupee to Dollar is " + (value * 0.013);
            } else if (dst === "EUR") {
                $scope.output = "Rupee to Euro is " + (value * 0.012);
            } else {
                $scope.output = "Invalid conversion type";
            }
        } else if (src === "USD") {
            if (dst === "INR") {
                $scope.output = "Dollar to Rupee is " + (value * 76.58);
            } else if (dst === "EUR") {
                $scope.output = "Dollar to Euro is " + (value * 0.92);
            } else {
                $scope.output = "Invalid conversion type";
            }
        } else if (src === "EUR") {
            if (dst === "INR") {
                $scope.output = "Euro to Rupee is " + (value * 83.22);
            } else if (dst === "USD") {
                $scope.output = "Euro to Dollar is " + (value * 1.09);
            } else {
                $scope.output = "Invalid conversion type";
            }
        } else {
            $scope.output = "Invalid conversion type";
        }
    };
});

app.controller("lengthController", function($scope) {
    $scope.convertLength = function() {
        var src = $scope.fromUnit;
        var dst = $scope.toUnit;
        var value = parseFloat($scope.amount);

        if (isNaN(value)) {
            $scope.output = "Please enter a valid number.";
            return;
        }

        if (src === "meter") {
            if (dst === "centimeter") {
                $scope.output = "Meter to Centimeter is " + (value * 100);
            } else if (dst === "foot") {
                $scope.output = "Meter to Foot is " + (value * 3.28084);
            } else {
                $scope.output = "Invalid conversion type";
            }
        } else if (src === "centimeter") {
            if (dst === "meter") {
                $scope.output = "Centimeter to Meter is " + (value / 100);
            } else if (dst === "inch") {
                $scope.output = "Centimeter to Inch is " + (value * 0.393701);
            } else {
                $scope.output = "Invalid conversion type";
            }
        } else if (src === "foot") {
            if (dst === "meter") {
                $scope.output = "Foot to Meter is " + (value / 3.28084);
            } else {
                $scope.output = "Invalid conversion type";
            }
        } else if (src === "inch") {
            if (dst === "centimeter") {
                $scope.output = "Inch to Centimeter is " + (value / 0.393701);
            } else {
                $scope.output = "Invalid conversion type";
            }
        }
    };
});

app.controller("numberController", function($scope) {
    $scope.convertNumber = function() {
        var src = $scope.fromBase;
        var dst = $scope.toBase;
        var value = $scope.number;

        if (!value) {
            $scope.output = "Please enter a valid number.";
            return;
        }

        if (src === "decimal") {
            if (dst === "binary") {
                $scope.output = "Decimal to Binary is " + (parseInt(value, 10).toString(2));
            } else if (dst === "octal") {
                $scope.output = "Decimal to Octal is " + (parseInt(value, 10).toString(8));
            } else if (dst === "hexadecimal") {
                $scope.output = "Decimal to Hexadecimal is " + (parseInt(value, 10).toString(16).toUpperCase());
            } else {
                $scope.output = "Invalid conversion type";
            }
        } else if (src === "binary") {
            if (dst === "decimal") {
                $scope.output = "Binary to Decimal is " + (parseInt(value, 2).toString(10));
            } else if (dst === "octal") {
                $scope.output = "Binary to Octal is " + (parseInt(value, 2).toString(8));
            } else if (dst === "hexadecimal") {
                $scope.output = "Binary to Hexadecimal is " + (parseInt(value, 2).toString(16).toUpperCase());
            } else {
                $scope.output = "Invalid conversion type";
            }
        } else if (src === "octal") {
            if (dst === "decimal") {
                $scope.output = "Octal to Decimal is " + (parseInt(value, 8).toString(10));
            } else if (dst === "binary") {
                $scope.output = "Octal to Binary is " + (parseInt(value, 8).toString(2));
            } else if (dst === "hexadecimal") {
                $scope.output = "Octal to Hexadecimal is " + (parseInt(value, 8).toString(16).toUpperCase());
            } else {
                $scope.output = "Invalid conversion type";
            }
        } else if (src === "hexadecimal") {
            if (dst === "decimal") {
                $scope.output = "Hexadecimal to Decimal is " + (parseInt(value, 16).toString(10));
            } else if (dst === "binary") {
                $scope.output = "Hexadecimal to Binary is " + (parseInt(value, 16).toString(2));
            } else if (dst === "octal") {
                $scope.output = "Hexadecimal to Octal is " + (parseInt(value, 16).toString(8));
            } else {
                $scope.output = "Invalid conversion type";
            }
        } else {
            $scope.output = "Invalid conversion type";
        }
    };
});
