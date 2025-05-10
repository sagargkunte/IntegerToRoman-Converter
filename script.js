let input = document.querySelector('#number');
const start = () => {
    if(!input.value) {
        document.getElementById('output').innerHTML = "Please enter a valid number";
        return;
    }
    if(parseInt(input.value)<0) {
        document.getElementById('output').innerText = "Please enter a number greater than or equal to 1";
        return;
    }
    if(parseInt(input.value) >= 4000) {
        document.getElementById('output').innerHTML = "Please enter a number less than or equal to 3999";
        return;
    }
    let num = input.value;
    const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const sym = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let roman = "";
    for(let i=0;i<val.length;i++) {
        while(num >= val[i]) {
            num = num-val[i];
            roman = roman + sym[i];
        }
    }
    if(roman) {
        document.getElementById('output').innerHTML = `${roman}`;
        return;
    }
}