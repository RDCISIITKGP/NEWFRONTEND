import { memo } from "react"
import Navbar from "../components/Navbar/Navbar"
import TeamCard from "../components/Developers/TeamCard"

const developers = () => (
  <div className="flex flex-col px-[80px]">
    <Navbar isDevsPage />

    <div className="mt-[90px] mx-auto text-[40px] py-2.5 mb-7 font-medium bg-lightBlue text-white w-full flex items-center justify-between rounded-xl">
      <h1 className="mx-auto">Principal Investigator</h1>
    </div>

    {/* Sir */}
    <div className="flex items-center gap-5 w-full relative left-[160px]">
      <img
        src="/images/professor.png"
        alt=""
        loading="lazy"
        className="rounded-full shadow w-[300px]"
      />
      <div className="text-xl flex flex-col">
        <h3 className="text-[40px] font-medium mb-6">Prof. Surjya K Pal</h3>
        <span>
          Chairperson, Centre of Excellence in Advanced Manufacturing Technology
        </span>
        <span>Mechanical Engineering IIT Kharagpur</span>
        <span>
          Email:{" "}
          <a
            href="surjya.pal@icloud.com"
            target="_blank"
            rel="noreferrer"
            className="text-lightBlue hover:underline"
          >
            surjya.pal@icloud.com
          </a>
        </span>

        <span>
          Facebook:{" "}
          <a
            href="surjya.pal@icloud.com"
            target="_blank"
            rel="noreferrer"
            className="text-lightBlue hover:underline"
          >
            https://www.facebook.com/surjyak.pal
          </a>
        </span>

        <span>
          LinkedIn:{" "}
          <a
            href="surjya.pal@icloud.com"
            target="_blank"
            rel="noreferrer"
            className="text-lightBlue hover:underline"
          >
            https://www.linkedin.com/in/prof-surjya-k-pal-289b681a3
          </a>
        </span>
      </div>
    </div>

    <div className="mt-[80px] text-[40px] py-2.5 mb-2.5 font-medium bg-lightBlue text-white w-full flex items-center justify-between rounded-xl">
      <h1 className="mx-auto">Team</h1>
    </div>

    <div className="flex items-center gap-2 justify-around">
      {[
        {
          name: "Kunal Mondal",
          image: "/images/kunla.jpeg",
          socials: {
            linkedIn: "https://www.linkedin.com/in/kunal-mondal-41baa8212/",
            email: "2002kunalmondal13@gmail.com",
          },
          assignation:
            "UG Student, Computer Science & Enginnering, IES University",
        },
        {
          name: "Abhrodeep Das",
          image: "/images/abhrodeep_das.jpeg",
          socials: {
            linkedIn: "https://in.linkedin.com/in/abhrodeep-das-5a5354202",
            email: "abhrodeepdas1508@gmail.com",
          },
          assignation:
            "UG Student, Computer Science, Jalpaiguri Govt. Engg. College",
        },
        {
          name: "Ayushman Agrawal",
          image: "/images/ayushman.jpeg",
          socials: {
            linkedIn:
              "https://www.linkedin.com/in/ayushman-agrawal-144877206/?originalSubdomain=in",
            email: "ayushman.iitkgp2020@gmail.com",
          },
          assignation: "UG Student, Mechanical Engineering, IIT Kharagpur",
        },
        {
          name: "Nishkarsh Kundoliya",
          image: "/images/nishkarsh.jpeg",
          socials: {
            linkedIn:
              "https://www.linkedin.com/in/nishkarsh-kundoliya-026203242/",
            email: "nishkarsh1215@gmail.com",
          },
          assignation:
            "UG Student, Ocean Engg and Naval Architecture, IIT Kharagpur",
        },
        {
          name: "Ananta Dutta",
          image: "/images/ananta_dutta.jpg",
          socials: {
            linkedIn: "https://www.linkedin.com/in/ananta-dutta-49674087/",
            email: "duttaananta03@gmail.com",
          },
          assignation:
            "Doctoral Scholar, Mechanical Engineering, IIT Kharagpur",
        },
      ].map((member, index) => (
        <TeamCard member={member} key={member.name} />
      ))}
    </div>
  </div>
)

export default memo(developers)
