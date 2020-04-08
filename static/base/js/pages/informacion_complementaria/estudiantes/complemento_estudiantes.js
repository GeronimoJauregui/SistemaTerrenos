
var EstudianteComplementos = (function () {
    return{
        vistaprinci: function () {
            $.get("ComplementoEstudiantes", {
                ACCION: "Vista_Princi"
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#agregapro").on('click', function () {
                    EstudianteComplementos.agregar("Agrega_Pro");
                });
                $("#muestrapro").on('click', function () {
                    EstudianteComplementos.mostrar("Tabla_Pro");
                });
                $("#agregarubros").on('click', function () {
                    EstudianteComplementos.agregar("Agrega_Ru");
                });
                $("#muestrarubros").on('click', function () {
                    EstudianteComplementos.mostrar("Tabla_Ru");
                });
                $("#agregasalon").on('click', function () {
                    EstudianteComplementos.agregar("Agrega_Sa");
                });
                $("#muestrasalon").on('click', function () {
                    EstudianteComplementos.mostrar("Tabla_Sa");
                });
                $("#agregaarea").on('click', function () {
                    EstudianteComplementos.agregar("Agrega_Area");
                });
                $("#muestraareas").on('click', function () {
                    EstudianteComplementos.mostrar("Tabla_Area");
                });
                $("#agregaexpe").on('click', function () {
                    EstudianteComplementos.agregar("Agrega_Exp");
                });
                $("#muestraexpe").on('click', function () {
                    EstudianteComplementos.mostrar("Tabla_Exp");
                });
                $("#agregamov").on('click', function () {
                    EstudianteComplementos.agregar("Agrega_Mov");
                });
                $("#muestramov").on('click', function () {
                    EstudianteComplementos.mostrar("Tabla_Mov");
                });
                $("#agregacali").on('click', function () {
                    EstudianteComplementos.agregar("Agrega_cali");
                });
                $("#muestracali").on('click', function () {
                    EstudianteComplementos.mostrar("Tabla_Cali");
                });
                $("#agregatipoe").on('click', function () {
                    EstudianteComplementos.agregar("Agrega_Tipoe");
                });
                $("#muestratipoe").on('click', function () {
                    EstudianteComplementos.mostrar("Tabla_tipoe");
                });
                $("#agregaevento").on('click',function(){
                    EstudianteComplementos.agregar("Agrega_Eve");
                });
                $("#muestraevento").on('click',function(){
                    EstudianteComplementos.mostrar("Tabla_Eve");
                });
            });
        },
        agregar: function (accion) {
            $.get("ComplementoEstudiantes", {
                ACCION: accion
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#cancela").on('click',function(){
                   EstudianteComplementos.vistaprinci(); 
                });
                $("#enviapro").on('click', function () {
                    if (validacion_pro()) {
                        var programa = {
                            "nombre": $("#nombrepro").val(),
                            "creditos": $("#creditospro").val(),
                            "clv_Programa": $("#clave").val(),
                            "facultad": $("#facultad").val(),
                            "campus": $("#campus").val(),
                            "nivel": $("#nivel").val(),
                            "creditos_MinXP": $("#creditosmin").val(),
                            "cretiditos_MaxXP": $("#creditosmax").val(),
                            "area": $("#area").val(),
                        }
                        EstudianteComplementos.guardar(programa, "Guarda_Pro");
                    }

                });
                $("#enviaru").on('click', function () {
                    if (validacion_ru()) {
                        var rubro = {
                            "nombre": $("#rubro").val()
                        }
                        EstudianteComplementos.guardar(rubro, "Guarda_Ru");
                    }
                });
                $("#enviasa").on('click', function () {
                    if (validacion_sa()) {
                        var salones = {
                            "nomSalon": $("#clavesa").val(),
                            "edificio": $("#edificio").val(),
                        }

                        EstudianteComplementos.guardar(salones, "Guarda_Sa");
                    }
                });
                $("#enviaarea").on('click', function () {
                    if (validacion_area()) {
                        var area = {
                            "nombre": $("#area").val(),
                        }
                        EstudianteComplementos.guardar(area, "Guardar_Area");
                    }
                });
                $("#enviaexpe").on('click', function () {
                    if (validacion_expe()) {
                        var experiencia = {
                            "nombre": $("#nombreexp").val(),
                            "creditos": $("#creditosexp").val(),
                            "id_area": $("#areaexp").val(),
                            "horas": $("#horas").val(),
                            //"id_IES": $("#ies").val(),
                        }
                        EstudianteComplementos.guardar(experiencia, "Guarda_Exp");
                    }
                });
                $("#enviamov").on('click', function () {
                    if (validacion_mov()) {
                        var movilidad = {
                            "tipomovi": $("input[name='optionsRadios2']:checked").val(),
                            "pais_destino": $("#pdestino").val(),
                            "entidad_destino": $("#edestino").val(),
                            "escuela_destino": $("#esdestino").val(),
                            "tiempo_permanencia": $("#perma").val(),
                        }
                        EstudianteComplementos.guardar(movilidad, "Guarda_Mov");
                    }
                });
                $("#enviacali").on('click', function () {
                    if (validacion_cali()) {
                        var califi = {
                            "tipo": $("#nombrecali").val()
                        }
                        EstudianteComplementos.guardar(califi, "Guarda_Cali");
                    }
                });
                $("#enviatipoe").on('click', function () {
                    if (validacion_tipoe()) {
                        var tipoe = {
                            "nomEvento": $("#nombretipoe").val()
                        }
                        EstudianteComplementos.guardar(tipoe, "Guardar_tipoe");
                    }
                });
                $("#enviaevento").on('click',function(){
                    if(validacion_eve()){
                        var evento ={
                            "nombre":$("#nombreevento").val(),
                            "clv":$("#tipoeve").val()
                        }
                        EstudianteComplementos.guardar(evento,"Guardar_Eve");
                    }
                });
            });
        },
        guardar: function (objeto, accion) {
            $.get("ComplementoEstudiantes", {
                ACCION: accion,
                OBJETO: JSON.stringify(objeto)
            }).then(function () {
                swal("Hecho!", "Datos guardados correctamente", "success"); 
                EstudianteComplementos.vistaprinci();
            });
        },
        mostrar: function (accion) {
            $.get("ComplementoEstudiantes", {
                ACCION: accion
            }).then(function () {
                $("#content").html(arguments[0]);
                $(".infopro").on('click', function () {
                    id = $(this).parents("tr").find("td").eq(5).html();
                    EstudianteComplementos.infopro(id);
                });
                $(".eliminarpro").on('click', function () {
                    id = $(this).parents("tr").find("td").eq(5).html();
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
                        EstudianteComplementos.eliminarpro(id);
                    });
                    
                });
                $(".eliminarru").on('click', function () {
                    id = $(this).parents("tr").find("td").eq(0).html();
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
                        EstudianteComplementos.eliminarru(id);
                    });
                    
                });
                $(".eliminarsa").on('click', function () {
                    id = $(this).parents("tr").find("td").eq(3).html();
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
                        EstudianteComplementos.eliminarsa(id);
                    });
                    
                });
                $(".infomov").on('click', function () {
                    id = $(this).parents("tr").find("td").eq(0).html();
                    
                    EstudianteComplementos.infomov(id);
                });
                $(".borramov").on('click', function () {
                    id = $(this).parents("tr").find("td").eq(0).html();
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
                        EstudianteComplementos.eliminarmov(id);
                    });
                    
                });
                $(".borrararea").on('click', function () {
                    id = $(this).parents("tr").find("td").eq(0).html();
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
                        EstudianteComplementos.eliminararea(id);
                    });
                    
                });
                $(".eliminarexp").on('click', function () {
                    id = $(this).parents("tr").find("td").eq(0).html();
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
                        EstudianteComplementos.eliminarexp(id);
                    });
                    
                });
                $(".eliminacali").on('click', function () {
                    id = $(this).parents("tr").find("td").eq(0).html();
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
                        EstudianteComplementos.eliminarcali(id);
                    });
                    
                });
                $(".eliminatipoe").on('click', function () {
                    id = $(this).parents("tr").find("td").eq(0).html();
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
                        EstudianteComplementos.eliminartipoe(id);
                    });
                    
                });
                $(".eliminaevento").on('click',function(){
                     id = $(this).parents("tr").find("td").eq(0).html();
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
                        EstudianteComplementos.eliminaevento(id);
                    });
                     
                });
                $("#tbcomp").DataTable({
                    "scrollX": true
                });
            });
        },
        infopro: function (id) {
            $.get("ComplementoEstudiantes", {
                ACCION: "Info_Pro",
                ID: id
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#regresatabla").on('click', function () {
                    EstudianteComplementos.mostrar("Tabla_Pro");
                });
                $("#regresaprinci").on('click', function () {
                    EstudianteComplementos.vistaprinci();
                });
            });
        },
        infomov: function (id) {
            $.get("ComplementoEstudiantes", {
                ACCION: "Info_Mov",
                ID: id
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#regresatabla").on('click', function () {
                    EstudianteComplementos.mostrar("Tabla_Mov");
                });
                $("#regresaprinci").on('click', function () {
                    EstudianteComplementos.vistaprinci();
                });
            });
        },
        eliminarpro: function (id) {
            $.get("ComplementoEstudiantes", {
                ACCION: "Elimina_Pro",
                ID: id
            }).then(function () {
                showSuccessMessage();
                EstudianteComplementos.mostrar("Tabla_Pro");
            });
        },
        eliminarru: function (id) {
            $.get("ComplementoEstudiantes", {
                ACCION: "Elimina_Ru",
                ID: id
            }).then(function () {
                showSuccessMessage();
                EstudianteComplementos.mostrar("Tabla_Ru");
            });
        },
        eliminarsa: function (id) {
            $.get("ComplementoEstudiantes", {
                ACCION: "Elimina_Sa",
                ID: id
            }).then(function () {
                showSuccessMessage();
                EstudianteComplementos.mostrar("Tabla_Sa");
            });
        },
        eliminarmov: function (id) {
            $.get("ComplementoEstudiantes", {
                ACCION: "Elimina_Mov",
                ID: id
            }).then(function () {
                showSuccessMessage();
                EstudianteComplementos.mostrar("Tabla_Mov");
            });
        },
        eliminararea: function (di) {
            $.get("ComplementoEstudiantes", {
                ACCION: "Elimina_Area",
                ID: id
            }).then(function () {
                showSuccessMessage();
                EstudianteComplementos.mostrar("Tabla_Area");
            });
        },
        eliminarexp: function (id) {
            $.get("ComplementoEstudiantes", {
                ACCION: "Elimina_Exp",
                ID: id
            }).then(function () {
                showSuccessMessage();
                EstudianteComplementos.mostrar("Tabla_Exp");
            });
        },
        eliminarcali: function (id) {
            $.get("ComplementoEstudiantes", {
                ACCION: "Elimina_Cali",
                ID: id
            }).then(function () {
                showSuccessMessage();
                EstudianteComplementos.mostrar("Tabla_Cali");
            });
        },
        eliminartipoe: function (id) {
            $.get("ComplementoEstudiantes", {
                ACCION: "Elimina_Tipoe",
                ID: id
            }).then(function () {
                showSuccessMessage();
                EstudianteComplementos.mostrar("Tabla_tipoe");
            });
        },
        eliminaevento: function(id){
            $.get("ComplementoEstudiantes",{
                ACCION: "Elimina_Eve",
                ID: id
            }).then(function(){
                showSuccessMessage();
                EstudianteComplementos.mostrar("Tabla_Eve");
            });
        },
    }
}
());
function validacion_pro() {
    var text = "";
    if ($.trim($("#nombrepro").val()).length === 0) {
        text = text + "Nombre del programa d\n";
    }
    if ($.trim($("#creditospro").val()).length === 0) {
        text = text + " Creditos\n";
    }
    if ($.trim($("#clave").val()).length === 0) {
        text = text + "Clave del programa\n";
    }
    if ($.trim($("#facultad").val()).length === 0) {
        text = text + "Facultad\n";
    }
    if ($.trim($("#campus").val()).length === 0) {
        text = text + "Campus\n";
    }
    if ($.trim($("#nivel").val()).length === 0) {
        text = text + "Nivel\n";
    }
    if ($.trim($("#creditosmin").val()).length === 0) {
        text = text + "Creditos min por periodo\n";
    }
    if ($.trim($("#creditosmax").val()).length === 0) {
        text = text + "Creditos max por periodo\n";
    }
    if ($.trim($("#creditosmax").val()).length === 0) {
        text = text + "Creditos min por periodo\n";
    }
    if ($.trim($("#area").val()).length === 0) {
        text = text + "Area\n";
    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);
        return false;
    } else {
        return true;
    }
}
function validacion_ru() {
    var text = "";
    if ($.trim($("#rubro").val()).length === 0) {
        text = text + "Rubro d\n";
    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);
        return false;
    } else {
        return true;
    }
}
function validacion_sa() {
    var text = "";
    if ($.trim($("#clavesa").val()).length === 0) {
        text = text + "Clave Salon/Nombre Del Laboratorio\n";
    }
    if ($.trim($("#edificio").val()).length === 0) {
        text = text + " Edificio\n";
    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);
        return false;
    } else {
        return true;
    }
}
function validacion_mov() {
    var text = "";
    if ($.trim($("#pdestino").val()).length === 0) {
        text = text + "Pais Destino d\n";
    }
    if ($.trim($("#edestino").val()).length === 0) {
        text = text + "Entidad Destino d\n";
    }
    if ($.trim($("#esdestino").val()).length === 0) {
        text = text + "Escuela Destino d\n";
    }
    if ($.trim($("#perma").val()).length === 0) {
        text = text + "Tiempo De Permanencia d\n";
    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);
        return false;
    } else {
        return true;
    }
}
function validacion_area() {
    var text = "";
    if ($.trim($("#area").val()).length === 0) {
        text = text + "Nombre Del Area d\n";
    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);
        return false;
    } else {
        return true;
    }
}
function validacion_expe() {
    var text = "";
    if ($.trim($("#nombreexp").val()).length === 0) {
        text = text + "Nombre Experiencia Educativa d\n";
    }
    if ($.trim($("#creditosexp").val()).length === 0) {
        text = text + "Creditos d\n";
    }
    if ($.trim($("#horas").val()).length === 0) {
        text = text + "Horas d\n";
    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);
        return false;
    } else {
        return true;
    }
}
function validacion_cali() {
    var text = "";
    if ($.trim($("#nombrecali").val()).length === 0) {
        text = text + "Nombre de tipo de calificacion d\n";
    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);
        return false;
    } else {
        return true;
    }
}
function validacion_tipoe() {
    var text = "";
    if ($.trim($("#nombretipoe").val()).length === 0) {
        text = text + "Nombre del Tipo de evento\n";
    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);
        return false;
    } else {
        return true;
    }
}
function validacion_eve(){
    var text = "";
    if ($.trim($("#nombreevento").val()).length === 0) {
        text = text + "Nombre Del Evento\n";
    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);
        return false;
    } else {
        return true;
    }
}
