var expect = chai.expect;


describe('Week06Project', function () {
    describe('Card class', function () { // describe the test for the card class 
    it('should create a cards with face, suit, and the value of the card', function () { // this is the test case and what it should do 
      var card = new Card('Clubs', 'King', 14); // create an instance of card w/ suit, face, and card value
      
      expect(card.suit).to.equal('Clubs'); 
      expect(card.face).to.equal('King');
      expect(card.value).to.equal(14); 

      // checks to see if the card class creates the card correctly 

    });

    });
   
  });

  
  
  
  
  
  
  
  
  
  