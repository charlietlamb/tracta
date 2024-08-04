import { CloudUpload } from 'lucide-react'
import Image from 'next/image'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'

export default function Upload({
  preview,
  setImage,
  image = false,
}: {
  preview: string
  setImage: Dispatch<SetStateAction<File | null>>
  image?: boolean
}) {
  function handleUpload(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return
    const file = e.target.files[0]
    setImage(file)
    setUrl(URL.createObjectURL(file))
  }
  const [url, setUrl] = useState<string>(preview)
  return (
    <div className="group relative z-20 m-4 aspect-square w-full cursor-pointer">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 overflow-hidden rounded-full bg-black/50 text-center text-white opacity-0 group-hover:opacity-100">
        <CloudUpload size={32} />
        Upload Image
      </div>
      <Image
        src={url}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="relative z-0 rounded-full border-2 border-black shadow-base"
        alt={`Tracta User Profile Image Preview`}
      />
      <input
        type="file"
        accept={image ? 'image/*' : ''}
        className="absolute inset-0 z-20 cursor-pointer opacity-0"
        onChange={(e) => handleUpload(e)}
      />
    </div>
  )
}
