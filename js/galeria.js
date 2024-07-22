let data = [
  {
    imageUrl: "galeria-05.jpg",
    description: "B2 Students",
  },
  {
    imageUrl: "galeria-06.jpg",
    description: "Summer 2024 - Silver Lake",
  },
  {
    imageUrl: "galeria-07.jpg",
    description: "Teacher Alica",
  },
  {
    imageUrl: "galeria-08.jpg",
    description: "Computer Lab",
  },
  {
    imageUrl: "galeria-09.jpg",
    description: "C2 Exam - Speaking Practice",
  },
  {
    imageUrl: "galeria-10.jpg",
    description: "Grammar Class",
  },
];

$(document).ready(function () {
  $.map(data, function (value, i) {
    let galleryContainer = $(".galeria-container");
    
    let child = $(`
              <div class="img-container">
                  <img src="../src/images/galeria/${value.imageUrl}" alt="${value.description}">
                  <p>${value.description}</p>
              </div>
              `);

    galleryContainer.append(child);
  });
});

