"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"
import { useState } from "react"

interface Profile {
  name: string
  role: string
  description: string
  imgUrl: string
  linkedinUrl: string
  email: string
  specialization?: string
  achievements?: string[]
}

const mainProfile: Profile = {
  name: "Dr. Satish Kumar Sinha",
  role: "Faculty Advisor",
  description: `Head of Department, Petroleum Engineering and GeoEngineering, serves as our 
  chapter's distinguished faculty advisor. Under his visionary leadership, our organization 
  has achieved unprecedented milestones.`,
  imgUrl: "/satish_kumar_sinha.jpg",
  linkedinUrl: "https://www.linkedin.com/in/satish-sinha-a7a8b4a7",
  email: "head_pegs@rgipt.ac.in",
  achievements: ["Ph.D. in Petroleum Engineering", "20+ Years of Industry Experience", "Published 50+ Research Papers"]
}

const profiles: Profile[] = [
  {
    name: "Kishan Raj",
    role: "President",
    description: "A final-year Petroleum Engineering student at RGIPT with expertise in energy transition and CCUS.",
    imgUrl: "/kr.jpg",
    linkedinUrl: "https://www.linkedin.com/in/kishan-raj-562322233/",
    email: "21pe3006@rgipt.ac.in",
    specialization: "Drilling Technology & CCUS"
  },
  {
    name: "Abhishek Pandey",
    role: "Vice President",
    description: "A distinguished student specializing in reservoir engineering and geomechanics.",
    imgUrl: "/abhishek_pandey.jpg",
    linkedinUrl: "https://www.linkedin.com/in/abhishek-pandey/",
    email: "21pe3002@rgipt.ac.in",
    specialization: "Reservoir Engineering"
  }
]

const ProfileAvatar = ({ name, imgUrl }: { name: string; imgUrl: string }) => {
  const [imgError, setImgError] = useState(false)

  return (
    <Avatar className="w-28 h-28 border-4 border-white shadow-lg">
      {!imgError && <AvatarImage src={imgUrl} alt={name} onError={() => setImgError(true)} />}
      <AvatarFallback className="text-lg font-semibold bg-blue-100 text-blue-600">
        {name.split(" ").map((n) => n[0]).join("")}
      </AvatarFallback>
    </Avatar>
  )
}

const ProfileCards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Leadership Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals driving innovation in petroleum geoscience education and research
          </p>
        </motion.div>

        {/* Main profile card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Card className="overflow-hidden max-w-3xl mx-auto shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <ProfileAvatar name={mainProfile.name} imgUrl={mainProfile.imgUrl} />
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{mainProfile.name}</h2>
                  <p className="text-xl text-blue-600 font-semibold mb-4">{mainProfile.role}</p>
                  {mainProfile.achievements?.map((achievement, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{mainProfile.description}</p>
            </CardContent>
            <CardFooter className="bg-gray-50 px-8 py-6">
              <div className="flex gap-4 w-full">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700" onClick={() => window.open(mainProfile.linkedinUrl, "_blank")}>
                  <Linkedin className="mr-2 h-5 w-5" /> Connect
                </Button>
                <Button
                  className="flex-1 border border-blue-200 hover:bg-blue-50"
                  onClick={() => (window.location.href = `mailto:${mainProfile.email}`)}
                >
                  <Mail className="mr-2 h-5 w-5" /> Contact
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Team member cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {profiles.map((profile, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-6">
                    <ProfileAvatar name={profile.name} imgUrl={profile.imgUrl} />
                    <h2 className="text-2xl font-bold text-gray-900 mt-4">{profile.name}</h2>
                    <p className="text-blue-600 font-semibold">{profile.role}</p>
                    {profile.specialization && (
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">{profile.specialization}</span>
                    )}
                  </div>
                  <p className="text-gray-600 text-base">{profile.description}</p>
                </CardContent>
                <CardFooter className="bg-gray-50 px-6 py-4">
                  <div className="flex gap-3 w-full">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700" onClick={() => window.open(profile.linkedinUrl, "_blank")}>
                      <Linkedin className="mr-2 h-4 w-4" /> Connect
                    </Button>
                    <Button className="flex-1 border border-blue-200 hover:bg-blue-50" onClick={() => (window.location.href = `mailto:${profile.email}`)}>
                      <Mail className="mr-2 h-4 w-4" /> Contact
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileCards
