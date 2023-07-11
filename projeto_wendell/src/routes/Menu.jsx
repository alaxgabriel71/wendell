
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



export default function Root() {
  const navigate = useNavigate()
    return (
      <>
        <div id='cabeça'>
         <h1 id='Top'>DEJU DOCES</h1>
        </div>
        <div id='Imagem'>
          <h1> Logo</h1>
          <img src="src/img/beijinho.png" alt="amendoim" width="50px" height="100px"/>          
        
        </div>

        <button id="menu">
          <nav>
            <ul>
              <a href={`/Item`}>Cardapio</a>
            </ul>
          </nav>
        </button>
        <button id="menu">
          <nav>
              <a href={`/Cliente`}>Cadastre-se</a>
          </nav>
        </button>
        <button id="menu">
          <nav>
            <ul>
              <li><Link href="https://www.instagram.com/dejudoces1/">Instagram</Link></li>
              <li><Link href="https://www.instagram.com/dejudoces1/">Instagram</Link></li>
              <li><Link href="https://www.instagram.com/dejudoces1/">Instagram</Link></li>
            
            </ul>
          </nav>
        </button>
      <ul>
        <li><Button variant="contained" color="info" style={{"width": "150px", "margin": "10px", "backgroundColor": "aqua"}} onClick={() => navigate('/Cliente')}>Cadastre-se</Button></li>
        <li><Button variant="contained" color="info" style={{"width": "150px", "margin": "10px", "backgroundColor": "aqua"}} onClick={() => navigate('/Item')}>Cardapio</Button></li>
        <li><Button variant="contained" color="info" style={{"width": "150px", "margin": "10px", "backgroundColor": "aqua"}}><a href='https://www.instagram.com/dejudoces1/' target="_blank">Instagram</a></Button></li>
      </ul>
      
        
      </>
    );
}
