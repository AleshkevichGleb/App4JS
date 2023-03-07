"use strict"

//task1
{
    let arr = [1,2,3,4,5];

    for(let elem of arr){
        console.log(elem);
    }
    console.log("\n")
}

//task2 
{
    let arr = [-2, -1, -3, -15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
    console.log("Массив", arr, "\nЭлементы больше -3 и меньше -10:")
    
    for(let elem of arr){
        if(elem > -10 && elem < -3){
            console.log(elem)
        }
    }
    console.log("\n")
}


//task3
{
    let count = 0;
    let result = 0;
    let arr = [];
    for(let i = 27; i < 57; i++){
        arr[count] = i;
        result += arr[count];
        count++;
    }
    console.log(arr)
    console.log("Сумма элементов:", result);
    //console.log("Сумма элементов:", arr.reduce((a,b)=> a + b));
    console.log("\n")

    let a = 26
    arr = []
    while(a < 56){
        a++;
        arr.push(a)
    }
    console.log(arr)
    console.log("\n")
}

//task4
{
    let arr = ['10', '20', '30', '50', '235', '3000']
    for(let elem of arr){
        if(elem[0] === '1' || elem[0] == '2' || elem[0] == '5'){
            console.log(elem)
        }
    }
}

//task5 
{
    let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

    for(let day of days){
        if(day === 'СБ' || day === 'ВС'){
            document.write('<b>',day,'<b/><br/>')
        }
        else{
            document.write(day, '<br/>')
        }
    }
    console.log("\n")
}

//task6
{
    let arr = [];
    let num = 0;
    
    for(let i = 0; i < 10; i++){
        num = (Math.floor(Math.random()* 20 + -10))
        arr[i] = num
    }

    console.log(arr)
    arr.push('lastElem');
    console.log(arr)
    console.log("Последеий элемент: ",arr[arr.length-1])
    console.log("\n")
}


//task7
{
    // let message;
    // let arr = [];
    // for(let i = 0; ;i++){
    //     message = prompt('Введите элемент массива');
    //     if(message === '') break;
    //     arr[i] = +message;
    // }
    // console.log(arr);
    // arr.sort((a,b)=> a - b)
    // console.log(arr)
    // console.log("\n")
}

//task8
{
    let arr = [12, false, 'Текст', 4, 2, -5, 0]
    console.log("Исходный массив:");
    
    for(let i = 0; i<arr.length; i++){
        console.log(arr[i])
    }
    console.log("\n")

    arr.reverse();
    let i = 0;

    console.log("Перевернутый массив:");
    while(i < arr.length){
        console.log(arr[i++])
    }

    console.log("\n")
}

//task9
{
    let arr = [1, 2, 5, ,34, ,'sdf', 6,,'sdg', ,4]
    let count = 0; 

    console.log("Массив: ", arr);

    for(let elem of arr){
        if(elem === undefined){
            count++;
        }
    }
    console.log("Количество пустых элементов = "+ count)
}

//task10 
{
    let firstNul;
    let lastNul;
    let arr = [12,4,2,0,2,45,23,54,32,0,12,4,0,22,21]
    let newArr = [];
    console.log("Исходный массив:", arr)
    for(let i = 0; i < arr.length; i++){
        if(arr[i]===0){
            firstNul = arr.splice()
        }
    }
    
    for(let i = arr.length; i > 0; i--){
        if(arr[i]===0){
            lastNul = arr[i]
        }
    }
    arr.concat(firstNul, lastNul)
    console.log(arr)
    
}


//task11
{
    // let getTriangle = () => {
    //     let arr = [];
    //     let sym = '^'
    //     let len = +prompt("Введите длину треугольника");
    //     for(let i = 0; i < len; i++){
    //         arr[i] = sym;
    //         document.write('<b>',arr.join(""),'<b/> </br>');
    //     }
    // }
    // getTriangle();
}
