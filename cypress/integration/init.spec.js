import {operate} from "../../src/helpers/calc-operation"

describe('Calculation', () => {
  const five = '5'
  const ten = '10'

  it('Addition', () => {
    expect(operate(five,five,'+')).to.equal('10')
    expect(operate(five,ten,'+')).to.equal('15')
    expect(operate('.1',ten,'+')).to.equal('10.1')
  })
  it('Subtraction', () => {
    expect(operate(five,five,'-')).to.equal('0')
    expect(operate(five,ten,'-')).to.equal('5')
  })
  it('Division', () => {
    expect(operate(five,five,'/')).to.equal('1')
    expect(operate(five,ten,'/')).to.equal('2')
  })
  it('Multiplication', () => {
    expect(operate(five,five,'*')).to.equal('25')
    expect(operate(five,ten,'*')).to.equal('50')
  })
  it('Per cent', () => {
    expect(operate(five,five,'%')).to.equal('0')
    expect(operate(five,'6','%')).to.equal('1')
  })
})

describe('History Test', () => {
  it('Initial state TRUE - History should be opened', () => {
    cy.visit('http://localhost:3030/calculator-home')
    cy.get('.history').should("have.css",'left', '0px')
  })
  it('Should be complex sum on history', () => {
    cy.visit('http://localhost:3030/')
    cy.contains('5').click()
    cy.contains('+').click()
    cy.contains('6').click()
    cy.contains('/').click()
    cy.contains('3').click()
    cy.contains('=').click()
    cy.get('.historyContainer div').should("have.text",'5+6/3')
  })
  it('Should hide history', () => {
    cy.visit('http://localhost:3030/')
    cy.contains('Close History').click()
    cy.contains('Open History')
    cy.get('.history').should("have.css",'left', '1000px')
  })
  it('Should clear history', () => {
    cy.visit('http://localhost:3030/#/settings')
    cy.contains('Clear All History').click()
    cy.get('.historyContainer').should("not.have.length")
  })
})

describe('Link Test', () => {
  it('To HOME link', () => {
    cy.visit('http://localhost:3030/')
    cy.contains('Home').click()
    cy.url().should('include', 'home')
  })
  it('To SETTING link', () => {
    cy.visit('http://localhost:3030/')
    cy.contains('Setting').click()
    cy.url().should('include', 'settings')
  })
})

describe('Display', () => {
  it('Should be "0" on display', () => {
    cy.visit('http://localhost:3030/')
    cy.get('.display').should("have.text",'0')
  })
  it('Should be "0" on display with "C"', () => {
    cy.visit('http://localhost:3030/')
    cy.contains('C').click()
    cy.get('.display').should("have.text",'0')
  })
  it('Should be "0" on display with "CE"', () => {
    cy.visit('http://localhost:3030/')
    cy.contains('CE').click()
    cy.get('.display').should("have.text",'0')
  })
  it('Should be number button on display', () => {
    cy.visit('http://localhost:3030/')
    cy.contains('5').click()
    cy.get('.display').should("have.text",'5')
  })
  it('Should be sum on display', () => {
    cy.visit('http://localhost:3030/')
    cy.contains('5').click()
    cy.contains('+').click()
    cy.contains('6').click()
    cy.contains('=').click()
    cy.get('.display').should("have.text",'11')
  })
  it('Should be complex sum on display', () => {
    cy.visit('http://localhost:3030/')
    cy.contains('5').click()
    cy.contains('+').click()
    cy.contains('6').click()
    cy.contains('/').click()
    cy.contains('3').click()
    cy.contains('=').click()
    cy.get('.display').should("have.text",'7')
  })
  it('Should be changed sing on display', () => {
    cy.visit('http://localhost:3030/')
    cy.contains('5').click()
    cy.contains('+-').click()
    cy.get('.display').should("have.text",'-5')
  })
})

describe('Settings', () => {
  it('Should be colored theme', () => {
    cy.visit('http://localhost:3030/#/settings')
    cy.get('.chosen').click()
    cy.contains('Colored theme').click()
    cy.get('body').should("have.css",'background-color', 'rgb(192, 108, 132)')
  })
  it('Should be dark theme', () => {
    cy.visit('http://localhost:3030/#/settings')
    cy.get('.chosen').click()
    cy.contains('Dark theme').click()
    cy.get('body').should("have.css",'background-color', 'rgb(106, 107, 123)')
})
  it('Should be light theme', () => {
    cy.visit('http://localhost:3030/#/settings')
    cy.get('.chosen').click()
    cy.contains('Light theme').click()
    cy.get('body').should("have.css",'background-color', 'rgb(255, 255, 255)')
  })
})
