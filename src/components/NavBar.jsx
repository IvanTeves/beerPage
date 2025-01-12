import { TiShoppingCart } from "react-icons/ti";
export const NavBar = () => {
  return (
    <header style={{textAlign: "left"}}>
      <div style={{display: 'flex',
        justifyContent:'space-between'
      }}>
        <img src="https://mercadocentral.gob.ar/sites/default/files/images/palta.png" alt="" style={{width:'10vw'}} />
        <span style={{color:'Blue', fontSize: '13px', fontWeight:'bold'}}>Gandhi</span>
        <nav>
          <a href="">Ipa</a>
          <a href="">Golden</a>
          <TiShoppingCart style={{fontSize:'50',color:'red'}}/>
        </nav>
      </div>

    </header>
  );
}
