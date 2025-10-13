module.exports = {
  findOne: jest.fn(async ({ where }) => {
    // Simula um usuário já existente
    if (where.email === 'francisco@email.com') {
      return {
        id: 1,
        name: 'Francisco',
        email: 'francisco@email.com',
        password: '12345678',
      }
    }

    // Qualquer outro e-mail é considerado inexistente
    return null
  }),

  create: jest.fn(async (data) => ({
    id: Math.floor(Math.random() * 1000),
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  })),
}
