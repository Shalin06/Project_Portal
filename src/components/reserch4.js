import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Research4 = () => {
    function Navbar() {
          return (
            <nav className="navbar">
               <Link to="/"><img src="images/logo323.png" className="logo2" /></Link>
              <div className="navbar__container">
                <ul className="navbar__links">
                  <li>
                    <Link to="/faculty"style={{ textDecoration: 'none', color: 'black' }}>Faculty</Link>
                  </li>
                  <li>
                    <Link to="/research"style={{ textDecoration: 'none', color: 'black' }}>Research</Link>
                  </li>
                  <li>
                    <Link to="/login1"style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
                  </li>
                  <li>
                    <Link to="/signup"style={{ textDecoration: 'none', color: 'black' }}>Sign Up</Link>
                  </li>
                </ul>
              </div>
              <div className="research_page1">
                    <div className="faculty_members1">
                        <p className="text_font6">Recognitions</p>
                        <h className="text_font7_1">Rajasthani Clay Catalytic Converters for Automobiles</h>
                        <p className="text_font8">The current discovery, indicate new non-rare earth, non-noble metal based catalytic convertor using Rajasthani Clay. The catalytic convertor is developed by cleaver use Iron-Nickel-Cobalt nanoparticles in Rajasthani Clay. The metal oxides work as oxygen reservoir and could completely oxidize NOx, COx, and hydrocarbons at lower than 300oC temperature.</p>
                        <img src="images/login2_img.png" className="res3_img" />
                        <h className="text_font7_1">Background</h>
                        <p className="text_font8">Automobile industries are facing more and stricter emissions regulations in an effort to reduce the amount of harmful air pollutants that are released into the environment related to NOx, COx, and soot along with particulate matter. Currently, one method of reducing harmful emissions is three-way catalytic (TWC) converter that reduces harmful NOx to N2 and O2, oxidizes CO to CO2, and oxidizes residual hydrocarbons to CO2 and water. However, it requires the use of the rare-earth element Cerium (Ce) and Palladium, which are increasing in price and suffering from supply problems lately. These expensive metals make the the catalyst convertor one of the costliest part of car with price from $1000-$1500. Each catalytic convertor have about 5-7gm of pure palladium, which cost around $60 per gram more expensive than gold. Despite that cost, the performance of catalytic convertors go down with time mostly in 8-10 years, while approved life of car is about 15 years.</p>
                        <p className="text_font8"> The research team of Prof. Sharma has been working on find an alternate solution by understanding the catalytic convertor deactivation and looking for a cheaper solution for the same. His team has found that with time, palladium particle spread over Ceria undergo surface oxidation and decompose in small particle due to high temperature oxidation process (less than 320 degree). So there were three challenges, reduction of temperature, replacement of palladium and cerium with non-nobel metal, and re-design the convertor to prevent metal deactivation. The Fe-Ni-Co cooperative nano-particles were used in the isolated Nanospheres (work as single site catalyst) where HafniaRajasthani Clay used as oxygen reservoir. The catalytic performance was found to be better than conventional convertor at less than 300 degree.</p>
                        <p className="text_font8">Article written by:  Rakesh K Sharma</p>
                        <p className="text_font8">Image credits: Rakesh K Sharma, SMCRG Lab</p>
                        <p className="text_font8">Link to published work (Patent):  A hydrogen-annealed bimetallic oxide and implementations thereof 201911031662</p>
                        <p className="text_font8">Application Date 5-August-2019 </p>
                        <p className="text_font8">Research Domain: Environmental Science</p>
                    </div>
                </div>
            </nav>
          );
      }
      return (
            <Navbar/>
      );
};
export default Research4;