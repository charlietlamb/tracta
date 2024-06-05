'use client'

import { useUser } from "@/lib/slice/user/useUser";
import Image from "next/image";

export default function AccountProfilePicture() {
  const user = useUser();
  return (
     <div className="relative size-16 rounded-full">
        <Image
          src="https://avatar.iran.liara.run/public"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-full"
          alt={`${user.first_name} ${user.last_name} tracta profile image`}
        />
      </div>
  )
}
