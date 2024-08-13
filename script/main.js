const ListaCafeFooter = document.querySelectorAll('.footer-cafe');
var CafeFooterSelecionado = 0;

const ProdutoPrincipal = document.querySelector('.produto-img');

const circuloAnimacao = document.querySelector('.animacao-background');

const ListaQuadrados = document.querySelectorAll('.footer-quadrado');

for(let i=0; i < ListaCafeFooter.length; i++){
    const cafe = ListaCafeFooter[i];

    //trocar o tema
    cafe.onclick = function() {
        const cafeSelecionado = ListaCafeFooter[CafeFooterSelecionado];
        var url = cafe.src;
        //pegando o nome da imagem do cafe footer
        var img = url.split('/').pop();

        if(i === CafeFooterSelecionado){
            console.log("cafe footer já selecionado");
        }
        else{
            //trocando a animacao do cafe do footer
            cafeSelecionado.classList.remove('cafe-escolhido');
            cafe.classList.add('cafe-escolhido');
            CafeFooterSelecionado = i;

            //trocando a img do produto principal
            ProdutoPrincipal.src = `img/${img}`;

            //animacao na img do produto pricipal
            ProdutoPrincipal.classList.remove('cafe-principal-escolhido');
            //resetar a animação
            void ProdutoPrincipal.offsetWidth;
            ProdutoPrincipal.classList.add('cafe-principal-escolhido');

            //trocando cor de fundo
            const cor = `var(--cor-${i})`;
            document.documentElement.style.setProperty('--cor-bg', cor);

            //animacao de cor de fundo
            circuloAnimacao.classList.remove('active');
            //resetar a animação
            void circuloAnimacao.offsetWidth;
            circuloAnimacao.classList.add('active');

            //animacao de cor do footer
            for(let j = 0; j < ListaQuadrados.length; j++){
                const quadradoAnimacao = ListaQuadrados[j];
                quadradoAnimacao.classList.add('active');
            }
            
            setTimeout(() => {
                //passando a cor escolhida para exibir depois q rodar a animacao
                document.documentElement.style.setProperty('--cor-de-fundo',  cor);

                //removendo a animação do footer
                for(let j = 0; j < ListaQuadrados.length; j++){
                    const quadradoAnimacao = ListaQuadrados[j];
                    quadradoAnimacao.classList.remove('active');
                }
            }, 4000); // 10ms de atraso

        }
    }

}





