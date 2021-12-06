// TODO: make these names reflect the actual contents
var slideshowNames = ['mySlides1', 'mySlides2', 'mySlides3', 'mySlides4', 'mySlides5', 'mySlides6', 'mySlides7', 'mySlides8'];
var slideIndices = slideshowNames.reduce((indices, name) => {
    return {
        ...indices,
        [name]: 0
    };
}, {});
slideshowNames.forEach(name => setCurrentSlide(name, 0))

function setCurrentSlide(slideshowName, index) {
    var slides = document.getElementsByClassName(slideshowName);
    clearSlides(slides);
    revealSlide(slides[index]);
    slideIndices[slideshowName] = index;
}

function clearSlides(slides) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
}

function revealSlide(slide) {
    slide.style.display = "block";
}

function incrementSlide(slideshowName, increment) {
    var nSlides = document.getElementsByClassName(slideshowName).length;
    var newIndex = slideIndices[slideshowName] + increment;
    if (newIndex >= nSlides) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = nSlides - 1;
    }
    setCurrentSlide(slideshowName, newIndex);
}

// unfinished work for programmatically insertingDots (can also be done for L/R arrows) so that you don't have to copy/paste "incrementSlide('mySlides1', -1) and "setCurrentSlide('mySlides1', 0)" a ton of times
function insertDots(slideshowName) {
    document.getElementById("myList").appendChild(node);
    var node = document.createElement("LI");
}


// ^ LB code above this line ^

// from: https://www.w3schools.com/howto/howto_js_slideshow.asp

//var slideIndex = [1, 1];
//var slideId = ["mySlides1", "mySlides2", "mySlides3"];
////showSlides(1, 0);
////showSlides(1, 1);
//
//// Next/previous controls
//function plusSlides(n, no) {
//    showSlides(slideIndex[no] += n, no);
//}
//
//// Thumbnail image controls
//function currentSlide(n, no) {
//    showSlides(slideIndex = n);
//}
//
//function showSlides(n, no) {
//    var i;
//    var x = document.getElementsByClassName(slideId[no]);
//    if (n > x.length) {
//        slideIndex[no] = 1
//    }
//    if (n < 1) {
//        slideIndex[no] = x.length
//    }
//    for (i = 0; i < x.length; i++) {
//        x[i].style.display = "none";
//    }
//    x[slideIndex[no] - 1].style.display = "block";
//}

// get all elements with classname slideDescription

// for each element, set their width and weight
