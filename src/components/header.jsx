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
                        <div className="col-md-12 mb-4">
                            <h2 className="curv1 displa-1 mt-5 p5-5">ONBOARDING</h2>
                            <h2 className="curv2 disply-1 ">ENTERPRISES</h2>
                            <h2 className="curv3 dispay-1">TO WEB3</h2>
                                <img src={Hand} className="hand"  alt="" />
                        </div>
                    </div>

                    <div className="row pski">
                        <div className="col-md-4">
                            <p className="p-1 mt-4">Aventus Onboards Enterprises To Web3. We Scope Out Potential Use Cases And Customize Managed.</p>
                            <div className="row">
                                <div className="col-md-12 text-start top-soc">
                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i className="fa-brands fa-telegram"></i></a>
                                    <a href="#"><i className="fa-brands fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 bg-pat text-center" >
                            <button className="btn-cus mt-3">Get <br />Started</button>
                        </div>
                        <div className="col-md-4 text-end">
                            <p className="p-2 mt-5">Discover all That Web3 can offer to your Buisness Today!</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}