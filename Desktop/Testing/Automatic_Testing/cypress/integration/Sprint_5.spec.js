describe('Search using filter',function(){
    it('Succesfully browser add-to-cart page and can include the number of beers',function(){
     cy.visit('http://localhost:5000/home')
     cy.get('input[name=products]').type('Nepal Ice').clear();

     cy.get('select')
     .select('Highest to lowest');
     
    })
  
})
describe('Search in advance',function(){
    it('S',function(){
     
        cy.get('input[name=topsearch]').type('Nepal ice'); 

    })
})