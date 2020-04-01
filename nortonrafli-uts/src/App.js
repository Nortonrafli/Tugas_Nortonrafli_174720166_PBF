import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import gambar1 from './foto1.jpg';
import gambar2 from './foto2.jpg';
import gambar3 from './foto3.jpg';
import gambar4 from './foto4.jpg';
import gambar5 from './foto5.jpg';
import gambar6 from './foto6.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";



export default function AuthExample(){
  return(
    <Router>
      <div>
        <AuthButton />
          <div>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <a class="navbar-brand" href="#">Jual Akun Premium</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
   
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div class="navbar-nav">
                          <a class="nav-item nav-link active" href="/public">Home <span class="sr-only">(current)</span></a>
                          <a class="nav-item nav-link active" href="/login">Kategory</a>
                      </div>
                  </div>
              </nav>
          </div>
        
        <Switch>
          
          <Route path="/public">
            <PublicPage />
          </Route>
          
          <Route path="/login">
            <LoginPage />
          </Route>
          
          <Route path="/private">
            <ProtectedPage />
          
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

  const fakeAuth ={
    isAuthenticated: false,
      Authenticate(cb){
    fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100);
  },
      signout(cb){
    fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
  }
};

function AuthButton(){
    let history = useHistory();
      return fakeAuth.isAuthenticated ? (
        <div className="kotak_login">
        <p className="tulisan_login"><h1>Login</h1></p>
        
        <br>
        </br>
        <table align="center">
        <thead>
          <td><label>Username</label></td>
          <td><input type ="text" name ="username"className="form_login" placeholder="Masukkan username" required=""></input></td>
        </thead>
        <tbody>
          <td><label>Password</label></td>
          <td><input type="password" name="password" className="form_login" placeholder="Masukkan Password" required=""></input></td>
        </tbody>
        </table>
        
        <br></br>
        <form>
          <input onClick={() =>{fakeAuth.signout(() => history.push("/private"));}} type="submit" class="tombol_login" value="LOGIN"></input>
          <br/>
          <br/>
          <center>
          <input type="checkbox" defaultChecked></input>	
          <label>Remember me</label>			
          </center>
          <br></br>
          <center>			
            <a class="tombol_cancel" href="#">Cancel</a>
          </center>
        </form>
      </div>
        
    //<p>
      //  Terimakasih Sudah Membeli{""}
     
    //</p>
    ): 
    (
      <p>
    </p>
    );
  }

//pembungkusan untuk <route> yang mengaarahkan ke login

function PrivateRoute({children, ...rest}){
    return(
      <Route
        {...rest}
        render={({location}) =>
          fakeAuth.isAuthenticated ? (
        children
        ): (
      <Redirect
        to ={{
        pathname: "/login",
        state: {from: location}
        }}/>
      )
      }
    />
  );
}

function PublicPage(){
  return  <div class="card text-center">
            <div class="card-header">
              Markas Akun
            </div>
  
            <div class="card-body"> 
               
                  {/* <img src={gambar}/> */}
                <p class="card-text">Markas Akun ini menyediakan akun Premium antara lain Netflix , spotify , viu , apple music dan juga youtube music.</p>
                <p class="card-text"> Dimana akun tersebut bisa digunakan satu bulan atau 1 tahun tergantung paket yang dibeli.</p>
            </div>
          </div>;
  }

function ProtectedPage(){
  return(
    <Router>
      <div>
        
        <ul>

          <li>
            <Link to = "/">PriceList</Link>
          </li>
          <li>
            <Link to="/Peraturan">Peraturan</Link>
          </li>
          <li>
            <Link to="/Pembayaran">Pembayaran</Link>
          </li>
            </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Peraturan">
              <Peraturan />
              </Route> 
            <Route path="/Pembayaran">
              <Pembayaran />
              </Route>         
          </Switch>
      </div>
    </Router>
  );
}

//halaman konten

function Home(){
  return (
  <img class="card-img-top" src={gambar4} alt="Card image cap"/>
  );
}


function  Peraturan(){
  return (

<img class="card-img-top" src={gambar5} alt="Card image cap"/>
  );
}


function Pembayaran(){
  return (
<img class="card-img-top" src={gambar6} alt="Card image cap"/>
  );
}

function LoginPage(){
  let history = useHistory();
  let location = useLocation();
  let {from} = location.state || { from: {pathname: "/private"}};
  let login = () => {
    fakeAuth.Authenticate(() => {
      history.replace(from);
    });
  };
return (
    <div class="card-deck">
      <div class="card">
        <img class="card-img-top" src={gambar1} alt="Card image cap"/>
          
          <div class="card-body">
            <h5 class="card-title">Pricelist</h5>
            <p class="card-text">Harga diatas sudah termasuk biaya admin dan Garansi selama pemakaian</p>
          </div>
          
          <div class="card-footer">
            <button onClick={login} type="button" class="btn btn-secondary btn-lg btn-block">Beli</button>
          </div>
      </div>
          
          <div class="card">
            <img class="card-img-top" src={gambar2} alt="Card image cap"/>
            
            <div class="card-body">
              <h5 class="card-title">Netflix</h5>
              <p class="card-text">Dilarang mengganti password dan username ketika menggunakan akun tersebut</p>
            </div>
    
            <div class="card-footer">
              <button onClick={login} type="button" class="btn btn-secondary btn-lg btn-block">Beli</button>
            </div>
          </div>
  
        <div class="card">
            <img class="card-img-top" src={gambar3} alt="Card image cap"/>
          
          <div class="card-body">
            <h5 class="card-title">Viu</h5>
            <p class="card-text">Menggunakan viu yang bijaksana dikarenakan banyak konten konten dewasa , diwajibkan 18+</p> 
          </div>
          
          <div class="card-footer">
            <button onClick={login} type="button" class="btn btn-secondary btn-lg btn-block">Beli</button>
          </div>
    
        </div>
    </div>
  );
}