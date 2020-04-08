var Academicos_Produccion = (function () {

    return {
        cargarModulo: function () {
            $.get("Academicos_Produccion", {
                ACCION: "MODULO"
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#agregarMDidactico").unbind('click').bind('click', function () {
                    Academicos_Produccion.agregar1();
                });
                $("#agregarMPractica").unbind('click').bind('click', function () {
                    Academicos_Produccion.agregar2();
                });
                $("#agregarLibroEE").unbind('click').bind('click', function () {
                    Academicos_Produccion.agregar3();
                });
                $("#agregarProyectoE").unbind('click').bind('click', function () {
                    Academicos_Produccion.agregar4();
                });
                $(".eliminar_materialD").unbind('click').bind('click', function () {
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
                        Academicos_Produccion.eliminar_materialD(id);  
                    });
                    
                });
                $(".eliminar_manualesP").unbind('click').bind('click', function () {
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
                        Academicos_Produccion.eliminar_manualesP(id);  
                    });
                    
                });
                $(".eliminar_libroEE").unbind('click').bind('click', function () {
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
                        Academicos_Produccion.eliminar_libroEE(id);  
                    });
                    
                });
                $(".eliminar_proyectoE").unbind('click').bind('click', function () {
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
                        Academicos_Produccion.eliminar_proyectoE(id);  
                    });
                    
                });
                
                $(".modificar_materialD").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Produccion.modificar_materialD(id);  
                });
                $(".modificar_manualesP").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Produccion.modificar_manualesP(id);  
                });
                $(".modificar_libroEE").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Produccion.modificar_libroEE(id);  
                });
                $(".modificar_proyectoE").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Produccion.modificar_proyectoE(id);  
                });
                $("#tabla_MDidactico").DataTable();
                $("#tabla_MPractica").DataTable();
                $("#tabla_LibroEE").DataTable();
                $("#tabla_ProyectoE").DataTable();
            });    
        },
        modificar_proyectoE: function (id) {
            $.get("Academicos_Produccion", {
                ACCION: "Modificar_proyectoE",
                DATOS: id
            }).then(function () {
                $("#tabla_ProyectosE").html(arguments[0]);
                $("#cancelar").unbind('click').bind('click', function () {
                    Academicos_Produccion.cargartabProyectoE();
                });
                $("#actualizarProyectoE").on('click', function () {
                    if (validacion_datosProyectoE()) {
                        var datosProyectoE = {
                            "id_proyecto_edu":id,
                            "id_academico": $("#academicos").val(),
                            "id_periodo": $("#periodo").val(),
                            "descripcion": $("#descripcion").val()
                        };
                        Academicos_Produccion.actualizarProyectoE(datosProyectoE, 'actualizar_proyectoE');
                    }
                });
            });
        },
        actualizarProyectoE: function (objeto, accion) {
            $.get("Academicos_Produccion", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto)
            }).then(function () {
                $("#tabla_ProyectosE").html(arguments[0]);
                $("#agregarProyectoE").unbind('click').bind('click', function () {
                    Academicos_Produccion.agregar4();
                });
                $(".eliminar_proyectoE").unbind('click').bind('click', function () {
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
                        Academicos_Produccion.eliminar_proyectoE(id);  
                    });
                });
                $(".modificar_proyectoE").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Produccion.modificar_proyectoE(id);  
                });
                $("#tabla_ProyectoE").DataTable();
                swal("Modificado exitosamente!", "Click en el bot\u00F3n!", "success");
            });
        },
        modificar_libroEE: function (id) {
            $.get("Academicos_Produccion", {
                ACCION: "Modificar_libroEE",
                DATOS: id
            }).then(function () {
                $("#tabla_LibrosEE").html(arguments[0]);
                $("#cancelar").unbind('click').bind('click', function () {
                    Academicos_Produccion.cargartablibroee();
                });
                $("#actualizarLibroEE").on('click', function () {
                    if (validacion_datoslibro()) {
                        var datoslibroee = {
                            "id_libroEE":id,
                            "id_academico": $("#academicos").val(),
                            "id_periodo": $("#periodo").val(),
                            "nombre": $("#nombre").val()
                        };
                        Academicos_Produccion.actualizarlibroee(datoslibroee, 'actualizar_libroEE');
                    }
                });
            });
        },
        actualizarlibroee: function (objeto, accion) {
            $.get("Academicos_Produccion", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto)
            }).then(function () {
                $("#tabla_LibrosEE").html(arguments[0]);
                $("#agregarLibroEE").unbind('click').bind('click', function () {
                    Academicos_Produccion.agregar3();
                });
                $(".eliminar_libroEE").unbind('click').bind('click', function () {
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
                        Academicos_Produccion.eliminar_libroEE(id);  
                    });
                });
                $(".modificar_libroEE").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Produccion.modificar_libroEE(id);  
                });
                $("#tabla_LibroEE").DataTable();
                swal("Modificado exitosamente!", "Click en el bot\u00F3n!", "success");
            });
        },
        modificar_manualesP: function (id) {
            $.get("Academicos_Produccion", {
                ACCION: "Modificar_manualesP",
                DATOS: id
            }).then(function () {
                $("#tabla_MPracticas").html(arguments[0]);
                $("#cancelar").unbind('click').bind('click', function () {
                    Academicos_Produccion.cargartabMPractica();
                });
                $("#actualizarMPractica").on('click', function () {
                    if (validacion_datosMPractica()) {
                        var datosMPractica = {
                            "id_manuales_practica":id,
                            "id_academico": $("#academicos").val(),
                            "id_periodo": $("#periodo").val(),
                            "nombre": $("#nombre").val()
                        };
                        Academicos_Produccion.actualizarMPractica(datosMPractica, 'actualizar_manualesP');
                    }
                });
            });
        },
        actualizarMPractica: function (objeto, accion) {
            $.get("Academicos_Produccion", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto)
            }).then(function () {
                $("#tabla_MPracticas").html(arguments[0]);
                $("#agregarMPractica").unbind('click').bind('click', function () {
                    Academicos_Produccion.agregar2();
                });
                $(".eliminar_manualesP").unbind('click').bind('click', function () {
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
                        Academicos_Produccion.eliminar_manualesP(id);  
                    });
                });
                $(".modificar_manualesP").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Produccion.modificar_manualesP(id);  
                });
                $("#tabla_MPractica").DataTable();
                swal("Modificado exitosamente!", "Click en el bot\u00F3n!", "success");
            });
        },
        modificar_materialD: function (id) {
            $.get("Academicos_Produccion", {
                ACCION: "Modificar_materialD",
                DATOS: id
            }).then(function () {
                $("#tabla_MDidacticos").html(arguments[0]);
                $("#cancelar").unbind('click').bind('click', function () {
                    Academicos_Produccion.cargarModulo();
                });
                $("#actualizarMaterial").on('click', function () {
                    if (validacion_datosMaterial()) {
                        var datosMaterial = {
                            "id_material_didactico":id,
                            "id_academico": $("#academicos").val(),
                            "id_periodo": $("#periodo").val(),
                            "notas_clase": $('input:radio[name=notas]:checked').val(),
                            "acetatos": $('input:radio[name=acetatos]:checked').val(),
                            "videos": $('input:radio[name=videos]:checked').val(),
                            "programas": $('input:radio[name=programas]:checked').val(),
                            "prototipos": $('input:radio[name=prototipos]:checked').val()
                        };
                        
                        Academicos_Produccion.actualizarMaterial(datosMaterial, 'actualizar_materialD');
                    }
                });
            });
        },
        actualizarMaterial: function (objeto, accion) {
            $.get("Academicos_Produccion", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto)
            }).then(function () {
                $("#tabla_MDidacticos").html(arguments[0]);
                $("#agregarMDidactico").unbind('click').bind('click', function () {
                    Academicos_Produccion.agregar1();
                });
                $(".eliminar_materialD").unbind('click').bind('click', function () {
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
                        Academicos_Produccion.eliminar_materialD(id);  
                    }); 
                });
                $(".modificar_materialD").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Produccion.modificar_materialD(id);  
                });
                $("#tabla_MDidactico").DataTable();
                swal("Modificado exitosamente!", "Click en el bot\u00F3n!", "success");
            });
        },
        
        eliminar_materialD: function (id) {
            $.get("Academicos_Produccion", {
                ACCION: "Eliminar_Material",
                id_eliminar: id
            }).then(function () {
                $("#tabla_MDidacticos").html(arguments[0]);
                $("#agregarMDidactico").unbind('click').bind('click', function () {
                    Academicos_Produccion.agregar1();
                });
                $(".eliminar_materialD").unbind('click').bind('click', function () {
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
                        Academicos_Produccion.eliminar_materialD(id);  
                    }); 
                });
                $(".modificar_materialD").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Produccion.modificar_materialD(id);  
                });
                $("#tabla_MDidactico").DataTable();
            });
        },
        eliminar_manualesP: function (id) {
            $.get("Academicos_Produccion", {
                ACCION: "Eliminar_MPractica",
                id_eliminar: id
            }).then(function () {
                $("#tabla_MPracticas").html(arguments[0]);
                $("#agregarMPractica").unbind('click').bind('click', function () {
                    Academicos_Produccion.agregar2();
                });
                $(".eliminar_manualesP").unbind('click').bind('click', function () {
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
                        Academicos_Produccion.eliminar_manualesP(id);  
                    });
                });
                $(".modificar_manualesP").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Produccion.modificar_manualesP(id);  
                });
                $("#tabla_MPractica").DataTable();
            });
        },
        eliminar_libroEE: function (id) {
            $.get("Academicos_Produccion", {
                ACCION: "Eliminar_LibroEE",
                id_eliminar: id
            }).then(function () {
                $("#tabla_LibrosEE").html(arguments[0]);
                $("#agregarLibroEE").unbind('click').bind('click', function () {
                    Academicos_Produccion.agregar3();
                });
                $(".eliminar_libroEE").unbind('click').bind('click', function () {
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
                        Academicos_Produccion.eliminar_libroEE(id);  
                    });  
                });
                $(".modificar_libroEE").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Produccion.modificar_libroEE(id);  
                });
                $("#tabla_LibroEE").DataTable();
            });
        },
        eliminar_proyectoE: function (id) {
            $.get("Academicos_Produccion", {
                ACCION: "Eliminar_ProyectoE",
                id_eliminar: id
            }).then(function () {
                $("#tabla_ProyectosE").html(arguments[0]);
                $("#agregarProyectoE").unbind('click').bind('click', function () {
                    Academicos_Produccion.agregar4();
                });
                $(".eliminar_proyectoE").unbind('click').bind('click', function () {
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
                        Academicos_Produccion.eliminar_proyectoE(id);  
                    });  
                });
                $(".modificar_proyectoE").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Produccion.modificar_proyectoE(id);  
                });
                $("#tabla_ProyectoE").DataTable();
            });
        },
        
        agregar1: function () {
            $.get("Academicos_Produccion", {
                ACCION: "AGREGARMDIDACTICO"
            }).then(function () {
                $("#tabla_MDidacticos").html(arguments[0]);
                $("#cancelar").unbind('click').bind('click', function () {
                    Academicos_Produccion.cargarModulo();
                });
                Academicos_Produccion.guardarMDidactico();
            });
        },
        guardarMDidactico:function (){
            $('form[name="fileMDidactico"]').ajaxForm(function() { 
                    alerta_confirmacion();
                    Academicos_Produccion.cargarModulo();
            });
        },
        agregar2: function () {
            $.get("Academicos_Produccion", {
                ACCION: "AGREGARMPRACTICA"
            }).then(function () {
                $("#tabla_MPracticas").html(arguments[0]);
                $("#cancelar").unbind('click').bind('click', function () {
                    Academicos_Produccion.cargartabMPractica();
                });
                Academicos_Produccion.guardadatosMPractica();
            });
        },
        guardadatosMPractica:function (){
            $('form[name="fileMPractica"]').ajaxForm(function() { 
                    alerta_confirmacion();
                    Academicos_Produccion.cargartabMPractica();
            });
        },
        cargartabMPractica: function () {
            $.get("Academicos_Produccion", {
                ACCION: "Guardar_MPractica",
                Opcion: 2
            }).then(function () {
                $("#tabla_MPracticas").html(arguments[0]);
                $("#agregarMPractica").unbind('click').bind('click', function () {
                    Academicos_Produccion.agregar2();
                });
                $(".eliminar_manualesP").unbind('click').bind('click', function () {
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
                        Academicos_Produccion.eliminar_manualesP(id);  
                    });
                });
                $(".modificar_manualesP").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Produccion.modificar_manualesP(id);  
                });
                $("#tabla_MPractica").DataTable();
            });
        },
        agregar3: function () {
            $.get("Academicos_Produccion", {
                ACCION: "AGREGARLIBROEE"
            }).then(function () {
                $("#tabla_LibrosEE").html(arguments[0]);
                $("#cancelar").unbind('click').bind('click', function () {
                    Academicos_Produccion.cargartablibroee();
                });
                Academicos_Produccion.guardadatoslibroee();
            });
        },
        guardadatoslibroee:function (){
            $('form[name="filelibroee"]').ajaxForm(function() { 
                    alerta_confirmacion();
                    Academicos_Produccion.cargartablibroee();
            });
        },
        cargartablibroee: function () {
            $.get("Academicos_Produccion", {
                ACCION: 'Guardar_LibroEE',
                Opcion: 2
            }).then(function () {
                $("#tabla_LibrosEE").html(arguments[0]);
                $("#agregarLibroEE").unbind('click').bind('click', function () {
                    Academicos_Produccion.agregar3();
                });
                $(".eliminar_libroEE").unbind('click').bind('click', function () {
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
                        Academicos_Produccion.eliminar_libroEE(id);  
                    });  
                });
                $(".modificar_libroEE").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Produccion.modificar_libroEE(id);  
                });
                $("#tabla_LibroEE").DataTable();
                
            });
        },
        agregar4: function () {
            $.get("Academicos_Produccion", {
                ACCION: "AGREGARPROYECTOE"
            }).then(function () {
                $("#tabla_ProyectosE").html(arguments[0]);
                $("#cancelar").unbind('click').bind('click', function () {
                    Academicos_Produccion.cargartabProyectoE();
                });
                Academicos_Produccion.guardadatosProyectoE();
            });
        },
        guardadatosProyectoE:function (){
            $('form[name="fileProyectoE"]').ajaxForm(function() { 
                    alerta_confirmacion();
                    Academicos_Produccion.cargartabProyectoE();
            });
        },
        cargartabProyectoE: function () {
            $.get("Academicos_Produccion", {
                ACCION: 'Guardar_ProyectoE',
                Opcion:2
            }).then(function () {
                $("#tabla_ProyectosE").html(arguments[0]);
                $("#agregarProyectoE").unbind('click').bind('click', function () {
                    Academicos_Produccion.agregar4();
                });
                $(".eliminar_proyectoE").unbind('click').bind('click', function () {
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
                        Academicos_Produccion.eliminar_proyectoE(id);  
                    });
                });
                $(".modificar_proyectoE").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Produccion.modificar_proyectoE(id);  
                });
                $("#tabla_ProyectoE").DataTable();
                
            });
        }
    };
}());

