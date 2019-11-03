describe ('Browse product in home page', function(){
    it('Successfully browswe  home page',function(){
        cy.visit('http://localhost:5000/home')// visiting the home page

    })
    it('Successfully browswe product in home page', function(){
        cy.get('a').eq(1) .click()  
    })
});

describe('View the full Description of prodct while click', function(){
    it('Successfully full description is display',function(){
        cy.visit('http://localhost:5000/home')// visting home page for displaying full description for product
        cy.get('.img-fluid').eq(1)
        .click({force :true}) ;
    
    })
})


describe('Register page', function() {
    it('successfully loads', function() {
      cy.visit('http://localhost:5000/home') // change URL to match your dev URL
    })
    it('Go to register page', function() {
        cy.visit('http://localhost:5000/register'); // change URL to match your dev URL
        
      });
      it('New user can register',function(){
        cy.get('input[name=name]').type('saurav');
        cy.get('input[name=phoneno]').type('4561237890');
        cy.get('input[name=email]').type('s@s.com');
        cy.get('input[name=address]').type('katm');
        cy.get('input[name=password]').type('test@123');
        cy.get('input[name=dob]').type('2019-08-07');
        // cy.get('button[id=register]').click();
      });

  })

  describe('Login page', function() {
    it('successfully login', function() {
      cy.visit('http://localhost:5000/home') // change URL to match your dev URL
    })
    it('Go to register page', function() {
        cy.visit('http://localhost:5000/login'); // change URL to match your dev URL
        
      });
      it('User can Login',function(){
        cy.get('input[name=phoneno]').type('4561237890');
        cy.get('input[name=password]').type('test@123');
        cy.get('button#login').click();
        cy.visit('http://localhost:5000/home');
      });

   
      
  })

describe('Add item to add-to-cart after clicking the icon',function(){
    it('Succesffully added to add-to-chart',function(){
    cy.get('.add-to-cart').eq(1)
    .click() 
})
})

  
 