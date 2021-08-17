// interfaces
import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js'
import { Payment } from './classes/Payments.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

//form
const form = document.querySelector('.new-item-form') as HTMLFontElement
//inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

//list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()
  // intialize doc variable as requring the HasFormatter interface (Invoice or Payment)
  let doc: HasFormatter
  // whiich doc class is sued to make new doc depending on the "type drop-down"
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }

  list.render(doc, type.value, 'end')

  tofrom.value = ''
  details.value = ''
  amount.value = ''
})
