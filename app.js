$(document).ready(function() {
    $(this).scrollTop(0);
});

//Renders first option data
function renderFirstOption() {
    var x = document.getElementById('cars-1');
    var strFirstCar = x.value;
    document.getElementById('carName').innerHTML = strFirstCar;
    switch (strFirstCar) {
        case 'Tesla Model 3':
            document.getElementById('price').innerHTML = '$36,000';
            document.getElementById('range').innerHTML = '263 miles';
            document.getElementById('accel').innerHTML = '5.3s';
            document.getElementById('topSpeed').innerHTML = '140mph';
            document.getElementById('seating').innerHTML = '5';
            break;
        case 'Tesla Model S':
            document.getElementById('price').innerHTML = '$79,000';
            document.getElementById('range').innerHTML = '412 miles';
            document.getElementById('accel').innerHTML = '3.1s';
            document.getElementById('topSpeed').innerHTML = '155mph';
            document.getElementById('seating').innerHTML = '5';
            break;
        case 'Tesla Model Y':
            document.getElementById('price').innerHTML = '$50,490';
            document.getElementById('range').innerHTML = '326 miles';
            document.getElementById('accel').innerHTML = '3.5s';
            document.getElementById('topSpeed').innerHTML = '155mph';
            document.getElementById('seating').innerHTML = '5';
            break;
        case 'Tesla Model X':
            document.getElementById('price').innerHTML = '$83,190';
            document.getElementById('range').innerHTML = '360 miles';
            document.getElementById('accel').innerHTML = '3.8s';
            document.getElementById('topSpeed').innerHTML = '155mph';
            document.getElementById('seating').innerHTML = '7';
            break;
        case 'Lucid Air Dream Edition':
            document.getElementById('price').innerHTML = '$161,500';
            document.getElementById('range').innerHTML = '503 miles';
            document.getElementById('accel').innerHTML = '2.5s';
            document.getElementById('topSpeed').innerHTML = '168mph';
            document.getElementById('seating').innerHTML = '5';
            break;
        case 'Polestar 2':
            document.getElementById('price').innerHTML = '$59,900';
            document.getElementById('range').innerHTML = '260 miles';
            document.getElementById('accel').innerHTML = '4.7s';
            document.getElementById('topSpeed').innerHTML = '125mph';
            document.getElementById('seating').innerHTML = '5';
            break;
    }
}

//Renders second option data
function renderSecondOption() {
    var y = document.getElementById('cars-2');
    var strSecondCar = y.value;
    document.getElementById('carName-2').innerHTML = strSecondCar;
    switch (strSecondCar) {
        case 'Tesla Model 3':
            document.getElementById('price-2').innerHTML = '$36,000';
            document.getElementById('range-2').innerHTML = '263 miles';
            document.getElementById('accel-2').innerHTML = '5.3s';
            document.getElementById('topSpeed-2').innerHTML = '140mph';
            document.getElementById('seating-2').innerHTML = '5';
            break;
        case 'Tesla Model S':
            document.getElementById('price-2').innerHTML = '$79,000';
            document.getElementById('range-2').innerHTML = '412 miles';
            document.getElementById('accel-2').innerHTML = '3.1s';
            document.getElementById('topSpeed-2').innerHTML = '155mph';
            document.getElementById('seating-2').innerHTML = '5';
            break;
        case 'Tesla Model Y':
            document.getElementById('price-2').innerHTML = '$50,490';
            document.getElementById('range-2').innerHTML = '326 miles';
            document.getElementById('accel-2').innerHTML = '3.5s';
            document.getElementById('topSpeed-2').innerHTML = '155mph';
            document.getElementById('seating-2').innerHTML = '5';
            break;
        case 'Tesla Model X':
            document.getElementById('price-2').innerHTML = '$83,190';
            document.getElementById('range-2').innerHTML = '360 miles';
            document.getElementById('accel-2').innerHTML = '3.8s';
            document.getElementById('topSpeed-2').innerHTML = '155mph';
            document.getElementById('seating-2').innerHTML = '7';
            break;
        case 'Lucid Air Dream Edition':
            document.getElementById('price-2').innerHTML = '$161,500';
            document.getElementById('range-2').innerHTML = '503 miles';
            document.getElementById('accel-2').innerHTML = '2.5s';
            document.getElementById('topSpeed-2').innerHTML = '168mph';
            document.getElementById('seating-2').innerHTML = '5';
            break;
        case 'Polestar 2':
            document.getElementById('price-2').innerHTML = '$59,900';
            document.getElementById('range-2').innerHTML = '260 miles';
            document.getElementById('accel-2').innerHTML = '4.7s';
            document.getElementById('topSpeed-2').innerHTML = '125mph';
            document.getElementById('seating-2').innerHTML = '5';
            break;
    }
}