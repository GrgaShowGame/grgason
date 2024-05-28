import './App.css';
import grga1 from "./grga 1.png";
import rony1 from "./rony 1.jpg";
import pessi1 from "./messi 1.jpg";
import diego1 from "./diego 1.jpg";
import jovan1 from "./johannn 1.jpg";
import pele1 from "./pele 1.jpg";
import  nazario1 from "./nazario 1.jpg";
import {Link} from 'react-router-dom';
import ferenc1 from './ferenc.jpg';
import Grga from './Grga';
function Glavna() {
      
  return (
    <div className="Glavna">
      <div class="header">
    <h1> TOP 7 BEST FOOTBALL PLAYERS OF ALL TIME AND HONORABLE MENTION</h1>
    <nav>
        <ul>
            <h3>TOP 2 </h3>
            <li><Link to="/rony" >Ronaldo</Link></li>
            <li><Link to="/messi" >Messi</Link></li><h3>HONORABLE MENTION</h3>
            <li><Link to="/grga" >Marko Grgić(Sin vjetra)</Link></li>
        </ul>
    </nav>
</div>
<br/>
<h1 class="mbappe">TOP 7 AND HONORABLE MENTION</h1>
<div class="grid-container">
<div class="item3"><img src={rony1}></img></div>
<div class="item4">
    <h1>1nd</h1>
    <h2>Cristiano Ronaldo Dos Santon Aveiro</h2>
    <p>Born: 5th February, 1985</p>
    <p>Place of birth: Madeira(Portugal)</p>
    <p>Position: LW, ST</p>
    <p>Matches: 1212</p>
    <p>Goals: 879</p>
    <p>Asissts: 249</p>
</div>
<div class="item5"><img src={pessi1}></img></div>
<div class="item6">
    <h1>2rd</h1>
    <h2>Lionel Andreas Messi</h2>
    <p>Born: 24th June, 1987</p>
    <p>Place of birth: Rosario(Argentina)</p>
    <p>Position: RW, CF</p>
    <p>Matches: 1052</p>
    <p>Goals: 829</p>
    <p>Asissts: 363</p>
</div>
<div class="item7"><img src={pele1}></img></div>
<div class="item8">
    <h1>3rd</h1>
    <h2>Pele</h2>
    <p>Born: 23rd October, 1940</p>
    <p>Place of birth: Tres Coracoes(Brazil)</p>
    <p>Position: ST, CF</p>
    <p>Matches: 812</p>
    <p>Goals: 757</p>
    <p>Asissts: 203</p>
</div>
<div class="item9"><img src={diego1}></img></div>
<div class="item10">
    <h1>4th</h1>
    <h2>Diego Armando Maradona</h2>
    <p>Born: 30th October, 1960</p>
    <p>Place of birth: Lanus(Argentina)</p>
    <p>Position: CF, CAM</p>
    <p>Matches: 705</p>
    <p>Goals: 345</p>
    <p>Asissts: 81</p>
</div>
<div class="item11"><img src={jovan1}></img></div>
<div class="item12">
    <h1>5th</h1>
    <h2>Johann Cruyff</h2>
    <p>Born: 25th April, 1947</p>
    <p>Place of birth: Amsteram(Nederland)</p>
    <p>Position: CF, ST</p>
    <p>Matches: 668</p>
    <p>Goals: 375</p>
    <p>Asissts: 134</p>
</div>
<div class="item13"><img src={nazario1}></img></div>
<div class="item14">
    <h1>6th</h1>
    <h2>Ronaldo Nazario de Lima</h2>
    <p>Born: 18th September, 1976</p>
    <p>Place of birth: Rio de Janeiro(Brazil)</p>
    <p>Position: ST, CF</p>
    <p>Matches: 475</p>
    <p>Goals: 298</p>
    <p>Asissts: 75</p>
</div>
<div class="item11"><img src={ferenc1}></img></div>
<div class="item12">
    <h1>7th</h1>
    <h2>Ferenc Puskas</h2>
    <p>Born: 1st April, 1927</p>
    <p>Place of birth: Budimpešta(Hungary)</p>
    <p>Position: CF, ST</p>
    <p>Matches: 529</p>
    <p>Goals: 514</p>
    <p>Asissts: *</p>
</div>
<div class="item1"><img src={grga1}></img></div>
<div class="item2">
    <h1>HONORABLE MENTION</h1>
    <h2>Marko Grgic</h2>
    <p>Born: 5th May, 2007</p>
    <p>Place of birth: Split(Croatia)</p>
    <p>Position: LB, RB, RW</p>
    <p>Matches: 160</p>
    <p>Goals: 43</p>
    <p>Assists: 32</p>
</div>
</div>
<div class="footer">
        <div class="klub">
            <h4>CONTACT ME</h4>
            <p class="grga">Ima li tinte</p>
            <p class='grga'>email: grginho.grgic@gmail.com</p>
            <p class='grga'>telefon: nedan</p>
        </div>
    </div>
    </div>

  );
}

export default Glavna;