const tela = 
    {
    cor:"#F2F5F7",
    altura:400,
    largura:800,
    desenhar()
        {
            canvasCtx.fillStyle=this.cor;
            canvasCtx.fillRect(0,60,this.largura,this.altura)
        }
    }
tela.desenhar();