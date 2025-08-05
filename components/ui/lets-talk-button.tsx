import Image from "next/image"
import Link from "next/link"

export default function LetsTalkButton() {
  return (
    <Link href="#" className="inline-block">
      <Image
        src="/images/let-s-talk-button.png"
        width={100}
        height={100}
        alt="Let's Talk button"
        className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-contain"
      />
    </Link>
  )
}
