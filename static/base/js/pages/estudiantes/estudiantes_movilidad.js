var EstudianteMovilidad = (function () {
    return{
        cargaMovi: function () {
            $.get("EstudianteMovilidad", {
                ACCION: "Movilidad"
            }).then(function () {
                $("#content").html(arguments[0]);
                //$("#example6").DataTable({
                //});
                $(".editarmovilidad").on('click', function () {
                    idmovi = $(this).parents("tr").find("td").eq(0).html();
                    EstudianteMovilidad.editarMovilidad(idmovi);
                });
                $(".bajamovilidad").on('click', function () {
                    idmovi = $(this).parents("tr").find("td").eq(0).html();
                    swal({
                        title: "Estas seguro?",
                        text: "Se eliminara el registro",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Confirmar",
                        closeOnConfirm: false
                    }, function () {
                        swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                        EstudianteMovilidad.eliminarMovilidad(idmovi);
                    });

                });
                $("#statusmovilidad").on('click', function () {
                    EstudianteMovilidad.ChecarStatus();
                });
                $(".AgregarAlumnoMovi").on('click',function(){
                    idmovi = $(this).parents("tr").find("td").eq(0).html();
                    EstudianteMovilidad.InscribirAlum(idmovi);
                });
            });
        },
        editarMovilidad: function (idmovi) {
            $.get("EstudianteMovilidad", {
                ACCION: "editarMovilidad",
                idmostrar: idmovi
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#cancelarEdicion").on('click',function(){
                    EstudianteMovilidad.cargaMovi();
                });
                $("#guardarmovi").on('click', function(){
                    var datosMovi = {
                        "id": $("#clv").val(),
                        "pais_destino": $("#pais_destino").val(),
                        "entidad_destino": $("#entidad_destino").val(),
                        "escuela_destino": $("#escuela_destino").val(),
                        "tiempo_permanencia": $("#tiempo_perm").val()
                    };
                    EstudianteMovilidad.guardarcambios(datosMovi);
                    EstudianteMovilidad.cargaMovi();
                });
            });
        },
        eliminarMovilidad: function (idmovi) {
            $.get("EstudianteMovilidad", {
                ACCION: "eliminarMovilidad",
                idmostrar: idmovi
            }).then(function () {
                //$("#content").html(arguments[0]);
                EstudianteMovilidad.cargaMovi();
            });
        },
        guardarcambios: function (obj) {
            $.get("EstudianteMovilidad", {
                ACCION: "guardarcambios",
                ENVIAR: JSON.stringify(obj)
            }).then(function () {
                //$("#content").html(arguments[0]);
                EstudianteMovilidad.cargaMovi();
            });
        },
        ChecarStatus: function () {
            $.get("EstudianteMovilidad", {
                ACCION: "checarStatus"
            }).then(function () {
                //EstudianteMovilidad.cargaMovi()
                $("#respuestaStatus").html(arguments[0]);
                $(".editarmovilidad").on('click', function () {
                    idmovi = $(this).parents("tr").find("td").eq(0).html();
                    EstudianteMovilidad.editarMovilidad(idmovi);
                });
                $(".bajamovilidad").on('click', function () {
                    idmovi = $(this).parents("tr").find("td").eq(0).html();
                    EstudianteMovilidad.eliminarMovilidad(idmovi);
                });
                $("#statusmovilidad").on('click', function () {
                    EstudianteMovilidad.ChecarStatus();
                });
            });
        },
        InscribirAlum: function(idmovi){
            $.get("EstudianteMovilidad",{
                ACCION: "AparecerAlumnos"
            }).then(function(){
                $("#content").html(arguments[0]);
                $("#cancelarEdicion").on('click',function(){
                   EstudianteMovilidad.cargaMovi(); 
                });
                $("#carrera").on('change',function(){
                    idcarrera= $("#carrera").val();
                    EstudianteMovilidad.ActualizarTablaAlumnos(idcarrera,idmovi);
                });
            });
        },
        ActualizarTablaAlumnos: function(idCarrera,idmovi){
            $.get("EstudianteMovilidad",{
                ACCION: "CambiarAlumnosCarrera",
                ENVIAR: idCarrera
            }).then(function(){
               $("#content").html(arguments[0]);
               $("#carrera").on('change',function(){
                    idcarrera= $("#carrera").val();
                    EstudianteMovilidad.ActualizarTablaAlumnos(idcarrera,idmovi);
                });
                $(".InsMoviAlu").on('click',function(){
                    idalum = $(this).parents("tr").find("td").eq(0).html();
                    EstudianteMovilidad.InscribirCompleto(idalum,idmovi);
                });
                $("#cancelarEdicion").on('click',function(){
                   EstudianteMovilidad.cargaMovi(); 
                });
            });
        },
        InscribirCompleto: function(alum,movi){
            $.get("EstudianteMovilidad",{
                ACCION: "INSCRIBIR_ALU",
                ALUM: alum,
                MOVI: movi
            }).then(function(){
                EstudianteMovilidad.cargaMovi();
            });
        }
    };
}());


