window.addEventListener('scroll', function () {
    const posicao = window.scrollY;
    //console.log(posicao);
    if (posicao > 100) {
        //document.getElementById("navbar").classList.add("bg-body-tertiary");
        alfa = ((posicao>=300)?1:(posicao - 100) / 200);
        console.log(alfa);
        this.document.getElementById("navbar").style.backgroundColor = 
            "rgba(248, 249, 250, " + alfa + ")";
            
    }
    else {
        this.document.getElementById("navbar").style.backgroundColor = 
            "rgba(248, 249, 250, 0)";
    }
});
