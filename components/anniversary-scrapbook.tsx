"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll } from "framer-motion"
import {
  Heart,
  Sparkles,
  MessageCircle,
  Phone,
  Instagram,
  Camera,
  Smile,
  MapPin,
  Coffee,
  Moon,
  Star,
} from "lucide-react"
import { Card } from "@/components/ui/card"

export function AnniversaryScrapbook() {
  const [rizzScore, setRizzScore] = useState(0)
  const rizzMeterRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  // Rizz meter calculation based on scroll progress
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      // Scale from 0 to 100, then "break" at the end
      const score = Math.min(Math.floor(latest * 120), 100)
      setRizzScore(score)
    })
  }, [scrollYProgress])

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      {/* Floating Hearts Animation Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <FloatingHeart key={i} delay={i * 2} />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="relative inline-block mb-6">
            <Heart className="w-24 h-24 text-primary animate-pulse" fill="currentColor" />
            <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-accent tracking-tighter mb-4 text-balance">
            Happy 1 Year,
            <br />
            Obim!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium italic">
            "A little something from me to you to show a little bit of what abii how i feel towards you since i cannot afford the world, these are words i can give o but omo i just love you fr fr P.S. I’m still terrible at this, but you’re still stuck with me."
          </p>
        </motion.div>

        <motion.div
          className="absolute bottom-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Scroll a bit and try not <br /> to cringe or cry, pleaseeeeeeeeee!</p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-24 px-6 max-w-4xl mx-auto z-10">
        <h2 className="text-4xl font-black text-center mb-20 text-accent uppercase italic">Us this past year</h2>

        <div className="relative border-l-4 border-dashed border-primary/30 ml-4 md:ml-0 md:left-1/2">
          {/* Card 1: The Proposal */}
          <TimelineCard title="The Proposal" side="left" icon={<MessageCircle className="w-6 h-6" />}>
            <div className="flex flex-col gap-4">
              <img
                  src="/WhatsApp Image 2025-12-25 at 00.28.55.jpeg"
                  alt="Lockscreen Photo"
                  className="w-full h-full object-cover rounded-lg group-hover:grayscale-0 transition-all duration-500"
                />
              <div className="bg-muted p-4 rounded-2xl rounded-bl-none self-start max-w-[80%] border-2 border-primary/20">
                              
                <p> <i>Dont know how well you remember this day but i do</i></p>
                <p className="font-bold text-accent">"Want to be my bae?"</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-2xl rounded-br-none self-end max-w-[80%] border-2 border-primary">
                              <p><i> and the reply that started the beginning of my dream?</i></p>
                <p className="font-bold italic">"Jsyk you are terrible at this... But yes."</p>
              </div>
            </div>
          </TimelineCard>

          {/* Card 2: our first us */}
          <TimelineCard title="our first us" side="right" icon={<Heart className="w-6 h-6" />}>
            <div className="space-y-4">                                      
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-square rounded-lg overflow-hidden bg-accent/10 border-2 border-accent transform -rotate-3 hover:rotate-0 transition-transform">
                <img
                  src="WhatsApp Image 2025-12-25 at 00.28.56 (1).jpeg"
                  alt="Mustache Filter"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden bg-primary/10 border-2 border-primary transform rotate-6 hover:rotate-0 transition-transform">
                <img
                  src="WhatsApp Image 2025-12-25 at 00.28.54.jpeg"
                  alt="Hallway Perspective"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

              <div>

              </div>
              <p className="text-sm leading-relaxed italic text-muted-foreground">
                "This was the first photo we took together as 'us'. I still think back to this day knowing fully well i tried not to breathe too hard cause i thought it would drive you away... if only i had know."
              </p>
            </div>
          </TimelineCard>

          {/* Card 4: First Date Spot */}
          <TimelineCard title="Our First 'Date'" side="right" icon={<MapPin className="w-6 h-6" />}>
            <div className="space-y-4">
              <div className="aspect-video rounded-xl overflow-hidden bg-muted border-2 border-primary/20">
                <img src="20250903_112125_Original.jpg" alt="First Date Spot" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm font-medium text-muted-foreground italic">
                "I was so lost on everything that day, didnt feel it as right cause it wasnt the million naiara outing i had in my head but it was enough to make you laugh like we didnt have problems,\. i love how much i get to just be me with you, thank you obim."
              </p>
            </div>
          </TimelineCard>

          {/* Card 3: The Chaos */}
          <TimelineCard title="Randoms" side="left" icon={<Smile className="w-6 h-6" />}>
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-square rounded-lg overflow-hidden bg-accent/10 border-2 border-accent transform -rotate-3 hover:rotate-0 transition-transform">
                <img
                  src="WhatsApp Image 2025-12-25 at 00.28.57 (2).jpeg"
                  alt="Mustache Filter"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden bg-primary/10 border-2 border-primary transform rotate-6 hover:rotate-0 transition-transform">
                <img
                  src="WhatsApp Image 2025-12-25 at 00.28.56 (2).jpeg"
                  alt="Hallway Perspective"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-medium text-muted-foreground italic">how i love my princess</p>
            </div>
            <p className="mt-4 text-xs font-mono uppercase font-bold text-center bg-accent text-white py-1">
              ⚠️ Extreme Weirdness Detected ⚠️
            </p>
          </TimelineCard>



          {/* Card 5: Late Night Calls */}
          <TimelineCard title="Nice add-ons" side="left" icon={<Moon className="w-6 h-6" />}>
            <div className="flex flex-col gap-3">
              <img src="WhatsApp Image 2025-12-25 at 00.28.54 (1).jpeg" alt="First Date Spot" className="w-full h-full object-cover" />

              <p className="text-sm leading-relaxed">
