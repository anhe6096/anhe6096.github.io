function GetValue()
{
    var myarray= new Array
        ("<a href='https://open.spotify.com/album/7Lu7x9A3fOsBzhUY22exUd?si=II7df19xR0GkhLjduuG5jw'>Check out my debut album on Spotify.</a>",
        "<a href='https://open.spotify.com/track/19S6n8P3wD749JY0ptZfWf?si=3cb55ff0efd54c3a'> Honey - January 2019.</a>",
        "<a href='https://anthembranding.com/completed-projects/custom-cropped-tie-dye-hoodie'>Custom Cropped Tie Die Hoodie - Shot by Me.</a>",
        "<a href='https://anthembranding.com/completed-projects/chipotle-pride-dad-hats'> Chipotle Dad Hats - Shot by Me.</a>",
        "<a href='https://anthembranding.com/completed-projects/stranahans-curved-brim-trucker-hats'> Stranahans Curved Brim Trucker Hat - Shot by Me. </a>",
        "<a href='https://www.youtube.com/watch?v=EgqnIDVVIqk'> Pennsylvanias Blurry MUSIC VIDEO - Directed, Edited, Performed by Me. </a>",
        "<a href='https://www.youtube.com/watch?v=6UAt2AnX3uc'> Stars Dont Shine MUSIC VIDEO - Directed, Edited, Performed by Me. </a>",
        "<a href='https://www.youtube.com/watch?v=1-8wAO_LlBU'> Home Again </a>",
        "<a href='http://cravethesound.com/interviews-1/2021/2/25/drew-hersch-on-indie-pop-internet-fame-theres-an-empty-parking-spot-for-me-profile'> Crave the Sound - Interview </a>",
        "<a href='https://www.unheardgems.com/post/call-you-a-man-drew-hersch-press-release'> CALL YOU A MAN - Track Review </a>",
        "<a href='https://anthembranding.com/custom-hats/custom-hats'> Hero Video - Shot by Me. </a>",
        "<a href='https://www.youtube.com/watch?v=LU5uLbt2qyE'> Nice Guy. </a>"
        );
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("message").innerHTML=random;
}