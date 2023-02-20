import React from 'react'
import '../styles/Home.css'
import '../assets/tunes/;.wav'
import '../assets/tunes/a.wav'
import '../assets/tunes/d.wav'
import '../assets/tunes/e.wav'
import '../assets/tunes/f.wav'
import '../assets/tunes/g.wav'
import '../assets/tunes/h.wav'
import '../assets/tunes/j.wav'
import '../assets/tunes/k.wav'
import '../assets/tunes/l.wav'
import '../assets/tunes/o.wav'
import '../assets/tunes/p.wav'
import '../assets/tunes/s.wav'
import '../assets/tunes/t.wav'
import '../assets/tunes/u.wav'
import '../assets/tunes/w.wav'
import '../assets/tunes/y.wav'

function Home() {
 
  // const pianoKeys = document.querySelectorAll(".piano-keys .key");
  // const volumeSlider = document.querySelector(".volume-slider input");
  // const keysCheckbox = document.querySelector(".keys-checkbox input");
  
 
  
  return (
    <div class="wrapper">
        <header>
            <h2>Keys with Keys!</h2>
            <div class="column volume-slider">
                <span>Volume</span><input type="range" min="0" max="1" value="0.5" step="any"/>
            </div>
            <div class="column keys-checkbox">
                <span>Show Keys</span><input type="checkbox" checked/>
            </div>
        </header>

        <ul class="piano-keys">
            <li class="key white" data-key="a"><span>a</span></li>
            <li class="key black" data-key="w"><span>w</span></li>
            <li class="key white" data-key="s"><span>s</span></li>
            <li class="key black" data-key="e"><span>e</span></li>
            <li class="key white" data-key="d"><span>d</span></li>
            <li class="key white" data-key="f"><span>f</span></li>
            <li class="key black" data-key="t"><span>t</span></li>
            <li class="key white" data-key="g"><span>g</span></li>
            <li class="key black" data-key="y"><span>y</span></li>
            <li class="key white" data-key="h"><span>h</span></li>
            <li class="key black" data-key="u"><span>u</span></li>
            <li class="key white" data-key="j"><span>j</span></li>
            <li class="key white" data-key="k"><span>k</span></li>
            <li class="key black" data-key="o"><span>o</span></li>
            <li class="key white" data-key="l"><span>l</span></li>
            <li class="key black" data-key="p"><span>p</span></li>
            <li class="key white" data-key=";"><span>;</span></li>
      </ul>
    </div>

  )
}

export default Home