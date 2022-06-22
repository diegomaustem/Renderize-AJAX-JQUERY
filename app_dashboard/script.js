$(document).ready(() => {

    $('#documentacao').on('click', () => {
        //Usando o load()
        //$('#pagina').load('documentacao.html')

        $.get('documentacao.html', data => {
            $('#pagina').html(data)
        })
    })

    $('#suporte').on('click', () => {
        //Usando o load()
        //$('#pagina').load('suporte.html')

        $.get('suporte.html', data => {
            $('#pagina').html(data)
        })
    })
	
})