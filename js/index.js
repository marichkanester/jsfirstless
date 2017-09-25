// // alert("Hello");
//  var message='Hello World';
 
//  let newMessage= 'Hello New World';
//  const constMessage= 'Hello M World';
 

 
 
// //  Types


// let stringMessage="Message";
// let numberMessage=42;
// let boolMessage=true;
// let undef= undefined;
// let nullVar= null;
// let object= {};
// let sym=Symbol();
// let sum=(1+2+3+4)/5;
// sum=sum+stringMessage;
// alert(sum);
// let age=+prompt('Enter Your Age');
// // alert('your name is'+name);
//  let message= 'Your name'+age;
// // console.log(message);
// let nextAge=age+1

// document.write(message);

// function add(a, b){
// const result=a+b;
// return result;
// }
// const sum=add(10, 20);
// document.write(sum);

// function nnum(a, b, c){
//     const result=a+b+c;
//     return result;
// }
// const sum=nnum(5, 6, 4);
// document.write(sum);
// function checkAge(age){
//     if(age<=18){
//         return 'Child';
//         const left=18-age;
//     }
//     else{
//         return 'Adult';
//     }
// }
// const age=Number(prompt('Your age'));

// print(checkAge(age));


function print(val){
    document.write(val+'<br>');
}

    
    const a=Number(prompt('Enter a'));
    const b=Number(prompt('Enter b'));
    const c=Number(prompt('Enter c'));
    
    function discr(a, b, c){
        
        return (b*b)-(4*a*c);
    }
     function solve(a, b, c){
         const d=discr(a, b, c);
        if(d>0){
            const x1=(-b-Math.sqrt( d ))/2*a;
            const x2=(-b+Math.sqrt( d ))/2*a;
            return 'x1='+x1+'<br>'+'x2='+x2;
        }
        else if(d===0){
            const x=(-b)/2*a;
             return 'x='+x;
        }
        else{
            return 'No roots';
        }
    }
    const result=solve(a, b, c);
    print(result);