function validacion_datosMaterial() {
    var text = "";
    if ($.trim($("#academicos").val()).length === 0) {
        text = text + "Académico\n";
    }
    if ($.trim($("#periodo").val()).length === 0) {
        text = text + "Periodo\n";
    }
    if ($.trim($('input:radio[name=notas]:checked').val()).length === 0) {
        text = text + "Notas de clase\n";
    }
    
    if ($.trim($('input:radio[name=acetatos]:checked').val()).length === 0) {
        text = text + "Acetatos\n";
    }
    if ($.trim($('input:radio[name=videos]:checked').val()).length === 0) {
        text = text + "Videos\n";
    }
    if ($.trim($('input:radio[name=programas]:checked').val()).length === 0) {
        text = text + "Programas\n";
    }
    if ($.trim($('input:radio[name=prototipos]:checked').val()).length === 0) {
        text = text + "Prototipos\n";
    }
    if ($.trim($("#archivo").val()).length === 0) {
        text = text + "Acta academica\n";
    }
    
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);    
        return false;
    } else {
        return true;
    }
}
function validacion_datosMPractica() {
    var text = "";
    if ($.trim($("#academicos").val()).length === 0) {
        text = text + "Académico\n";
    }
    if ($.trim($("#periodo").val()).length === 0) {
        text = text + "Periodo\n";
    }
    if ($.trim($("#nombre").val()).length === 0) {
        text = text + "Nombre del manual de practica\n";
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
function validacion_datoslibro() {
    var text = "";
    if ($.trim($("#academicos").val()).length === 0) {
        text = text + "Académico\n";
    }
    if ($.trim($("#periodo").val()).length === 0) {
        text = text + "Periodo\n";
    }
    if ($.trim($("#nombre").val()).length === 0) {
        text = text + "Nombre del libro para una EE\n";
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
function validacion_datosProyectoE() {
    var text = "";
    if ($.trim($("#academicos").val()).length === 0) {
        text = text + "Acad\u00e9mico\n";
    }
    if ($.trim($("#periodo").val()).length === 0) {
        text = text + "Periodo\n";
    }
    if ($.trim($("#descripcion").val()).length === 0) {
        text = text + "Descripci\u00f3n sobre el proyecto educativo innovador\n";
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