import NavbarTop from "./navbar"
import './header'
import Hand from '../images/hand.png'
export default function Hero() {
    return (
        <>
            <header className="bg-alpha" id="header">
                <NavbarTop />
                <div className="container">

                    <div className="row">
                        <div className="col-md-12 mt-5 pt-5">
                            <h2 className="curv1 mt-5 p5-5">ONBOARDING</h2>
                            <h2 className="curv2 text-center">ENTERPRISES</h2>
                            <h2 className="curv3 text-end">TO WEB3</h2>
                                <img src={Hand} className="hand"  alt="" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus voluptatem commodi sequi corrupti odio.</p>
                        </div>
                        <div className="col-md-4 bg-pat text-center" >
                            <button className="button-cus">Get <br />Started</button>
                        </div>
                        <div className="col-md-4">
                            <p>Lorem ipsum dolor sit consectetur adipisicing elit. Error accusamus voluptatem commodi sequi corrupti odio.</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}