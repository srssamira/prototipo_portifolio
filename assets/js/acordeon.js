document.addEventListener('DOMContentLoaded', () => {
    const acordeonAcao = document.querySelectorAll('.acordeon .acao');

    acordeonAcao.forEach((acao) => {
        acao.addEventListener('click', (e) => {
            const acordeon = acao.parentElement;
            const isOpen = acordeon.classList.contains('open');

            if (isOpen) {
                acordeon.classList.remove('open');
            } else {
                // fechar todos os outros acordeons (opcional)
                document.querySelectorAll('.acordeon.open').forEach((openAcordeon) => {
                    openAcordeon.classList.remove('open');
                });
                
                acordeon.classList.add('open');
            }
        });
    });
});