function selectElement(element){
   return document.querySelector(element);
}
function selectElementAll(element){
   return document.querySelectorAll(element);
}

//selected tip 
let selectedTip = 0;
let listPercentage = selectElementAll('.selected-percent ul li');

for(let i = 0; i < listPercentage.length-1; i++){
   listPercentage[i].addEventListener('click', (e) => {
      selectElement('.selected-percent ul li.selected').classList.remove('selected');
      listPercentage[i].classList = 'selected';
      selectedTip = parseInt(listPercentage[i].innerHTML.substring(0, listPercentage[i].innerHTML.length-1));
   });
}



function execCalc(){
   let bill = selectElement('#bill').value;
   let numberOfPeople = selectElement('#numberPeople').value;

   let selectedTipCustom =  selectElement('.selected-percent ul li input').value;
   if(selectedTipCustom){
      selectedTip = selectedTipCustom;
   }
   
   let tipCalculator = new TipCalculator(bill, selectedTip, numberOfPeople);


   selectElement('#tip-amount').innerHTML = tipCalculator.getTipAmount();
   selectElement('#total').innerHTML = tipCalculator.getTipAmount();
   
}




//Events
selectElement('#numberPeople').addEventListener('keyup', e => {
   if(e.key == 'Enter'){
      execCalc();
   }
});