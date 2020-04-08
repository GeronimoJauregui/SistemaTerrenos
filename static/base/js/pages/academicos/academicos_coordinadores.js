var Academicos_Coordinadores = (function () {

    return {
        cargarModulo: function () {

            $.get("Academicos_Coordinadores", {
                ACCION: "MODULO"
            }).then(function () {
                $("#content").html(arguments[0]);
                
                $("#agregarcoordinador1").unbind('click').bind('click', function () {
                    Academicos_Coordinadores.agregar1();
                });
                $("#agregarcoordinador2").unbind('click').bind('click', function () {
                    Academicos_Coordinadores.agregar2();
                });
                $(".eliminar_cooracademia").unbind('click').bind('click', function () {
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
                        Academicos_Coordinadores.eliminarcooracademia(id);  
                    });
                    
                });
                $(".eliminar_coorprogramaT").unbind('click').bind('click', function () {
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
                        Academicos_Coordinadores.eliminarcoorprogramaT(id);  
                    });
                    
                });
                $(".modificar_cooracademia").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Coordinadores.modificar_cooracademia(id);  
                });
                $(".modificar_coordinadorPT").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Coordinadores.modificar_coordinadorPT(id);  
                });
                $("#tabla_coordinadores1").DataTable();
                $("#tabla_coordinadores2").DataTable();
            });
        },
        modificar_coordinadorPT: function (id) {
            $.get("Academicos_Coordinadores", {
                ACCION: "Modificar_PT",
                DATOS: id
            }).then(function () {
                $("#tabla_programa_transversal").html(arguments[0]);
                $("#cancelar").unbind('click').bind('click', function () {
                    Academicos_Coordinadores.cargartabProgramaT();
                });
                $("#actualizarprogramaT").on('click', function () {
                    if (validacion_datosProgramaT()) {
                        var datosProgramaT = {
                            "id_coordinador_programa_transversal": id,
                            "id_academico": $("#academico").val(),
                            "id_programa_transversal": $("#programa_transversal").val(),
                            "id_periodo_inicio": $("#periodoinicio").val(),
                            "id_periodo_cierre": $("#periodocierre").val()
                        };
                        Academicos_Coordinadores.modificardatosProgramaT(datosProgramaT, 'actualizar_ProgramaT');
                    }
                });
            });
        },
        modificardatosProgramaT: function (objeto, accion) {
            $.get("Academicos_Coordinadores", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto)
            }).then(function () {
                $("#tabla_programa_transversal").html(arguments[0]);
                $("#agregarcoordinador2").unbind('click').bind('click', function () {
                    Academicos_Coordinadores.agregar2();
                });
                $(".eliminar_coorprogramaT").unbind('click').bind('click', function () {
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
                        Academicos_Coordinadores.eliminarcoorprogramaT(id);  
                    });  
                });
                $(".modificar_coordinadorPT").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Coordinadores.modificar_coordinadorPT(id);  
                });
                $("#tabla_coordinadores2").DataTable();
                swal("Modificado exitosamente!", "Click en el bot\u00F3n!", "success");
            });
        },
        modificar_cooracademia: function (id) {
            $.get("Academicos_Coordinadores", {
                ACCION: "Modificar_cooracademia",
                DATOS: id
            }).then(function () {
                $("#tabla_academias").html(arguments[0]);
                $("#cancelar").unbind('click').bind('click', function () {
                    Academicos_Coordinadores.cargarModulo();
                });
                $("#actualizaracademia").on('click', function () {
                    if (validacion_datosAcademia()) {
                        var datosAcademia = {
                            "id_coordinador_academia":id,
                            "id_academico": $("#academicos").val(),
                            "id_academia": $("#academias").val(),
                            "id_periodo_inicio": $("#periodoinicio").val(),
                            "id_periodo_cierre": $("#periodocierre").val()
                        };
                        Academicos_Coordinadores.modificardatosAcademia(datosAcademia, 'actualizar_Academia');
                    }
                });
            });
        },
        modificardatosAcademia: function (objeto, accion) {
            $.get("Academicos_Coordinadores", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto)
            }).then(function () {
                $("#tabla_academias").html(arguments[0]);
                $("#agregarcoordinador1").unbind('click').bind('click', function () {
                    Academicos_Coordinadores.agregar1();
                });
                $(".eliminar_cooracademia").unbind('click').bind('click', function () {
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
                        Academicos_Coordinadores.eliminarcooracademia(id);  
                    });  
                });
                $(".modificar_cooracademia").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Coordinadores.modificar_cooracademia(id);  
                });
                $("#tabla_coordinadores1").DataTable();
                swal("Modificado exitosamente!", "Click en el bot\u00F3n!", "success");
            });
        },
        agregar1: function () {
            $.get("Academicos_Coordinadores", {
                ACCION: "AGREGARACADEMIA"
            }).then(function () {
                $("#tabla_academias").html(arguments[0]);
                $("#cancelar").unbind('click').bind('click', function () {
                    Academicos_Coordinadores.cargarModulo();
                });
                Academicos_Coordinadores.guardardatosAcademia();
            });
        },
        guardardatosAcademia: function () {
            $('form[name="formacademica"]').ajaxForm(function() { 
                    alerta_confirmacion();
                    Academicos_Coordinadores.cargarModulo();
            });
        },
        eliminarcooracademia: function (id) {
            $.get("Academicos_Coordinadores", {
                ACCION: "Eliminarcooracademia",
                id_eliminar: id
            }).then(function () {
                $("#tabla_academias").html(arguments[0]);
                $("#agregarcoordinador1").unbind('click').bind('click', function () {
                    Academicos_Coordinadores.agregar1();
                });
                $(".eliminar_cooracademia").unbind('click').bind('click', function () {
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
                        Academicos_Coordinadores.eliminarcooracademia(id);  
                    }); 
                });
                $(".modificar_cooracademia").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Coordinadores.modificar_cooracademia(id);  
                });
                $("#tabla_coordinadores1").DataTable();
                Academicos_Coordinadores.cargarModulo();
            });
        },
        agregar2: function () {
            $.get("Academicos_Coordinadores", {
                ACCION: "AGREGARTRANSVERSAL"
            }).then(function () {
                $("#tabla_programa_transversal").html(arguments[0]);  
                $("#cancelar").unbind('click').bind('click', function () {
                    Academicos_Coordinadores.cargartabProgramaT();
                });
                Academicos_Coordinadores.guardardatosProgramaT();
            });
        },
        guardardatosProgramaT: function () {
            $('form[name="formtransversal"]').ajaxForm(function() { 
                alerta_confirmacion();
                Academicos_Coordinadores.cargartabProgramaT();
            });
        },
        cargartabProgramaT: function () {
            $.get("Academicos_Coordinadores", {
                ACCION: "Guardar_ProgramaT",
                OPCION: 2
            }).then(function () {
                $("#tabla_programa_transversal").html(arguments[0]);
                $("#agregarcoordinador2").unbind('click').bind('click', function () {
                    Academicos_Coordinadores.agregar2();
                });
                $(".eliminar_coorprogramaT").unbind('click').bind('click', function () {
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
                        Academicos_Coordinadores.eliminarcoorprogramaT(id);  
                    });
                });
                $(".modificar_coordinadorPT").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Coordinadores.modificar_coordinadorPT(id);  
                });
                $("#tabla_coordinadores2").DataTable();
                
            });
        },        
        eliminarcoorprogramaT: function (id) {
            $.get("Academicos_Coordinadores", {
                ACCION: "EliminarcoorprogramaT",
                id_eliminar: id
            }).then(function () {
                $("#tabla_programa_transversal").html(arguments[0]);
                $("#agregarcoordinador2").unbind('click').bind('click', function () {
                    Academicos_Coordinadores.agregar2();
                });
                $(".eliminar_coorprogramaT").unbind('click').bind('click', function () {
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
                        Academicos_Coordinadores.eliminarcoorprogramaT(id);  
                    });
                });
                $(".modificar_coordinadorPT").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Coordinadores.modificar_coordinadorPT(id);  
                });
                $("#tabla_coordinadores2").DataTable();
                
            });
        }
       
    };
}());

