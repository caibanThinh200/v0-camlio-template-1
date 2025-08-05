import Image from "next/image"
import Link from "next/link"

export default function LetsTalkButton() {
  return (
    <Link href="#" className="inline-block">
      <Image
        src="/images/let-s-talk-button.png"
        width={200}
        height={200}
        alt="Let's Talk button"
        className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-contain"
      />
    </Link>
  )
}
