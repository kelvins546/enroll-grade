import { Header } from "../../components/Header";
import { Navigation_Bar } from "../../components/NavigationBar";
import './applicant_homepage.css'

export const Applicant_Homepage = () => {
    return(
        <>
        <Header userRole="applicant"/>
        <Navigation_Bar />
        <Navigation_Bar userRole="applicant" />
        <div className="mainContent">
            <div className="background">
                <div className="noticeBox">
                    <div className="notice">
                        <h2>NOTICE OF ENROLLMENT</h2>
                        <p>This is to formally inform all parents/guardians that the Enrollment System is open and currently accepting applications for the upcoming school year.
                            You may proceed by completing the online enrollment form and uploading all required documents through this system. Please be reminded that applications will be processed on a first come, first served basis, subject to the availability of slots.
                            <br />Thank you for your continued trust and support.
                        </p>
                    </div>
                    <div className="buttonContainer">
                        <button>Proceed to enrollment.</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}