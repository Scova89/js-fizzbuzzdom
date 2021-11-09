// alert('ciao')
const box = document.getElementById('box')
let z = 0

for(let i = 1; i <= 100; i++){
    if(i % 3 == 0){
        x= 'Fizz';
    }else if(i % 5 == 0){
        x= 'Buzz';
    }else if(i % 15 == 0){
        x= 'FizzBuzz';    
    }else{
        x=i; 
    }
    console.log(x);
}
