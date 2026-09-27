// Заглушка API товаров и заказов для тестирования MCP-сервера.
// Запуск: node stub-api.js   (порт 4001)
import express from 'express'
const app = express()
app.use(express.json())

const products = [{ id: 'p1', name: 'Кружка', price: 500, description: 'Керамика' }]
const orders   = [{ id: 'o1', productId: 'p1', quantity: 2, status: 'new' }]

app.get('/products',        (_, r) => r.json(products))
app.post('/products',    (q, r) => { const p = { id: 'p' + (products.length + 1), ...q.body }; products.push(p); r.status(201).json(p) })
app.get('/products/:id',    (q, r) => { const p = products.find(x => x.id === q.params.id); p ? r.json(p) : r.status(404).json({ error: 'not found' }) })
app.put('/products/:id',    (q, r) => { const p = products.find(x => x.id === q.params.id); if (!p) return r.status(404).json({ error: 'not found' }); Object.assign(p, q.body); r.json(p) })
app.delete('/products/:id', (q, r) => r.status(204).end())
app.get('/orders',          (_, r) => r.json(orders))
app.post('/orders',      (q, r) => { const o = { id: 'o' + (orders.length + 1), status: 'new', ...q.body }; orders.push(o); r.status(201).json(o) })
app.get('/orders/:id',      (q, r) => { const o = orders.find(x => x.id === q.params.id); o ? r.json(o) : r.status(404).json({ error: 'not found' }) })
app.put('/orders/:id',      (q, r) => { const o = orders.find(x => x.id === q.params.id); if (!o) return r.status(404).json({ error: 'not found' }); Object.assign(o, q.body); r.json(o) })
app.delete('/orders/:id',   (q, r) => r.status(204).end())

app.listen(4001, () => console.log('Заглушка API слушает порт 4001'))
