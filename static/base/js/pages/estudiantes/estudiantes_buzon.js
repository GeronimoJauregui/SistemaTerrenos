var EstudianteBuzon = (function () {
    function obtenerDatosInfraestructura(){
        return {
            idRelacion: $("#selectInf").val(),
            situacion: $("#situacionInf").val(),
            sugerencia: $("#sugerenciaInf").val()
        }
    }
    function obtenerDatosDesempenio(){
        return {
            idRelacion: $("#selectDes").val(),
            situacion: $("#situacionDes").val(),
            sugerencia: $("#sugerenciaDes").val()
        }
    }
    return{
        cargaBuzon: function () {
            $.get("EstudianteBuzon", {
                ACCION: "CARGAR_MODULO"
            }).then(function () {
                $("#content").html(arguments[0]);
                $("#btnInf").unbind('click').bind('click',function(){
                   EstudianteBuzon.guardarInfraestructura(obtenerDatosInfraestructura());
                });
                $("#btnDesem").unbind('click').bind('click',function(){
                   EstudianteBuzon.guardarDesempenio(obtenerDatosDesempenio());
                });
            });
        },
        guardarInfraestructura: function (datos) {
            $.get("EstudianteBuzon", {
                ACCION: "GUARDAR_INF",
                DATOS: JSON.stringify(datos)
            }).then(function(){
                swal("Accion realizada","Datos guardados" ,"success");
                $("#selectInf").val("").change();
                $("#situacionInf").val("");
                $("#sugerenciaInf").val("");
            });
        },
        guardarDesempenio: function (datos) {
            $.get("EstudianteBuzon", {
                ACCION: "GUARDAR_DES",
                DATOS: JSON.stringify(datos)
            }).then(function(){
                swal("Accion realizada","Datos guardados" ,"success");
                $("#selectDes").val("").change();
                $("#situacionDes").val("");
                $("#sugerenciaDes").val("");
            });
        }
    }
}());