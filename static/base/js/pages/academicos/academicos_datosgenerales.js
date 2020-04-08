

var Academicos_datosgenerales = (function () {

    return {
        cargarModulo: function () {

            $.get("Academicos_datosgenerales", {
                ACCION: "MODULO"
            }).then(function () {
                $("#content").html(arguments[0]);
                
                $("#agregar").unbind('click').bind('click', function () {
                    Academicos_datosgenerales.agregar(1);
                });
                $(".verdatos").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.mostrarespecifico(id);
                });
                $(".modificar").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.modificar(id);
                });
                $(".eliminar").unbind('click').bind('click', function () {
                    id = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.eliminardatoscompletos(id);
                });
                $("#modificar_academico").unbind('click').bind('click', function () {
                    id = $("#id_academico").val();
                    Academicos_datosgenerales.modificar(id);
                });
                $("#tabla_academicos").DataTable({
                    "scrollX": true});
            });
        },
        eliminardatoscompletos: function (id) {
            $.get("Academicos_datosgenerales", {
                ACCION: "Eliminardatoscompletos",
                id_eliminar: id
            }).then(function () {
                $("#content").html(arguments[0]);
                swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                Academicos_datosgenerales.cargarModulo();
            });
        },
        mostrarespecifico: function (id) {
            $.get("Academicos_datosgenerales", {
                ACCION: "MostrarEspecifico",
                ID: id
            }).then(function () {
                $("#content").html(arguments[0]);
                if($("#tipo_contratacion").html()==="PTC" || $("#tipo_contratacion").html()==="Asignatura"){
                    $("#laboratorio").hide();
                }
                if($("#tipo_contratacion").html()==="Tecnico Academico" || $("#tipo_contratacion").html()==="Asignatura"){
                    $("#nombramiento").hide();
                    $("#evidencia").hide();
                }
            });
        },
        modificar: function (id) {
            $.get("Academicos_datosgenerales", {
                ACCION: "MODIFICAR",
                ID: id
            }).then(function () {
                $("#content").html(arguments[0]);
                
                var a =$("#tipocontratacion").val();
                if(a ==='1'){
                    $("#div_laboratorio").hide();
                    $("#div_fecha_nombramiento").show();
                }else if(a==='2'){
                    $("#div_laboratorio").hide();
                    $("#div_fecha_nombramiento").hide();
                }else{
                    $("#div_laboratorio").show();
                    $("#div_fecha_nombramiento").hide();
                }
                
                $("#tipocontratacion").change(function () {	 
			var t =$(this).val();
                        if(t ==='1'){
                            $("#div_laboratorio").hide();
                            $("#div_fecha_nombramiento").show();
                        }else if(t==='2'){
                            $("#div_laboratorio").hide();
                            $("#div_fecha_nombramiento").hide();
                        }else{
                            $("#div_laboratorio").show();
                            $("#div_fecha_nombramiento").hide();
                        }
                });
                $("#actualizargenerales").on('click', function () {
                    if (validacion_datosgenerales()) {
                        var datosgenerales = {
                            "idAcademicos": id,
                            "nombre": $("#nombre").val(),
                            "apellido_Paterno": $("#apellidopaterno").val(),
                            "apellido_Materno": $("#apellidomaterno").val(),
                            "curp": $("#curp").val(),
                            "correo_Institucional": $("#correoinstitucional").val(),
                            "correo_Alternativo": $("#correoalternativo").val(),
                            "fecha_nacimiento": $("#fechanacimiento").val(),
                            "sexo": $('input:radio[name=sexo]:checked').val(),
                            "celular": $("#numerotel").val(),
                            "numeropersonal": $("#numeropersonal").val(),
                            "id_ProgramaEducativo": $("#programaedu").val(),
                            "id_status": $("#estado").val(),
                            "fecha_ingreso_uv": $("#fechaingreso").val()
                        };
                        Academicos_datosgenerales.actualizargenerales(datosgenerales, 'Actualizar_generales',id);
                    }
                });
                
                $(".editar_grado").unbind('click').bind('click', function () {
                    id_grado = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.modificar_grado(id_grado, id);
                });
                $(".eliminar_grado").unbind('click').bind('click', function () {
                    id_grado = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.eliminar_grado(id_grado, id);
                });
                $("#agregargrado").unbind('click').bind('click', function () {
                    Academicos_datosgenerales.agregar_grado(id);
                });
                
                $("#actualizartipocontratacion").on('click', function () {
                    var anterior = $('#tipoC_anterior').html();
                    var t = $('#tipocontratacion').val();
                    if(t ==='1'){
                        if(validacion_tipocontratacion()){
                            var TC = {
                                "id_academico": id,
                                "fecha_nombramiento": $("#fecha_nombramiento").val(),
                                "archivo": $("#archivo").val()
                                
                            };
                            Academicos_datosgenerales.actualizartipocontratacion(TC, 'Actualizar_tipocontratacion',1,anterior, id);
                        }
                    }else if(t ==='3'){
                        if(validacion_tipocontratacion2()){
                            var TC = {
                                "id_academico": id,
                                "id_laboratorio": $("#laboratorio").val()
                            };
                            Academicos_datosgenerales.actualizartipocontratacion(TC, 'Actualizar_tipocontratacion',3,anterior, id);
                        }
                    }else{
                        var TC = {};
                        Academicos_datosgenerales.actualizartipocontratacion(TC, 'Actualizar_tipocontratacion',2,anterior, id);
                    }
                });
                
                
                
                
                $("#actualizardistincion").on('click', function () {
                    if (validacion_datosdistincion()) {
                        var datosdistincion = {
                            "id_Academico":id,
                            "id_distincion": $("#distincion").val(),
                            "vigencia": $("#vigencia").val(),
                            "status": $('input:radio[name=estado]:checked').val()
                        };
                        Academicos_datosgenerales.actualizardatosdistincion(datosdistincion, 'actualizar_distincion',id);
                    }
                });
                
                $("#agregarcertifiacion").unbind('click').bind('click', function () {
                    Academicos_datosgenerales.agregarcertificacion(id);
                });
                $(".eliminarcertificacion").unbind('click').bind('click', function () {
                    id_eliminar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.eliminardatoscertificacion(id_eliminar,id);
                });
                $(".modificarcertificacion").unbind('click').bind('click', function () {
                    id_editar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.modificardatoscertificacion(id_editar,id);
                });
                
                $("#agregarEP").unbind('click').bind('click', function () {
                    Academicos_datosgenerales.agregarep(id);
                });
                $(".eliminarep").unbind('click').bind('click', function () {
                    id_eliminar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.eliminardatosep(id_eliminar,id);
                });
                $(".modificarep").unbind('click').bind('click', function () {
                    id_editar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.modificardatosep(id_editar,id);
                });
                
                $("#agregarCD").unbind('click').bind('click', function () {
                    Academicos_datosgenerales.agregarCD(id);
                });
                $(".eliminarCD").unbind('click').bind('click', function () {
                    id_eliminar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.eliminardatosCD(id_eliminar,id);
                });
                $(".modificarCD").unbind('click').bind('click', function () {
                    id_editar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.modificardatosCD(id_editar,id);
                });
                
                $("#tabla_grados").DataTable();
                $("#tabla_certificaciones").DataTable();
                $("#tabla_ep").DataTable();
                $("#tabla_CD").DataTable();
                $("#tabla_grados").DataTable();
            });
        },
        agregar: function (tab) {
            $.get("Academicos_datosgenerales", {
                ACCION: "AGREGAR"
            }).then(function () {
                $("#content").html(arguments[0]);
                //tab_active(tab);
                $("#div_laboratorio").hide();
                $("#tipocontratacion").change(function () {	 
			var t =$(this).val();
                        if(t ==='1'){
                            $("#div_laboratorio").hide();
                            $("#div_fecha_nombramiento").show();
                        }else if(t==='2'){
                            $("#div_laboratorio").hide();
                            $("#div_fecha_nombramiento").hide();
                        }else{
                            $("#div_laboratorio").show();
                            $("#div_fecha_nombramiento").hide();
                        }
                });
                $("#guardargenerales").on('click', function () {
                    if (validacion_datosgenerales()) {
                        var tab1= $("#pestaña1").val();
                        var datosgenerales = {
                            "nombre": $("#nombre").val(),
                            "apellido_Paterno": $("#apellidopaterno").val(),
                            "apellido_Materno": $("#apellidomaterno").val(),
                            "curp": $("#curp").val(),
                            "correo_Institucional": $("#correoinstitucional").val(),
                            "correo_Alternativo": $("#correoalternativo").val(),
                            "fecha_nacimiento": $("#fechanacimiento").val(),
                            "sexo": $('input:radio[name=sexo]:checked').val(),
                            "celular": $("#numerotel").val(),
                            "numeropersonal": $("#numeropersonal").val(),
                            "id_ProgramaEducativo": $("#programaedu").val(),
                            "id_status": $("#estado").val(),
                            "fecha_ingreso_uv": $("#fechaingreso").val(),
                            "r_Tipo_Personal": "2"
                        };
                        Academicos_datosgenerales.guardadatosgenerales(datosgenerales, 'Guardar_generales',tab1);
                    }
                });
                $('form[name="formestudios"]').ajaxForm(function() { 
                    swal("Guardado exitosamente!", "Click en el bot\u00F3n!", "success");    
                    Academicos_datosgenerales.guardadatosreconocimientos();
                });
                $('form[name="formcertificacion"]').ajaxForm(function() { 
                    swal("Guardado exitosamente!", "Click en el bot\u00F3n!", "success");    
                    Academicos_datosgenerales.guardadatoscertificacion();
                });
                $('form[name="formcurso"]').ajaxForm(function() { 
                    swal("Guardado exitosamente!", "Click en el bot\u00F3n!", "success");    
                    Academicos_datosgenerales.guardadatoscurso();
                });
                $('form[name="formexperiencia"]').ajaxForm(function() { 
                    swal("Guardado exitosamente!", "Click en el bot\u00F3n!", "success");    
                    Academicos_datosgenerales.guardadatosexperiencia();
                });
                $('form[name="formdistinciones"]').ajaxForm(function() { 
                    swal("Guardado exitosamente!", "Click en el bot\u00F3n!", "success");    
                    Academicos_datosgenerales.cargarModulo();
                });
//                $("#guardarreconocimientos").on('click', function () {
//                    if (validacion_datosreconocimientos()) {
//                        var datosreconocimientos = {
//                            "idNombreTitulo": $("#titulo_grados").val(),
//                            "idInstitucion": $("#ies_grados").val(),
//                            "id_grado_titulo": $("#grados").val(),
//                            "fecha_de_egreso": $("#fechaegreso").val(),
//                            "fecha_de_titulacion": $("#fechatitulacion").val(),
//                            "idacre_pnpc": $('input:radio[name=reconocimiento]:checked').val()
//                            
//                        };
//                        Academicos_datosgenerales.guardadatosreconocimientos(datosreconocimientos, 'Guardar_estudios');
//                    }
//                });
//                $("#guardarcertificacion").on('click', function () {
//                    if (validacion_datoscertificacion()) {
//                        var datoscertificacion = {
//                            "nombre": $("#certificacion").val(),
//                            "id_tipo_certificacion": $("#tipo_certificacion").val()
//                            
//                        };
//                        Academicos_datosgenerales.guardadatoscertificacion(datoscertificacion, 'Guardar_certificacion');
//                    }
//                });
//                $("#guardarcurso").on('click', function () {
//                    if (validacion_datoscursos()) {
//                        var datoscurso = {
//                           "curso_Diplomado": $('input:radio[name=curso_diplomado]:checked').val(),
//                           "nombre":$("#nombre_curso").val(),
//                           "horas":$("#n_horas").val(),
//                           "p_d": $('input:radio[name=tipo]:checked').val(),
//                           "id_IES_Empresa":$("#empresa_ies").val(),
//                           "lugar": $("#lugar").val(),
//                           "fecha": $("#fecha").val() 
//                        };
//                        Academicos_datosgenerales.guardadatoscurso(datoscurso, 'Guardar_curso');
//                    }
//                });
//                $("#guardarexperiencia").on('click', function () {
//                    if (validacion_datosexperiencia()) {
//                        var datosexperiencia = {
//                            "id_empresa": $("#empresa").val(),
//                            "id_tipo_puesto": $("#puesto").val(),
//                            "area_Desarrollo": $("#areadesarrollo").val(),
//                            "fecha_inicio": $("#fechainicio").val(),
//                            "fecha_fin": $("#fechatermino").val()
//                            
//                        };
//                        Academicos_datosgenerales.guardadatosexperiencia(datosexperiencia, 'Guardar_experiencia');
//                    }
//                });
//                $("#guardardistincion").on('click', function () {
//                    if (validacion_datosdistincion()) {
//                        var datosdistincion = {
//                            "id_distincion": $("#distincion").val(),
//                            "vigencia": $("#vigencia").val(),
//                            "status": $('input:radio[name=estado]:checked').val()
//                        };
//                        Academicos_datosgenerales.guardadatosdistincion(datosdistincion, 'Guardar_distincion');
//                    }
//                });
                $("#guardartipocontratacion").on('click', function () {
                    var t = $('#tipocontratacion').val();
                    if(t ==='1'){
                        if(validacion_tipocontratacion()){
                            var TC = {
                                "fecha_nombramiento": $("#fecha_nombramiento").val(),
                                "archivo": $("#archivo").val()
                                
                            };
                            Academicos_datosgenerales.guardadatostipocontratacion(TC, 'Guardar_tipocontratacion',1);
                        }
                    }else if(t ==='3'){
                        if(validacion_tipocontratacion2()){
                            var TC = {
                                "id_laboratorio": $("#laboratorio").val()
                            };
                            Academicos_datosgenerales.guardadatostipocontratacion(TC, 'Guardar_tipocontratacion',3);
                        }
                    }else{
                        alerta_confirmacion();
                    }
                    
                });
             
            });
        },
        
