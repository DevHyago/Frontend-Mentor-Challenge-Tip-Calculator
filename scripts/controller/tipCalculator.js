class TipCalculator{
   constructor(bill, percentageTip, numberOfPeople){
      this._bill = bill;
      this._percentageTip = percentageTip;
      this._numberOfPeople = numberOfPeople;
   }

   //Get's and Set's
   get bill(){
      return this._bill;
   }

   set bill(value){
      this._bill = value;
   }

   get percentageTip(){
      return this.percentageTip;
   }

   set percentageTip(value){
      this._percentageTip = value;
   }

   get numberOfPeople(){
      return this._numberOfPeople;
   }

   set numberOfPeople(value){
      this._numberOfPeople = value;
   }

   //Methods
   getTipAmount(){
      return `$ ${(this._percentageTip / 100 * this._bill).toFixed(2)}`;
   }

   getTotalTip(){
      return `$ ${((this._percentageTip / 100 * this._bill) * this._numberOfPeople).toFixed(2)}`;
   }

}