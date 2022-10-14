const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


var date = new Date()
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}
var formattedDate = new Intl.DateTimeFormat('en-DE', options).format(date)
$('.date').text(formattedDate)

function updateTime() { 
    var time = new Date()
    let options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        fractionalSecondDigits: 1,
        timeZoneName: 'short'
    }
    var formattedTime = new Intl.DateTimeFormat('en-DE', options).format(time)
    $('.time').text(formattedTime)
    setTimeout(updateTime, 1);
 }

updateTime();

document.onkeydown = function (event) { 
    const keys = ['1', '2', '3', '4', '5', '6']
    var buttons = $('.bookmark')
    if (event.key in keys) {
        console.log(event.key)
        console.log("IN KEYS")
        window.open(buttons[Number(event.key)-1].getAttribute('href'), '_blank').focus()
    }
 }

$('hr').each( function (index) { 
    var x = (Math.floor(Math.random() * 80))+'%'
    var y = (Math.floor(Math.random() * 80))+'%'
    $(this).css('top', y);
    $(this).css('left', x);
    var delay = Math.random()*6-3 +'s'
    console.log(delay)
    $(this).css('animation', 'slide-bl 8s ease-in-out infinite alternate both;')
    $(this).css('-webkit-animation', 'slide-bl 8s ease-in-out infinite alternate both;')
    $(this).css('animation-delay', delay);
    $(this).css('width', ((Math.random() * 800)+200) + 'px')

 })