normally babe u know me, its not hard for me to 'tear up' but the day you sent me this text, i knew that omo, i cant play with this. i remember saying the text made my whole year and i cant lie, i go back to it to just breathe in and breathe out, to let go and know that one delta girl likes me for me, i dont know why i like it so much but it mean quite alot to me. i and definately not tearing up to this btw❤️              </p>
            <div>
              </div>
            </div>
          </TimelineCard>

          {/* Card 6: Coffee Runs */}
          <TimelineCard title="us cause i just love us" side="right" icon={<Coffee className="w-6 h-6" />}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white p-4 rounded-xl space-y-3">
              <div className="aspect-square rounded-lg overflow-hidden bg-accent/10 border-2 border-accent transform -rotate-3 hover:rotate-0 transition-transform">
                <img
                  src="WhatsApp Image 2025-12-25 at 00.28.57.jpeg"
                  alt="Mustache Filter"
                  className="w-full h-full object-cover"
                />
              </div>
                              <p className="text-xs font-bold text-center text-accent uppercase tracking-tighter">
                  a bit of us again cause it just us here. 
                </p>
              <div className="aspect-square rounded-lg overflow-hidden bg-primary/10 border-2 border-primary transform rotate-6 hover:rotate-0 transition-transform">
                <img
                  src="WhatsApp Image 2025-12-25 at 00.28.56.jpeg"
                  alt="Hallway Perspective"
                  className="w-full h-full object-cover"
                />
              </div>

              </div>
            </div>
          </TimelineCard>

          {/* Card 7: Future Dreams */}
          <TimelineCard title="Dont run!" side="left" icon={<Star className="w-6 h-6" />}>
            <div className="space-y-4">
              <p className="text-sm italic border-b-2 border-primary/10 pb-4">
i asked ai to do something and this picture is horrid, i know but it works, its 2am so ill us this, cheers to us. i have more pictures but im tired and dont want to add more cause ive been procasting this for days. and you thought i wanted to do a collage, u no even sabi me, a whole me programmer and designer collage. dey play baby.              </p>
              <div className=" rounded-xl overflow-hidden ring-4 ring-primary/5">
                <img src="Gemini_Generated_Image_jlv8shjlv8shjlv8.png" alt="Future dreams" className="w-full h-full object-cover" />
              </div>
            </div>
          </TimelineCard>

                    <TimelineCard title="im tired but ill add this" side="left" icon={<Star className="w-6 h-6" />}>
            <div className="space-y-4">
              <p className="text-sm italic border-b-2 border-primary/10 pb-4">
