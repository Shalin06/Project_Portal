import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Research1 = () => {
    function Navbar() {
          return (
            <nav className="navbar">
               <Link to="/"><img src="images/logo323.png" className="logo22" /></Link>
              <div className="navbar__container">
                <ul className="navbar__links">
                  <li>
                    <Link to="/faculty"style={{ textDecoration: 'none' }} className="hover1">Faculty</Link>
                  </li>
                  <li>
                    <Link to="/research"style={{ textDecoration: 'none' }} className="hover1">Research</Link>
                  </li>
                  <li>
                    <Link to="/login1"style={{ textDecoration: 'none' }} className="hover1">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup"style={{ textDecoration: 'none' }} className="hover1">Sign Up</Link>
                  </li>
                </ul>
              </div>
              <div className="research_page1">
              <div className="faculty_members1">
                <p className="text_font6">Recognitions</p>
                <h className = "text_font7_1">Model development to predict shrinkage defects during solidification of pure metal</h>
              </div>
              <img src="images/Shrinkage_Defect_07012020.gif" className="gif" />
              <div className="research_1">
                <p className = "text_font8">The phase change phenomenon associated with solidification process is extensively confronted in numerous practical operations such as production processes involving welding and metal casting,
                  thermal sprays, latent heat thermal storage, thermal management for electronic cooling, thermal comfort etc. One of the most significant quests of the relevance for solidification processes is
                   to discern how substantial are the phenomenon of the casting defects. Existing commercial solvers to predict for metal/alloy solidification processes commonly produce outcomes associated with
                    transient thermal field, and these outcomes are not analogous to the understanding of the position of the shrinkage cavities within the cast products. Therefore, it is essential to consider 
                    the behaviour of the melt convection during solidification process in order to predict the shrinkage induced defects during solidification, which is yet to be fully explored. </p>
                <p className = "text_font8">In the technical framework, shrinkage is explained as variation in the size of the cast product owing to the density difference between liquid and solid phases. In particular, three types of
                     shrinkages are accountable for shrinkage defects: liquid shrinkage, solidification shrinkage, and solid shrinkage leading to the development of cracks, shrinkage cavities or buckling of the 
                     cast. Significant amount of solidification shrinkage is witnessed owing to the density variation between solid and liquid phases during the solidification process and solidification shrinkage 
                     attributes to the most severe deformation of the final cast product. Numerical prediction of solidification shrinkage, arising at the time of producing the solidified cast product from the molten 
                     metal is of primary focus of the present study.</p>
                <p className = "text_font8">A considerable difference between the solid and liquid phase densities causes an overall volume change of the final cast product with undesirable shrinkage defects like macro or micro open-shrinkage 
                    and macro or micro-porosity. Such defects cause a large number of casting rejections leading to an overall increase in production cost. Supervising the cast defects like porosity, shrinkage cavity,
                     and macro-segregation is a significant element that contributes towards assuring the quality of cast metals. However, numerical analysis of shrinkage induced defects poses formidable challenges 
                     associated with complex interactions between distinct phases like solid, liquid and void. Till date, majority of the studies involving shrinkage defect are experimental in nature leading to widely 
                     varying empirical understanding of the phenomena. Therefore, development of physics based numerical modelling is of absolute importance</p>     
                     <p className = "text_font8">
                     The present study focuses on developing a novel numerical model by integrating enthalpy updating method with volume of fluid (VOF) method 
                     to track the evolution of solid front growth during the solidification of a pure metal leading to the prediction of the shrinkage defect in 
                     the final cast product. The flow field generated within the melt during the solidification process due to combined buoyancy and shrinkage effect 
                     plays a major role in defining the shape of the shrinkage defect in the final cast product. The proposed model is competent to capture shrinkage induced 
                     convection and free surface evolution without applying any superficial numerical treatment. This model will be of significant relevance to the solidification community across
                      academia and industry for predicting shrinkage defects in final cast products. The study also opens up possibilities of farther adaptation of the model for predicting shrinkage 
                      defects during alloy solidification and shrinkage defects encountered for complex casting geometry.
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
export default Research1;