const konum = document.querySelector('.konum');
const saat = document.querySelector('.saat');
const goster = document.querySelector('#goster');

const url = "https://worldtimeapi.org/api/timezone";
async function konumgetir(){
    await axios.get('https://worldtimeapi.org/api/timezone').then(veri=>{
    let data= veri.data;
    data.forEach(item=>{
        
        konum.innerHTML+=`<option>${item}</option`;

    });
    });
}

function dateConvert(mixdate){
    let newdate = mixdate.split('.')[0];
    newdate = newdate.split('T');
    return newdate[1] +' Tarih :' + newdate[0];
}

konumgetir();

goster.addEventListener('click',e=>{

    if(!konum.selectedIndex == 0){
        saatgetir(konum.options[konum.selectedIndex].text);
    }
    e.preventDefault();
});
async function saatgetir(yer){

    await axios.get(url+'/'+yer).then(veri=>{
        saat.innerHTML = dateConvert(veri.data.datetime);
        saat.style.display = "block";
    });
}



