var EstudiantePafi = (function () {
    return{
        cargaPafi: function () {
            $.get("EstudiantePafis", {
                ACCION: "Pafi"
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#formpafi").on('click', function () {
                    EstudiantePafi.cargaFormPafi();
                }),
                        $(".infoextrapafi").on('click', function () {
                    idpafi = $(this).parents("tr").find("td").eq(0).html();
                    EstudiantePafi.muestraInfoPafi(idpafi);
                });
                $(".bajapafi").on('click', function () {
                    idpafi = $(this).parents("tr").find("td").eq(0).html();
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
                        EstudiantePafi.darBajaPafi(idpafi);
                    });

                });
                $(".editarpafi").on('click', function () {
                    idpafi = $(this).parents("tr").find("td").eq(0).html();
                    EstudiantePafi.editarPafi(idpafi);
                });
                $(".inscribirse").on('click', function () {
                    idpafi = $(this).parents("tr").find("td").eq(0).html();
                    EstudiantePafi.inscribirsePafi(idpafi);
                });
            });
//            $("#example5").DataTable({
//                });
        },
        cargaFormPafi: function () {
            $.get("EstudiantePafis", {
                ACCION: "FormPafi"
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#cancelarEdicion").on('click',function(){
                    EstudiantePafi.cargaPafi();
                });
                $("#enviarSolicitud").on('click',function(){
                    if ($.trim($("#nom").val()).length > 0){
                        if ($.trim($("#horario").val()).length > 0){
                            if ($.trim($("#maestro").val()).length > 0){
                                var SolicitudPafi = {
                                    "nombrePafi": $("#nom").val(),
                                    "horario": $("#horario").val(),
                                    "clv_maestro": $("#maestro").val(),
                                    "clv_salon": $("#salones").val()
                                };
                                EstudiantePafi.enviarSolicitud(SolicitudPafi);
                                //EstudiantePafi.cargaPafi();
                            }
                        }
                    }
                });
            });

        },
        muestraInfoPafi: function (idpafi) {
            $.get("EstudiantePafis", {
                ACCION: "Muestra_Datos_Pafi",
                idmostrar: idpafi
            }).then(function () {
                $("#content").html(arguments[0]);
            });
        },
        darBajaPafi: function (idpafi) {
            $.get("EstudiantePafis", {
                ACCION: "BajaPafi",
                idmostrar: idpafi
            }).then(function () {
                EstudiantePafi.cargaPafi();
                //$("#content").html(arguments[0]);
            });
        },
        editarPafi: function (idpafi) {
            $.get("EstudiantePafis", {
                ACCION: "EditarPafi",
                idmostrar: idpafi
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#cancelarEdicion").on('click',function(){
                   EstudiantePafi.cargaPafi(); 
                });
                $("#guardarCambios").on('click',function(){
                    if ($.trim($("#horas").val()).length > 0){
                        if ($.trim($("#horario").val()).length > 0){
                            var edicionDatos ={
                                "clv_pafi": $("#idpafi").val(),
                                "totalHoras": $("#horas").val(),
                                "horario": $("#horario").val(),
                                "clv_salon": $("#salones").val()
                            };
                            EstudiantePafi.guardarCambiosPafi(edicionDatos);
                            EstudiantePafi.cargaPafi();
                        }
                    }
                });
            });
        },
        guardarCambiosPafi: function (obj) {
            $.get("EstudiantePafis", {
                ACCION: "GuardarCambios",
                ENVIAR: JSON.stringify(obj)
            }).then(function () {
                EstudiantePafi.cargaPafi();
            });
        },
        enviarSolicitud: function (obj) {
            $.get("EstudiantePafis", {
                ACCION: "solicitudPafi",
                ENVIAR: JSON.stringify(obj)
            }).then(function(){
                EstudiantePafi.cargaPafi(); 
                //$("#content").html(arguments[0]);
            });
        },
        inscribirsePafi: function (idpafi) {
            $.get("EstudiantePafis", {
                ACCION: "inscribirPafi",
                idmostrar: idpafi
            }).then(function () {
                EstudiantePafi.cargaPafi();
            });
        }
    };
}());

function showBasicMessage(message) {
    swal(message);
}

function showWithTitleMessage(tittle, message) {
    swal(tittle, message);
}

function showSuccessMessage() {
    swal("Hecho!", "Datos guardados correctamente", "success");
}

function showConfirmMessage() {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
    }, function () {
        swal("Deleted!", "Your imaginary file has been deleted.", "success");
    });
}

function showCancelMessage() {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel plx!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            swal("Deleted!", "Your imaginary file has been deleted.", "success");
        } else {
            swal("Cancelled", "Your imaginary file is safe :)", "error");
        }
    });
}

function showWithCustomIconMessage() {
    swal({
        title: "Sweet!",
        text: "Here's a custom image.",
        imageUrl: "../assets/sweet-alert/thumbs_up.png"
    });
}

function showHtmlMessage() {
    swal({
        title: "HTML <small>Title</small>!",
        text: "A custom <span style=\"color: #CC0000\">html<span> message.",
        html: true
    });
}

function showAutoCloseTimerMessage() {
    swal({
        title: "Auto close alert!",
        text: "I will close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
    });
}

function showPromptMessage() {
    swal({
        title: "An input!",
        text: "Write something interesting:",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Write something"
    }, function (inputValue) {
        if (inputValue === false)
            return false;
        if (inputValue === "") {
            swal.showInputError("You need to write something!");
            return false
        }
        swal("Nice!", "You wrote: " + inputValue, "success");
    });
}

function showAjaxLoaderMessage() {
    swal({
        title: "Ajax request example",
        text: "Submit to run ajax request",
        type: "info",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
    }, function () {
        setTimeout(function () {
            swal("Ajax request finished!");
        }, 2000);
    });
}





