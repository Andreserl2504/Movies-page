import z from 'zod'

const LogSingSchema = z.object({
  userID: z.string().uuid({
    invalid_type_error: 'Invalid UUID Type'
  }),
  username: z.string().nullable({
    invalid_type_error: 'Invalid Username'
  }),
  email: z.string().email().toLowerCase().nullable({
    invalid_type_error: 'Invalid Email'
  }),
  password: z.string().nullable({
    invalid_type_error: 'Invalid Password Type'
  }),
  token: z.boolean({
    invalid_type_error: 'Invalid Data Type'
  })
})

export function validInfoForm(object) {
  return LogSingSchema.safeParse(object)
}
