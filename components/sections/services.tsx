import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#E9DEFF] flex justify-center items-center">
      <div className="container px-4 md:px-6 max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1E0044] font-montserrat">My Services</h2>
            <p className="text-lg text-gray-700 font-montserrat">
              I offer a comprehensive range of services to help you bring your digital vision to life.
            </p>
            <Button className="bg-[#8338EC] hover:bg-[#B923FF] text-white rounded-full px-8 py-3 text-lg font-montserrat">
              View All Services
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-[#1E0044] text-white rounded-3xl p-6 shadow-lg">
              <CardContent className="space-y-4 p-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold font-montserrat">Web Design</h3>
                  <Link href="#" className="text-[#B923FF] hover:text-[#8338EC] transition-colors" prefetch={false}>
                    <ArrowUpRightIcon className="h-5 w-5" />
                  </Link>
                </div>
                <p className="text-gray-300 text-base">
                  Crafting visually stunning and intuitive website interfaces that captivate your audience.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#1E0044] text-white rounded-3xl p-6 shadow-lg">
              <CardContent className="space-y-4 p-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold font-montserrat">Web Development</h3>
                  <Link href="#" className="text-[#B923FF] hover:text-[#8338EC] transition-colors" prefetch={false}>
                    <ArrowUpRightIcon className="h-5 w-5" />
                  </Link>
                </div>
                <p className="text-gray-300 text-base">
                  Building robust and scalable web applications using the latest technologies and best practices.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#1E0044] text-white rounded-3xl p-6 shadow-lg">
              <CardContent className="space-y-4 p-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold font-montserrat">UI/UX Design</h3>
                  <Link href="#" className="text-[#B923FF] hover:text-[#8338EC] transition-colors" prefetch={false}>
                    <ArrowUpRightIcon className="h-5 w-5" />
                  </Link>
                </div>
                <p className="text-gray-300 text-base">
                  Designing seamless and enjoyable user experiences that drive engagement and satisfaction.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#1E0044] text-white rounded-3xl p-6 shadow-lg">
              <CardContent className="space-y-4 p-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold font-montserrat">Branding</h3>
                  <Link href="#" className="text-[#B923FF] hover:text-[#8338EC] transition-colors" prefetch={false}>
                    <ArrowUpRightIcon className="h-5 w-5" />
                  </Link>
                </div>
                <p className="text-gray-300 text-base">
                  Developing strong brand identities that resonate with your target audience and stand out.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowUpRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}
