import { test, expect } from 'vitest'
import request from 'supertest'

import server from '../server/server.js'

test('/should return a greeting', async () => {
    const response = await request(server).get('/') 
    expect(response.text).toMatch(/Hello world/)
})

test('/compliment should return a compliment', async () => {
    const response = await request(server).get('/compliment') 
    expect(response.text).toMatch(/You look great today/)
})

test('/wrong-url should return 404', async () => {
    const response = await request(server).get('/wrong-url')
    expect(response.statusCode).toBe(404)
})

test('/profile?name=silvia should return silvia profile', async () => {
    const response = await request(server).get('/profile?name=silvia')
    expect(response.statusCode).toBe(200)
    expect(response.text).toMatch(/Silvia's Profile/)
})

test('/profiles/2 should return sampson profile', async () => {
    const response = await request(server).get('/profiles/2')
    expect(response.statusCode).toBe(200)
    expect(response.text).toMatch(/Sampson's Profile/)
})

test('/profiles/4 should return 404', async () => {
    const response = await request(server).get('/profiles/4')
    expect(response.statusCode).toBe(404)
})

test('/get-name should a form to enter name', async () => {
    const response = await request(server).get('/get-name')
    expect(response.statusCode).toBe(200)
    expect(response.text).toMatch(/Write your name/)
})

test('/named-compliment should return a compliment to post requests', async () => {
    const response = await request(server).post('/named-compliment').set('Content-Type', 'application/x-www-form-urlencoded').send('name=Peter')
    expect(response.statusCode).toBe(200)
    expect(response.text).toMatch(/You are special, Peter/)
  })

  