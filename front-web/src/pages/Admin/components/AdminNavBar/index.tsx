import './styles.scss';

const AdminNavBar = () => {
    return (
       <nav className="admin-nav-container">
           <ul>
               <li>
                   <a href="link" className="admin-nav-item"> Meus Produtos </a>
               </li>
               <li>
                    <a href="link" className="admin-nav-item"> Minhas Categorias </a>
               </li>
               <li>
                    <a href="link" className="admin-nav-item"> Meus Usuários </a>
               </li>
           </ul>
       </nav>
    )
}

export default AdminNavBar;