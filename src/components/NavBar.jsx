import { TiShoppingCart } from "react-icons/ti";
export const NavBar = () => {
  return (
    <header style={{textAlign: "left",backgroundColor:"#35292dff", width:'100%'}}>
      <div style={{display: 'flex',
        justifyContent:'space-between'
      }}>
        <img style={{height:'9vh',width:'9vw', paddingTop:'5px', paddingBottom:'5px'}}src=".\src\assets\Logoheader.svg" alt="" />
        <nav className="NavBar">
          <a href="">Ipa</a>
          <a href="">Golden</a>
          <TiShoppingCart style={{fontSize:'50',color:'red'}}/>
        </nav>
      </div>

    </header>
  );
}
