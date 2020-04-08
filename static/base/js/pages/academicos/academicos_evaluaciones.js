var Academicos_Evaluaciones = (function () {

    return {
        cargarModulo: function () {
            $.get("Academicos_Evaluaciones", {
                ACCION: "MODULO"
            }).then(function () {
                $("#content").html(arguments[0]);
                
                $("#agregarcalifalumno").unbind('click').bind('click', function () {
                    Academicos_Evaluaciones.agregar1();
                });
                $("#agregarcalifCT").unbind('click').bind('click', function () {
                    Academicos_Evaluaciones.agregar2();
                });
                $("#agregarcaliftutor").unbind('click').bind('click', function () {
                    Academicos_Evaluaciones.agregar3();
                });
                $(".verdatos").unbind('click').bind('click', function () {
                    npersonal = $(this).parents("tr").find("td").eq(0).html();
                    periodo = $(this).parents("tr").find("td").eq(3).html();
                    Academicos_Evaluaciones.mostrarespecifico(npersonal,periodo);
                });
                $(".eliminarevaestudi").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.eliminarevaestudi(id);  
                });
                $(".eliminarevact").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.eliminarevact(id);  
                });
                $(".eliminarevatutor").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.eliminarevatutor(id);  
                });
                $(".modificarevaestudiante").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.modificar_eva_estudiante(id);  
                });
                $(".modificarCT").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.modificar_eva_CT(id);  
                });
                $(".modificarTutor").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.modificar_eva_Tutor(id);  
                });
                $("#tabla_evaluacionesestudiante").DataTable();
                $("#tabla_evaluacioness").DataTable();
                $("#tabla_tutorados").DataTable();
            });
            
        },
        modificar_eva_Tutor: function (id) {
            $.get("Academicos_Evaluaciones", {
                ACCION: "Modificar_Eva_Tutor",
                DATOS: id
            }).then(function () {
                $("#tabla_evaluaciontutor").html(arguments[0]);
                $("#actualizarEvaTutor").on('click', function () {
                    if (validacion_datosEvaTutor()) {
                        var datosEvaTutor = {
                            "id_Tb_calificacion_tutor":id,
                            "id_academicos": $("#academico").val(),
                            "id_periodo": $("#periodo").val(),
                            "calificacion": $("#calificacion").val()
                        };
                        Academicos_Evaluaciones.actualizarEvaTutor(datosEvaTutor, 'actualizar_EvaTutor');
                    }
                });
            });
        },
        actualizarEvaTutor: function (objeto, accion) {
            $.get("Academicos_Evaluaciones", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto)
            }).then(function () {
                $("#tabla_evaluaciontutor").html(arguments[0]);
                $("#agregarcaliftutor").unbind('click').bind('click', function () {
                    Academicos_Evaluaciones.agregar3();
                });
                $(".eliminarevatutor").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.eliminarevatutor(id);  
                });
                $(".modificarTutor").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.modificar_eva_Tutor(id);  
                });
                $("#tabla_tutorados").DataTable();
                swal("Modificado exitosamente!", "Click en el bot\u00F3n!", "success");
            });
        },
        modificar_eva_CT: function (id) {
            $.get("Academicos_Evaluaciones", {
                ACCION: "Modificar_Eva_CT",
                DATOS: id
            }).then(function () {
                $("#tabla_evaluacionCT").html(arguments[0]);
                $("#actualizarEvaCT").on('click', function () {
                    if (validacion_datosEvaCT()) {
                        var datosEvaCT = {
                            "id_ConsejoTecnico":id,
                            "id_academicos": $("#academico").val(),
                            "id_periodo": $("#periodo").val(),
                            "calificacion_desempenio": $("#calificacion1").val(),
                            "calificacion_gestion": $("#calificacion2").val()
                        };
                        Academicos_Evaluaciones.actualizarEvaCT(datosEvaCT, 'actualizar_EvaCT');
                    }
                });
            });
        },
        actualizarEvaCT: function (objeto, accion) {
            $.get("Academicos_Evaluaciones", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto)
            }).then(function () {
                $("#tabla_evaluacionCT").html(arguments[0]);
                $("#agregarcalifCT").unbind('click').bind('click', function () {
                    Academicos_Evaluaciones.agregar2();
                });
                $(".eliminarevact").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.eliminarevact(id);  
                });
                $(".modificarCT").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.modificar_eva_CT(id);  
                });
                $("#tabla_evaluacioness").DataTable();
                swal("Modificado exitosamente!", "Click en el bot\u00F3n!", "success");
            });
        },
        modificar_eva_estudiante: function (id) {
            $.get("Academicos_Evaluaciones", {
                ACCION: "Modificar_Eva_Estudiante",
                DATOS: id
            }).then(function () {
                $("#tabla_evaluacionacademicos").html(arguments[0]);
                $("#actualizarEvaEstu").on('click', function () {
                    if (validacion_datosEvaEstu()) {
                        var datosEvaEstu = {
                            "id_evaluacion_estudiantes":id,
                            "id_academicos": $("#academico1").val(),
                            "id_periodo": $("#periodo1").val(),
                            "calificacion": $("#calificacion1").val()
                        };
                        Academicos_Evaluaciones.actualizarEvaEstu(datosEvaEstu, 'actualizar_EvaEstu');
                    }
                });
                
            });
        },
        actualizarEvaEstu: function (objeto, accion) {
            $.get("Academicos_Evaluaciones", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto)
            }).then(function () {
                $("#tabla_evaluacionacademicos").html(arguments[0]);
                $("#agregarcalifalumno").unbind('click').bind('click', function () {
                    Academicos_Evaluaciones.agregar1();
                });
                $(".verdatos").unbind('click').bind('click', function () {
                    npersonal = $(this).parents("tr").find("td").eq(0).html();
                    periodo = $(this).parents("tr").find("td").eq(3).html();
                    Academicos_Evaluaciones.mostrarespecifico(npersonal,periodo);
                });
                $(".eliminarevaestudi").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.eliminarevaestudi(id);  
                });
                $(".modificarevaestudiante").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.modificar_eva_estudiante(id);  
                });
                $("#tabla_evaluacionesestudiante").DataTable();
                swal("Modificado exitosamente!", "Click en el bot\u00F3n!", "success");
            });
        },
        
        mostrarespecifico: function (npersonal,periodo) {
            $.get("Academicos_Evaluaciones", {
                ACCION: "MostrarEspecifico",
                npersonal: npersonal,
                periodo:periodo
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#tabla_califEE").DataTable({
                    "scrollX": true});
            });
        },
        
        agregar1: function () {
            $.get("Academicos_Evaluaciones", {
                ACCION: "AGREGARCALIFALUMNO"
            }).then(function () {
                $("#tabla_evaluacionacademicos").html(arguments[0]);
                
                $("#guardarEvaEstu").on('click', function () {
                    if (validacion_datosEvaEstu()) {
                        var datosEvaEstu = {
                            "id_academicos": $("#academico1").val(),
                            "id_periodo": $("#periodo1").val(),
                            "calificacion": $("#calificacion1").val()
                        };
                        Academicos_Evaluaciones.guardadatosEvaEstu(datosEvaEstu, 'Guardar_EvaEstu');
                    }
                });
            });
        },
        guardadatosEvaEstu: function (objeto, accion) {
            $.get("Academicos_Evaluaciones", {
                ACCION: accion,
                DATOS1: JSON.stringify(objeto)
            }).then(function () {
                $("#tabla_evaluacionacademicos").html(arguments[0]);
                $("#agregarcalifalumno").unbind('click').bind('click', function () {
                    Academicos_Evaluaciones.agregar1();
                });
                $(".verdatos").unbind('click').bind('click', function () {
                    npersonal = $(this).parents("tr").find("td").eq(0).html();
                    periodo = $(this).parents("tr").find("td").eq(3).html();
                    Academicos_Evaluaciones.mostrarespecifico(npersonal,periodo);
                });
                $(".eliminarevaestudi").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.eliminarevaestudi(id);  
                });
                $(".modificarevaestudiante").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.modificar_eva_estudiante(id);  
                });
                $("#tabla_evaluacionesestudiante").DataTable();
                alerta_confirmacion();
            });
        },
        agregar2: function () {
            $.get("Academicos_Evaluaciones", {
                ACCION: "AGREGARCALIFCT"
            }).then(function () {
                $("#tabla_evaluacionCT").html(arguments[0]);
                
                $("#guardarEvaCT").on('click', function () {
                    if (validacion_datosEvaCT()) {
                        var datosEvaCT = {
                            "id_academicos": $("#academico").val(),
                            "id_periodo": $("#periodo").val(),
                            "calificacion_desempenio": $("#calificacion1").val(),
                            "calificacion_gestion": $("#calificacion2").val()
                        };
                        Academicos_Evaluaciones.guardadatosEvaCT(datosEvaCT, 'Guardar_EvaCT');
                    }
                });
            });
        },
        guardadatosEvaCT: function (objeto, accion) {
            $.get("Academicos_Evaluaciones", {
                ACCION: accion,
                DATOS1: JSON.stringify(objeto)
            }).then(function () {
                $("#tabla_evaluacionCT").html(arguments[0]);
                $("#agregarcalifCT").unbind('click').bind('click', function () {
                    Academicos_Evaluaciones.agregar2();
                });
                $(".eliminarevact").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.eliminarevact(id);  
                });
                $(".modificarCT").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.modificar_eva_CT(id);  
                });
                $("#tabla_evaluacioness").DataTable();
                alerta_confirmacion();
            });
        },
        agregar3: function () {
            $.get("Academicos_Evaluaciones", {
                ACCION: "AGREGARCALIFTUTOR"
            }).then(function () {
                $("#tabla_evaluaciontutor").html(arguments[0]);
                $("#guardarEvaTutor").on('click', function () {
                    if (validacion_datosEvaTutor()) {
                        var datosEvaTutor = {
                            "id_academicos": $("#academico").val(),
                            "id_periodo": $("#periodo").val(),
                            "calificacion": $("#calificacion").val()
                        };
                        Academicos_Evaluaciones.guardadatosEvaTutor(datosEvaTutor, 'Guardar_EvaTutor');
                    }
                });
            });
        },
        guardadatosEvaTutor: function (objeto, accion) {
            $.get("Academicos_Evaluaciones", {
                ACCION: accion,
                DATOS1: JSON.stringify(objeto)
            }).then(function () {
                $("#tabla_evaluaciontutor").html(arguments[0]);
                $("#agregarcaliftutor").unbind('click').bind('click', function () {
                    Academicos_Evaluaciones.agregar3();
                });
                $(".eliminarevatutor").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.eliminarevatutor(id);  
                });
                $(".modificarTutor").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.modificar_eva_Tutor(id);  
                });
                $("#tabla_tutorados").DataTable();
                alerta_confirmacion();
            });
        },
       
        eliminarevaestudi: function (id) {
            $.get("Academicos_Evaluaciones", {
                ACCION: "Eliminarevaestudi",
                id_eliminar: id
            }).then(function () {
                $("#tabla_evaluacionacademicos").html(arguments[0]);
                $("#agregarcalifalumno").unbind('click').bind('click', function () {
                    Academicos_Evaluaciones.agregar1();
                });
                $(".verdatos").unbind('click').bind('click', function () {
                    npersonal = $(this).parents("tr").find("td").eq(0).html();
                    periodo = $(this).parents("tr").find("td").eq(3).html();
                    Academicos_Evaluaciones.mostrarespecifico(npersonal,periodo);
                });
                $(".eliminarevaestudi").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.eliminarevaestudi(id);  
                });
                $(".modificarevaestudiante").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.modificar_eva_estudiante(id);  
                });
                $("#tabla_evaluacionesestudiante").DataTable();
               
            });
        },
        eliminarevact: function (id) {
            $.get("Academicos_Evaluaciones", {
                ACCION: "Eliminarevact",
                id_eliminar: id
            }).then(function () {
                $("#tabla_evaluacionCT").html(arguments[0]);
                $("#agregarcalifCT").unbind('click').bind('click', function () {
                    Academicos_Evaluaciones.agregar2();
                });
                $(".eliminarevact").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.eliminarevact(id);  
                });
                $(".modificarCT").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.modificar_eva_CT(id);  
                });
                $("#tabla_evaluacioness").DataTable();
                
            });
        },
        eliminarevatutor: function (id) {
            $.get("Academicos_Evaluaciones", {
                ACCION: "Eliminarevatutor",
                id_eliminar: id
            }).then(function () {
                $("#tabla_evaluaciontutor").html(arguments[0]);
                $("#agregarcaliftutor").unbind('click').bind('click', function () {
                    Academicos_Evaluaciones.agregar3();
                });
                $(".eliminarevatutor").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.eliminarevatutor(id);  
                });
                $(".modificarTutor").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Evaluaciones.modificar_eva_Tutor(id);  
                });
                $("#tabla_tutorados").DataTable();
                
            });
        }
    };
}());

