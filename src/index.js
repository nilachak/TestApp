'use strict';
const express = require('express');
const app = express();
const router = require('./router');

app.use(router);

app.get('/', function (req, res) {
  res.send('Node App');
});

app.listen(3000, () => {
    console.log('Running on the port 3000...');
});

it(name, () => {
        cy.wait(delayBetweenTests)
        cy.visit(
          `${baseUrl}?uid=${partyUid}&e=${email}&p=${program}`
        )

        cy.get('h1').should('exist')
        cy.get('p')
          .should('exist')
          .and('have.length', 3)
        cy.get('p').should('have.class', 'opt-ikea-intro')

        cy.get('button')
          .should('exist')
          .click()

      })
