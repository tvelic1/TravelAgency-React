import React, {useRef} from "react";
import '../css/Stories.css';

const Stories = () => {
    const slider =useRef();
    let x=0;
    const slidaback =()=>{
        if(x<0) {x+=25;}
        slider.current.style.transform=`translateX(${x}%)`;



    };
    const slideforw =()=>{
        if(x>-50) {x-=25;}
        slider.current.style.transform=`translateX(${x}%)`;

    }
    return (


        <div className="stories">
            <p className="sub">Our adventures</p>
            <h2>User stories</h2>
            <img className="button" src="backbutton.png" onClick={slidaback}/>
            <img className="nextbutton" src="next-button.png" onClick={slideforw}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img className="profilna" src="paris.jpg" alt="" />
                                <div>
                                    <h3>User 1</h3>
                                    <span>Pariz</span>
                                </div>
                            </div>
                            <p>
                            kfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbelkfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbel
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrnkfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbel
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrnkfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbel
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrnkfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbel
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrn
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrn
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img className="profilna" src="istanbul.jpg" alt="" />
                                <div>
                                    <h3>User 2</h3>
                                    <span>Istanbul</span>
                                </div>
                            </div>
                            <p>
                            kfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbelkfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbel
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrnkfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbel
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrnkfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbel
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrnkfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbel
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrn
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrn
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img className="profilna" src="firenza.jpg" alt="" />
                                <div>
                                    <h3>User 3</h3>
                                    <span>Firenca</span>
                                </div>
                            </div>
                            <p>
                                kfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbelkfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbel
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrnkfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbel
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrnkfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbel
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrnkfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbel
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrn
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrn
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img className="profilna" src="barcelona.jpg" alt="" />
                                <div>
                                    <h3>User 4</h3>
                                    <span>Barselona</span>
                                </div>
                            </div>
                            <p>
                            kfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbelkfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbel
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrnkfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbel
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrnkfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbel
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrnkfrnegnerigegbelb
                                ebnnbliebnbitnbpi
                                kfrnegnerigegbel
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrn
                                kfrnegnerigegbelbe
                                kfrnegnerigegbelbebn
                                nbliebnbitnbpikfrn
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default Stories