import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Research2 = () => {
    function Navbar() {
        return (
            <nav className="navbar">
                <Link to="/"><img src="images/logo323.png" className="logo2" /></Link>
                <div className="navbar__container">
                    <ul className="navbar__links">
                        <li>
                            <Link to="/faculty" style={{ textDecoration: 'none', color: 'black' }}>Faculty</Link>
                        </li>
                        <li>
                            <Link to="/research" style={{ textDecoration: 'none', color: 'black' }}>Research</Link>
                        </li>
                        <li>
                            <Link to="/login1" style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
                        </li>
                        <li>
                            <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>Sign Up</Link>
                        </li>
                    </ul>
                </div>
                <div className="research_page1">
                    <div className="faculty_members1">
                        <p className="text_font6">Recognitions</p>
                        <h className="text_font7_1">A Novel Multipath Mitigation Technique for GNSS Signals in Urban Scenarios</h>
                    </div>
                    <img src="images/login1_img.png" className="res2_img" />
                    <div className="research_1">
                        <p className="text_font8">Global Navigation Satellite System (GNSS) based positioning technologies are poised to play a crucial role in providing location based services that are used for strategic purposes, emergency safety-of-life services and for commercial purposes. In urban and suburban settings, presence of multiple reflectors and scatterers like high-rise buildings, towers, vehicles, trees cause the transmitted signal to reach GNSS receiver through multiple paths. GNSS receiver while tracking the navigation signal can potentially get locked to any of the signal replicas coming from the transmitter, leading to a range error in the navigation solution. Therefore, multipath propagation poses a serious threat to the accuracy of position solutions determined by GNSS receivers. </p>
                        <p className="text_font8">In a recent study, Professor Arun Kumar Singh and his group from the Indian Institute of Technology (IIT) Jodhpur has proposed a novel multipath mitigation technique that provides significant improvements in range accuracies over the current state of the art techniques like Narrow Correlator (NC) and High Resolution Correlator (HRC) or double delta correlator. The performance improvements are valid for general multipath models encountered in the land-mobile-satellite channels. The performance guarantees include closed form expressions for the probability of correct delay estimate and simulation results for the average range error variation with respect to carrier to noise ratio (CNR), signal bandwidth and different channel settings..</p>
                        <p className="text_font8">The range error caused due to multipath propagation can be dealt with in two possible ways- multipath estimation or multipath mitigation. In general, multipath estimation techniques involve optimization of the conditional probability function over a range of multipath delays, amplitudes and phases; their computational complexity is very high and they are not suitable for implementation on smart devices that operate with limited power. The current state-of-the-art multipath mitigation techniques include NC and HRC. NC and HRC perform reasonably well in the scenarios where the number of multipaths is small and line of sight (LoS) component has highest amplitude amongst all multipaths. In most pertinent urban scenarios there can be large number of multipath and LoS may not always have the highest power among all the paths. Therefore, novel multipath mitigation solutions were needed to overcome limitations of current state-of-the-art techniques.</p>
                        <p className="text_font8">
                        The present study, to be published in IEEE Transactions on Vehicular Technology, provides a novel multipath mitigation technique that is able to estimate ranges with a very high probability (more than 95%) even in the presence of multipaths. The proposed technique provides improved accuracy as compared to the currently known best multipath mitigation techniques. The performance guarantees hold for the CNR of as low as 20dB, for the typical vehicle speeds (50 Kmph) as well as for high speeds (360 Kmph), and for different multipath scenarios including urban, sub-urban, metropolitan environments.
                        </p>
                        <p className="text_font8">In the proposed technique a double differentiated correlation function based histogram output is used to estimate the range. The statistical independence of channel parameters (which change after every coherence time) is exploited in order to improve the probability of correct estimate. The results are validated using both statistical models from IEEE 802.16b and measurement based land mobile satellite channel models developed through field trials by DLR Germany and also standardized by International Telecom Union (ITU). The new technique will be pave way for use of GNSS receivers in urban scenarios for future generation smart vehicles and high accuracy based location services.</p>
                    </div>
                </div>
            </nav>
        );
    }
    return (
        <Navbar />
    );
};
export default Research2;