//        guardadatosdistincion: function (objeto, accion) {
//            $.get("Academicos_datosgenerales", {
//                ACCION: accion,
//                DATOS: JSON.stringify(objeto)
//            }).then(function () {
//                Academicos_datosgenerales.cargarModulo();
//                alerta_confirmacion();
//            });
//        },
        guardadatosexperiencia: function () {
            $.get("Academicos_datosgenerales", {
                ACCION: "Guardar_experiencia",
                OPCION: 2
            }).then(function () {
                $("#tabla_formulario_ExperienciaP").html(arguments[0]);
                $('form[name="formexperiencia"]').ajaxForm(function() { 
                    swal("Guardado exitosamente!", "Click en el bot\u00F3n!", "success");    
                    Academicos_datosgenerales.guardadatosexperiencia();
                });
//                $("#guardarexperiencia").on('click', function () {
//                    if (validacion_datosexperiencia()) {
//                        var datosexperiencia = {
//                            "id_empresa": $("#empresa").val(),
//                            "id_tipo_puesto": $("#puesto").val(),
//                            "area_Desarrollo": $("#areadesarrollo").val(),
//                            "fecha_inicio": $("#fechainicio").val(),
//                            "fecha_fin": $("#fechatermino").val()
//                            
//                        };
//                        Academicos_datosgenerales.guardadatosexperiencia(datosexperiencia, 'Guardar_experiencia');
//                    }
//                });
//                alerta_confirmacion(6);
            });
        },
        guardadatoscertificacion: function () {
            $.get("Academicos_datosgenerales", {
                ACCION: "Guardar_certificacion",
                OPCION: 2
            }).then(function () {
                $("#tabla_formulario_certificaciones").html(arguments[0]);
                $('form[name="formcertificacion"]').ajaxForm(function() { 
                    swal("Guardado exitosamente!", "Click en el bot\u00F3n!", "success");    
                    Academicos_datosgenerales.guardadatoscertificacion();
                });
//                $("#guardarcertificacion").on('click', function () {
//                    if (validacion_datoscertificacion()) {
//                        var datoscertificacion = {
//                            "nombre": $("#certificacion").val(),
//                            "id_tipo_certificacion": $("#tipo_certificacion").val()
//                            
//                        };
//                        Academicos_datosgenerales.guardadatoscertificacion(datoscertificacion, 'Guardar_certificacion');
//                    }
//                });
//                alerta_confirmacion();
            });
        },
        guardadatoscurso: function () {
            $.get("Academicos_datosgenerales", {
                ACCION: "Guardar_curso",
                OPCION: 2
            }).then(function () {
                $("#tabla_formulario_CD").html(arguments[0]);
                $('form[name="formcurso"]').ajaxForm(function() { 
                    swal("Guardado exitosamente!", "Click en el bot\u00F3n!", "success");    
                    Academicos_datosgenerales.guardadatoscurso();
                });
//                $("#guardarcurso").on('click', function () {
//                    if (validacion_datoscursos()) {
//                        var datoscurso = {
//                           "curso_Diplomado": $('input:radio[name=curso_diplomado]:checked').val(),
//                           "nombre":$("#nombre_curso").val(),
//                           "horas":$("#n_horas").val(),
//                           "p_d": $('input:radio[name=tipo]:checked').val(),
//                           "id_IES_Empresa":$("#empresa_ies").val(),
//                           "lugar": $("#lugar").val(),
//                           "fecha": $("#fecha").val() 
//                        };
//                        Academicos_datosgenerales.guardadatoscurso(datoscurso, 'Guardar_curso');
//                    }
//                });
//                alerta_confirmacion();
            });
        },
        guardadatostipocontratacion: function (objeto, accion,opc) {
            $.get("Academicos_datosgenerales", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto),
                OPC: opc
            }).then(function () {
                $("#formulario_contratacion").html(arguments[0]);
                $("#div_laboratorio").hide();
                $("#tipocontratacion").change(function () {	 
			var t =$(this).val();
                        if(t ==='1'){
                            $("#div_laboratorio").hide();
                            $("#div_fecha_nombramiento").show();
                        }else if(t==='2'){
                            $("#div_laboratorio").hide();
                            $("#div_fecha_nombramiento").hide();
                        }else{
                            $("#div_laboratorio").show();
                            $("#div_fecha_nombramiento").hide();
                        }
                });
                $("#guardartipocontratacion").on('click', function () {
                    var t = $('#tipocontratacion').val();
                    alert(t);
                    if(t ==='1'){
                        if(validacion_tipocontratacion()){
                            var TC = {
                                "fecha_nombramiento": $("#fecha_nombramiento").val(),
                                "archivo": $("#archivo").val()
                                
                            };
                            Academicos_datosgenerales.guardadatostipocontratacion(TC, 'Guardar_tipocontratacion',1);
                        }
                    }else if(t ==='3'){
                        if(validacion_tipocontratacion2()){
                            var TC = {
                                "id_laboratorio": $("#laboratorio").val()
                            };
                            Academicos_datosgenerales.guardadatostipocontratacion(TC, 'Guardar_tipocontratacion',3);
                        }
                    }else{
                        alerta_confirmacion();
                    }
                    
                });
                alerta_confirmacion();
            });
        },
        guardadatosreconocimientos: function () {
            $.get("Academicos_datosgenerales", {
                ACCION: "Guardar_estudios",
                OPCION: 2
            }).then(function () {
                $("#tabla_formulario_gradosacademicos").html(arguments[0]);
                $('form[name="formestudios"]').ajaxForm(function() { 
                    swal("Guardado exitosamente!", "Click en el bot\u00F3n!", "success");    
                    Academicos_datosgenerales.guardadatosreconocimientos();
                });
            
            
//            $("#guardarreconocimientos").on('click', function () {
//                    if (validacion_datosreconocimientos()) {
//                        var datosreconocimientos = {
//                            "idNombreTitulo": $("#titulo_grados").val(),
//                            "idInstitucion": $("#ies_grados").val(),
//                            "id_grado_titulo": $("#grados").val(),
//                            "fecha_de_egreso": $("#fechaegreso").val(),
//                            "fecha_de_titulacion": $("#fechatitulacion").val(),
//                            "idacre_pnpc": $('input:radio[name=reconocimiento]:checked').val()
//                            
//                        };
//                        Academicos_datosgenerales.guardadatosreconocimientos(datosreconocimientos, 'Guardar_estudios');
//                    }
//                });
//                alerta_confirmacion();
            });
        },
        guardadatosgenerales: function (objeto, accion, tab1) {
            $.get("Academicos_datosgenerales", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto),
                TAB: tab1
            }).then(function () {
                Academicos_datosgenerales.agregar(2);
                alerta_confirmacion();
            });
        },
        actualizargenerales: function (objeto, accion, id) {
            $.get("Academicos_datosgenerales", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto)
            }).then(function () {
                Academicos_datosgenerales.modificar(id);
                alerta_confirmacion();
            });
        },
        modificar_grado: function (id_grado, id_academico) {
            $.get("Academicos_datosgenerales", {
                ACCION: "modificar_grado",
                ID: id_grado
            }).then(function () {
                $("#tablamodificar_gradosacademicos").html(arguments[0]);
                $("#actualizargrado").on('click', function () {
                    if (validacion_datosreconocimientos()) {
                        var datosgrado = {
                            "idEstudios": id_grado,
                            "idNombreTitulo": $("#titulo_grados").val(),
                            "idInstitucion": $("#ies_grados").val(),
                            "id_Academico" : id_academico,
                            "id_grado_titulo": $("#grados").val(),
                            "fecha_de_egreso": $("#fechaegreso").val(),
                            "fecha_de_titulacion": $("#fechatitulacion").val(),
                            "idacre_pnpc": $('input:radio[name=reconocimiento]:checked').val()
                            
                        };
                        Academicos_datosgenerales.actualizar_grado(datosgrado, 'Actualizar_grado', id_academico);
                    }
                });
            });
        },
        eliminar_grado: function (id_grado, id_academico) {
            $.get("Academicos_datosgenerales", {
                ACCION: "eliminar_grado",
                ID: id_grado,
                id_academico:id_academico
            }).then(function () {
                swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                $("#tablamodificar_gradosacademicos").html(arguments[0]);
                $(".editar_grado").unbind('click').bind('click', function () {
                    id_grado = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.modificar_grado(id_grado, id);
                });
                $(".eliminar_grado").unbind('click').bind('click', function () {
                    id_grado = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.eliminar_grado(id_grado, id);
                });
                $("#agregargrado").unbind('click').bind('click', function () {
                    Academicos_datosgenerales.agregar_grado(id);
                });
                $("#tabla_grados").DataTable();
            });
        },
        actualizar_grado: function (objeto, accion, id_academico) {
            $.get("Academicos_datosgenerales", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto),
                id_academico:id_academico
            }).then(function () {
                $("#tablamodificar_gradosacademicos").html(arguments[0]);
                $(".editar_grado").unbind('click').bind('click', function () {
                    id_grado = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.modificar_grado(id_grado, id);
                });
                $(".eliminar_grado").unbind('click').bind('click', function () {
                    id_grado = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.eliminar_grado(id_grado, id);
                });
                $("#agregargrado").unbind('click').bind('click', function () {
                    Academicos_datosgenerales.agregar_grado(id);
                });
                $("#tabla_grados").DataTable();
                alerta_confirmacion();
            });
        },

        agregar_grado: function (id_academico) {
            $.get("Academicos_datosgenerales", {
                ACCION: "agregar_grado",
                id_academico: id_academico
            }).then(function () {
                $("#tablamodificar_gradosacademicos").html(arguments[0]);
                Academicos_datosgenerales.guardar_grado(id_academico);
            });
        },
        guardar_grado:function (id_academico){
            $('form[name="filegrados"]').ajaxForm(function() { 
                    alerta_confirmacion();
                    Academicos_datosgenerales.guardartabgrado(id_academico);
            });
        },
        guardartabgrado: function (id_academico) {
            alert(id_academico);
            $.get("Academicos_datosgenerales", {
                ACCION: "Guardar_grado",
                Opcion: 2,
                id_academico:id_academico
            }).then(function () {
                $("#tablamodificar_gradosacademicos").html(arguments[0]);
                $(".editar_grado").unbind('click').bind('click', function () {
                    id_grado = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.modificar_grado(id_grado, id);
                });
                $(".eliminar_grado").unbind('click').bind('click', function () {
                    id_grado = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.eliminar_grado(id_grado, id);
                });
                $("#agregargrado").unbind('click').bind('click', function () {
                    Academicos_datosgenerales.agregar_grado(id);
                });
                $("#tabla_grados").DataTable();
                //Academicos_datosgenerales.modificar(id_academico);
                alerta_confirmacion();
            });
        },
        actualizartipocontratacion: function (objeto, accion,nuevo,anterior,id_academico) {
            $.get("Academicos_datosgenerales", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto),
                NUEVO: nuevo,
                ANTERIOR: anterior,
                ACADEMICO: id_academico
            }).then(function () {
                $("#tablamodificar_contratacion").html(arguments[0]);
                var a =$("#tipocontratacion").val();
                if(a ==='1'){
                    $("#div_laboratorio").hide();
                    $("#div_fecha_nombramiento").show();
                }else if(a==='2'){
                    $("#div_laboratorio").hide();
                    $("#div_fecha_nombramiento").hide();
                }else{
                    $("#div_laboratorio").show();
                    $("#div_fecha_nombramiento").hide();
                }
                
                $("#tipocontratacion").change(function () {	 
			var t =$(this).val();
                        if(t ==='1'){
                            $("#div_laboratorio").hide();
                            $("#div_fecha_nombramiento").show();
                        }else if(t==='2'){
                            $("#div_laboratorio").hide();
                            $("#div_fecha_nombramiento").hide();
                        }else{
                            $("#div_laboratorio").show();
                            $("#div_fecha_nombramiento").hide();
                        }
                });
                $("#actualizartipocontratacion").on('click', function () {
                    var anterior = $('#tipoC_anterior').html();
                    var t = $('#tipocontratacion').val();
                    if(t ==='1'){
                        if(validacion_tipocontratacion()){
                            var TC = {
                                "id_academico": id,
                                "fecha_nombramiento": $("#fecha_nombramiento").val(),
                                "archivo": $("#archivo").val()
                                
                            };
                            Academicos_datosgenerales.actualizartipocontratacion(TC, 'Actualizar_tipocontratacion',1,anterior, id);
                        }
                    }else if(t ==='3'){
                        if(validacion_tipocontratacion2()){
                            var TC = {
                                "id_academico": id,
                                "id_laboratorio": $("#laboratorio").val()
                            };
                            Academicos_datosgenerales.actualizartipocontratacion(TC, 'Actualizar_tipocontratacion',3,anterior, id);
                        }
                    }else{
                        var TC = {};
                        Academicos_datosgenerales.actualizartipocontratacion(TC, 'Actualizar_tipocontratacion',2,anterior, id);
                    }
                });
                
              
                alerta_confirmacion();
            });
            
        },
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        modificardatosCD: function (id_editar,id) {
            $.get("Academicos_datosgenerales", {
                ACCION: "modificarCD",
                id_academico: id,
                id_editar:id_editar
            }).then(function () {
                $("#tablamodificar_CD").html(arguments[0]);
                $("#actualizarcurso").on('click', function () {
                    if (validacion_datoscursos()) {
                        var datoscurso = {
                           "id_academico":id,
                           "id_C_D":id_editar,
                           "curso_Diplomado": $('input:radio[name=curso_diplomado]:checked').val(),
                           "nombre":$("#nombre_curso").val(),
                           "horas":$("#n_horas").val(),
                           "p_d": $('input:radio[name=tipo]:checked').val(),
                           "id_IES_Empresa":$("#empresa_ies").val(),
                           "lugar": $("#lugar").val(),
                           "fecha": $("#fecha").val() 
                        };
                        Academicos_datosgenerales.actualizardatoscurso(datoscurso, 'actualizar_curso',id);
                    }
                });
            });
        },
        actualizardatoscurso: function (objeto, accion, id) {
            $.get("Academicos_datosgenerales", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto),
                id_academico:id
            }).then(function () {
                $("#tablamodificar_CD").html(arguments[0]);
                $("#agregarCD").unbind('click').bind('click', function () {
                    Academicos_datosgenerales.agregarCD(id);
                });
                $(".eliminarCD").unbind('click').bind('click', function () {
                    id_eliminar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.eliminardatosCD(id_eliminar,id);
                });
                $(".modificarCD").unbind('click').bind('click', function () {
                    id_editar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.modificardatosCD(id_editar,id);
                });
                $("#tabla_CD").DataTable();
                alerta_confirmacion();
            });
        },
        eliminardatosCD: function (id_eliminar,id) {
            $.get("Academicos_datosgenerales", {
                ACCION: "eliminar_CD",
                id_eliminar: id_eliminar,
                id_academico:id
            }).then(function () {
                swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                $("#tablamodificar_CD").html(arguments[0]);
                $("#agregarCD").unbind('click').bind('click', function () {
                    Academicos_datosgenerales.agregarCD(id);
                });
                $(".eliminarCD").unbind('click').bind('click', function () {
                    id_eliminar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.eliminardatosCD(id_eliminar,id);
                });
                $(".modificarCD").unbind('click').bind('click', function () {
                    id_editar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.modificardatosCD(id_editar,id);
                });
                $("#tabla_CD").DataTable();
            });
        },
        agregarCD: function (id) {
            $.get("Academicos_datosgenerales", {
                ACCION: "AGREGARCD",
                id_academico:id
            }).then(function () {
                $("#tablamodificar_CD").html(arguments[0]);
                Academicos_datosgenerales.guardadatosCD(id);
            });
        },
        guardadatosCD:function (id_academico){
            $('form[name="filecursos"]').ajaxForm(function() { 
                    alerta_confirmacion();
                    Academicos_datosgenerales.guardatabdatosCD(id_academico);
            });
        },
        guardatabdatosCD: function (id) {
            $.get("Academicos_datosgenerales", {
                ACCION: "Guardar_CD",
                Opcion:2,
                id_academico:id
            }).then(function () {
                $("#tablamodificar_CD").html(arguments[0]);
                $("#agregarCD").unbind('click').bind('click', function () {
                    Academicos_datosgenerales.agregarCD(id);
                });
                $(".eliminarCD").unbind('click').bind('click', function () {
                    id_eliminar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.eliminardatosCD(id_eliminar,id);
                });
                $(".modificarCD").unbind('click').bind('click', function () {
                    id_editar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.modificardatosCD(id_editar,id);
                });
                $("#tabla_CD").DataTable();
                alerta_confirmacion();
            });
        },
        
        actualizardatosdistincion: function (objeto, accion, id) {
            $.get("Academicos_datosgenerales", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto),
                id_academico:id
            }).then(function () {
                $("#tablamodificar_distincion").html(arguments[0]);
                $("#actualizardistincion").on('click', function () {
                    if (validacion_datosdistincion()) {
                        var datosdistincion = {
                            "id_Academico":id,
                            "id_distincion": $("#distincion").val(),
                            "vigencia": $("#vigencia").val(),
                            "status": $('input:radio[name=estado]:checked').val()
                        };
                        Academicos_datosgenerales.actualizardatosdistincion(datosdistincion, 'actualizar_distincion',id);
                    }
                });
                alerta_confirmacion();
            });
        },
        
        modificardatosep: function (id_editar,id) {
            $.get("Academicos_datosgenerales", {
                ACCION: "modificarep",
                id_academico: id,
                id_editar:id_editar
            }).then(function () {
                $("#tablamodificar_ExperienciaP").html(arguments[0]);
                $("#actualizarexperiencia").on('click', function () {
                    if (validacion_datosexperiencia()) {
                        var datosexperiencia = {
                            "id_EP":id_editar,
                            "id_academico":id,
                            "id_empresa": $("#empresa").val(),
                            "id_tipo_puesto": $("#puesto").val(),
                            "area_Desarrollo": $("#areadesarrollo").val(),
                            "fecha_inicio": $("#fechainicio").val(),
                            "fecha_fin": $("#fechatermino").val()
                        };
                        Academicos_datosgenerales.actualizardatosexperiencia(datosexperiencia, 'actualizar_experiencia',id);
                    }
                });
            });
        },
        actualizardatosexperiencia: function (objeto, accion, id) {
            $.get("Academicos_datosgenerales", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto),
                id_academico:id
            }).then(function () {
                $("#tablamodificar_ExperienciaP").html(arguments[0]);
                $("#agregarEP").unbind('click').bind('click', function () {
                    Academicos_datosgenerales.agregarep(id);
                });
                $(".eliminarep").unbind('click').bind('click', function () {
                    id_eliminar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.eliminardatosep(id_eliminar,id);
                });
                $(".modificarep").unbind('click').bind('click', function () {
                    id_editar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.modificardatosep(id_editar,id);
                });
                $("#tabla_ep").DataTable();
                alerta_confirmacion();
            });
        },
        eliminardatosep: function (id_eliminar,id) {
            $.get("Academicos_datosgenerales", {
                ACCION: "Eliminardatosep",
                id_eliminar: id_eliminar,
                id_academico:id
            }).then(function () {
                swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                $("#tablamodificar_ExperienciaP").html(arguments[0]);
                $("#agregarEP").unbind('click').bind('click', function () {
                    Academicos_datosgenerales.agregarep(id);
                });
                $(".eliminarep").unbind('click').bind('click', function () {
                    id_eliminar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.eliminardatosep(id_eliminar,id);
                });
                $(".modificarep").unbind('click').bind('click', function () {
                    id_editar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.modificardatosep(id_editar,id);
                });
                $("#tabla_ep").DataTable();
            });
        },
        agregarep: function (id) {
            $.get("Academicos_datosgenerales", {
                ACCION: "AGREGAREP",
                id_academico:id
            }).then(function () {
                $("#tablamodificar_ExperienciaP").html(arguments[0]);
                Academicos_datosgenerales.guardadatosexperiencia_individual(id);
            });
        },
        guardadatosexperiencia_individual:function (id){
            $('form[name="fileexperiencia"]').ajaxForm(function() { 
                    alerta_confirmacion();
                    Academicos_datosgenerales.guardatabexperiencia_individual(id);
            });
        },
        guardatabexperiencia_individual: function (id) {
            $.get("Academicos_datosgenerales", {
                ACCION: "Guardar_experiencia_individual",
                Opcion: 2,
                id_academico:id
            }).then(function () {
                $("#tablamodificar_ExperienciaP").html(arguments[0]);
                $("#agregarEP").unbind('click').bind('click', function () {
                    Academicos_datosgenerales.agregarep(id);
                });
                $(".eliminarep").unbind('click').bind('click', function () {
                    id_eliminar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.eliminardatosep(id_eliminar,id);
                });
                $(".modificarep").unbind('click').bind('click', function () {
                    id_editar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.modificardatosep(id_editar,id);
                });
                $("#tabla_ep").DataTable();
                alerta_confirmacion();
            });
        },
        
        modificardatoscertificacion: function (id_editar,id) {
            $.get("Academicos_datosgenerales", {
                ACCION: "modificarcertificacion",
                id_academico: id,
                id_editar:id_editar
            }).then(function () {
                $("#tablamodificar_certificaciones").html(arguments[0]);
                $("#actualizarcertificacion").on('click', function () {
                    if (validacion_datoscertificacion()) {
                        var datoscertificacion = {
                            "id_certificaciones":id_editar,
                            "id_Academico":id,
                            "nombre": $("#certificacion").val(),
                            "id_tipo_certificacion": $("#tipo_certificacion").val()
                            
                        };
                        Academicos_datosgenerales.actualizardatoscertificacion(datoscertificacion, 'actualizar_certificacion',id);
                    }
                });
            });
        },
        eliminardatoscertificacion: function (id_eliminar,id) {
            $.get("Academicos_datosgenerales", {
                ACCION: "Eliminardatoscertificacion",
                id_eliminar: id_eliminar,
                id_academico:id
            }).then(function () {
                swal("Eliminado exitosamente!", "Click en el bot\u00F3n!", "success");
                $("#tablamodificar_certificaciones").html(arguments[0]);
                $("#agregarcertifiacion").unbind('click').bind('click', function () {
                    Academicos_datosgenerales.agregarcertificacion(id);
                });
                $(".eliminarcertificacion").unbind('click').bind('click', function () {
                    id_eliminar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.eliminardatoscertificacion(id_eliminar,id);
                });
                $(".modificarcertificacion").unbind('click').bind('click', function () {
                    id_editar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.modificardatoscertificacion(id_editar,id);
                });
                $("#tabla_certificaciones").DataTable();
            });
        },
        agregarcertificacion: function (id) {
            $.get("Academicos_datosgenerales", {
                ACCION: "AGREGARCERTIFIACION",
                id_academico:id
            }).then(function () {
                $("#tablamodificar_certificaciones").html(arguments[0]);
                Academicos_datosgenerales.guardadatoscertificacionindividual(id);
            });
        },
        guardadatoscertificacionindividual:function (id){
            $('form[name="filecertificacion"]').ajaxForm(function() { 
                    alerta_confirmacion();
                    Academicos_datosgenerales.guardatabcertificacionindividual(id);
            });
        },
        guardatabcertificacionindividual: function (id) {
            $.get("Academicos_datosgenerales", {
                ACCION: "Guardar_certificacion_individual",
                Opcion:2,
                id_academico:id
            }).then(function () {
                $("#tablamodificar_certificaciones").html(arguments[0]);
                $("#agregarcertifiacion").unbind('click').bind('click', function () {
                    Academicos_datosgenerales.agregarcertificacion(id);
                });
                $(".eliminarcertificacion").unbind('click').bind('click', function () {
                    id_eliminar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.eliminardatoscertificacion(id_eliminar,id);
                });
                $(".modificarcertificacion").unbind('click').bind('click', function () {
                    id_editar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.modificardatoscertificacion(id_editar,id);
                });
                $("#tabla_certificaciones").DataTable();
                alerta_confirmacion();
            });
        },
        actualizardatoscertificacion: function (objeto, accion, id) {
            $.get("Academicos_datosgenerales", {
                ACCION: accion,
                DATOS: JSON.stringify(objeto),
                id_academico:id
            }).then(function () {
                $("#tablamodificar_certificaciones").html(arguments[0]);
                $("#agregarcertifiacion").unbind('click').bind('click', function () {
                    Academicos_datosgenerales.agregarcertificacion(id);
                });
                $(".eliminarcertificacion").unbind('click').bind('click', function () {
                    id_eliminar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.eliminardatoscertificacion(id_eliminar,id);
                });
                $(".modificarcertificacion").unbind('click').bind('click', function () {
                    id_editar = $(this).parents("tr").attr("id");
                    Academicos_datosgenerales.modificardatoscertificacion(id_editar,id);
                });
                $("#tabla_certificaciones").DataTable();
                alerta_confirmacion();
            });
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    };
}());
function validacion_datosdistincion() {
    var text = "";
    
    if ($.trim($("#distincion").val()).length === 0) {
        text = text + "Tipo de distinci\u00f3n\n";
    }
    if ($.trim($("#vigencia").val()).length === 0) {
        text = text + "Vigencia\n";
    }
    if ($.trim($('input:radio[name=estado]:checked').val()).length === 0) {
        text = text + "Estado\n";
    }
//    if ($.trim($("#archivodistincion").val()).length === 0) {
//        text = text + "Archivo\n";
//    }
    
    
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);    
        return false;
    } else {
        return true;
    }
}
function validacion_datosexperiencia() {
    var text = "";
    
    if ($.trim($("#empresa").val()).length === 0) {
        text = text + "Empresa\n";
    }
    if ($.trim($("#puesto").val()).length === 0) {
        text = text + "Puesto\n";
    }
    if ($.trim($("#areadesarrollo").val()).length === 0) {
        text = text + "\u00c1rea de desarrollo profesional\n";
    }
    if ($.trim($("#fechainicio").val()).length === 0) {
        text = text + "Fecha de inicio\n";
    }
    if ($.trim($("#fechatermino").val()).length === 0) {
        text = text + "Fecha de termino\n";
    }
//    if ($.trim($("#archivoexperiencia").val()).length === 0) {
//        text = text + "Archivo\n";
//    }
    
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);    
        return false;
    } else {
        return true;
    }
}
function validacion_datoscertificacion() {
    var text = "";
    
    if ($.trim($("#certificacion").val()).length === 0) {
        text = text + "Nombre del la certificaci\u00f3n\n";
    }
    if ($.trim($("#tipo_certificacion").val()).length === 0) {
        text = text + "Tipo de la certificaci\u00f3n\n";
    }
//    if ($.trim($("#archivocertificacion").val()).length === 0) {
//        text = text + "Archivo\n";
//    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);    
        return false;
    } else {
        return true;
    }
}





