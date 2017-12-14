var queryURL = "https://zoning.io/en/api/1.0/zones.json?code=C-B";

$.ajax({
    url: queryURL,
    method: 'GET',
    jurisdictions: {
        id: 1292,
        slug: "beach-commercial",
        name: "Beach Commercial",
        display_name: "C-B - Beach Commercial",
        description: "The purpose of this district is to provide for commercial uses which are primarily coastal-dependent in nature and which serve tourists and visitors to the Santa Cruz coastal recreational areas. Also, to provide commodities and services to residents of such areas. The C-B District shall be applied only in areas designated in the General Plan and the Local Coastal Program.",
        municipal_code_url: "http://www.codepublishing.com/ca/santacruz/?santacruz24/SantaCruz2410.html#24.10.1100",
        code: "C-B",
        overlay: false
    },
}).done(function (response) {

    console.log(response);

});