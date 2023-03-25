import './App.css';
import Cards from './components/Cards'

function App() {

  const img = 'https://worksolutions.ru/uploads/Ux_BYD_Uf_B_Nl9_Rf_D5r6w_M_Dv_A_Wke3m_G_Tf_Za_Dcm_HGZ_Wc_67283f7901.png';
  const title = 'Card title';
  const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const href = 'https://netology.ru';

  return (
    <>
      <Cards title={title} img={img} content={content} href={href}/>
    </>
  );
}

export default App;