function validacion_datoscursos() {
    var text = "";
    
    if ($.trim($('input:radio[name=curso_diplomado]:checked').val()).length === 0) {
        text = text + "Curso/Diplomado\n";
    }
    if ($.trim($("#nombre_curso").val()).length === 0) {
        text = text + "Nombre\n";
    }
    if ($.trim($("#n_horas").val()).length === 0) {
        text = text + "N\u00famero de horas\n";
    }
    if ($.trim($('input:radio[name=tipo]:checked').val()).length === 0) {
        text = text + "Curso/Diplomado\n";
    }
    if ($.trim($("#empresa_ies").val()).length === 0) {
        text = text + "Empresa o IES\n";
    }
    if ($.trim($("#lugar").val()).length === 0) {
        text = text + "Lugar\n";
    }
    if ($.trim($("#fecha").val()).length === 0) {
        text = text + "Fecha\n";
    }
//    if ($.trim($("#archivocurso").val()).length === 0) {
//        text = text + "Archivo\n";
//    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);    
        return false;
    } else {
        return true;
    }
}



function validacion_datosreconocimientos() {
    var text = "";
    
    if ($.trim($("#titulo_grados").val()).length === 0) {
        text = text + "Nombre del titulo\n";
    }
    if ($.trim($("#ies_grados").val()).length === 0) {
        text = text + "IES\n";
    }
    if ($.trim($("#grados").val()).length === 0) {
        text = text + "Grado obtenido\n";
    }
    if ($.trim($("#fechaegreso").val()).length === 0) {
        text = text + "Fecha de egreso\n";
    }
    if ($.trim($("#fechatitulacion").val()).length === 0) {
        text = text + "Fecha de titulaci\u00f3n\n";
    }
    if ($.trim($('input:radio[name=reconocimiento]:checked').val()).length === 0) {
        text = text + "Reconocimiento\n";
    }
//    if ($.trim($("#archivo1").val()).length === 0) {
//        text = text + "Archivo Titulo\n";
//    }
//    if ($.trim($("#archivo2").val()).length === 0) {
//        text = text + "Archivo Cedula\n";
//    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);    
        return false;
    } else {
        return true;
    }
    
}
function validacion_datosgenerales() {
    var text = "";
    if ($.trim($("#nombre").val()).length === 0) {
        text = text + "Nombre\n";
    }
    if ($.trim($("#apellidopaterno").val()).length === 0) {
        text = text + "Apellido paterno\n";
    }
    if ($.trim($("#apellidomaterno").val()).length === 0) {
        text = text + "Apellido materno\n";
    }
    if ($.trim($("#curp").val()).length === 0) {
        text = text + "CURP\n";
    }
    if ($.trim($("#correoinstitucional").val()).length === 0) {
        text = text + "Correo institucional\n";
    }
    if ($.trim($("#correoalternativo").val()).length === 0) {
        text = text + "Correo alternativo\n";
    }
    if ($.trim($("#fechanacimiento").val()).length === 0) {
        text = text + "Fecha de nacimiento\n";
    }
    if ($.trim($('input:radio[name=sexo]:checked').val()).length === 0) {
        text = text + "Sexo\n";
    }
    if ($.trim($("#numerotel").val()).length === 0) {
        text = text + "N\u00famero de telefono\n";
    }
    if ($.trim($("#programaedu").val()).length === 0) {
        text = text + "Programa educativo\n";
    }
    if ($.trim($("#estado").val()).length === 0) {
        text = text + "Estado\n";
    }
//    if ($.trim($("#fechaingreso").val()).length === 0) {
//        text = text + "Fecha de ingreso a la UV\n";
//    }
    
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);    
        return false;
    } else {
        return true;
    }
}

