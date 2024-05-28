import './App.css';
import {Link} from 'react-router-dom';
import Glavna from './Glavna';
import messi from './messi.jpg'
function Messi() {
  return (
    <div className="Messi">
        <div class="header">
    <h1> LIONEL MESSI</h1>
    <nav>
        <ul>
            <li><Link to="/" >Početna</Link></li>
            <li><Link to="/grga" >Grgić</Link></li>
            <li><Link to="/rony" >Ronaldo</Link></li>
        </ul>
    </nav>
</div>
<div class="container">
  <div class="card">
    <h1>Lionel Andreas Messi</h1>
    <div class="player-info">
    <p class="dekeko"><img src={messi} class="dekeko"></img></p>
      <div class="player-details">
        <h2>Lionel Messi</h2>
        <p>Nationality: Argentine</p>
        <p>Position: Center-forward, Right-Winger</p>
        <p>Age: 36 (June 24, 1987)</p>
        <p>Height: 170cm</p>
        <p>Weight: 67kg</p>
        <p>Senior debut: 2004, October</p>
        <p>Foot: Left</p>
        <p>Best performance: against Manchester United( 28.5.2011)</p>
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
          <td>27</td>
          <td>23</td>
          <td>16</td>
          <td>39</td>
        </tr>
        <tr>
          <td>2022/2023</td>
          <td>41</td>
          <td>21</td>
          <td>20</td>
          <td>41</td>
        </tr>
        <tr>
          <td>2021/2022</td>
          <td>34</td>
          <td>11</td>
          <td>14</td>
          <td>25</td>
        </tr>
        <tr>
          <td>2020/2021</td>
          <td>47</td>
          <td>38</td>
          <td>12</td>
          <td>50</td>
        </tr>
        <tr>
          <td>2019/2020</td>
          <td>44</td>
          <td>31</td>
          <td>25</td>
          <td>56</td>
        </tr>
        <tr>
            <td>2018/2019</td>
            <td>50</td>
            <td>51</td>
            <td>19</td>
            <td>70</td>
          </tr>
          <tr>
            <td>Overall</td>
            <td>243</td>
            <td>175</td>
            <td>106</td>
            <td>281</td>
          </tr>
    </table>
    <br></br>
    <a href="https://www.messivsronaldo.app/club-stats/2018-2019/" class="download-button">MESSI MORE STATS</a>
  </div>
</div>
</div>
  );
}

export default Messi;