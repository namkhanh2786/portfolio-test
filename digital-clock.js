function time()
{
    var date = new Date()
    var date_hour = date.getHours()
    var date_minute = date.getMinutes()
    var date_second = date.getSeconds()
    var period = document.getElementById('period')

    document.getElementById('hour-value').innerHTML = date_hour
    document.getElementById('minute-value').innerHTML = date_minute
    document.getElementById('second-value').innerHTML = date_second
    
    if (date_hour >= 0 && date_hour <= 12) period.innerHTML = 'AM'
    else period.innerHTML = 'PM'
}

setInterval(time, 10)