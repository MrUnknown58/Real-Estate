import { createContext } from "react";

const DataAPIContext = createContext();
const DataAPIProvider=(props)=>{
    let l={
        list : [
          {
            id: 1,
            name: "Merlin Urvan",
            location: "210 Zirak Road, Dum Dum",
            category: "For Rent",
            price: "Rs.55 Lac-1.13 Crore",
            type: "Apartment",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhivs8tyP1PTtdsA6K7_eHyc75ysvGJsLWg&usqp=CAU",
            desc :"Merlin Urvan in Dum Dum, Kolkata North by Merlin Group is a residential project.The project offers Apartments with perfect combination of contemporary architecture and features to provide comfortable living.The Apartment are of the following configurations: 2BHK,3BHK and 4BHK.This is a RERA registered project.The project is spread over a total area of 3.11 acres of land.  It has 75% of open space. Merlin Urvan has a total of 4 towers. The construction is of  13 floors.  An accommodation of 363 units has been provided.This is an under construction project with possession to be offered on March 2024.",
            shortdesc:"5 rooms per floor, 1 Bathroom and Living Room",
            buy:"https://www.99acres.com/merlin-urvan-dum-dum-kolkata-north-npxid-r327713"
          },
          {
            id: 2,
            name: "Magnolia Sports City",
            location: "5698 Zirak Road, Barrackpore",
            category: "For Sale",
            price: "Rs.29 to 45 Lac",
            type: "Condos",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORPmPHinbDY4LnCMBLBnhjBTnzelC6B4asA&usqp=CAU",
            desc: "Check out Magnolia Sports City in Barrackpore, one of the upcoming under-construction housing societies in Kolkata North. There are apartments for sale in Magnolia Sports City. This society will have all basic facilities and amenities to suit homebuyer’s needs and requirements.  Brought to you by Magnolia Infrastructure Development,  Magnolia Sports City is scheduled for possession in Sep, 2023.Being a RERA-registered society, the project details and other important information is also available on state RERA portal. The RERA registration number of this project is HIRA/P/NOR/2018/000154.Magnolia Infrastructure Development is one of the known real estate brands in Kolkata North.The builder has delivered 22 projects so far. Around 6 projects are upcoming. There are 8 projects of this builder, which are currently under-construction.Here’s everything you need to know about the must-know features of this housing society along with Magnolia Sports City  Photos,  Floor Plans,  Brochure download procedure  and other exciting facts about your future home:",
            shortdesc:"3 rooms per floor,2 Bathroom",
            buy:"https://www.99acres.com/magnolia-sports-city-barrackpore-kolkata-north-npxid-r271121?advertiserIds=47617104"
          },
          {
            id: 3,
            name: "Bhawani Courtyard",
            location: "5624 Mooker Market, Madhyamgram",
            category: "For Rent",
            price: "Rs.44.48-56.79 Lac",
            type: "Offices",
            url: "https://newprojects.99acres.com/projects/bhawani_group/bhawani_courtyard/images/muv2ovfm_med.jpg",
            desc: "Check out Bhawani Courtyard in Madhyamgram, one of the upcoming under-construction housing societies in Kolkata North. There are apartments for sale in Bhawani Courtyard. This society will have all basic facilities and amenities to suit homebuyer’s needs and requirements.  Brought to you by Bhawani Group,  Bhawani Courtyard is scheduled for possession in Dec, 2022.Being a RERA-registered society, the project details and other important information is also available on state RERA portal. The RERA registration number of this project is HIRA/P/NOR/2018/000235.Bhawani Group is one of the known real estate brands in Kolkata North.The builder has delivered 12 projects so far.  There are 3 projects of this builder, which are currently under-construction.Here’s everything you need to know about the must-know features of this housing society along with Bhawani Courtyard  Photos,  Floor Plans, Payment Plans, Brochure download procedure  and other exciting facts about your future home:",
            shortdesc:"6 rooms per floor,4 Bathroom and Living Room",
            buy:"https://www.99acres.com/bhawani-courtyard-madhyamgram-kolkata-north-npxid-r304313?advertiserIds=12618931"
            
          },
          {
            id: 4,
            name: "Magnolia Nakshatra",
            location: "5621 Liverpool, Barasat",
            category: "For Sale",
            price: "Price on Request",
            type: "Homes & Villas",
            url:"https://newprojects.99acres.com/projects/magnolia_infrastructure_development/magnolia_nakshatra/images/lwynxfl9_med.png",
            desc: "Magnolia Nakshatra in Barasat, Kolkata North by Magnolia Infrastructure Development is a residential project.The project offers Apartments with perfect combination of contemporary architecture and features to comfortable living.The Apartment are of the following configurations: 1BHK,2BHK and 3BHK.This is a RERA registered project.The project is spread over a total area of 2.38 acres of land. Magnolia Nakshatra has a total of 20 towers. The construction is of  4 floors.  An accommodation of 240 units has been provided.Offering 36 amenities for better living experience.",
            shortdesc:"5 rooms per floor,1 Bathroom and Living Room",
            buy:"https://www.99acres.com/magnolia-nakshatra-barasat-kolkata-north-npxid-r261524?advertiserIds=47617104"
          },
          {
            id: 5,
            name: "Oswal Orchard Amritaya",
            location: "Oswal Orchard Amritaya, Cossipore",
            category: "For Rent",
            price: "Rs.45.18 - 64.73 Lac",
            type: "Commercial",
            url:"https://newprojects.99acres.com/projects/oswal_group/oswal_orchard_amritaya/images/g0myj5cz_med.png",
            desc: "Check out Oswal Orchard Amritaya in Cossipore, one of the upcoming under-construction housing societies in Kolkata North. There are apartments for sale in Oswal Orchard Amritaya. This society will have all basic facilities and amenities to suit homebuyer’s needs and requirements.  Brought to you by Oswal Group,  Oswal Orchard Amritaya is scheduled for possession in Apr, 2027.Oswal Group is one of the known real estate brands in Kolkata North.The builder has delivered 5 projects so far.  There is 1 project of this builder, which is currently under-construction.Here’s everything you need to know about the must-know features of this housing society along with Oswal Orchard Amritaya  Photos,  Floor Plans, Payment Plans, Brochure download procedure  and other exciting facts about your future home:",
            shortdesc:"4 rooms per floor,3 Bathroom and Living Room",
            buy:"https://www.99acres.com/oswal-orchard-amritaya-cossipore-kolkata-north-npxid-r399693?advertiserIds=59501184"

          },
          {
            id: 6,
            name: "Westroad Heights",
            location: "210 Liverpool, Barasat",
            category: "For Sale",
            price: "Rs.27.73 - 60.05 Lac",
            type: "Apartment",
            url: "https://newprojects.99acres.com/projects/westroad_housing_llp/westroad_heights/images/fb009dzk_med.jpg",
            desc: "Westroad Heights in Barasat, Kolkata North is a ready-to-move housing society. It offers apartments in varied budget range. These units are a perfect combination of comfort and style, specifically designed to suit your requirements and conveniences. There are 2BHK, 3BHK and 4BHK Apartments available in this project. This housing society is now ready to be called home as families have started moving in. Check out some of the features of Westroad Heights housing society.Westroad Heights Barasat has 2 towers, with 7 floors each and 133 units on offer.Spread over an area of 0.89 acres, Westroad Heights is one of the spacious housing societies in the Kolkata North region. With all the basic amenities available, Westroad Heights fits into your budget and your lifestyle.Barasat has good connectivity to some of the important areas in the proximity such as SH 2, Adamas University and J N Plaza Shopping Mall and so on.",
            shortdesc:"5 rooms per floor,1 Bathroom and Living Room",
            buy:"https://www.99acres.com/westroad-heights-barasat-kolkata-north-npxid-r341613?advertiserIds=42969193"
          },
          {
            id: 7,
            name: "Fortune Township",
            location: "210 Zirak Road, Barasat",
            category: "For Sale",
            price: "Rs.27.62 - 56.77 Lac",
            type: "Apartment",
            url: "https://newprojects.99acres.com/projects/fortune_realty_/fortune_township/images/n2b3rcx7_med.jpg",
            desc: "Fortune Township in Barasat, Kolkata North is a ready-to-move housing society. It offers apartments in varied budget range. These units are a perfect combination of comfort and style, specifically designed to suit your requirements and conveniences. There are 1BHK, 2BHK, 3BHK and 4BHK Apartments available in this project. This housing society is now ready to be called home as families have started moving in. Check out some of the features of Fortune Township housing society:Fortune Township Barasat has 21 towers, with 4 floors each and 650 units on offer.Spread over an area of 8 acres, Fortune Township is one of the spacious housing societies in the Kolkata North region. With all the basic amenities available, Fortune Township fits into your budget and your lifestyle.Barasat has good connectivity to some of the important areas in the proximity such as Fortune Plaza, Arogya Medical Hall and Bharat Petroleum Fuel Station and so on.",            
            shortdesc:"10 rooms per floor,4 Bathroom and 4 Living Room",
            buy:"https://www.99acres.com/fortune-township-barasat-kolkata-north-npxid-r1506?advertiserIds=321155"

          },
          {
            id: 8,
            name: "Magnolia Fantasia",
            location: "210 Liverpool, Barasat",
            category: "For Sale",
            price: "$8,742",
            type: "Apartment",
            url: "https://newprojects.99acres.com/projects/magnolia_infrastructure_development/magnolia_fantasia/images/6sbwwqzr_med.jpg",
            desc: "Check out Magnolia Fantasia in Barasat, one of the upcoming under-construction housing societies in Kolkata North. There are apartments for sale in Magnolia Fantasia. This society will have all basic facilities and amenities to suit homebuyer’s needs and requirements.  Brought to you by Magnolia Infrastructure Development,  Magnolia Fantasia is scheduled for possession in Sep, 2023.Being a RERA-registered society, the project details and other important information is also available on state RERA portal. The RERA registration number of this project is HIRA/P/NOR/2019/000321.Magnolia Infrastructure Development is one of the known real estate brands in Kolkata North.The builder has delivered 22 projects so far. Around 5 projects are upcoming. There are 9 projects of this builder, which are currently under-construction.Here’s everything you need to know about the must-know features of this housing society along with Magnolia Fantasia Price List, Photos,  Floor Plans, Payment Plans, Brochure download procedure  and other exciting facts about your future home:",
            shortdesc:"5 rooms per floor,3 Bathroom",
            buy:"https://www.99acres.com/magnolia-fantasia-barasat-kolkata-north-npxid-r300807?advertiserIds=47617104"
          },
          {
            id: 9,
            name: "Magnolia Empire",
            location: "210 Zirak Road, Madhyamgram",
            category: "For Sale",
            price: "Rs. 29 - 56.77 Lac",
            type: "Apartment",
            url: "https://newprojects.99acres.com/projects/magnolia_infrastructure_development/magnolia_empire/images/c5jy2cbw_med.jpg",
            desc: "Check out Magnolia Empire in Madhyamgram, one of the upcoming under-construction housing societies in Kolkata North. There are apartments for sale in Magnolia Empire. This society will have all basic facilities and amenities to suit homebuyer’s needs and requirements.  Brought to you by Magnolia Infrastructure Development,  Magnolia Empire is scheduled for possession in Sep, 2025.Being a RERA-registered society, the project details and other important information is also available on state RERA portal. The RERA registration number of this project is HIRA/P/NOR/2019/000590.Magnolia Infrastructure Development is one of the known real estate brands in Kolkata North.The builder has delivered 22 projects so far. Around 6 projects are upcoming. There are 8 projects of this builder, which are currently under-construction.Here’s everything you need to know about the must-know features of this housing society along with Magnolia Empire Price List, Photos,  Floor Plans, Payment Plans, Brochure download procedure  and other exciting facts about your future home.",
            shortdesc:"3 rooms per floor,1 Bathroom and Living Room",
            buy:"https://www.99acres.com/magnolia-empire-madhyamgram-kolkata-north-npxid-r300799?advertiserIds=47617104"
          },
          {
            id: 10,
            name: "Merlin The Fourth",
            location: "210 Zirak Road, Salt Lake",
            category: "For Sale",
            price: "Rs. 14.88 - 32 Lac",
            type: "Apartment",
            url: "https://newprojects.99acres.com/projects/merlin_group/merlin_the_fourth/images/ijip0cya_med.jpeg",
            desc:"For those looking to buy a residential property, here comes one of the choicest offerings in Kolkata North, at Salt Lake. Brought to you by Merlin Group, Merlin The Fourth is among the newest addresses for homebuyers. There are apartments for sale in Merlin The Fourth. This is an under-construction project right now, and is expected to be delivered by Dec, 2025 .Merlin The Fourth Kolkata North is a RERA-registered housing society, which means all projects details are also available on state RERA website for end-users and investors. The RERA registration number of this project is HIRA/P/NOR/2020/000939.Merlin Group is one of the known real estate brands in Kolkata North.The builder has delivered 54 projects so far. Around 3 projects are upcoming. There are 14 projects of this builder, which are currently under-construction.Read on to know more about must-know features, Merlin The Fourth  Photos,  Floor Plans, Payment Plans, Brochure download procedure  and other exciting facts about the project.",
            shortdesc:"8 rooms per floor,2 Bathroom and Living Room",
            buy:"https://www.99acres.com/merlin-the-fourth-salt-lake-kolkata-north-npxid-r367844"
          },
          {
            id: 11,
            name: "Value Meghbalika",
            location: "210 Zirak Road, Salt Lake",
            category: "For Sale",
            price: "Rs.33.92 - 48 Lac",
            type: "Apartment",
            url: "https://newprojects.99acres.com/projects/value_homes_kolkata/value_eden_meghbalika/images/wsepmspd_large.jpeg",
            desc:"Check out Value Meghbalika in Salt Lake, one of the upcoming under-construction housing societies in Kolkata North. There are apartments for sale in Value Meghbalika. This society will have all basic facilities and amenities to suit homebuyer’s needs and requirements.  Brought to you by Value Homes Kolkata,  Value Meghbalika is scheduled for possession in Mar, 2024.Value Homes Kolkata is one of the known real estate brands in Kolkata North.  There are 2 projects of this builder, which are currently under-construction.Here’s everything you need to know about the must-know features of this housing society along with Value Meghbalika  Photos,  Floor Plans,   and other exciting facts about your future home.",
            shortdesc:"8 rooms per floor,4 Bathroom and 2 Living Room",
            buy:"https://www.99acres.com/value-meghbalika-salt-lake-kolkata-north-npxid-r401141"

          },
          {
            id: 12,
            name: "Nirmala Nevada",
            location: "210 Zirak Road, Lake Town",
            category: "For Sale",
            price: "Rs.74.52 - 1.09 Crore",
            type: "Apartment",
            url: "https://newprojects.99acres.com/projects/nirmala_group/nirmala_nevada/images/f3irn7gu_large.jpg",
            desc: "For those looking to buy a residential property, here comes one of the choicest offerings in Kolkata North, at Lake Town. Brought to you by Nirmala Group and Auricas, Nirmala Nevada is among the newest addresses for homebuyers. There are apartments for sale in Nirmala Nevada. This is an under-construction project right now, and is expected to be delivered by Nov, 2025 .Read on to know more about must-know features, Nirmala Nevada  Photos,  Floor Plans,  Brochure download procedure  and other exciting facts about the project.",
            shortdesc:"5 rooms per floor,1 Bathroom and Living Room",
            buy:"https://www.99acres.com/nirmala-nevada-lake-town-kolkata-north-npxid-r400429"

          },
        ]
        }
    return(
        <DataAPIContext.Provider value={{l}}>{props.children}</DataAPIContext.Provider>
    );
}
export {DataAPIContext,DataAPIProvider};