function validacion_datosEvaEstu() {
    var text = "";
    if ($.trim($("#academico1").val()).length === 0) {
        text = text + "Acad\u00e9mico\n";
    }
    if ($.trim($("#periodo1").val()).length === 0) {
        text = text + "Periodo\n";
    }
    if ($.trim($("#calificacion1").val()).length === 0) {
        text = text + "Calificaci\u00f3n\n";
    }
    
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);    
        return false;
    } else {
        return true;
    }
}

function validacion_datosEvaCT() {
    var text = "";
    if ($.trim($("#academico").val()).length === 0) {
        text = text + "Acad\u00e9mico\n";
    }
    if ($.trim($("#periodo").val()).length === 0) {
        text = text + "Periodo\n";
    }
    if ($.trim($("#calificacion1").val()).length === 0) {
        text = text + "Calificaci\u00f3n del desempeño\n";
    }
    if ($.trim($("#calificacion2").val()).length === 0) {
        text = text + "Calificaci\u00f3n de gestión\n";
    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);    
        return false;
    } else {
        return true;
    }
}
function validacion_datosEvaTutor() {
    var text = "";
    if ($.trim($("#academico").val()).length === 0) {
        text = text + "Acad\u00e9mico\n";
    }
    if ($.trim($("#periodo").val()).length === 0) {
        text = text + "Periodo\n";
    }
    if ($.trim($("#calificacion").val()).length === 0) {
        text = text + "Calificaci\u00f3n\n";
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