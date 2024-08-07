'use client'

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
import { useEffect, useState } from 'react'
import { useAccountEditContext } from './context/accountEditContext'
import { updateUser } from '@/lib/update/user/updateUser'
import Upload from '@/components/general/upload/Upload'
import { uploadFile } from '@/lib/upload/file/uploadFile'
import { checkUsername } from '@/lib/check/username/checkUsername'
import { LoaderCircle } from 'lucide-react'
import { useUserStore } from '@/state/user/store'

const formSchema = z.object({
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  username: z.string().min(1),
  email: z.string().email(),
  image: z.string().url(),
})

export default function AccountEditForm() {
  const user = useUserStore((state) => state.user)
  const { setOpen } = useAccountEditContext()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState<File | null>(null)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
      image: '',
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    const url = image
      ? `${process.env.NEXT_PUBLIC_SUPABASE_IMAGES_URL}${await uploadFile(image, 'images', `${user.id}/image.jpg`)}?time=${Date.now()}`
      : user.image
    await updateUser(user, { ...values, image: url })
    setLoading(false)
    setOpen(false)
  }

  useEffect(() => {
    async function asyncCheckUsername() {
      if (!(await checkUsername(user, form.getValues('username'))))
        form.setError('username', { message: 'Username already taken' })
    }
    asyncCheckUsername()
  }, [form])
  if (!user) return null
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center gap-8"
        >
          <div className="flex w-full flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem className="w-full space-y-1">
                    <FormLabel className="font-larken text-xl">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        type="text"
                        className="border-border selection:bg-border bg-dark placeholder:text-light border text-white shadow-none"
                        defaultValue={user.first_name}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem className="w-full space-y-1">
                    <FormLabel className="font-larken text-xl">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        type="text"
                        className="border-border selection:bg-border bg-dark placeholder:text-light border text-white shadow-none"
                        defaultValue={user.last_name}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-1">
                      <FormLabel className="font-larken text-xl">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="username"
                          type="text"
                          className="border-border selection:bg-border bg-dark placeholder:text-light border text-white shadow-none"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-1">
                      <FormLabel className="font-larken text-xl">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="example@mail.com"
                          type="email"
                          className="border-border selection:bg-border bg-dark placeholder:text-light border text-white shadow-none"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <Upload image preview={user.image} setImage={setImage} />
            </div>
          </div>
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="hidden w-full space-y-1">
                <FormLabel className="font-larken text-xl">Image</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Image URL"
                    type="text"
                    className="border-border selection:bg-border bg-dark placeholder:text-light border text-white shadow-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex w-full flex-col gap-4">
            <Button type="submit" className="bg-light w-full" variant="base">
              Update Password
            </Button>
            <Button
              type="submit"
              className="w-full bg-accent"
              onClick={() => {
                onSubmit(form.getValues())
              }}
            >
              {!loading ? 'Save' : <LoaderCircle className="animate-spin" />}
            </Button>
          </div>
        </form>
      </Form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}
