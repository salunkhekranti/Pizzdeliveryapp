import React from 'react'
import Image1 from '..//../src/img/pizza1.png'
import Image2 from '..//..//src/img/pizza2.png'
import Image3 from '..//../src/img/pizza3.png'
import Image4 from '..//..//src/img/pizza4.png'
import Image5 from '..//..//src/img/pizza5.png'
import Image6 from '..//..//src/img/pizza6.png'
export const Prices = () => {
    return (
        <div className="prices">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={Image1} />
                            </div>
                            <h1 className="price__heading">Pizza Margeritta</h1>
                            <p className="price__text">
                                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                                risus, vel hendrerit dui tempor in.
                            </p>
                            <p className="price_rs">$22.00</p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={Image2} />
                            </div>
                            <h1 className="price__heading">Pizza Margeritta</h1>
                            <p className="price__text">
                                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                                risus, vel hendrerit dui tempor in.
                            </p>
                            <p className="price_rs">$22.00</p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={Image3} />
                            </div>
                            <h1 className="price__heading">Pizza Margeritta</h1>
                            <p className="price__text">
                                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                                risus, vel hendrerit dui tempor in.
                            </p>
                            <p className="price_rs">$22.00</p>
                        </div>
                        {/* <div className="col-4">
                            <div className="price">
                                <div className="price__img">
                                    <img src={Image4} />
                                </div>
                                <h1 className="price__heading">Pizza Margeritta</h1>
                                <p className="price__text">
                                    Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                                    ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                                    risus, vel hendrerit dui tempor in.
                                </p>
                                <p className="price_rs">$22.00</p>
                            </div>
                            <div className="col-4">
                                <div className="price">
                                    <div className="price__img">
                                        <img src={Image5} />
                                    </div>
                                    <h1 className="price__heading">Pizza Margeritta</h1>
                                    <p className="price__text">
                                        Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                                        ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                                        risus, vel hendrerit dui tempor in.
                                    </p>
                                    <p className="price_rs">$22.00</p>
                                </div> */}
                        {/* <div className="col-4">
                                    <div className="price">
                                        <div className="price__img">
                                            <img src={Image6} />
                                        </div>
                                        <h1 className="price__heading">Pizza Margeritta</h1>
                                        <p className="price__text">
                                            Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                                            ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                                            risus, vel hendrerit dui tempor in.
                                        </p>
                                        <p className="price_rs">$22.00</p>
                                    </div> */}
                    </div>
                </div>
            </div>
        </div>



    );
};
export default Prices;

