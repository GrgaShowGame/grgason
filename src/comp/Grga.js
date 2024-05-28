import './App.css';
import {Link} from 'react-router-dom';
import grga1 from "./grga 1.png";
import Glavna from './Glavna';
import grgic1 from './grgic.png';
import goat1 from './goat.png';
function Grga() {
  return (
    <div className="Grga">
        <div class="header">
    <h1> MARKO GRGIC</h1>
    <nav>
        <ul>
            <li><Link to="/" >Početna</Link></li>
            <li><Link to="/rony" >Ronaldo</Link></li>
            <li><Link to="/messi" >Messi</Link></li>
            
        </ul>
    </nav>
</div>
<div class="container">
  <div class="card">
    <h1>Marko Grgić Stats</h1>
    <div class="player-info">
    <p class="dekeko"><img src={goat1} class="dekeko"></img></p>
      <div class="player-details">
        <h2>Marko Grgić</h2>
        <p>Nationality: Croatia</p>
        <p>Position: Left-back, Right-back, Right-Winger</p>
        <p>Age: 17 (May 5, 2007)</p>
        <p>Height: 185cm</p>
        <p>Weight: 68kg</p>
        <p>Senior debut: 2024, February</p>
        <p>Foot: Left</p>
        <p>Best performance: against Neretva( 22.5.2024)</p>
      </div>
    </div>
 
    <table>
        <tr>
          <th>Season</th>
          <th>MP</th>
          <th>Goals</th>
          <th>Assists</th>
          <th>G+A</th>
        </tr>
        <tr>
          <td>2023/2024</td>
          <td>42</td>
          <td>7</td>
          <td>6</td>
          <td>13</td>
        </tr>
        <tr>
          <td>2022/2023</td>
          <td>29</td>
          <td>1</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>2021/2022</td>
          <td>24</td>
          <td>1</td>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr>
          <td>2020/2021</td>
          <td>26</td>
          <td>9</td>
          <td>2</td>
          <td>11</td>
        </tr>
        <tr>
          <td>2019/2020</td>
          <td>15</td>
          <td>12</td>
          <td>2</td>
          <td>14</td>
        </tr>
        <tr>
            <td>2018/2019</td>
            <td>27</td>
            <td>15</td>
            <td>2</td>
            <td>17</td>
          </tr>
          <tr>
            <td>Overall</td>
            <td>163</td>
            <td>45</td>
            <td>16</td>
            <td>61</td>
          </tr>
          
    </table>
    <br></br>
    <a href="https://semafor.hns.family/igraci/393018/marko-grgic/" class="download-button">GRGA MORE STATS</a>
  </div>
</div>
</div>
  );
}

export default Grga;
