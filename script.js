const celcius =document.querySelector('#celcius');
const kelvin=document.querySelector('#kelvin');
const farenheit=document.querySelector('#farenheit');


//celcius to farenheit=>(0deg c*9/5)+32=32deg F
//celcius to kelvin =>0degcelcius +273.15;
celcius.addEventListener('input',function(){
    let c=parseFloat(celcius.value);
    let f=(c*9/5)+32;
    let k=c+273.12;
    farenheit.value=f;
    kelvin.value=k;

})

//farenheit to celcius =>(32 deg farenheit -32)*5/9=0deg celcius;
//farenheit to kelvin =>(32 deg F -32)*5/9+273.15=273.15k;

farenheit.addEventListener('input',function (){
    let f=parseFloat(farenheit.value);
    let c=(f-32)*5/9;
    let k=(f-32)*5/9+273.15;
    celcius.value=c;
    kelvin.value=k;
})

//kelvin to celcius =>0k-273.15=-273.1c
//kelvin to farenheit=>(0k-273.15)*9/5+32=-459.7deg farenheit

kelvin.addEventListener('input',function(){
    let k=parseFloat(kelvin.value);
    let c=k-273.15;
    let f=(k-273.15)*9/5+32;
    celcius.value=c;
    farenheit.value=f;
})