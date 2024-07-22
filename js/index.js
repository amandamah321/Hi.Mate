function loadCourses() {
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      display(this);
    }
  };

  xhttp.open("GET", "courses.xml", true);

  xhttp.send();
}

function display(xml) {
  let objHttp = xml.responseXML;

  let content = "";

  let title = objHttp.getElementsByTagName("title");
  let price = objHttp.getElementsByTagName("price");
  let lengthEl = objHttp.getElementsByTagName("length");
  let teacher = objHttp.getElementsByTagName("teacher");

  let openCourses = document.querySelector(".open-courses-container");

  for (let i = 0; i < title.length; i++) {
    content = `
    <div class="open-courses-cards">
        <h3 class="flip">${title[i].childNodes[0].nodeValue}</h3>
        <div class="panel">
          <p>Price: ${price[i].childNodes[0].nodeValue}</p>
          <p>Teacher: ${teacher[i].childNodes[0].nodeValue}</p>
        </div>
    </div>    
    `;
    openCourses.innerHTML += content;
  }

  displayFlips();
}

function displayFlips() {
  $(document).ready(function () {
    $(".panel").hide();
    $(".flip").click(function () {
      $(this).next(".panel").slideToggle();
    });
  });
}

loadCourses();

$(document).ready(function () {
  $(".login").click(function () {
    alert("Muy pronto...")
  })
});
