import React from "react";
import step1 from "../step1.png";
import step2 from "../step2.png";
import step3 from "../step3.png";
import step4 from "../step4.png";
import girl1 from "../girl1.png";
import girl2 from "../girl2.png"
import box1 from "../box1.png"
import box2 from "../box2.png"
import box3 from "../box3.png"
import box4 from "../box4.png"
import box5 from "../box5.png"
import box6 from "../box6.png"

const Sing = () => {
  return (
    <section>
      <div className="sing">
          <div className="rectanglebox">
            <h1 className="rectboxtext">MusigPro works like this....!</h1>
          </div>
          <div className="singergirl"></div>
          
          <div className="box1">
            <div className="steps">Step - 1</div>
            <img  src={step1} alt="John" className="absolute top-12 left-36"/>
            <div className="stepstext">Users sing along to their favourite song</div>
          </div>

          <div className="box2">
            <div className="steps">Step - 2</div>
            <img  src={step2} alt="John" className="absolute  top-12 left-36"/>
            <div className="stepstext">Analysis - Our Patent pending algorithm rates the performance for Pitch, Rhythm, Timbre & Vibrato</div>
          </div>

          <div className="box3">
            <div className="steps">Step - 3</div>
            <img  src={step3} alt="John" className="absolute  top-16 left-36"/>
            <div className="stepstext">The AI judge provides the singing quality score out of 100, along with graphical feedback, and position on the leaderboard.</div>
          </div>

          <div className="box4">
            <div className="steps">Step - 4</div> 
            <img  src={step4} alt="John" className="absolute  top-16 left-32"/>
            <div className="stepstext">The user can share their performance to gather likes and rise up the leaderboard through popularity</div>
          </div>
      </div>


      
      <div>
        <div className="linear">
            <div className="vote"> Do you want to vote Our singers song </div>
            <div>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic </div>
            <div className="tickbox"></div>
            <div className="crossbox"></div>

            <div className="whitebox1">
              <img  src={girl1} alt="John" className="absolute  top-12 left-32"/>
            </div>
            <div className="whitebox2">
              <img  src={girl2} alt="John" className="absolute  top-12 left-32"/>
            </div>
          </div>

      </div>



      <div className="largeblack">
        <div>
          <div className="largebox1-1"><img  src={box1} alt="John" className="absolute  top-12 left-32"/>
            <div className="innerbox1"></div>
          </div>

          <div className="largebox1-2"><img  src={box2} alt="John" className="absolute  top-12 left-32 fill-transparent"/>
            <div className="innerbox2"></div>
          </div>

          <div className="largebox1-3"><img  src={box3} alt="John" className="absolute  top-12 left-32"/>
            <div className="innerbox3"></div>
          </div>


          <div className="largebox2-1"><img  src={box4} alt="John" className="absolute  top-12 left-32"/>
            <div className="innerbox4"></div>
          </div>


          <div className="largebox2-2"><img  src={box5} alt="John" className="absolute  top-12 left-32"/>
            <div className="innerbox5"></div>
          </div>


          <div className="largebox2-3"><img  src={box6} alt="John" className="absolute  top-12 left-32"/>
            <div className="innerbox6"></div>
          </div>


        </div>
        <div className="viewmore"> View More </div>

        <div className="ongoing">Ongoing Competitions</div>

        <h1>Competitions</h1>
        <div className="competition">
          <h1>Leaderboard</h1>
          <div className="leaderboard">
            <div className="leaderboard_heading">
            <table class="table table-borderless">
<thead>
<tr>
  <th scope="col-2" className="pr-14 pl-12 pt-8">Rank</th>
  <th scope="col-4">Singer Name</th>
  <th scope="col-2">AI Score</th>
  <th scope="col-2">Likes</th>
  <th scope="col-2">Song</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row"></th>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <th scope="row"></th>
  <td></td>
  <td></td>
  <td></td>
  </tr>
  <tr>
  <th scope="row"></th>
    <td colspan="2"></td>
    <td></td>
   </tr>
 </tbody>
</table>
            </div>

            <div>

            </div>
          </div>
        </div>
      </div>

      </section>

  )
}
export default Sing