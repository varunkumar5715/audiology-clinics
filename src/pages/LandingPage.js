

// import React, { useContext } from 'react';
// import landing from '../data/landing.json';
// import Layout from '../components/layout/Layout';
// import PositionContext from '../store/RouteContextProvider';
// import './LandingPage.css';

// function LandingPage() {
//     const { current } = useContext(PositionContext);
//     const lab = landing.labs[current - 1];
//   if (!lab) {
//         return (
//             <Layout>
//                 <div>
//                     <h2>No Lab Found</h2>
//                     <p>Please check the lab data or your selection.</p>
//                 </div>
//             </Layout>
//         );
//     }
//     const { about, objectives, Perspective, members } = lab;

//     return (
//         <Layout>
//             <div>
//                 <div>
//                     <h2>About</h2>
//                     <p>{about}</p>
//                 </div>

//                 <h2>Objectives</h2>
//                 {objectives && objectives.map((objective, index) => (
//                     <p key={index}>{objective}</p>
//                 ))}

//                 <h2>Perspective Plan</h2>
//                 {Perspective && Perspective.length > 0 ? (
//                     Perspective.map((perspective, index) => (
//                         <p key={index}>{perspective}</p>
//                     ))
//                 ) : (
//                     <p>No Perspective available.</p>
//                 )}

//                 {members && members.length > 0 && (
//                     <>
//                     <h2>{current === 1 ? 'Faculties' : 'Members'}</h2>
                                         
//                         <div>
//                             {members.map((member, index) => {


//                                 return (
//                                     <div key={index}>
//                                         <p className='titleBold'>{member.name}</p>
//                                         <p>{member.designation}</p>
//                                         <p>{member.address}</p>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </>
//                 )}
//             </div>
//         </Layout>
//     );
// }

// export default LandingPage;

import React, { useContext } from 'react';
import landing from '../data/landing.json';
import Layout from '../components/layout/Layout';
import PositionContext from '../store/RouteContextProvider';
import ImageCarousel from '../pages/ImageCarousel'; // Import the carousel component
import './LandingPage.css';

function LandingPage() {
    const { current } = useContext(PositionContext);
    const lab = landing.labs[current - 1];

    if (!lab) {
        return (
            <Layout>
                <div>
                    <h2>No Lab Found</h2>
                    <p>Please check the lab data or your selection.</p>
                </div>
            </Layout>
        );
    }

    const { about, objectives, members, images } = lab;

    return (
        <Layout>
            <div>
                {current === 1 && images && images.length > 0 && (
                    <ImageCarousel images={images} />
                )}

                <div>
                    <h2>About</h2>
                    <p>{about}</p>
                </div>

                <h2>Objectives</h2>
                {objectives && objectives.map((objective, index) => (
                    <p key={index}>{objective}</p>
                ))}

                {members && members.length > 0 && (
                    <>
                        <h2>{current === 1 ? 'Faculties' : 'Members'}</h2>
                        <div>
                            {members.map((member, index) => (
                                <div key={index}>
                                    <p className='titleBold'>{member.name}</p>
                                    <p>{member.designation}</p>
                                    <p>{member.address}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </Layout>
    );
}

export default LandingPage;