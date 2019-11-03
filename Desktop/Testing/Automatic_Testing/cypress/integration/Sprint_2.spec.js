describe('Browse all the product in product page', function(){
    it('Sucessfully open product of drink nepal',function(){
        cy.visit('http://localhost:5000/home')// visting home page 
        cy.get('a[href="drinks.html"]').first().click() 
        // cy.visit('http://localhost:5000/drinks')

    })
})

describe('Browse sitan page in drinks nepal',function(){
    it('Succesfully open sitan page',function(){
        cy.get('a[href="sittan.html"]').first().click() 
    })
})

describe('Browse add-to-cart page and billing page',function(){
    it('Succesfully browser add-to-cart page and can include the number of beers',function(){
        cy.get('a[href="cart.html"]').first().click() 
        // cy.get('input[name=quantity]').type('5');
    })
})
 
describe('Admin able to add product in the website through admin pannel',function(){
    it('New product is added',function(){
        cy.visit('http://localhost:5000/views/dashboard')
        cy.get('button[id=add_prod]').click()
        cy.get('input[name=product_name]').eq(1)
        .type('Gorkha') 
        cy.get('select').eq(1)
        .select('Alcohol');
        cy.get('input[name=product_price]').eq(1)
        .type(250);
        cy.get('input[name=product_quantity]').eq(1)
            .type(5);
            cy.get('textarea')
            .eq(1)
            .parent()
            .type('manik');
            cy.get('button[id=addProd]').eq(1).click()
        })
    })

      



// const filename = '25426.png';
 
//     cy.fixture(fileName).then(fileContent => {
//       cy.get('[name="images"]', { force: true }).upload(
//         { force: true },
//         { fileContent, fileName, mimeType: 'application/pdf/png', encoding: 'base64' },
//         { subjectType: 'drag-n-drop', force: true },
//       );
//     });
// describe('User can log out',function(){
//      it('User caan Log out', function(){
//              cy.get('.nav-link') .eq(1)
//              .click()
//              cy.visit('http://localhost:5000/home')
            
//            });
           
// })

