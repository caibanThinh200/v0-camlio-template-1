"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ServicesBlockComponent } from "@/types/sanity"

interface ServicesProps {
  data: ServicesBlockComponent;
}

export default function Services({ data }: ServicesProps) {
  const { serviceCards } = data;

  // Alternate gradient styles
  const gradients = [
    "bg-gradient-to-br from-[#8338EC] to-[#B923FF]",
    "bg-gradient-to-br from-[#B923FF] to-[#8338EC]",
  ];

  return (
    <section className="py-10">
      <div className="grid md:grid-cols-2 gap-5">
        {serviceCards?.map((card, index) => (
          <Card
            key={card._key}
            className={`${gradients[index % 2]} border-0 text-white`}
          >
            <CardContent className="p-8 md:p-12 px-6 md:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{card.title}</h2>
              <p className="text-white/90 mb-8 leading-relaxed">
                {card.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {card.skills?.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
