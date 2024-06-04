import { login, signup } from '@/utils/supabase/actions'
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

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export default function Auth() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {}
  return (
    <div className="flex h-full min-w-[500px] flex-col items-center justify-center gap-8 p-16">
      <div className="flex w-full flex-col items-center gap-2">
        <h3 className="text-3xl font-heading">Let's get started</h3>
        <p>Log in or sign up.</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center space-y-8"
        >
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
                  <Input placeholder="password" type="password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Log In / Sign Up
          </Button>
          <AuthSeparator />
        </form>
      </Form>
    </div>
  )
}
