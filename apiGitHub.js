$(document).ready(function () {  

    var usuario  =  ''

    $("#form").submit(function (event) {
        event.preventDefault()

        var usuarioNome = $("#usuario-nome").val()

        searchUsers(usuarioNome)
    })

    $("#usuario-nome").change(function (){
        var usuarioNome = $("#usuario-nome").val()

        searchUsers(usuarioNome)

    })

    function searchUsers(usuarioNome){

        $("#resultado").empty()
        
        $.get("https://api.github.com/search/users?q=" + usuarioNome + "+in:user&per_page=100", function(data) {
            console.log(data)

            data.items.forEach(item => {
              
                usuario = `<a  target="_blank" href ="${item.html_url}"> <img class= "img-thumbnail" margin= "0px 10px 0px 5px" border="4px solid" width= "100" height="100"  src = "${item.avatar_url}"/></a>` 

                $("#resultado").append(usuario)
            })

        })

    }

})

