function selectElement(element){
   return document.querySelector(element);
}
function selectElementAll(element){
   return document.querySelectorAll(element);
}

let buttonReset = selectElement('#reset');

//selected tip 
let selectedTip = 0;
let listPercentage = selectElementAll('.selected-percent ul li');

for(let i = 0; i < listPercentage.length-1; i++){
   listPercentage[i].addEventListener('click', (e) => {
      if(selectElement('.selected-percent ul li.selected')){
         selectElement('.selected-percent ul li.selected').classList.remove('selected');
      }
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

   buttonReset.style.backgroundColor = 'var(--strong-cyan)';
   buttonReset.style.cursor = 'pointer';
   buttonReset.addEventListener('click', resetInputs);
}


//removing tip select class
selectElement('.selected-percent ul li input').addEventListener('click', () => {
   selectElement('.selected-percent ul li.selected').classList.remove('selected');
});

//reset inputs
function resetInputs(){
   if(selectElement('.selected-percent ul li.selected')){
      selectElement('.selected-percent ul li.selected').classList.remove('selected');
   }
   selectElement('#bill').value = '';
   selectElement('#numberPeople').value = '';
   buttonReset.style.backgroundColor = 'var(--dark-grayish-cyan)';
   buttonReset.style.cursor = 'auto';
   buttonReset.removeEventListener('click', resetInputs);
}

//Events
selectElement('#numberPeople').addEventListener('keyup', e => {
   if(e.key == 'Enter'){
      execCalc();
   }
});