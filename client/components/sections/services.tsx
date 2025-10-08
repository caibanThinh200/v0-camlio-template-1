"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Services() {
  return (
    <section className="py-10">
      <div className="grid md:grid-cols-2 gap-5">
        {/* Development Card */}
        <Card className="bg-gradient-to-br from-[#8338EC] to-[#B923FF] border-0 text-white">
          <CardContent className="p-8 md:p-12 px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Development</h2>
            <p className="text-white/90 mb-8 leading-relaxed">
              I specialize in developing websites using Webflow, a powerful platform that allows for easy customization
              and responsive design. I have experience building websites for a variety of industries, from small
              businesses to large corporations. My focus is always on creating functional and smooth websites that
              generate traffic.
            </p>
            <div className="flex gap-3">
              <Badge variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                Webflow
              </Badge>
              <Badge variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                Development
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Art Direction Card */}
        <Card className="bg-gradient-to-br from-[#B923FF] to-[#8338EC] border-0 text-white">
          <CardContent className="p-8 md:p-12 px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Art direction</h2>
            <p className="text-white/90 mb-8 leading-relaxed">
              Art direction is the process of bringing together all of the creative elements of a project to create a
              cohesive visual identity. I work with clients to develop a concept and bring it to life through art
              direction. I believe that attention to detail and a clear vision are key to creating truly memorable
              designs.
            </p>
            <div className="flex gap-3">
              <Badge variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                Concept design
              </Badge>
              <Badge variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                Brand identity
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
