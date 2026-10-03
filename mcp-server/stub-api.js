// Заглушка API товаров и заказов для тестирования MCP-сервера.
// Запуск: node stub-api.js   (порт 4001)
import express from 'express'
const app = express()
app.use(express.json())

const products = [{ id: 'p1', name: 'Кружка', price: 500, description: 'Керамика' }]
const orders   = [{ id: 'o1', productId: 'p1', quantity: 2, status: 'new' }]

const find = (arr, id) => arr.findIndex(x => x.id === id)
const notFound = r => r.status(404).json({ error: 'not found' })

app.get('/products',     (_, r) => r.json(products))
app.post('/products', (q, r) => { const p = { id: 'p' + (products.length + 1), ...q.body }; products.push(p); r.status(201).json(p) })
app.get('/products/:id', (q, r) => { const i = find(products, q.params.id); i < 0 ? notFound(r) : r.json(products[i]) })
app.put('/products/:id', (q, r) => { const i = find(products, q.params.id); if (i < 0) return notFound(r); Object.assign(products[i], q.body); r.json(products[i]) })
app.delete('/products/:id', (q, r) => { const i = find(products, q.params.id); if (i < 0) return notFound(r); products.splice(i, 1); r.status(204).end() })

app.get('/orders',     (_, r) => r.json(orders))
app.post('/orders', (q, r) => { const o = { id: 'o' + (orders.length + 1), status: 'new', ...q.body }; orders.push(o); r.status(201).json(o) })
app.get('/orders/:id', (q, r) => { const i = find(orders, q.params.id); i < 0 ? notFound(r) : r.json(orders[i]) })
app.put('/orders/:id', (q, r) => { const i = find(orders, q.params.id); if (i < 0) return notFound(r); Object.assign(orders[i], q.body); r.json(orders[i]) })
app.delete('/orders/:id', (q, r) => { const i = find(orders, q.params.id); if (i < 0) return notFound(r); orders.splice(i, 1); r.status(204).end() })

app.listen(4001, () => console.log('Заглушка API слушает порт 4001'))
