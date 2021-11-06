window.onload=function(){

        document.getElementById("paises").addEventListener("change",function(){

        var paises= document.getElementById("paises");
        var array=[];
        var ciudades =document.getElementById("ciudades");

        if(paises.selectedIndex==1){
            array= ["Bogota","Cali","Medellin","Manizalez","Pereira"];
            
        }

        else if(paises.selectedIndex==2){
            array= ["Buenos Aires","Ciudad de Santa Fe","La Plata","Mar del Plata","Rosario"];
        }

        else if(paises.selectedIndex==3){
            array= ["Santiago de Chile","Iquique","Calama","Temuco","Punta Arenas"];
        }

        else if(paises.selectedIndex==4){
            array= ["Montevideo","Las Piedras","Santa Lucia ","Bella Unión","La Paloma"];
        }

        for(let numero=1;numero<array.length;numero++)
            ciudades.options[numero].text = array[numero];
    });
}