princess i dont have anything to say asides thank you to God for life and for you, everytime i think about it i think to the time u only wanted me to be ur friend and after giving up finally, we happened, even after i wanted nothing, and i laugh about how the whole thing happened and then say another thank God cause omoooor, wouldnt have been as fun as it is with you. thank you, and im sure ill pick this one year with you in ever other universe or time line. <br /> i added this image for clock it sake❤️❤️❤️😂</p>
              <div className=" rounded-xl overflow-hidden ring-4 ring-primary/5">
                <img src="WhatsApp Image 2025-12-25 at 00.28.54 (2).jpeg" alt="Future dreams" className="w-full h-full object-cover" />
              </div>
            </div>
          </TimelineCard>
        </div>
      </section>
      

      {/* Rizz Meter Section */}
      <section className="py-24 px-6 flex flex-col items-center justify-center z-10" ref={rizzMeterRef}>
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-accent uppercase">Stezz Meter</h3>
            <p className="text-sm text-muted-foreground font-bold">How much stezz i have left</p>
          </div>

          <div className="relative h-12 bg-muted rounded-full overflow-hidden border-4 border-accent p-1">
            <motion.div
              className={`h-full rounded-full ${rizzScore < 2 ? "bg-red-500 animate-bounce" : "bg-primary"}`}
              style={{ width: `${Math.min(rizzScore, 110)}%` }}
              transition={{ type: "spring", bounce: 0.5 }}
            />
            <div className="absolute inset-0 flex items-center justify-center font-black text-xl italic text-accent mix-blend-difference">
              {rizzScore > 2 ? "ERROR: STEZZ OVERLOAD" : `${rizzScore}%`}
            </div>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center">
            <p className="text-lg font-bold text-primary italic">
              {rizzScore < 50 ? "Low Power..." : rizzScore < 90 ? "Charging Romance..." : "System Breaking!"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 text-center bg-accent text-white z-10">
        <div className="max-w-2xl mx-auto space-y-6">
          <Heart className="w-12 h-12 mx-auto animate-pulse" fill="currentColor" />
          <h4 className="text-4xl font-black italic">To becoming the best for us. many more to come, amen.</h4>
          <p className="text-2xl font-bold opacity-80 underline decoration-primary underline-offset-8">
            I love you so much babe.
          </p>
          {/* <div className="pt-10 flex justify-center gap-6">
            <Instagram className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
            <Camera className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
            <Phone className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
          </div> */}
          <p className="text-xs opacity-50 font-mono">2025 D&P recap <br /> i would have added videos but it wont load <br />mind my typos babe</p>
        </div>
      </footer>
    </div>
  )
}

function TimelineCard({
  title,
  children,
  side,
  icon,
}: { title: string; children: React.ReactNode; side: "left" | "right"; icon: React.ReactNode }) {
  return (
    <div
      className={`relative mb-16 md:w-1/2 ${side === "left" ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12 text-left"}`}
    >
      {/* Icon Dot */}
      <div className="absolute -left-[26px] md:left-auto md:right-[-26px] top-0 z-20 w-12 h-12 bg-accent rounded-full border-4 border-background flex items-center justify-center text-white shadow-lg">
        {icon}
      </div>

      <motion.div
        initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="p-6 bg-white border-2 border-accent/20 shadow-xl rounded-3xl overflow-hidden relative group">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
          <h3 className="text-2xl font-black text-accent mb-4 uppercase italic">{title}</h3>
          {children}
        </Card>
      </motion.div>
    </div>
  )
}

function FloatingHeart({ delay }: { delay: number }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setPosition({
      x: Math.random() * 100,
      y: Math.random() * 100,
    })
  }, [])

  return (
    <motion.div
      className="absolute text-primary/10"
      initial={{ y: "110vh", x: `${position.x}vw`, scale: 0.5, opacity: 0 }}
      animate={{
        y: "-10vh",
        opacity: [0, 1, 0],
        x: [`${position.x}vw`, `${position.x + (Math.random() * 10 - 5)}vw`],
      }}
      transition={{
        duration: 15 + Math.random() * 10,
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "linear",
      }}
    >
      <Heart size={48 + Math.random() * 40} fill="currentColor" />
    </motion.div>
  )
}
