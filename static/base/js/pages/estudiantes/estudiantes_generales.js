
var EstudianteDatosGenerales = (function () {
    var idalumno;
    return {
        cargaForm: function () {
            $.get("Estudiante", {
                ACCION: "Form_alumnos"
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#btn_agrega").on('click', function () {
                    EstudianteDatosGenerales.agregar();
                }),
                        $(".infoextra").on('click', function () {
                    idmuestra = $(this).parents("tr").find("td").eq(3).html();
                    idalumno = $(this).parents("tr").find("td").eq(6).html();
                    console.log(idalumno);
                    EstudianteDatosGenerales.muestra(idmuestra, idalumno);

                });
                $(".editar").on('click', function () {
                    idmuestra = $(this).parents("tr").find("td").eq(5).html();
                    console.log(idmuestra);
                    EstudianteDatosGenerales.muestra_edicion(idmuestra);

                });
                $(".eliminar").on('click', function () {   
                    idmuestra = $(this).parents("tr").find("td").eq(5).html();
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
                        EstudianteDatosGenerales.eliminar(idmuestra);
                    });
                    
                      
                });
                $("#periodo").change(function () {
                    idperiodo = $("#periodo").val();
                    EstudianteDatosGenerales.periodo_calif(idperiodo);
                });
                $("#periodomovi").change(function(){
                    idperiodomov = $("#periodomovi").val();
                    EstudianteDatosGenerales.periodo_movi(idperiodomov);
                });
                $("#periodopafi").change(function(){
                    idperiodopafi = $("#periodopafi").val();
                    EstudianteDatosGenerales.periodo_pafis(idperiodopafi);
                });
                $("#tablaes").DataTable({
                    "scrollX": true
                });
            });
        },
        agregar: function () {
            $.get("Estudiante", {
                ACCION: "Agrega_alumnos"
            }).then(function () {
                EstudianteDatosGenerales.inicializarForms(arguments[0]);
            });
        },
        /**
         * 
         * @param {type} objeto Objeto a guardar en la bd
         * @param {type} accion Es la acción que recibe el servlet para 
         *                  evaluar en el switch
         * @returns {undefined}
         */
        obtenerDatos: function () {
            var alumno_general = {
                //"idDatosPersonales": (modo)?0:document.getElementById("idDatosPersonales").getAttribute("idDatos");,
                "idDatosPersonales": document.getElementById("idDatosPersonales").getAttribute("idDatos"), //$("#idDatosPersonales").getAttribute("idDatos"),
                "nombre": $("#nombre").val(),
                "a_Paterno": $("#a_paterno").val(),
                "a_Materno": $("#a_materno").val(),
                "correoAlternativo": $("#correo").val(),
                "fecha_nacimiento": $("#nacimiento").val(),
                "nacionalidad": $("#nacionalidad").val(),
                "estado_civil": $("#estadoc").val(),
                "genero": $("input[name='optionsRadios1']:checked").val(),
                "residencia": $("#resi").val(),
                "trabaja": $("input[name='optionsRadios2']:checked").val(),
                "ingreso": $("#ingreso").val(),
                "curp": $("#curp").val(),
                "calle": $("#calle").val(),
                "colonia": $("#colonia").val(),
                "ciudad": $("#ciudad").val(),
                "municipio": $("#municipio").val(),
                "estado": $("#estado").val(),
                "pais": $("#pais").val(),
                "cp": $("#codigo").val(),
                "telefono": $("#tel").val(),
                "status": true
            }
            return alumno_general;

        },
        obtenerDatosa: function () {
            var alumno_academico = {
                "r_Datos_Person": document.getElementById("idDatosPersonales").getAttribute("idDatos"),
                "matricula": $("#matricula").val(),
                "correo": $("#correoi").val(),
                "anio_ingreso": $("#anio").val(),
                "modalidad": $("#modalidad").val(),
                "bachillerato": $("#bachi").val(),
                "p_e": $("#programa").val()
            }
            return alumno_academico;
        },
        obtenerDatose: function () {
            var miLista = []
            var calificacion1 = {
                "r_alumnos": document.getElementById("idDatosPersonales").getAttribute("idDatos"),
                "rubro": 1,
                "tipo": 1,
                "calificacion": $("#cali1").val(),
            };
            var calificacion2 = {
                "r_alumnos": document.getElementById("idDatosPersonales").getAttribute("idDatos"),
                "rubro": 2,
                "tipo": 1,
                "calificacion": $("#cali2").val(),
            };
            var calificacion3 = {
                "r_alumnos": document.getElementById("idDatosPersonales").getAttribute("idDatos"),
                "rubro": 3,
                "tipo": 1,
                "calificacion": $("#cali3").val(),
            };
            var calificacion4 = {
                "r_alumnos": document.getElementById("idDatosPersonales").getAttribute("idDatos"),
                "rubro": 4,
                "tipo": 1,
                "calificacion": $("#cali4").val(),
            };
            var calificacion5 = {
                "r_alumnos": document.getElementById("idDatosPersonales").getAttribute("idDatos"),
                "rubro": 5,
                "tipo": 2,
                "calificacion": $("#cali5").val(),
            };
            miLista.push(calificacion1);
            miLista.push(calificacion2);
            miLista.push(calificacion3);
            miLista.push(calificacion4);
            miLista.push(calificacion5);
            console.log(miLista);
            return miLista;

        },
        inicializarForms: function (argumento) {
            $("#content").html(argumento);
            $("#cancelaralu").on('click',function(){
               EstudianteDatosGenerales.cargaForm(); 
            });
            $("#enviadatosg").on('click', function () {
                if (validacion_general()) {
                    EstudianteDatosGenerales.guardaalum(EstudianteDatosGenerales.obtenerDatos(), 'Guarda_Alumg');
                    document.getElementById("form1").reset();
                }
            });
            $("#enviadatosa").on('click', function () {
                if (validacion_academico()) {
                    EstudianteDatosGenerales.guardaalum(EstudianteDatosGenerales.obtenerDatosa(), 'Guarda_Aluma');
                    console.log("1");
                    document.getElementById("form2").reset();
                }
            });
            $("#enviadatose").on('click', function () {
                EstudianteDatosGenerales.guardaalum(EstudianteDatosGenerales.obtenerDatose(), 'Guarda_cali');
                document.getElementById("form3").reset();
                EstudianteDatosGenerales.cargaForm();

            });
        },
        guardaalum: function (objeto, accion) {
            $.get("Estudiante", {
                ACCION: accion,
                ALUMNO: JSON.stringify(objeto)
            }).then(function () {
                swal("Hecho!", "Datos guardados correctamente", "success");
            })
        },
        muestra: function (idmuestra, idalumno) {
            $.get("Estudiante", {
                ACCION: "Muestra_Estudiante",
                idmostrar: idmuestra,
                idalumno: idalumno
            }).then(function () {
                $("#content").html(arguments[0]);
//                $(".infopafi").on('click', function () {
//                    EstudianteDatosGenerales.muestrapafi();
//                });
                $("#agregacalialum").on('click',function(){
                   EstudianteDatosGenerales.formcalialum(); 
                });
                $("#periodo").change(function () {
                    idperiodo = $("#periodo").val();
                    console.log("idperiodo"+idperiodo);
                    console.log("idalumno"+idalumno);
                    EstudianteDatosGenerales.muestracali(idalumno,idperiodo,"Info_Cali");
                });
                $("#periodomovi").change(function(){
                    idperiodomov = $("#periodomovi").val();
                    EstudianteDatosGenerales.muestramovi(idalumno,idperiodomov,"Info_Movi");
                });
                $("#periodopafi").change(function(){
                    idperiodopafi = $("#periodopafi").val();
                    EstudianteDatosGenerales.muestrapafi(idalumno,idperiodopafi,"Info_PafiA");
                });
                $("#regresatablaes").on('click', function () {
                    EstudianteDatosGenerales.cargaForm();
                });
            });
        },
        muestra_edicion: function (idmuestra) {
            $.get("Estudiante", {
                ACCION: "Actualiza_Estudiante",
                idmostrar: idmuestra
            }).then(function () {
                EstudianteDatosGenerales.inicializarForms(arguments[0]);
            });
        },
        eliminar: function (idmuestra) {
            $.get("Estudiante", {
                ACCION: "Elimina_Estudiante",
                idmostrar: idmuestra
            }).then(function () {
                EstudianteDatosGenerales.cargaForm();
            });
        },
        muestrapafi: function () {
            $.get("Estudiante", {
                ACCION: "Info_pafi"
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#tablainfopafi").DataTable({
                    "scrollX": true
                });
            });
        },
        muestracali: function(idalumno,idperiodo,accion){
            $.get("Estudiante",{
                ACCION: accion,
                IDA: idalumno,
                IDP: idperiodo
            }).then(function(){
                $("#calialumno").html(arguments[0]);
                $("#agregacalialum").on('click',function(){
                    EstudianteDatosGenerales.formcalialum();
                });
                $("#periodo").change(function () {
                    idperiodo = $("#periodo").val();
                    console.log("idperiodo"+idperiodo);
                    console.log("idalumno"+idalumno);
                    EstudianteDatosGenerales.muestracali(idalumno,idperiodo,"Info_Cali");
                });
                $("#periodomovi").change(function(){
                    idperiodomov = $("#periodomovi").val();
                    EstudianteDatosGenerales.muestramovi(idalumno,idperiodomov,"Info_Movi");
                });
                $("#periodopafi").change(function(){
                    idperiodopafi = $("#periodopafi").val();
                    EstudianteDatosGenerales.muestrapafi(idalumno,idperiodopafi,"Info_PafiA");
                });
            });
        },
        muestramovi: function(idalumno,idperiodo,accion){
            $.get("Estudiante",{
                ACCION: accion,
                IDA: idalumno,
                IDP: idperiodo
            }).then(function(){
                $("#movialumno").html(arguments[0]);
                $("#periodo").change(function () {
                    idperiodo = $("#periodo").val();
                    console.log("idperiodo"+idperiodo);
                    console.log("idalumno"+idalumno);
                    EstudianteDatosGenerales.muestracali(idalumno,idperiodo,"Info_Cali");
                });
                $("#periodomovi").change(function(){
                    idperiodomov = $("#periodomovi").val();
                    EstudianteDatosGenerales.muestramovi(idalumno,idperiodomov,"Info_Movi");
                });
                $("#periodopafi").change(function(){
                    idperiodopafi = $("#periodopafi").val();
                    EstudianteDatosGenerales.muestrapafi(idalumno,idperiodopafi,"Info_PafiA");
                });
            });
        },
        muestrapafi: function(idalumno,idperiodo,accion){
            $.get("Estudiante",{
                ACCION: accion,
                IDA: idalumno,
                IDP: idperiodo
            }).then(function(){
                $("#pafialumno").html(arguments[0]);
                $("#periodo").change(function () {
                    idperiodo = $("#periodo").val();
                    console.log("idperiodo"+idperiodo);
                    console.log("idalumno"+idalumno);
                    EstudianteDatosGenerales.muestracali(idalumno,idperiodo,"Info_Cali");
                });
                $("#periodomovi").change(function(){
                    idperiodomov = $("#periodomovi").val();
                    EstudianteDatosGenerales.muestramovi(idalumno,idperiodomov,"Info_Movi");
                });
                $("#periodopafi").change(function(){
                    idperiodopafi = $("#periodopafi").val();
                    EstudianteDatosGenerales.muestrapafi(idalumno,idperiodopafi,"Info_PafiA");
                });
            });
        },
        periodo_calif: function(idperiodo){
            $.get("Estudiante",{
                ACCION: "get_per_calif",
                PER: idperiodo
            }).then(function(){
                $("#content").html(arguments[0]);
                $("#periodo").change(function () {
                    idperiododos = $("#periodo").val();
                    EstudianteDatosGenerales.periodo_calif(idperiododos);
                });
                $("#periodomovi").change(function(){
                    idperiodomovi = $("#periodomovi").val();
                    EstudianteDatosGenerales.periodo_movi(idperiodomovi);
                });
                $("#periodopafi").change(function(){
                    idperiodopafis = $("#periodopafi").val();
                    EstudianteDatosGenerales.periodo_pafis(idperiodopafis);
                });
            });
        },
        periodo_movi: function(idpermovi){
            $.get("Estudiante",{
                ACCION: "get_per_movi",
                PER: idpermovi
            }).then(function(){
                $("#movialumno").html(arguments[0]);
                $("#periodo").change(function () {
                    idperiododos = $("#periodo").val();
                    EstudianteDatosGenerales.periodo_calif(idperiododos);
                });
                $("#periodomovi").change(function(){
                    idperiodomovi = $("#periodomovi").val();
                    EstudianteDatosGenerales.periodo_movi(idperiodomovi);
                });
                $("#periodopafi").change(function(){
                    idperiodopafis = $("#periodopafi").val();
                    EstudianteDatosGenerales.periodo_pafis(idperiodopafis);
                });
            });
        },
        periodo_pafis: function(idperpafi){
            $.get("Estudiante",{
                ACCION: "get_per_pafi",
                PER: idperpafi
            }).then(function(){
                $("#pafialumno").html(arguments[0]);
                $("#periodo").change(function () {
                    idperiododos = $("#periodo").val();
                    EstudianteDatosGenerales.periodo_calif(idperiododos);
                });
                $("#periodomovi").change(function(){
                    idperiodomovi = $("#periodomovi").val();
                    EstudianteDatosGenerales.periodo_movi(idperiodomovi);
                });
                $("#periodopafi").change(function(){
                    idperiodopafis = $("#periodopafi").val();
                    EstudianteDatosGenerales.periodo_pafis(idperiodopafis);
                });
            });
        },
        formcalialum: function(){
            $.get("Estudiante",{
               ACCION: "Form_CaliALum" 
            }).then(function(){
               $("#content").html(arguments[0]);
               $("#enviacalialum").on('click',function(){
                   var exp_periodo = {
                       "nrc":$("#nrcaca").val(),
                       "academico":$("#nombreacademico").val(),
                       "periodo":$("#periodocali").val(),
                       "salon":$("#saloncali").val(),
                       "mapa":$("#expcali").val(),
                       "cali":$("#calialum").val(),
                   }
                   var horario = {
                       "calificcacion":$("#calialum").val(),
                       "salonh":$("#saloncali").val(),
                       "id_tipocali":$("#cali").val(),
                   }
                   EstudianteDatosGenerales.agregacali(idalumno,exp_periodo,horario);
               });
            });
        },
        agregacali: function(id,periodo,horario){
            $.get("Estudiante",{
                ACCION: "Guarda_CaliA",
                PERIODO: JSON.stringify(periodo),
                HORARIO: JSON.stringify(horario),
                ID: id
            }).then(function(){
                swal("Hecho!", "Datos guardados correctamente", "success");
            });
        }
    };
}());
function validacion_general() {
    var text = "";
    if ($.trim($("#nombre").val()).length === 0) {
        text = text + "Nombre\n";
    }
    if ($.trim($("#a_paterno").val()).length === 0) {
        text = text + "Apellido paterno\n";
    }
    if ($.trim($("#a_materno").val()).length === 0) {
        text = text + "Apellido materno\n"
    }
    if ($.trim($("#nacimiento").val()).length === 0) {
        text = text + "Fecha de nacimiento\n";
    }
    if ($.trim($("#estadoc").val()).length === 0) {
        text = text + "Estado civil\n";
    }
    if ($.trim($("#ingreso").val()).length === 0) {
        text = text + "Ingreso mensual\n";
    }
    if ($.trim($("#curp").val()).length === 0) {
        text = text + "Curp\n";
    }
    if ($.trim($("#calle").val()).length === 0) {
        text = text + "Calle\n";
    }
    if ($.trim($("#colonia").val()).length === 0) {
        text = text + "Colonia\n";
    }
    if ($.trim($("#ciudad").val()).length === 0) {
        text = text + "Ciudad\n";
    }
    if ($.trim($("#municipio").val()).length === 0) {
        text = text + "Municipio\n";
    }
    if ($.trim($("#estado").val()).length === 0) {
        text = text + "Estado\n";
    }
    if ($.trim($("#pais").val()).length === 0) {
        text = text + "Pais\n";
    }
    if ($.trim($("#codigo").val()).length === 0) {
        text = text + "Codigo postal\n";
    }
    if ($.trim($("#tel").val()).length === 0) {
        text = text + "Telefono\n";
    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);
        return false;
    } else {
        return true;
    }
}

