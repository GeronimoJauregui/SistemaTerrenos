var EstudianteEventos = (function () {
    return{
        cargaEventos: function () {
            $.get("EstudianteEventos", {
                ACCION: "Form_eventos"
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#tipo").on('change',function(){
                    var tipo_evento = $("#tipo").val();
                    EstudianteEventos.cargarNombreEventos(tipo_evento);
                });
            });
        },
        cargarNombreEventos: function(tipo){
            $.get("EstudianteEventos",{
                ACCION: "Nombre_Eventos",
                ENVIAR: tipo
            }).then(function(){
                $("#content").html(arguments[0]);
                $("#tipo").on('change',function(){
                    var tipo_evento = $("#tipo").val();
                    EstudianteEventos.cargarNombreEventos(tipo_evento);
                }),
                        $("#registrarEvento").on('click',function(){
                            var solicitudEvento = {
                                "r_evento": $("#evento").val(),
                                "fecha": $("#fech").val()
                            };
                            EstudianteEventos.RegistrarEventos(solicitudEvento);
                        });
            });
        },
        RegistrarEventos: function(evento){
            $.get("EstudianteEventos",{
                ACCION: "RegistrarEventoAlum",
                ENVIAR: JSON.stringify(evento)
            }).then(function(){
                EstudianteEventos.cargaEventos();
                //$("#content").html(arguments[0]);
            });
        }
    };
}());


