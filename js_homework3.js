function pow(number, power){
    let result = number
    if(typeof number != 'number' || typeof power != 'number'){
        return 'Число та ступінь мають бути типу number'
    } 
    else if(power === 0){
        return 1
    }
    else if(power > 0){
        if(power < 1){ //Перевіряю шо ступінь від 0 до 1, бо якшо в цьому діапозоні то це корінь
            if(number < 0){ 
                return 'Не можна брати корінь від відємного числа'
            } else{
            return number ** power //Я не знав як ще обробити кейс коли ступінь дробна без **
            }
        }
        while(power > 1){ //В цьому циклі зводжу у ступінь якщо ступінь ціле позитивне число
            result = result * number
            power--
        }
        return result
    }
    else if(power < 0){
        if(power > -1){ //Перевіряю шо ступінь від -1 до 0, бо якшо в цьому діапозоні то це корінь
            if(number < 0){
                return 'Не можна брати корінь від відємного числа'
            } else{
            return 1 / number ** (power * -1) //Так само не знав як без **
            }
        }
        while(power < -1){ //В цьому циклі зводжу у ступінь якщо ступінь відємне ціле число
            result = result * number
            power++
        }
        return 1 / result
    }
    else {
        console.log('Десь помилка')  
    }
}

//console.log(pow(2,1.5)) Не зміг придумати як робити коли ступінь не ціле число більше 1, або менше -1, там математично складно
//Коли ступінь ціле позитивне або відємне число зробив без ** та функцій які не розбирали

console.log(pow(2, 3))
console.log(pow(2,-3))
console.log(pow(-2,3))
console.log(pow(-2,-3))
console.log(pow(1024,0))
console.log(pow(2,'3'))
console.log(pow('2',3))
console.log(pow('2','3'))
console.log(pow(2+2,2+1))
console.log(pow(0.5,2))
console.log(pow(0.5,0.5))
console.log(pow(3,0.5))
console.log(pow(3,-0.3))
console.log(pow(-3,0.5))
console.log(pow(0.5,-0.5))
console.log(pow(-0.5,0.5))
console.log(pow(100,0.3))
console.log(pow(100,1))
console.log(pow(3,-0.3))