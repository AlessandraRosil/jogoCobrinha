const cobra = 
{
    cor:"purple",
    tamanho:10,
    direcao:"direita",
    x:0,
    y:260,
    vida:3,
    desenhar()
    {
        canvasCtx.fillStyle=this.cor;
        canvasCtx.fillRect(this.x,this.y,this.tamanho,this.tamanho)
    }
}
cobra.desenhar();