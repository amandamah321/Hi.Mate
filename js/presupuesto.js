/***************************VAR FORM********************************/

const formulario = document.getElementById("form");

/***************************VAR PRESUPUESTO********************************/

const cursosInput = document.getElementById("cursos");
const plazoInput = document.getElementById("plazo");
let divTipo = document.querySelector(".clases-tipo");
let PresupuestoInput = document.getElementById("presupuesto");

cursosInput.addEventListener("change", calcularPresupuestoClases);
plazoInput.addEventListener("change", calcularPresupuestoPlazo);


divTipo.addEventListener("change", calcularPresupuesTipoClase);

let valorCurso = 0  ;
let descontoPorTiempo;
let valorExtra;

/**********************FUNCTION PRESUPUESTO CALCULATOR*************************/

function calcularPresupuestoClases() {
  let classes = cursosInput.value;

  switch (classes) {
    case "SummerCamp":
      valorCurso = 260;
      break;

    case "IntensiveB1":
      valorCurso = 220;
      break;

    case "IntensiveB2":
      valorCurso = 245;
      break;

    case "Chat":
      valorCurso = 180;
      break;

    default:
      valorCurso = 0;
      break;
  }

  PresupuestoInput.value = valorCurso;
  validarSelecionCursos()
}

function calcularPresupuestoPlazo() {
  let plazo = plazoInput.value;

  if (plazo <= 3) {
    descontoPorTiempo = 0;
  } else if (plazo >= 4 && plazo <= 6) {
    descontoPorTiempo = 5;
  } else if (plazo >= 7 && plazo <= 9) {
    descontoPorTiempo = 8;
  } else if (plazo >= 10 && plazo <= 12) {
    descontoPorTiempo = 12;
  } else {
    descontoPorTiempo = 15;
  }

  descontoTotal = (descontoPorTiempo / 100) * valorCurso;

  PresupuestoInput.value = valorCurso - descontoTotal;
  validarSelecionTiempo()
}

function calcularPresupuesTipoClase() {
  var selected = [];

  const checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  selected = Array.from(checkboxes).map((x) => x.value);
  

  if (selected.length == 0) {
    valorExtra = 0;
  } else if (selected.length == 1) {
    valorExtra = 11;
  } else if (selected.length == 2) {
    valorExtra = 19;
  } else if (selected.length == 3) {
    valorExtra = 26;
  } else {
    valorExtra = 33;
  }

  if(selected[0] == "on"){
    var selected = [];
  }

  validarTipoClase(selected)
  PresupuestoInput.value = valorCurso - descontoTotal + valorExtra;
}

/**********************VALIDACION FORM*************************/

/**************VAR VALIDACION****************/

const nombreInput = document.getElementById("nombre");
const apellidosInput = document.getElementById("apellidos");
const telefonoInput = document.getElementById("telefono");
const emailInput = document.getElementById("email");

const privacidadInput = document.getElementById("privacidad");

nombreInput.addEventListener("input", validarNombre);
apellidosInput.addEventListener("input", validarApellido);
telefonoInput.addEventListener("input", validarTelefono);
emailInput.addEventListener("input", validarEmail);

privacidadInput.addEventListener("click", validarPrivacidad);

/**************VALIDACION FUCTIONS****************/

function validarNombre() {
  const nombre = nombreInput.value;
  const nombrePattern = /^[a-zA-Z ]{3,15}$/;
  if (nombre.length >= 3 && nombre.length <= 15 && nombrePattern.test(nombre)) {
    nombreInput.classList.add("valido");
    nombreInput.classList.remove("invalido");
    document.getElementById("nombre-error").textContent = "";
  } else {
    nombreInput.classList.add("invalido");
    nombreInput.classList.remove("valido");
    document.getElementById("nombre-error").textContent =
      "Escribe entre 3 y 15 caracteres, solo letras permitido.";
  }
}

