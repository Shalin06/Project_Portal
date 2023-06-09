import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Research5 = () => {
    function Navbar() {
          return (
            <nav className="navbar">
               <Link to="/"><img src="images/logo323.png" className="logo22" /></Link>
              <div className="navbar__container">
                <ul className="navbar__links">
                  <li>
                    <Link to="/faculty"style={{ textDecoration: 'none' }}className="hover1">Faculty</Link>
                  </li>
                  <li>
                    <Link to="/research"style={{ textDecoration: 'none' }}className="hover1">Research</Link>
                  </li>
                  <li>
                    <Link to="/login1"style={{ textDecoration: 'none' }}className="hover1">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup"style={{ textDecoration: 'none' }}className="hover1">Sign Up</Link>
                  </li>
                </ul>
              </div>
              <div className="research_page1">
                    <div className="faculty_members1">
                        <p className="text_font6">Recognitions</p>
                        <h className="text_font7_1">Language Independent Speech Generation System</h>
                        <p className="text_font8">Various preordain situations result in a disease or injury to people and deprive them off with their natural ability to communicate verbally. The diseases which affect the voice and language of people may include congenital impairments, such as cerebral palsy, intellectual impairment and autism, and acquired conditions, such as amyotrophic lateral sclerosis and Parkinson’s disease. As larynx is the main organ for voice production, any illness which results in the removal of larynx, i.e, laryngectomy, will result in loss of voice. The illness may be malignancy of larynx or pharynx or severe laryngeal stenosis. The afflicted people find other means like alaryngeal methods, which include hand written notes, by simple actions (like hand or facial gestures), with esophageal speech or with aid of devices like electrolarynx or tracheo esophageal prosthesis.</p>
                        <p className="text_font8">The means of sign language require the use of hand- gestures and/ or facial expressions. Sign language is a mode of communication for patients who are affected since birth. In recent years, the technological advancement in the field of electro-medical devices for life support, implantable biomedical devices, and wearable medical devices have successfully provided artificial abilities to the afflicted people related to any kind of disability or impairment. The electro-medical devices, implantable biomedical devices, and wearable medical devices may include but are not limited to an artificial pacemaker, ventricular assist device, bioartificial liver, wearable dialysis device, implantable artificial kidney devices, artificial limbs, and sensory devices, such as hearing aids, optical lenses etc. The electro-medical devices when used in combination with multiple speech synthesis techniques provide an option for the people with speech and language impairment, to communicate audibly. Such electro-medical devices are known as augmentative and alternative Communication (AAC) devices or speech generation devices (SGDs). In the speech synthesis techniques, the spoken language is generated by a machine on the basis of a written input.</p>
                        <p className="text_font8"> The present subject matter describes methods and systems for automatically generating speech which will be language independent and facilitate the communication between mute people and normal people. In an example implementation of the present</p>
                        <img src="images/login4_img.jpg" className="res3_img" />
                        <p className="text_font8">subject matter, electrical signals are generated by a first set of sensors, wearable on a combination of a thumb, finger(s), and/or a wrist of a first hand of a user to produce an electrical signal depending on bending of at least one of the thumb, the finger(s), and/or the wrist of the first hand. The electrical signals are also generated by a second set of sensors, wearable on a combination of a thumb, finger(s), and/or a wrist of a second hand of a user to produce an electrical signal depending on bending of at least one of the thumb, the finger(s), and/or the wrist of the second hand.</p>
                        <p className="text_font8">The electrical signals are received at a signal processing unit from the first set of sensors and from the second set of sensors.</p>
                        <img src="images/r5.png" className="res3_img" />
                        <p className="text_font8">The magnitude of the received electrical signals is compared with a plurality of pre-defined combination of magnitudes stored in a memory by using the signal processing unit. A pre-defined combination of magnitude of the plurality of pre-defined combination of magnitudes is associated to a phonetic corresponding to at least one of a consonant and a vowel. In an example implementation, the consonant and the vowel can be from Hindi language phonetics. A phonetic is assigned to the received electrical signals based on the comparison. An audio signal is generated by an audio transmitter corresponding to the assigned phonetic and based on trained data associated with vocal characteristics stored in a machine learning unit. The generation of the audio signals according to the phonetics having combination of vowels and consonants leads to the generation of speech and enables the mute people to audibly communicate with normal people. The speech synthesis technique of the present subject matter uses phonetics, and therefore the speech generation is independent of any language.</p>
                        <p className="text_font8">Reference: India Patent Application: 201911035856 </p>
                        <p className="text_font8">Publication Date: 05/09/2019 </p>
                        <p className="text_font8">(https://ipindiaservices.gov.in/PublicSearch/)</p>
                        <p className="text_font8">Author of the article: Dr. Sumit Kalra, Dr. Arpit Khandelwal</p>
                        <p className="text_font8">In collaboration with: AIIMS Jodhpur</p>
                    </div>
                </div>
            </nav>
          );
      }
      return (
            <Navbar/>
      );
};
export default Research5;