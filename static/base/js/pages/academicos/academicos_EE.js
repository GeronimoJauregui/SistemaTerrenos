var Academicos_EE = (function () {

    return {
        cargarModulo: function () {

            $.get("Academicos_EE", {
                ACCION: "MODULO"
            }).then(function () {
                $("#content").html(arguments[0]);
                
                $("#agregar_EEUV").unbind('click').bind('click', function () {
                    Academicos_EE.agregar1();
                });
                $("#agregar_EEExterna").unbind('click').bind('click', function () {
                    Academicos_EE.agregar2();
                });
                $(".verdatos").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.mostrarespecifico(id);
                });
                $(".eliminarEEUV").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.eliminarEEUV(id);
                });
                $(".editarEEUV").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.modificar_EEUV(id);  
                });
                $(".eliminarEEEUV").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.eliminarEEEUV(id);
                });
                $(".editarEEEUV").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.modificar_EEEUV(id);  
                });
                $("#tabla_EEUV").DataTable();
                $("#tabla_EEExterna").DataTable();
            });
        },
        modificar_EEUV: function (id) {
            $.get("Academicos_EE", {
                ACCION: "Modificar_EEUV",
                DATOS: id
            }).then(function () {
                $("#tabla_eeuv").html(arguments[0]);
                $("#modificarEEUV").on('click', function () {
                    if (validacion_datosEEUV()) {
                        var datosEEUV = {
                            "id_experiencia_educativa_periodo":id,
                            "id_academico": $("#academico").val(),
                            "nrc": $("#nrc").val(),
                            "id_mapa_curricular": $("#EE").val(),
                            "id_periodo": $("#periodo").val(),
                            "id_salon": $("#salon").val(),
                            "id_contratacion": $("#contratacion").val(),
                            "calificacion": $("#calificacion").val()
                        };
                        Academicos_EE.actualizarEEUV(datosEEUV, 'actualizar_EEUV');
                    }
                });
            });
        },
        actualizarEEUV: function (objeto, accion) {
            $.get("Academicos_EE", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto)
            }).then(function () {
                $("#tabla_eeuv").html(arguments[0]);
                $("#agregar_EEUV").unbind('click').bind('click', function () {
                    Academicos_EE.agregar1();
                });
                $(".verdatos").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.mostrarespecifico(id);
                });
                $(".eliminarEEUV").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.eliminarEEUV(id);
                });
                $(".editarEEUV").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.modificar_EEUV(id);  
                });
                $("#tabla_EEUV").DataTable();
                swal("Modificado exitosamente!", "Click en el bot\u00F3n!", "success");
            });
        },
        eliminarEEUV: function (id) {
            $.get("Academicos_EE", {
                ACCION: "Eliminar_EEUV",
                id_eliminar: id
            }).then(function () {
                $("#tabla_eeuv").html(arguments[0]);
                $("#agregar_EEUV").unbind('click').bind('click', function () {
                    Academicos_EE.agregar1();
                });
                $(".verdatos").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.mostrarespecifico(id);
                });
                $(".eliminarEEUV").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.eliminarEEUV(id);
                });
                $(".editarEEUV").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.modificar_EEUV(id);  
                });
                $("#tabla_EEUV").DataTable();
               
            });
        },
        eliminarEEEUV: function (id) {
            $.get("Academicos_EE", {
                ACCION: "Eliminar_EEEUV",
                id_eliminar: id
            }).then(function () {
                $("#tabla_eeeuv").html(arguments[0]);
                $("#agregar_EEExterna").unbind('click').bind('click', function () {
                    Academicos_EE.agregar2();
                });
                $(".eliminarEEEUV").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.eliminarEEEUV(id);
                });
                $(".editarEEEUV").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.modificar_EEEUV(id);  
                });
                $("#tabla_EEExterna").DataTable();
            });
        },
        mostrarespecifico: function (id) {
            $.get("Academicos_EE", {
                ACCION: "MostrarEspecifico",
                DATOS: id
            }).then(function () {
                $("#content").html(arguments[0]);
            });
        },
        agregar1: function () {
            $.get("Academicos_EE", {
                ACCION: "AGREGARUV"
            }).then(function () {
                $("#tabla_eeuv").html(arguments[0]);
                $("#guardarEEUV").on('click', function () {
                    if (validacion_datosEEUV()) {
                        var datosEEUV = {
                            "id_academico": $("#academico").val(),
                            "nrc": $("#nrc").val(),
                            "id_mapa_curricular": $("#EE").val(),
                            "id_periodo": $("#periodo").val(),
                            "id_salon": $("#salon").val(),
                            "id_contratacion": $("#contratacion").val(),
                            "calificacion": $("#calificacion").val()
                        };
                        Academicos_EE.guardadatosEEUV(datosEEUV, 'Guardar_EEUV');
                    }
                });
            });
        },
        guardadatosEEUV: function (objeto, accion) {
            $.get("Academicos_EE", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto)
            }).then(function () {
                $("#tabla_eeuv").html(arguments[0]);
                $("#agregar_EEUV").unbind('click').bind('click', function () {
                    Academicos_EE.agregar1();
                });
                $(".verdatos").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.mostrarespecifico(id);
                });
                $(".eliminarEEUV").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.eliminarEEUV(id);
                });
                $(".editarEEUV").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.modificar_EEUV(id);  
                });
                $("#tabla_EEUV").DataTable();
                alerta_confirmacion();
            });
        },
        
        agregar2: function () {
            $.get("Academicos_EE", {
                ACCION: "AGREGAREXTERNAS"
            }).then(function () {
                $("#tabla_eeeuv").html(arguments[0]);
                $("#guardarEEEUV").on('click', function () {
                    if (validacion_datosEEEUV()) {
                        var datosEEEUV = {
                            "id_academico": $("#academico").val(),
                            "id_institucionSuperiodo": $("#instituciones").val(),
                            "id_mapa_curricular": $("#EE").val(),
                            "id_periodo": $("#periodo").val()
                        };
                        Academicos_EE.guardadatosEEEUV(datosEEEUV, 'Guardar_EEEUV');
                    }
                });
            });
        },
        guardadatosEEEUV: function (objeto, accion) {
            $.get("Academicos_EE", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto)
            }).then(function () {
                $("#tabla_eeeuv").html(arguments[0]);
                $("#agregar_EEExterna").unbind('click').bind('click', function () {
                    Academicos_EE.agregar2();
                });
                $(".eliminarEEEUV").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.eliminarEEEUV(id);
                });
                $(".editarEEEUV").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.modificar_EEEUV(id);  
                });
                $("#tabla_EEExterna").DataTable();
                alerta_confirmacion();
            });
        },
        modificar_EEEUV: function (id) {
            $.get("Academicos_EE", {
                ACCION: "Modificar_EEEUV",
                DATOS: id
            }).then(function () {
                $("#tabla_eeeuv").html(arguments[0]);
                $("#modificarEEEUV").on('click', function () {
                    if (validacion_datosEEEUV()) {
                        var datosEEEUV = {
                            "id_experiencia_educativa_periodo":id,
                            "id_academico": $("#academico").val(),
                            "id_institucionSuperiodo": $("#instituciones").val(),
                            "id_mapa_curricular": $("#EE").val(),
                            "id_periodo": $("#periodo").val()
                        };
                        Academicos_EE.actualizarEEEUV(datosEEEUV, 'actualizar_EEEUV');
                    }
                });
            });
        },
        actualizarEEEUV: function (objeto, accion) {
            $.get("Academicos_EE", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto)
            }).then(function () {
                $("#tabla_eeeuv").html(arguments[0]);
                $("#agregar_EEExterna").unbind('click').bind('click', function () {
                    Academicos_EE.agregar2();
                });
                $(".eliminarEEEUV").unbind('click').bind('click', function () {
                    swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.eliminarEEEUV(id);
                });
                $(".editarEEEUV").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_EE.modificar_EEEUV(id);  
                });
                $("#tabla_EEExterna").DataTable();
                swal("Modificado exitosamente!", "Click en el bot\u00F3n!", "success");
            });
        }
    };
}());
function validacion_datosEEEUV() {
    var text = "";
    if ($.trim($("#academico").val()).length === 0) {
        text = text + "Acad\u00e9mico\n";
    }
    if ($.trim($("#instituciones").val()).length === 0) {
        text = text + "Instituci\u00f3n nivel superior\n";
    }
    if ($.trim($("#EE").val()).length === 0) {
        text = text + "Experiencia Educativa\n";
    }
    if ($.trim($("#periodo").val()).length === 0) {
        text = text + "Periodo\n";
    }
    
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);    
        return false;
    } else {
        return true;
    }
}
function validacion_datosEEUV() {
    var text = "";
    if ($.trim($("#academico").val()).length === 0) {
        text = text + "Acad\u00e9mico\n";
    }
    if ($.trim($("#nrc").val()).length === 0) {
        text = text + "NRC\n";
    }
    if ($.trim($("#EE").val()).length === 0) {
        text = text + "Experiencia Educativa\n";
    }
    if ($.trim($("#periodo").val()).length === 0) {
        text = text + "Periodo\n";
    }
    if ($.trim($("#salon").val()).length === 0) {
        text = text + "Salon\n";
    }
    if ($.trim($("#contratacion").val()).length === 0) {
        text = text + "Contrataci\u00f3n\n";
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