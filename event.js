
function searchBandsInTown(artist) {
    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=bandsintown";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // Printing the entire object to console
      console.log(response);
      $(".banner").hide();

      // Constructing HTML containing the artist information
      var artistImage = $("<img>").attr("src", response.thumb_url);
      var artistName = $("<h1>").text(response.name);
      var trackerCount = $("<h2>").text(response.tracker_count + " Trackers ");
      var upcomingEvents = $("<h2>").text("upcoming events: " + response.upcoming_event_count );
      var goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");

      // Empty the contents of the artist-div, append the new artist content
      $("#artist-div").empty();
      $("#artist-info").empty();
      $("#artist-div").append(artistImage,artistName);
      $("#artist-info").append(trackerCount, upcomingEvents, goToArtist)
    });
}



  $(".searchButton").on("click", function() {
    // Preventing the button from trying to submit the form

    // Storing the artist name
        var inputArtist = $(".searchInput").val().trim();
        
    // Running the searchBandsInTown function(passing in the artist as an argument)

       searchBandsInTown(inputArtist);
       
    
  });