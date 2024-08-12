const ListaCafeFooter = document.querySelectorAll('.footer-cafe');
var CafeFooterSelecionado = 0;

const ProdutoPrincipal = document.querySelector('.produto-img');

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
            cafeSelecionado.classList.remove('cafe-escolhido');
            cafe.classList.add('cafe-escolhido');
            CafeFooterSelecionado = i;

            //trocando a img principal
            ProdutoPrincipal.src = `img/${img}`;
            ProdutoPrincipal.classList.remove('cafe-principal-escolhido');
            // Forçar reflow para resetar a animação
            void ProdutoPrincipal.offsetWidth;
            ProdutoPrincipal.classList.add('cafe-principal-escolhido');
        }
    }

}
