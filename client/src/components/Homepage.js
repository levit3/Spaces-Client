import React from "react";
import "./Homepage.css";
import LatestSpaces from "./LatestSpaces";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />

      <div className="Homepage">
        {/* <div className="HeroSection">
          <div className="Rectangle259376"></div>
          <div className="Frame427320957">
            <div className="RentOfficesTailoredToYourSuccess">
              Rent Spaces Tailored to Your Niche
            </div>
            <div className="Frame427320752">
              <div className="Frame427320749">
                <div className="Component1">
                  <div className="Vector"></div>
                  <div className="Vector small"></div>
                </div>
                <div className="SearchHere">Search here</div>
              </div>
              <div className="Frame427320794">
                <div className="Buttons search">
                  <div className="Button">Search Nearby</div>
                </div>
                <div className="Buttons white">
                  <div className="Button">Search</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <LatestSpaces />
        <div className="Features">
          <div className="GivingYouPeaceOfMind">Giving you peace of mind</div>
          <div className="Frame427320976">
            <div className="Frame427320974">
              <div className="Frame386">
                <div className="Notepad8860368">
                  <div className="Group">
                    <div className="Vector"></div>
                    <div className="Vector small"></div>
                    <div className="Vector small"></div>
                  </div>
                </div>
                <div className="EasyBookingProcess">Easy Booking Process</div>
                <div className="RentingAnOfficeWithUsIsSimpleAndHassleFreeOurUserFriendlyOnlinePlatformAllowsYouToBookYourIdealWorkspaceInJustAFewClicks">
                  Renting an office with us is simple and hassle-free. Our
                  user-friendly online platform allows you to book your ideal
                  workspace in just a few clicks.
                </div>
              </div>
              <div className="Frame387">
                <div className="Hut88603311">
                  <div className="Group">
                    <div className="Vector"></div>
                    <div className="Vector small"></div>
                    <div className="Vector small"></div>
                  </div>
                </div>
                <div className="CommunityAndNetworking">
                  Community and Networking
                </div>
                <div className="JoinAVibrantCommunityOfProfessionalsAndEntrepreneursNetworkCollaborateAndExchangeIdeasInAnEnvironmentThatFostersInnovationAndGrowth">
                  Join a vibrant community of professionals and entrepreneurs.
                  Network, collaborate, and exchange ideas in an environment
                  that fosters innovation and growth.
                </div>
              </div>
              <div className="Frame388">
                <div className="Wand8860488">
                  <div className="Group">
                    <div className="Vector"></div>
                    <div className="Vector small"></div>
                    <div className="Vector small"></div>
                  </div>
                </div>
                <div className="ModernAmenities">Modern Amenities</div>
                <div className="EnjoyAComfortableAndProductiveWorkEnvironmentWithStateOfTheArtFacilitiesHighSpeedInternetMeetingRoomsErgonomicFurniture">
                  Enjoy a comfortable and productive work environment with
                  state-of-the-art facilities, high-speed internet, meeting
                  rooms, and ergonomic furniture.
                </div>
              </div>
            </div>
            <div className="Frame427320974">
              <div className="Frame389">
                <div className="Tag8860449">
                  <div className="Group">
                    <div className="Vector"></div>
                    <div className="Vector small"></div>
                    <div className="Vector small"></div>
                  </div>
                </div>
                <div className="BestPrice">Best Price</div>
                <div className="NotSureWhatYouShouldBeChargingForYourPropertyLetUsDoTheNumbersForYouContactUsTodayForAFreeRentalAppraisalOnYourHome">
                  Not sure what you should be charging for your property? Let us
                  do the numbers for you. Contact us today for a free rental
                  appraisal on your home.
                </div>
              </div>
              <div className="Frame390">
                <div className="Globe8860304">
                  <div className="Group">
                    <div className="Vector"></div>
                    <div className="Vector small"></div>
                    <div className="Vector small"></div>
                  </div>
                </div>
                <div className="StrategicLocation">Strategic Location</div>
                <div className="LocatedInTheCityCenterCloseToTheShoppingCenterVeryGoodForAreasSurroundedByInternationalEducationCentersStartUpOfficeCenters">
                  Located in the city center, close to the shopping center. Very
                  good for areas surrounded by international education centers,
                  start-up office centers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
