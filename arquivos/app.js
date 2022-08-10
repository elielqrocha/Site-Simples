'strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className; 
    if(className = "light-theme") {
        this.tesxtContent = "Dark";
    }
    else {
        this.tesxtContent = "light"
    }
    console.log('current class name: ' + className);

});

