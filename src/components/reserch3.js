import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Research3 = () => {
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
                        <h className="text_font7_1">Optical Field Design for Solar Thermal Applications</h>
                        <p className="text_font8">The present investigation focusses on optical layout for the design of a medium to large scale (100 kW-15 MW) solar field based on Concentrated Solar Power (CSP) technology using Heliostats with Central Receiver System (CRS).  The implementation of such solar field can be carried out where direct normal incidence (DNI) is moderate to high, thus reducing the dependence on fossil fuel.</p>
                        <h className="text_font7_1">Background</h>
                        <p className="text_font8">Among the various renewable energies, Solar Thermal Energy (STE) has attracted attention of researcher due to its direct applicability in various industries. In particular, Concentrated Solar Power (CSP) is widely implemented for this purpose as high temperature is reached due to high optical concentration, which in turn leads to higher efficiencies and thus making it as a preferred system.</p>
                        <img src="images/reserch3_img.png" className="res3_img" />
                        <p className="text_font8"> In this direction, heliostat field with a central tower provide an ideal candidate and thus designing a heliostat field layout is an essential component of it. Heliostat field comprises of large size mirrors that reflects the incident solar radiation onto a receiver as the Sun moves during the day as well as throughout the year. The challenging task is estimating the number of heliostats required to produce the desired thermal output. The parameters that affects heliostat field depend on geographical location (latitude and longitude), shadow associated with a given heliostat dimension, cosine losses, spacing between the two adjacent heliostats, blocking</p>
                        <p className="text_font8">Figure 1(a): Ray tracing of circular heliostat field containing 180 mirrors along with central receiver tower</p>
                        <p className="text_font8">Figure 1(b): A two-dimensional (2D) flux map contour obtained on the curved tube geometry receiver</p>
                        <p className="text_font8">and the intercept factor at the receiver needs careful attention. The distribution of heliostats in a given land area and their relative efficiencies needs to be investigated. Further, as the radiation focused onto the receiver (kept at the top of the tower), it leads to various zones of temperature distribution including inhomogeneous heat-flux (hotspots).</p>
                        <img src="images/reserch3_1_ing.png" className="res3_1_img" />
                        <p className="text_font8">To estimate and optimize the given heliostat field an optical ray tracing approach is employed and investigation in this direction is led by V. Narayanan.  Using this approach, heliostats numbering 180 were introduced and the amount of optical power reaching the receiver is 13.68 MW for the entire day (Location: Jodhpur) as shown in Figure 1(a). The flux-map contour on the curved tube geometry receiver showing various heat-zones obtained from ray tracing is shown in Figure 1(b) for the considered heliostat field.  Other forms of solar concentrators like Scheffler reflector along with compound parabolic collector (CPC) are investigated using ray tracing approach as shown in Figure 2, which helps in minimizing the receiver area with a uniform flux distribution.</p>
                    </div>
                    <div className="research_1">
                        <p>
                        <p className="text_font8">Article written by:  V. Narayanan </p>
                        <p className="text_font8">Image Credits:  Sanjoy Chatterjee and Pedamallu VVNSP Raju  </p>
                        <p className="text_font8">Link to the present work: https://cms2019.solarpacesconference.org/file/display_attachment/5e064125a7dbe4e5323c89c0962063d?filename=Sanjoy+Chatt erjee+-+Paper.pdf </p>
                        <p className="text_font8">Research Domain: Lasers and Optics  </p>
                        </p>
                    </div>
                </div>
            </nav>
          );
      }
      return (
            <Navbar/>
      );
};
export default Research3;