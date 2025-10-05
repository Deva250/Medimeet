import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { features } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden py-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center "> 
            <div className="space-y-8">
              <Badge variant="outline" className='bg-emerald-900/30 bg-emerald-700/30 px-4 py-2 text-emerald-400 
              text-sm font-medium '>HealthCare Made Easy</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                connect with doctor<br /> <span className="text-emerald-700 " >anytime,anywhere</span>
              </h1>
              <p className=" text-muted-foreground text-lg md:text-xl max-w-md text-gray-300">
                Book appointment , manage your healthcare journey through this one secure platform 
              </p>
              <div className="flex flex-col sm: flex-row gap-4">
                <Button 
                asChild
                size="lg"
                className="bg-emerald-600 text-white hover:bg-emerald-700">
                  <Link href={'/onboarding'}>
                  Get Started<ArrowRight className="ml-2 h-4 w-5"/>
                  </Link>
                </Button>
                <Button 
                asChild
                size="lg"
                variant="outline"
                className="bg-emerald-700/30 hover:bg-muted/80">
                  <Link href={"/doctors"}>Find Doctors
                  </Link>
                </Button>
              </div>

              </div>
            <div className="relative h[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <Image src="/banner2.png"
              alt="doctor appoinment"
              fill
              priority
              className="object-cover md:pt-14 rounde-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted?30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How it works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Our platform gives accessible in flew clicks</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((features,index)=>{
              return (
              <Card key={index} className="border-emerald-900/20 border-emerald-700/50 hover:border-emerald-800/40 transition-all-duration-300" >
  <CardHeader className="pb-2">
    <div className="bg-emerald-900/20 py-3 rounded-lg w-fit mb-4">{features.icon}</div>
    <CardTitle className="text-xl font-semibold text-white">{features.title}</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">{features.description}</p>
  </CardContent>
</Card>
              );
            } ) }
          </div>
        </div>
      </section >
      <section className="py-20"> 
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-emerald-900/30 to-emerald-950/20 border-emerald-800/20">
          <CardContent className="pt-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to take control of your health?
              </h2>
              <p>
                join thousands of satisfied patients and doctors using our platform to simplify healthcare journey.Get started today and experience the future of healthcare should be there yersterday.
              </p>
              <div>
                <Button 
                size="lg"
                className="mt-6 bg-emerald-600 text-white hover:bg-emerald-700"
                asChild>
                  <Link href={"/signup"}> Sign up Now</Link>
                </Button>
              </div>
            </div>
          </CardContent>
          </Card>
        </div>


      </section>
      
    </div>
  );
}
