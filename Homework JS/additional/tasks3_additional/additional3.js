// 1. Створити пустий масив та :
       // a. заповнити його 50 парними числами за допомоги циклу.
       // b. заповнити його 50 непарними числами за допомоги циклу.
       // c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
       // d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
 // 2. Вивести за допомогою console.log кожен третій елемен
 // 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
 // 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
 // 5. Вивести кожен елемент масиву, сусід справа якого є парним
  // EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
 // 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

 // 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
 // 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
 
 
 
 
  // a. заповнити його 50 парними числами за допомоги циклу.
  
				 let array = []
				 
				 for (let i = 1; i <=50; i++) {
					 if (i % 2 === 0) {
						 array.push(i)
					 }
				 }
				 
				
			 
			 
  // b. заповнити його 50 непарними числами за допомоги циклу.
  
				 for (let a = 1; a <=50; a++) {
							 if (a % 2 === 1) {
								 array.push(a)
							 }
						 }
						 
			
			 
			 
			 
  // c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
  
			  for (let b = 0; b < 20; b++) {
							  
								 array.push(Math.floor(Math.random() * 20))
							 }
						
						 
// console.log(array)

   // d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
   
   
   
			 // for (let c = 0; c < 20; c++) {
				 // if (array >= 8 &&  array <= 732) {
				// array.push(Math.floor(Math.random() * 20))
			 // }}
						
						 // console.log(array)
  
  // ??????????????????????????????????????????????
  
  
   // 2. Вивести за допомогою console.log кожен третій елемен
   
   for (let d of array) {
	   if (array[d] % 3 === 0) {
		   // console.log(array[d])
	   }
   }
   
    // 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
	
	 
   for (let e of array) {
	   if (array[e] % 2 === 0 && e % 3 === 0) {
		   // console.log(array[e])
	   }
   }
   
   
    // 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
	
	array2 = []
	
	for (let f of array) {
		if (array[f] % 3 === 0 && f % 2 === 0) {
			array2.push(array[f])
		}
	}
	// ???????????????????????????????????
	// console.log(array2)
	
	
	 // 5. Вивести кожен елемент масиву, сусід справа якого є парним
	 
	 
	 for (let g of array) {
		 if (array[g] === (array[g] % 2 === 0)) {
			 g++
		 //  console.log(array)
	 }
	}
	 
	// ??????????????????????
	
	
	 // 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
	 
	let check =  [100,250,50,168,120,345,188]
	
