function getAllLinks() {
    return $('.uiScrollableAreaContent').find('._1qt4._5l-m'); // this selector should be pointed every attempt
}

function revealMoreButtons(){
    $('html, body').animate({ scrollTop: $('.lists').height()-$('.lists').height() });
}

function clickOnLink(element) {
    element.click();
}

function send() {
   try {
       $('._30yy._38lh._39bl')[0].click();
   } catch (err){
        console.log('не возможно отправить  ',);
   }
}

function scrollToElement(el) {
    if (el) {
        $('.uiScrollableAreaBody').animate({
            scrollTop: $(el).offset().top - 500
        }, 500);
    }
}

function stepCrossLinks(linkNumber){

    var links = getAllLinks();
    var stepCrossLinksPromise;


    stepCrossLinksPromise = new Promise (function (resolve, reject) {
        if(links[linkNumber] === undefined) {
            revealMoreButtons();
            reject(linkNumber);
        } else {
            resolve(linkNumber);
        }
    });


    stepCrossLinksPromise
        .then(function (linkNumber) {
            return new Promise ((resolve, reject) => {
                setTimeout(() => {
                    send();
                    resolve(linkNumber);
                }, 1000)
            })
        })
        .then(function (linkNumber) {
            return new Promise ((resolve, reject) => {
                setTimeout(() => {
                    scrollToElement(links[links.length - 1]);
                    clickOnLink(links[linkNumber]);
                    OuterlinkNumber += 1;
                    resolve();
                }, 1000)
            })
        })
        .catch(function (error) {
            console.log('error ', error);
        });
}

// var OuterlinkNumber = 0;
stepCrossLinks(OuterlinkNumber)


