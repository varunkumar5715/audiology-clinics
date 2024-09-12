// import React from "react";
// import Layout from "../components/layout/Layout";
// import labData from "../data/landing.json";

// export default function LabPage() {
//   return (
//     <Layout>
//       {labData.labs.map((lab, index) => (
//         <div key={index}>
//           <p>{lab.about}</p>
//           <h2>Objectives</h2>
//           <ul>
//             {lab.objectives.map((objective, i) => (
//               <li key={i}>{objective}</li>
//             ))}
//           </ul>

//           <h2>Perspective Plan</h2>
//           <ul>
//             {lab.Perspective.map((Perspective, i) => (
//               <li key={i}>{Perspective}</li>
//             ))}
//           </ul>

//           {lab.members && lab.members.length > 0 && (
//             <>
//               <h2>Members</h2>
//               <div>
//                 {lab.members.map((member, i) => (
//                   <div key={i}>
//                     <img
//                       src={`/assets/hemanth.jpg`}
//                       alt="Hemanth"
//                       style={{ width: '100px', height: '100px', borderRadius: '50%' }}
//                     />

//                     <p className='titleBold'>{member.name}</p>
//                     <p>{member.designation}</p>
//                     <p>{member.address}</p>
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       ))}
//     </Layout>
//   );
// }


import React from "react";
import Layout from "../components/layout/Layout";
import labData from "../data/landing.json";
import hemanthImage from "../assets/hemanth.jpg"; // Import the image

export default function LabPage() {
  // Console log to check if the image import is successful
  console.log("Image Imported:", hemanthImage);

  return (
    <Layout>
      {labData.labs.map((lab, index) => (
        <div key={index}>
          <p>{lab.about}</p>
          <h2>Objectives</h2>
          <ul>
            {lab.objectives.map((objective, i) => (
              <li key={i}>{objective}</li>
            ))}
          </ul>

          <h2>Perspective Plan</h2>
          <ul>
            {lab.Perspective.map((Perspective, i) => (
              <li key={i}>{Perspective}</li>
            ))}
          </ul>

          {lab.members && lab.members.length > 0 && (
            <>
              <h2>Members</h2>
              <div>
                {lab.members.map((member, i) => (
                  <div key={i}>
                    {/* Use the imported image */}
                    <img
                      src={hemanthImage}
                      alt="Hemanth"
                      style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                    />
                    <p className='titleBold'>{member.name}</p>
                    <p>{member.designation}</p>
                    <p>{member.address}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </Layout>
  );
}
