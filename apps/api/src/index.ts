import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'


let counter = 0

const app = new Hono()

app.use('*', (c, next) => {
  const middleware = cors({
    origin: 'http://localhost:5173'
  })
  return middleware(c, next)
})

app.get('/', (c) => c.text('Hello Hono!'))

app.get('/counter', (c) => c.json({ counter }))
app.post('/counter', (c) => {
  console.log('increasing counter from', counter, 'to', counter + 1)
  counter++
  return c.json({ counter })
})

serve({
  fetch: app.fetch,
  port: 3001,
})
