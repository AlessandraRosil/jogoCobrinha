const tela = 
    {
    cor:"#39FF14",
    altura:400,
    largura:800,
    desenhar()
        {
            canvasCtx.fillStyle=this.cor;
            canvasCtx.fillRect(0,60,this.largura,this.altura)
        }
    }
