function checkProbabilityTheory(count){
    let countAtStart = count
    if(typeof count != 'number'){
        return 'Функція приймає тільки параметр типа number'
    }
    let even = 0 
    let odd = 0
    let resultingArray = [] //Це для себе, щоб перевірити чи правильно порахував які числа будуть генеруватись
    for(;count > 0; count--){
        let ramdomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100
        resultingArray.push(ramdomNumber)
        if(ramdomNumber % 2 === 1){
            odd++
        }else {
            even++
        }
    }
    let evenPercent = Math.round((even / countAtStart) * 100)
    let oddPercent = Math.round((odd / countAtStart) * 100)
    let result = 'Кількість згенерованих чисел: ' + countAtStart + '\nПарних чисел: ' + even +  '\nНе парних чисел: ' + odd + '\nВідсоток парних : ' + evenPercent + '%' + '\nВідсоток не парних : ' + oddPercent + '%' + '\nЧисла які були сгенеровані: ' + resultingArray
    return result
}

console.log(checkProbabilityTheory('23'));