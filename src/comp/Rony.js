import './App.css';
import {Link} from 'react-router-dom';
import ronaldo1 from './ronaldo.jpg';
function Rony() {
  return (
    <div className="Rony">
        <div class="header">
    <h1> CRISTIANO RONALDO</h1>
    <nav>
        <ul>
            <li><Link to="/" >Početna</Link></li>
            <li><Link to="/grga" >Grgić</Link></li>
            <li><Link to="/messi" >Messi</Link></li>
        </ul>
    </nav>
</div>
<div class="container">
  <div class="card">
    <h1>Cristiano Ronaldo Stats</h1>
    <div class="player-info">
    <p class="dekeko"><img src={ronaldo1} class="dekeko"></img></p>
      <div class="player-details">
        <h2>Cristiano Ronaldo Dos Santos Aveiro</h2>
        <p>Nationality: Portugal</p>
        <p>Position: Center-forward, Left-winger</p>
        <p>Age: 39 (February 5, 1985)</p>
        <p>Height: 187cm</p>
        <p>Weight: 83kg</p>
        <p>Senior debut: 2002, August</p>
        <p>Foot: Right</p>
        <p>Best performance: against Atletico Madrid( 12.3. 2019)</p>
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
          <td>43</td>
          <td>42</td>
          <td>13</td>
          <td>55</td>
        </tr>
        <tr>
          <td>2022/2023</td>
          <td>35</td>
          <td>17</td>
          <td>4</td>
          <td>21</td>
        </tr>
        <tr>
          <td>2021/2022</td>
          <td>39</td>
          <td>24</td>
          <td>3</td>
          <td>27</td>
        </tr>
        <tr>
          <td>2020/2021</td>
          <td>44</td>
          <td>36</td>
          <td>5</td>
          <td>41</td>
        </tr>
        <tr>
          <td>2019/2020</td>
          <td>46</td>
          <td>37</td>
          <td>5</td>
          <td>42</td>
        </tr>
        <tr>
            <td>2018/2019</td>
            <td>43</td>
            <td>28</td>
            <td>10</td>
            <td>38</td>
          </tr>
          <tr>
            <td>Overall</td>
            <td>250</td>
            <td>184</td>
            <td>40</td>
            <td>224</td>
          </tr>
    </table>
    <br></br>
    <a href="https://www.messivsronaldo.app/club-stats/2018-2019/" class="download-button">RONALDO MORE STATS</a>
  </div>
</div>
</div>
  );
}

export default Rony;