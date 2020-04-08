var Academicos_Tutoria = (function () {

    return {
        cargarModulo: function () {
            $.get("Academicos_Tutoria", {
                ACCION: "MODULO"
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#agregar").unbind('click').bind('click', function () {
                    Academicos_Tutoria.agregar();
                });
                $("#academicos").on('change',function(){
                    var id = $("#academicos").val();
                    Academicos_Tutoria.cargarModuloCambio(id);
                });
                $(".eliminar").unbind('click').bind('click', function () {
                    idd = $(this).parents("tr").attr("id");
                    option = $(this).parents("tr").find("td").eq(2).html();
                    if(option==="Interno"){
                        option = '0';
                    }else{
                        option = '1';
                    };
                    //alert(id+"/"+option);
                    Academicos_Tutoria.eliminar(idd,option);
                });
                $(".modificar").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    option = $(this).parents("tr").find("td").eq(2).html();
                    //alert(id+option);
                    if(option==="Interno"){
                        option = '0';
                    }else{
                        option = '1';
                    };
                    Academicos_Tutoria.modificar(id,option);
                });
                $("#tabla_tutoria").DataTable({
                    "scrollX": true});
            });
        },
        cargarModuloCambio: function (id) {
            $.get("Academicos_Tutoria", {
                ACCION: "MODULOCAMBIO",
                ID: id
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#agregar").unbind('click').bind('click', function () {
                    Academicos_Tutoria.agregar();
                });
                $("#academicos").on('change',function(){
                    var id = $("#academicos").val();
                    Academicos_Tutoria.cargarModuloCambio(id);
                });
                $(".eliminar").unbind('click').bind('click', function () {
                    idd = $(this).parents("tr").attr("id");
                    option = $(this).parents("tr").find("td").eq(2).html();
                    if(option==="Interno"){
                        option = '0';
                    }else{
                        option = '1';
                    };
                    //alert(id+"/"+option);
                    Academicos_Tutoria.eliminar(idd,option);
                });
                $(".modificar").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    option = $(this).parents("tr").find("td").eq(2).html();
                    //alert(id+option);
                    if(option==="Interno"){
                        option = '0';
                    }else{
                        option = '1';
                    };
                    Academicos_Tutoria.modificar(id,option);
                });
                $("#tabla_tutoria").DataTable({
                    "scrollX": true});
            });
        },
        agregar: function () {
            $.get("Academicos_Tutoria", {
                ACCION: "AGREGAR"
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#nombre").hide();
                $("#matricula").hide();
                
                $("input[name=tipo]").change(function () {	 
			var t =$(this).val();
                        if(t ==='0'){
                            $("#nombre").hide();
                            $("#matricula").hide();
                            $("#A_interno").show();
                        }else{
                            $("#nombre").show();
                            $("#matricula").show();
                            $("#A_interno").hide();
                        }
                });
                $("#guardar").unbind('click').bind('click', function () {
                    var t = $('input:radio[name=tipo]:checked').val();
                    if(t ==='1'){
                        if(validacion_E()){
                            var TE = {
                                "id_academico": $("#academico").val(),
                                "nombre": $("#nombre_A").val(),
                                "matricula": $("#matricula_A").val()
                            };
                            Academicos_Tutoria.guardar(TE,1);
                        }
                    }else{
                        var Tutor = {
                            "idAcademicos": $("#academico").val(),
                            "idAlumno": $("#alumno").val()
                        };
                        Academicos_Tutoria.guardar(Tutor,0);
                    }
                    
                });
            });
        },
        guardar: function (Datos,opcion) {
            $.get("Academicos_Tutoria", {
                ACCION: "GUARDAR",
                DATOS: JSON.stringify(Datos),
                OPCION: opcion
            }).then(function () {
                swal("Guardado exitosamente!", "Click en el bot\u00F3n!", "success");
                Academicos_Tutoria.cargarModulo();
            });
        },
        modificar: function (id, option) {
            $.get("Academicos_Tutoria", {
                ACCION: "MODIFICAR",
                ID: id,
                OPTION: option
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#guardar").unbind('click').bind('click', function () {
                    var t = $('input:radio[name=tipo]:checked').val();
                    if(t ==='1'){
                        if(validacion_E()){
                            var TE = {
                                "idTutorados_Externos" : $("#id").val(),
                                "id_academico": $("#academico").val(),
                                "nombre": $("#nombre_A").val(),
                                "matricula": $("#matricula_A").val()
                            };
                            Academicos_Tutoria.guardar_modificado(TE,1);
                        }
                    }else{
                        var Tutor = {
                            "idTutores": $("#id").val(),
                            "idAcademicos": $("#academico").val(),
                            "idAlumno": $("#alumno").val()
                        };
                        Academicos_Tutoria.guardar_modificado(Tutor,0);
                    }
                    
                });
            });
        },
        guardar_modificado: function (Datos,opcion) {
            alert(opcion);
            $.get("Academicos_Tutoria", {
                ACCION: "Actualizar",
                DATOS: JSON.stringify(Datos),
                OPCION: opcion
            }).then(function () {
                swal("Modificado exitosamente!", "Click en el bot\u00F3n!", "success");
                Academicos_Tutoria.cargarModulo();
            });
        },
        eliminar: function (id,opcion) {
            $.get("Academicos_Tutoria", {
                ACCION: "ELIMINAR",
                ID: id,
                OPCION: opcion
            }).then(function () {
                swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                Academicos_Tutoria.cargarModulo();
            });
        }
    };
}());

function validacion_E() {
    var text = "";

    if ($.trim($("#nombre_A").val()).length === 0) {
        text = text + "Nombre del alumno\n";
    }
    if ($.trim($("#matricula_A").val()).length === 0) {
        text = text + "Matricula\n";
    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);
        return false;
    } else {
        return true;
    }
}