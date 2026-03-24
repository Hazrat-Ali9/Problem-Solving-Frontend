import { Image } from "antd";
import React from "react";
export const metadata = {
  title: "Achivements - Hazrat Ali Problem Solving Website",
  description: "Achivements of Hazrat Ali Problem Solving Website.",
};
const page = () => {
  const activements = [
    "/achivement/Codechef.jpg",
    "/achivement/HazratAliachieve.jpg",
    "/achivement/Hazratphitron.jpeg",
    "/achivement/github.jpg",
    "/achivement/Leetcode.jpg",
    "/achivement/HackerRank.jpg",
    "/achivement/icpchazrat.jpg",
    "/achivement/pherolevel.jpg",
    "/achivement/achievement.jpg",
    "/achivement/blackbelt.png",
    "/achivement/phitroncampau.jpg",
     "/achivement/batch5.jpg",
    "/achivement/hazrat_phitron.jpg",
    "/achivement/hazrat_ali.jpg",
    "/achivement/ambassdor.jpg",
    "/achivement/hazrataliicpc.jpeg",
    "/achivement/hazraticpc.jpeg",
    "/achivement/icpcteam.jpeg",
    "/achivement/teamicpc.jpeg",
    "/achivement/icpccertificate.jpeg",
    "/achivement/sql_basic.jpg",
    "/achivement/hackerrankproblemsolving.png",
    "/achivement/javascript_basic.jpg",
    "/achivement/psi.png",
    "/achivement/python_basic_certificate.jpg",
    "/achivement/java.jpeg",
    "/achivement/contest.jpeg",
    "/achivement/phitron.jpg",
    "/achivement/webbootcamp.jpeg",
    "/achivement/certificate.jpg",
    "/achivement/webdevelopment.jpeg",
    "/achivement/Programming_Foundation.jpg",
    "/achivement/python.jpeg",
    "/achivement/math_olympiad.jpg",
     "/achivement/iusachieve.png",
      "/achivement/jobplacement.jpeg",
     "/achivement/managingdirector.jpeg",
      "/achivement/german.jpg",
     "/achivement/phitron.png",
     "/achivement/pherolevel2.png",
      "/achivement/phero.png",
    "/achivement/appointment_letter.jpg",
      




  

    
  ];
  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold text-center">Achievements</h1>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {activements.map((activement, index) => (
          <Image
            src={activement}
            alt=""
            key={index}
            className="w-full h-full object-cover object-center"
          />
        ))}
      </div>
    </div>
  );
};
// Achievement 
export default page;
