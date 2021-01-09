const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});




$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
$(document).ready(function() {
    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 800 // 2 seconds
});

// window.onscroll = function() { myFunction() };

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }
// $(document).ready(function() {
//     $('.hire-content').css("display", 'flex');
//     // $('code').each(function(i, block) {
//     //     hljs.highlightBlock(block);
//     // });
// });
// .fea: hover {
//         background: linear - gradient(#007cba, # 006 ba1, #005a87);

//     ;

// }

// .fea:hover .count-number {

//     color: white;

// }

// .fea:hover .plus {

//     color: orange;

// }

// .fea:hover .box-text {

//     color: orange;

//     font-weight: bold;

// }



// document.getElementsByClassName("fea").onmouseover = () => {
//     alert("hello")
//     document.getElementsByClassName("fea").style.background = "linear-gradient(#007cba, #006ba1, #005a87);";
//     document.getElementsByClassName("box-text").style.coloe = "white";
//     document.getElementsByClassName("plus").style.color = "orange";
// };
// // document.getElementsByClassName("fea").onmouseout = function() { mouseOut() };

// // function mouseOver() {
// //     document.getElementsByClassName("fea").style.background = "linear-gradient(#007cba, #006ba1, #005a87);";
// //     document.getElementsByClassName("box-text").style.coloe = "white";
// //     document.getElementsByClassName("plus").style.color = "orange";

// //     // document.getElementById("demo").style.color = "red";
// // }

// function mouseOut() {
//     // document.getElementsByClassName("fea").style.background = "linear-gradient(#007cba, #006ba1, #005a87);";
//     // document.getElementsByClassName("box-text").style.coloe="white";
//     // document.getElementsByClassName("plus").style.color = "orange";
// }