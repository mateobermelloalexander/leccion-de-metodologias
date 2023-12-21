'use'
function Estudiante(nombre, correo, promedio) {
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;
  
    this.validarPromedio = function() {
      if (this.promedio >= 70) {
        return "Aprobado";
      } else {
        return "Reprobado";
      }
    };
  
    this.obtenerUsuario = function() {
      let email = this.correo;
      let arrobaIndex = email.indexOf("@");
      let usuario = email.substring(0, arrobaIndex);
      return usuario;
    };
  }
  
  let damian = new Estudiante("Mateo", "Mateo@example.com", 75);
  alert(damian.validarPromedio());
  alert(damian.obtenerUsuario());
  