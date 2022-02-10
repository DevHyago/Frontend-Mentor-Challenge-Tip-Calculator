function selectElement(element){
   return document.querySelector(element);
}
function selectElementAll(element){
   return document.querySelectorAll(element);
}

let buttonError = document.createElement('p');
buttonError.classList = 'error';

//function multiples events
function addEventListenerAll(element, events, fn){
   events.split(' ').forEach(event =>{

      element.addEventListener(event, fn, false);

   });
}

//Events
addEventListenerAll(selectElement('#numberPeople'), 'keyup change', e => {
   if(e.key == 'Enter' || e.type == 'change'){
      execCalc();

   }
});


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
   let bill = parseFloat(selectElement('#bill').value);
   let numberOfPeople = parseInt(selectElement('#numberPeople').value);

   let selectedTipCustom =  parseFloat(selectElement('.selected-percent ul li input').value);
   if(selectedTipCustom){
      selectedTip = selectedTipCustom;
   }

   if(!bill || bill < 0 || selectedTip <= 0 || !numberOfPeople || numberOfPeople < 0){
      alert('All fields are mandatory');
      resetInputs()
      return false;
   }   
   let tipCalculator = new TipCalculator(bill, selectedTip, numberOfPeople);


   selectElement('#tip-amount').innerHTML = tipCalculator.getTipAmount();
   selectElement('#total').innerHTML = tipCalculator.getTotalTip();

   buttonReset.style.backgroundColor = 'var(--strong-cyan)';
   buttonReset.style.cursor = 'pointer';
   buttonReset.addEventListener('click', resetInputs);
}


//removing tip input select class
selectElement('.selected-percent ul li input').addEventListener('click', () => {
   if(selectElement('.selected-percent ul li.selected')) selectElement('.selected-percent ul li.selected').classList.remove('selected');
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