function validacion_tipocontratacion() {
    var text = "";
    
    if ($.trim($("#tipocontratacion").val()).length === 0) {
        text = text + "Tipo de contrataci\u00f3n\n";
    }
    if ($.trim($("#fecha_nombramiento").val()).length === 0) {
        text = text + "Fecha de nombramiento\n";
    }
    if (text.length > 0) {
        showWithTitleMessage('Existen campos vacios', text);    
        return false;
    } else {
        return true;
    }
}

function validacion_tipocontratacion2() {
    var text = "";
    
    if ($.trim($("#tipocontratacion").val()).length === 0) {
        text = text + "Tipo de contrataci\u00f3n\n";
    }
    if ($.trim($("#laboratorio").val()).length === 0) {
        text = text + "Laboratorio\n";
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

function tab_active(tab) {
    for (var i = 1; i < 8; i++) {
        if (tab===i){
            $("#t"+i).addClass("active");
            //scrollToID("#tab"+i, 1000);
            //$("#t"+i).attr('href',"#tab1");
            //window.location.href = $("#t2").attr('href');
        }else{
            $("#t"+i).removeClass("active");
        }
        
    }
}

function alerta_confirmacion() {
 swal("Guardado exitosamente!", "Click en el bot\u00F3n!", "success");
}

