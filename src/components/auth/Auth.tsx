import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import AuthSeparator from './AuthSeparator'
import AuthGoogle from './AuthGoogle'
import { useRouter } from 'next/navigation'
import AuthLegal from './AuthLegal'
import AuthHeading from './AuthHeading'
import { createClient } from '@/utils/supabase/client'
import { useState } from 'react'
import { insertUser } from '@/lib/insert/insertUser'
import { checkEmail } from '@/lib/check/email/checkEmail'

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .refine((password) => /[\W]/.test(password), {
      message:
        'Password must include a special character and at least 8 characters.',
    }),
})

export default function Auth() {
  const supabase = createClient()
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (await checkEmail(values.email)) {
      const response = await supabase.auth.signInWithPassword(values)
      if (!!response.data.user) return router.push('/account')
    } else {
      const response = await supabase.auth.signUp(values)
      if (response.error || !response.data.user) {
        setError(response.error?.message || JSON.stringify(response.error))
      } else {
        if (!response.data.user.email) return setError('Invalid email')
        insertUser(response.data.user.id, response.data.user.email)
      }
    }
  }
  return (
    <div className="flex h-full min-w-[500px] flex-col items-center justify-center gap-8 p-16 lg:w-[500px]">
      <AuthHeading />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center gap-8"
        >
          <div className="flex w-full flex-col gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-xl">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@mail.com"
                      type="email"
                      className="shadow-none"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-xl">Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="password"
                      type="password"
                      className="shadow-none"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <Button type="submit" className="w-full">
              Log In / Sign Up
            </Button>
            <AuthSeparator />
            <AuthGoogle />
          </div>
        </form>
      </Form>
      {error && <p className="text-red-500">{error}</p>}
      <AuthLegal />
    </div>
  )
}
