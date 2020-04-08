var Academicos_InstructorEC = (function () {

    return {
        cargarModulo: function () {
            $.get("Academicos_InstructorEC", {
                ACCION: "MODULO"
            }).then(function () {
                $("#content").html(arguments[0]);
                
                $("#agregar").unbind('click').bind('click', function () {
                    Academicos_InstructorEC.agregar();
                });
                
                $(".eliminardatos").unbind('click').bind('click', function () {
                    var id = $(this).parents("tr").attr("id");
                    swal({
                        title: "\u00bfEst\u00E1s seguro?",
                        text: "Se eliminara el registro",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Confirmar",
                        closeOnConfirm: false
                    }, function () {
                        swal("Eliminado exitosamente", "Click en el bot\u00F3n!", "success");
                        Academicos_InstructorEC.eliminar(id);  
                    });
                });
                $(".editardatos").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_InstructorEC.modificar(id);  
                });
                $("#tabla_InstructorEC").DataTable({
                    "scrollX": true});
            });    
        },
        modificar: function () {
            $.get("Academicos_InstructorEC", {
                ACCION: "Modificar",
                DATOS: id
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#cancelar").unbind('click').bind('click', function () {
                    Academicos_InstructorEC.cargarModulo();
                });
                $("#modificarIEC").on('click', function () {
                    if (validacion_datosIEC()) {
                        var datosIEC = {
                            "id_recursos_Externos":id,
                            "id_academicos": $("#academico").val(),
                            "id_periodo": $("#periodo").val(),
                            "nombre": $("#nomingreso").val(),
                            "ingreso": $("#ingreso").val()
                        };
                        Academicos_InstructorEC.modificardatos(datosIEC, 'actualizar_IEC');
                    }
                });
            });
        },
        modificardatos: function (objeto, accion) {
            $.get("Academicos_InstructorEC", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto)
            }).then(function () {
                Academicos_InstructorEC.cargarModulo();
                swal("Modificado exitosamente!", "Click en el bot\u00F3n!", "success");
            });
        },
        eliminar: function (id) {
            $.get("Academicos_InstructorEC", {
                ACCION: "Eliminar",
                id_eliminar: id
            }).then(function () {
                $("#content").html(arguments[0]);
                Academicos_InstructorEC.cargarModulo();
            });
        },
        agregar: function () {
            $.get("Academicos_InstructorEC", {
                ACCION: "AGREGAR"
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#cancelar").unbind('click').bind('click', function () {
                    Academicos_InstructorEC.cargarModulo();
                });
                $("#guardarIEC").on('click', function () {
                    if (validacion_datosIEC()) {
                        var datosIEC = {
                            "id_academicos": $("#academico").val(),
                            "id_periodo": $("#periodo").val(),
                            "nombre": $("#nomingreso").val(),
                            "ingreso": $("#ingreso").val()
                        };
                        Academicos_InstructorEC.guardadatos(datosIEC, 'Guardar_IEC');
                    }
                });
            });
        },
        guardadatos: function (objeto, accion) {
            $.get("Academicos_InstructorEC", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto)
            }).then(function () {
                Academicos_InstructorEC.cargarModulo();
                alerta_confirmacion();
            });
        }
    };
}());

function validacion_datosIEC() {
    var text = "";
    if ($.trim($("#academico").val()).length === 0) {
        text = text + "Acad\u00e9mico\n";
    }
    if ($.trim($("#periodo").val()).length === 0) {
        text = text + "Periodo\n";
    }
    if ($.trim($("#nomingreso").val()).length === 0) {
        text = text + "Nombre del ingreso\n";
    }
    if ($.trim($("#ingreso").val()).length === 0) {
        text = text + "Cantidad de ingreso\n";
    }
    
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);    
        return false;
    } else {
        return true;
    }
}
function showWithTitleMessage(tittle, message) {
    swal(tittle, message);
}

function alerta_confirmacion() {
    swal("Guardado exitosamente!", "Click en el bot\u00F3n!", "success");
}