function validarApellido() {
  const apellido = apellidosInput.value;
  const apellidoPattern = /^[a-zA-Z ]{3,40}$/;
  if (
    apellido.length >= 3 &&
    apellido.length <= 40 &&
    apellidoPattern.test(apellido)
  ) {
    apellidosInput.classList.add("valido");
    apellidosInput.classList.remove("invalido");
    document.getElementById("apellidos-error").textContent = "";
  } else {
    apellidosInput.classList.add("invalido");
    apellidosInput.classList.remove("valido");
    document.getElementById("apellidos-error").textContent =
      "Escribe entre 3 y 40 caracteres, solo letras permitido.";
  }
}

function validarTelefono() {
  const telefono = telefonoInput.value;
  const telefonoPattern = /^\d{9}$/;
  if (telefonoPattern.test(telefono)) {
    telefonoInput.classList.add("valido");
    telefonoInput.classList.remove("invalido");
    document.getElementById("telefono-error").textContent = "";
  } else {
    telefonoInput.classList.add("invalido");
    telefonoInput.classList.remove("valido");
    document.getElementById("telefono-error").textContent =
      "El numero de telefono debe tener 9 digitos y contener solo numeros.";
  }
}

function validarEmail() {
  const email = emailInput.value;
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (emailPattern.test(email)) {
    emailInput.classList.add("valido");
    emailInput.classList.remove("invalido");
    document.getElementById("email-error").textContent = "";
  } else {
    emailInput.classList.add("invalido");
    emailInput.classList.remove("valido");
    document.getElementById("email-error").textContent =
      "Ingresse un correo eletronico valido.";
  }
}

function validarPrivacidad() {
  if (privacidadInput.checked == true) {
    privacidadInput.classList.add("valido");
    privacidadInput.classList.remove("invalido");
    document.getElementById("privacidad-error").textContent = "";
  } else {
    privacidadInput.classList.add("invalido");
    privacidadInput.classList.remove("valido");
    document.getElementById("privacidad-error").textContent =
      "Aceptar nuestra politica de privacidad";
  }
}

function validarSelecionCursos() {
  if (cursosInput.value == "...") {
    cursosInput.classList.add("invalido");
    cursosInput.classList.remove("valido");
    document.getElementById("cursos-error").textContent = "Elija una clase";
  } else {
    cursosInput.classList.add("valido");
    cursosInput.classList.remove("invalido");
    document.getElementById("cursos-error").textContent = "";
  }
}

function validarSelecionTiempo() {
  if (plazoInput.value <= 0) {
    plazoInput.classList.add("invalido");
    plazoInput.classList.remove("valido");
    document.getElementById("plazo-error").textContent =
      "Elija un número válido";
  } else {
    plazoInput.classList.add("valido");
    plazoInput.classList.remove("invalido");
    document.getElementById("plazo-error").textContent = "";
  }
}

function validarTipoClase(selected) {
  console.log(selected)
  if (selected.length == 0) {
    divTipo.classList.add("invalido");
    divTipo.classList.remove("valido");
    document.getElementById("tipos-error").textContent =
      "Tenes que elejir por lo menos un tipo de clase";
      selected.length = 0
  } else {
    divTipo.classList.add("valido");
    divTipo.classList.remove("invalido");
    document.getElementById("tipos-error").textContent = "";
  }
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  validarNombre();
  validarApellido();
  validarTelefono();
  validarEmail();

  validarSelecionCursos();
  validarSelecionTiempo();
  validarPrivacidad();
  

  if (
    nombreInput.classList.contains("valido") &&
    apellidosInput.classList.contains("valido") &&
    telefonoInput.classList.contains("valido") &&
    emailInput.classList.contains("valido") &&
    privacidadInput.classList.contains("valido") &&
    cursosInput.classList.contains("valido") &&
    plazoInput.classList.contains("valido") &&
    divTipo.classList.contains("valido")
  ) {
    alert("Formulario enviado com sucesso");
    formulario.submit()
  } else {
    alert("Por favor, corrija los errores");
  }
});
