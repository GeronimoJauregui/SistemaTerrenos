var Academicos_Pafis = (function () {

    return {
        cargarModulo: function () {
            $.get("Academicos_Pafis", {
                ACCION: "MODULO"
            }).then(function () {
                $("#content").html(arguments[0]);
                
                $("#agregar").unbind('click').bind('click', function () {
                    Academicos_Pafis.agregar();
                });
                $(".eliminar").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    option = $(this).parents("tr").find("td").eq(3).html();
                    Academicos_Pafis.eliminar(id);
                });
                $(".modificar").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Pafis.modificar(id);
                });
                $(".verdatos").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_Pafis.mostrarespecifico(id);
                });
                $("#tabla_pafis").DataTable({
                    "scrollX": true});
            });
        },
        mostrarespecifico: function (id) {
            $.get("Academicos_Pafis", {
                ACCION: "MostrarEspecifico",
                ID: id
            }).then(function () {
                $("#content").html(arguments[0]);
            });
        },
        agregar: function () {
            $.get("Academicos_Pafis", {
                ACCION: "AGREGAR"
            }).then(function () {
                $("#content").html(arguments[0]);
//                $("#guardar").unbind('click').bind('click', function () {
//                    if (validacion_pafi()) {
//                        var pafi = {
//                            "idAcademicos": $("#academico").val(),
//                            "nombre_pafi": $("#nombre_pafi").val(),
//                            "tipopafi": $('input:radio[name=tipo]:checked').val(),
//                            "estado": $('input:radio[name=estado]:checked').val(),
//                            "solicitud": $('input:radio[name=proceso]:checked').val(),
//                            "horario": $("#horario").val(),
//                            "num_Horas": $("#num_horas").val(),
//                            "id_periodo": $("#periodo").val(),
//                            "idTb_Salones": $("#salon").val(),
//                            "idPrograma_Educativo": $("#pes").val(),
//                            "numero_CT": $("#num_ct").val()
//                        };
                Academicos_Pafis.guardar();
//                    }
//                });
            });
        },
        guardar: function () {
            $('form[name="formpafis"]').ajaxForm(function() { 
                swal("Guardado exitosamente!", "Click en el bot\u00F3n!", "success");    
                Academicos_Pafis.cargarModulo();
            });
//            $.get("Academicos_Pafis", {
//                ACCION: "GUARDAR",
//                DATOS: JSON.stringify(pafi)
//            }).then(function () {
//                swal("Guardado exitosamente!", "Click en el bot\u00F3n!", "success");
//                Academicos_Pafis.cargarModulo();
//            });
        },
        eliminar: function (id) {
            $.get("Academicos_Pafis", {
                ACCION: "ELIMINAR",
                DATOS: id
            }).then(function () {
                swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                Academicos_Pafis.cargarModulo();
            });
        },
        modificar: function (id) {
            $.get("Academicos_Pafis", {
                ACCION: "MODIFICAR",
                DATOS: id
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#guardar").unbind('click').bind('click', function () {
                    if (validacion_pafi()) {
                        var pafi = {
                            "id_pafis": id,
                            "idAcademicos": $("#academico").val(),
                            "nombre_pafi": $("#nombre_pafi").val(),
                            "tipopafi": $('input:radio[name=tipo]:checked').val(),
                            "estado": $('input:radio[name=estado]:checked').val(),
                            "solicitud": $('input:radio[name=proceso]:checked').val(),
                            "horario": $("#horario").val(),
                            "num_Horas": $("#num_horas").val(),
                            "id_periodo": $("#periodo").val(),
                            "idTb_Salones": $("#salon").val(),
                            "idPrograma_Educativo": $("#pes").val(),
                            "numero_CT": $("#num_ct").val()
                        };
                        Academicos_Pafis.guardar_modificado(pafi);
                    }
                });
            });
        },
        guardar_modificado: function (pafi) {
            $.get("Academicos_Pafis", {
                ACCION: "ACTUALIZAR",
                DATOS: JSON.stringify(pafi)
            }).then(function () {
                swal("Modificado exitosamente!", "Click en el bot\u00F3n!", "success");
                Academicos_Pafis.cargarModulo();
            });
        }
    };
    
}());

function validacion_pafi() {
    var text = "";

    if ($.trim($("#academico").val()).length === 0) {
        text = text + "Acad\u00e9mico\n";
    }
    if ($.trim($("#nombre_pafi").val()).length === 0) {
        text = text + "Nombre del PAFI\n";
    }
    if ($.trim($(".tipo_pafi").val()).length === 0) {
        text = text + "Tipo\n";
    }
    if ($.trim($(".estado").val()).length === 0) {
        text = text + "Estado\n";
    }
    if ($.trim($(".proceso").val()).length === 0) {
        text = text + "Proceso\n";
    }
    if ($.trim($("#horario").val()).length === 0) {
        text = text + "Horario\n";
    }
    if ($.trim($("#num_horas").val()).length === 0) {
        text = text + "N\u00fam. Horas\n";
    }
    if ($.trim($("#periodo").val()).length === 0) {
        text = text + "Periodo\n";
    }
    if ($.trim($("#salon").val()).length === 0) {
        text = text + "Sal\u00f3n\n";
    }
    if ($.trim($("#pes").val()).length === 0) {
        text = text + "Programa al que impacta\n";
    }
    if ($.trim($("#num_ct").val()).length === 0) {
        text = text + "N\u00fam. de consejo t\u00e9cnico\n";
    }
    if ($.trim($("#apafi").val()).length === 0) {
        text = text + "archivo PAFIs\n";
    }
    if ($.trim($("#aacademica").val()).length === 0) {
        text = text + "acta academia\n";
    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);
        return false;
    } else {
        return true;
    }
}