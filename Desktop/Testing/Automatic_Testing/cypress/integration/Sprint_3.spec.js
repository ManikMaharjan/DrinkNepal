describe('Admin is able to edit the product',function(){
    it('Successfully product is edite',function(){
cy.visit('http://localhost:5000/views/dashboard')
cy.get('button[id=prod_edit]').eq(1).click({force:true})
cy.get('input[name=product_name]')
.clear({force:true}) 
cy.get('input[name=product_name]').eq(0)
.type('manik');
cy.get('button[id=addprod]').eq(0).click({multiple:true});



// cy.get('input[name=product_name]')
// .text('manik') 
    })
})