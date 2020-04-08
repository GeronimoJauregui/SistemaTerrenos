var AcademicosComp = (function () {
    return{
        vistaopciones: function () {
            $.get("ComplementoAcademicos",{
                ACCION: "vistaprincipal"
            }).then(function(){
                $("#content").html(arguments[0]);
                $("#agregar_personal").on('click',function(){
                    AcademicosComp.Agregar("a_personal");
                }),
                $("#mostrar_personal").on('click',function(){
                    AcademicosComp.Mostrar("m_personal");
                }),
                $("#agregar_cargos").on('click',function(){
                     AcademicosComp.Agregar("a_cargos");
                }),
                $("#mostrar_cargos").on('click',function(){
                    AcademicosComp.Mostrar("m_cargos");
                }),
                $("#agregar_lab").on('click',function(){
                     AcademicosComp.Agregar("a_lab");
                }),
                $("#mostrar_lab").on('click',function(){
                    AcademicosComp.Mostrar("m_lab");
                }),
                $("#agregar_periodo").on('click',function(){
                     AcademicosComp.Agregar("a_periodo");
                }),
                $("#mostrar_periodo").on('click',function(){
                    AcademicosComp.Mostrar("m_periodo");
                }),
                $("#agregar_titulos").on('click',function(){
                     AcademicosComp.Agregar("a_titulos");
                }),
                $("#mostrar_titulos").on('click',function(){
                    AcademicosComp.Mostrar("m_titulos");
                }),
                $("#agregar_tipoTitulo").on('click',function(){
                    AcademicosComp.Agregar("a_tipo_titulos");
                }),
                $("#mostrar_tipoTitulo").on('click',function(){
                    AcademicosComp.Mostrar("m_tipo_titulos");
                }),
                $("#agregar_distincion").on('click',function(){
                    AcademicosComp.Agregar("a_distincion");
                }),
                $("#mostrar_distincion").on('click',function(){
                    AcademicosComp.Mostrar("m_distincion");
                }),
                $("#agregar_certificacion").on('click',function(){
                    AcademicosComp.Agregar("a_certificacion");
                }),
                $("#mostrar_certificacion").on('click',function(){
                    AcademicosComp.Mostrar("m_certificacion");
                }),
                $("#agregar_ie").on('click',function(){
                    AcademicosComp.Agregar("a_ie");
                }),
                $("#mostrar_ie").on('click',function(){
                    AcademicosComp.Mostrar("m_ie");
                });
                $("#agregaraca").on('click',function(){
                    AcademicosComp.Agregar("Agrega_Aca");
                });
                $("#mostraraca").on('click',function(){
                    AcademicosComp.Mostrar("m_aca");
                });
                $("#agregarprograma").on('click',function(){
                    AcademicosComp.Agregar("a_progra");
                });
                $("#mostrarprograma").on('click',function(){
                    AcademicosComp.Mostrar("m_pro");
                });
                $("#agregarcontra").on('click',function(){
                    AcademicosComp.Agregar("a_contra");
                });
                $("#mostrarcontra").on('click',function(){
                    AcademicosComp.Mostrar("m_contra");
                });
                $("#agregarmCurricular").on('click',function(){
                    AcademicosComp.Agregar("a_mpcurri");
                });
                $("#mostrarmCurricular").on('click',function(){
                    AcademicosComp.Mostrar("m_mpcurri");
                });
            });
        },
        Agregar: function(tipo){
            $.get("ComplementoAcademicos",{
                ACCION: tipo
            }).then(function(){
                $("#content").html(arguments[0]);
                $("#cancelarEdicion").on('click',function(){
                   AcademicosComp.vistaopciones(); 
                });
                $("#insertartitulo").on('click',function(){
                    if($.trim($("#tipotitulo").val()).length > 0){
                        var insertar = {
                            nombre : $("#tipotitulo").val()
                        };
                        AcademicosComp.insertarGenerico(insertar,"insertart");
                    }
                }),
                $("#insertarperiodo").on('click',function(){
                    if($.trim($("#tipoperiodo").val()).length > 0){
                        if($.trim($("#fechainicio").val()).length > 0){
                            if($.trim($("#fechafin").val()).length > 0){
                                var insertar = {
                                    nombre : $("#tipoperiodo").val(),
                                    fechainit : $("#fechainicio").val(),
                                    fechaend : $("#fechafin").val()
                                };   
                            AcademicosComp.insertarGenerico(insertar,"insertarp");
                            }
                        }
                    }
                });
                $("#insertarpersonal").on('click',function(){
                    if($.trim($("#tipopersonal").val()).length > 0){
                        var insertar = {
                            nombre : $("#tipopersonal").val()
                        };
                        AcademicosComp.insertarGenerico(insertar,"insertarperson");
                }
                });
                $("#insertarlab").on('click',function(){
                    if($.trim($("#tipolab").val()).length > 0){
                        var insertar = {
                            nombre : $("#tipolab").val()
                        };
                        AcademicosComp.insertarGenerico(insertar,"insertarlab");
                    }
                });
                $("#insertarpuesto").on('click',function(){
                    if($.trim($("#tipopuesto").val()).length > 0){
                        var insertar = {
                            nombre : $("#tipopuesto").val()
                        };
                        AcademicosComp.insertarGenerico(insertar,"insertarpues");
                    }
                });
                $("#insertartipoie").on('click',function(){
                    if($.trim($("#tipoie").val()).length > 0){
                        var insertar ={
                            nombre: $("#tipoie").val(),
                            tipo : $("#booltipo").val()
                        };
                        AcademicosComp.insertarGenerico(insertar,"insertar_ie");
                }
                });
                $("#insertartipocertificacion").on('click',function(){
                    if($.trim($("#tipocertificacion").val()).length > 0){
                        var insertar ={
                            nombre: $("#tipocertificacion").val()
                        };
                        AcademicosComp.insertarGenerico(insertar,"insertar_certificacion");
                    }
                });
                $("#insertardistincion").on('click',function(){
                    if($.trim($("#tipodistincion").val()).length > 0){
                        var insertar ={
                            nombre: $("#tipodistincion").val()
                        };
                        AcademicosComp.insertarGenerico(insertar,"insertar_distincion");
                    }
                });
                $("#insertartipotitulo").on('click',function(){
                    if($.trim($("#tipotitulo").val()).length > 0){
                        var insertar ={
                            nombre: $("#tipotitulo").val()
                        };
                        AcademicosComp.insertarGenerico(insertar,"insertar_tipo_titulo");
                    }
                });
                $("#agregaaca").on('click',function(){
                    if(validacion_aca()){
                        var insertar = {
                            "nombre":$("#nombreaca").val()
                        };
                    AcademicosComp.insertarGenerico(insertar,"insertar_academia");
                }
                });
                $("#agregaprograma").on('click',function(){
                    if(validacion_progra()){
                        var insertar ={
                            "nombre":$("#nombreprograma").val()
                        };
                        AcademicosComp.insertarGenerico(insertar,"insertar_programa");
                    }
                });
                $("#agregacontra").on('click',function(){
                    if(validacion_contra()){
                        var insertar = {
                            "nombre":$("#nombrecontra").val()
                        };
                        AcademicosComp.insertarGenerico(insertar,"insertar_contrataciones");
                    }
                });
                $("#programa_educativo").on('change',function(){
                    idCarrera = $("#programa_educativo").val();
                    AcademicosComp.ActualizarTablaInscripcion(idCarrera);
                });
                $(".inscribirMat").on('click',function(){
                   idMat = $(this).parents("tr").find("td").eq(0).html();
                   idCarrerados = $("#programa_educativo").val();
                   AcademicosComp.InscribirMateria(idCarrerados,idMat);
                });
                
            });
        },
        Mostrar: function(mostrar){
            $.get("ComplementoAcademicos",{
                ACCION: mostrar
            }).then(function(){
                $("#content").html(arguments[0]);
                 $(".deletegrado").on('click',function(){
                    borrar = $(this).parents("tr").find("td").eq(0).html();
                    AcademicosComp.borrar(borrar,"delategrado",mostrar);
                });
                $(".deletelab").on('click',function(){
                    borrar = $(this).parents("tr").find("td").eq(0).html();
                    AcademicosComp.borrar(borrar,"deletelab",mostrar);
                });
                $(".deletepersonal").on('click',function(){
                    borrar = $(this).parents("tr").find("td").eq(0).html();
                    AcademicosComp.borrar(borrar,"deletepersonal",mostrar);
                });
                $(".deletepuesto").on('click',function(){
                    borrar = $(this).parents("tr").find("td").eq(0).html();
                    AcademicosComp.borrar(borrar,"deletepuesto",mostrar);
                });
                $(".deletenom_titulo").on('click',function(){
                    borrar = $(this).parents("tr").find("td").eq(0).html();
                    AcademicosComp.borrar(borrar,"deletenom_titulo",mostrar);
                });
                $(".deletecertificacion").on('click',function(){
                    borrar = $(this).parents("tr").find("td").eq(0).html();
                    AcademicosComp.borrar(borrar,"deletecertificacion",mostrar);
                });
                $(".deletedistincion").on('click',function(){
                    borrar = $(this).parents("tr").find("td").eq(0).html();
                    AcademicosComp.borrar(borrar,"deletedistincion",mostrar);
                });
                $(".deleteIE").on('click',function(){
                    borrar = $(this).parents("tr").find("td").eq(0).html();
                    AcademicosComp.borrar(borrar,"deleteIE",mostrar);
                });
                $(".deleteacademias").on('click',function(){
                    borrar = $(this).parents("tr").find("td").eq(0).html();
                    AcademicosComp.borrar(borrar,"deleteACA");
                });
                $(".deleteprogramas").on('click',function(){
                    borrar = $(this).parents("tr").find("td").eq(0).html();
                    AcademicosComp.borrar(borrar,"deletePRO");
                });
                $(".deletecontra").on('click',function(){
                    borrar = $(this).parents("tr").find("td").eq(0).html();
                    AcademicosComp.borrar(borrar,"deleteCONTRA");
                });
                $("#carrera").on('change',function(){
                    idCarrera = $("#carrera").val();
                    AcademicosComp.traerTablaMaterias(idCarrera);
                });
            });
        },
        insertarGenerico: function(obj,accion){
            $.get("ComplementoAcademicos",{
                ACCION: accion,
                ENVIAR: JSON.stringify(obj)
            }).then(function(){
                AcademicosComp.vistaopciones();
            });
        },
         borrar: function(borrar,tipo,mostrar){
            $.get("ComplementoAcademicos",{
                ACCION: tipo,
                ENVIAR: borrar
            }).then(function(){
                AcademicosComp.Mostrar(mostrar);
            });
        },
        traerTablaMaterias: function(idCarrera){
            $.get("ComplementoAcademicos",{
                ACCION: "TablaEE",
                ENVIAR: idCarrera
            }).then(function(){
                $("#content").html(arguments[0]);
                $("#carrera").on('change',function(){
                    idCarrerados = $("#carrera").val();
                    AcademicosComp.traerTablaMaterias(idCarrerados);
                });
                $(".eliminarMat").on('click',function(){
                   idMat = $(this).parents("tr").find("td").eq(0).html();
                   AcademicosComp.EliminarMatCarrera(idMat,idCarrera);
                });
            });
        },
        ActualizarTablaInscripcion: function(idActualizar){
            $.get("ComplementoAcademicos",{
                ACCION: "ActualizaTbInscrip",
                ENVIAR: idActualizar
            }).then(function(){
                $("#content").html(arguments[0]);
                $("#cancelarEdicion").on('click',function(){
                   AcademicosComp.vistaopciones(); 
                });
                $("#programa_educativo").on('change',function(){
                    idCarrerados = $("#programa_educativo").val();
                    AcademicosComp.ActualizarTablaInscripcion(idCarrerados);
                });
                $(".inscribirMat").on('click',function(){
                   idMat = $(this).parents("tr").find("td").eq(0).html();
                   idCarrerados = $("#programa_educativo").val();
                   AcademicosComp.InscribirMateria(idCarrerados,idMat);
                });
            });
        },
        InscribirMateria: function(carrera,materia){
            $.get("ComplementoAcademicos",{
                ACCION: "InscribirMat",
                MAT: materia,
                CAR: carrera
            }).then(function (){
                AcademicosComp.ActualizarTablaInscripcion(carrera);
            });
        },
        EliminarMatCarrera: function(idMat,carrera){
            $.get("ComplementoAcademicos",{
                ACCION: "EliminarMat",
                MAT: idMat,
                CAR: carrera
            }).then(function(){
                AcademicosComp.traerTablaMaterias(carrera);
            });
        }
    };
}());
function validacion_aca() {
    var text = "";
    if ($.trim($("#nombreaca").val()).length === 0) {
        text = text + "Nombre de Academia d\n";
    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);
        return false;
    } else {
        return true;
    }
}
function validacion_progra() {
    var text = "";
    if ($.trim($("#nombreprograma").val()).length === 0) {
        text = text + "Nombre del Programa\n";
    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);
        return false;
    } else {
        return true;
    }
}
function validacion_contra() {
    var text = "";
    if ($.trim($("#nombrecontra").val()).length === 0) {
        text = text + "Nombre de Contratacion\n";
    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);
        return false;
    } else {
        return true;
    }
}


