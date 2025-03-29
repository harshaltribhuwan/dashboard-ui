import { Link } from "react-router-dom";
import './dashboard.scss';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <h3>Dashboard File</h3>
      <Link to="/editdashboard">Go to Edit Dashboard</Link>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, sed! Eos
        minus aliquam eius illum, voluptatibus harum accusamus, omnis nobis,
        impedit facilis tempora corrupti temporibus delectus vitae ab
        repellendus doloribus. Labore maiores quos molestias deserunt velit,
        rerum nostrum illum id explicabo aliquam nesciunt eos recusandae alias
        dolores qui sit? Rerum.
      </p>
    </div>
  );
};

export default Dashboard;