function validacion_datosProgramaT() {
    var text = "";
    if ($.trim($("#academico").val()).length === 0) {
        text = text + "Acad\u00e9mico\n";
    }
    if ($.trim($("#programa_transversal").val()).length === 0) {
        text = text + "Programa transversal\n";
    }
    if ($.trim($("#periodoinicio").val()).length === 0) {
        text = text + "Periodo de inicio\n";
    }
    if ($.trim($("#periodocierre").val()).length === 0) {
        text = text + "Periodo de cierre\n";
    }
    if ($.trim($("#archivoT").val()).length === 0) {
        text = text + "Archivo de evidencia\n";
    }
    
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);    
        return false;
    } else {
        return true;
    }
}
function validacion_datosAcademia() {
    var text = "";
    if ($.trim($("#academicos").val()).length === 0) {
        text = text + "Acad\u00e9mico\n";
    }
    if ($.trim($("#academias").val()).length === 0) {
        text = text + "Academia\n";
    }
    if ($.trim($("#periodoinicio").val()).length === 0) {
        text = text + "Periodo de inicio\n";
    }
    
    if ($.trim($("#periodocierre").val()).length === 0) {
        text = text + "Periodo de cierre\n";
    }
    if ($.trim($("#archivo").val()).length === 0) {
        text = text + "Archivo de evidencia\n";
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