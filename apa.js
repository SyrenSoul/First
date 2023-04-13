function myFunction() {
    document.getElementById("demo").innerHTML = "Hello there! Welcome to my page!";
  }

  $(document).ready(function () {
    $(".menu-toggle").click(function () {
        $('nav').toggleClass('active');
    })
})