function validacion_academico() {
    var text = "";
    if ($.trim($("#matricula").val()).length === 0) {
        text = text + "Matricula\n";
    }
    if ($.trim($("#correoi").val()).length === 0) {
        text = text + "Correo institucional\n";
    }
    if ($.trim($("#anio").val()).length === 0) {
        text = text + "Año de ingreso\n";
    }
    if ($.trim($("#modalidad").val()).length === 0) {
        text = text + "Modalidad\n";
    }
    if ($.trim($("#bachi").val()).length === 0) {
        text = text + "Bachillerato de procedencia\n";
    }
    if ($.trim($("#programa").val()).length === 0) {
        text = text + "Programa educativo\n";
    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);
        return false;
    } else {
        return true;
    }
}
function validacion_examen() {
    var text = "";
    if ($.trim($("#cali1").val()).length === 0) {
        text = text + "Comprensión lectora\n";
    }
    if ($.trim($("#cali2").val()).length === 0) {
        text = text + "Estructura de la lengua\n";
    }
    if ($.trim($("#cali3").val()).length === 0) {
        text = text + "Pensamiento analítico\n";
    }
    if ($.trim($("#cali4").val()).length === 0) {
        text = text + "Pensamiento matemático\n";
    }
    if ($.trim($("#cali5").val()).length === 0) {
        text = text + "Matemáticas\n";
    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);
        return false;
    } else {
        return true;
    }


}






