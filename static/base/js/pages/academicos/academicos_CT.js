var Academicos_CT = (function () {

    return {
        cargarModulo: function () {

            $.get("Academicos_CT", {
                ACCION: "MODULO"
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#agregar").unbind('click').bind('click', function () {
                    Academicos_CT.agregar();
                });
                $(".eliminar").unbind('click').bind('click', function () {
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
                        Academicos_CT.eliminar(id);
                    });
                });
                $(".modificar").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_CT.modificar(id);
                });
                
                
                $("#tabla_CT").DataTable({
                    "scrollX": true});
            });
        },
        
        agregar: function () {            
            $.get("Academicos_CT", {
                ACCION: "AGREGAR"
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#cancelar").unbind('click').bind('click', function () {
                    Academicos_CT.cargarModulo();
                });
                Academicos_CT.guardar();
            });
        },
        guardar: function () {   
            $('form[name="fileinfo"]').ajaxForm(function() { 
                    alerta_confirmacion();
                    Academicos_CT.cargarModulo();
            });
            //Academicos_CT.cargarModulo();
        },
        eliminar: function (id) {
            $.get("Academicos_CT", {
                ACCION: "ELIMINAR",
                DATOS: id
            }).then(function () {
                swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                Academicos_CT.cargarModulo();
            });
        },
        modificar: function (id) {
            $.get("Academicos_CT", {
                ACCION: "MODIFICAR",
                DATOS: id
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#guardar").unbind('click').bind('click', function () {
                    if (validacion()) {
                        var consejoT = {
                            "idConsejo_tecnico": id,
                            "id_academico": 1,
                            "id_Fecha_Inicial": $("#periodo_inicio").val(),
                            "id_Fecha_Cierre": $("#periodo_cierre").val()
                        };
                        Academicos_CT.guardar_modificado(consejoT);
                    }
                });
                $("#cancelar").unbind('click').bind('click', function () {
                    Academicos_CT.cargarModulo();
                });
            });
        },
        guardar_modificado: function (consejoT) {
            $.get("Academicos_CT", {
                ACCION: "ACTUALIZAR",
                DATOS: JSON.stringify(consejoT)
            }).then(function () {
                swal("Modificado exitosamente!", "Click en el bot\u00F3n!", "success");
                Academicos_CT.cargarModulo();
            });
        }
    };
}());


function validacion() {
    var text = "";

    if ($.trim($("#academico").val()).length === 0) {
        text = text + "Acad\u00e9mico\n";
    }
    if ($.trim($("#periodo_inicio").val()).length === 0) {
        text = text + "Periodo de inicio\n";
    }
    if ($.trim($("#periodo_cierre").val()).length === 0) {
        text = text + "Periodo de termino\n";
    }
//    if ($.trim($("#archivo").val()).length === 0) {
//        text = text + "Archivo\n";
//    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);
        return false;
    } else {
        return true;
    }
}