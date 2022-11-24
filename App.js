import { useEffect, useState } from "react";
import { addDoc, collection, getDocs, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { async } from "@firebase/util";
import './App.css';
import './Our.css';

function App() {

  const [users,setUsers] = useState([])

  const [userForm,setUserForm]= useState({
    phone:"",
    email:"",
  });

  useEffect(()=>{
    getUsersFromFirebase()
  },[])


  useEffect(()=> {
  console.log(userForm);

  },[userForm] )
  

  async function getUsersFromFirebase() {
    const usersSnaphot = await getDocs(collection(db, "user"));
    const usersList = usersSnaphot.docs.map((doc) => {
      return doc.data();
    });
    console.log(usersList);
    setUsers(usersList);
  }
  const saveUserDataInFire= async(e) => {
    e.preventDefault();
    console.log("form submitted");
    
    await addDoc(collection(db, "user"), userForm).then(() => {
      console.log("user successfully added");
      setUserForm({
        name:'',
        phone:'',
        email:"",
      });
      getUsersFromFirebase();
    }).catch((error)=>{
      console.log(error.message);
    });
    
    
    
  };


 

  return (
   <>
    {users.map((user)=> {
      return(
        <>
        <p className="ar">Name: {user.name}</p>
        <p className="ar">Email: {user.email}</p>
        <p className="ar">Phone: {user.phone}</p>
        </>
      );
    })
    }
    <form onSubmit={saveUserDataInFire}>
      <input value={userForm.name}
      onChange={(event)=>{
      setUserForm({...userForm,name: event.target.value});
      }}
     type="text" placeholder="name"/>
     <input value={userForm.email}
      onChange={(event)=>{
      setUserForm({...userForm,email: event.target.value});
      }}
     type="text" placeholder="email"/> 
     <input value={userForm.phone}
      onChange={(event)=>{
      setUserForm({...userForm,phone: event.target.value});
      }}
     type="text" placeholder="phone"/> 
      
      
      
      
      
      <button type="submit">Add user</button>

      </form>
   </>
  );
}
export default App;







/*function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);*/


// const [name, setName] = useState("arjit");
//   const [rollNo, setRollNo] = useState(12);
//   // Will run on pageload and every state change
//   useEffect(() => {
//     console.log("First Effect is triggered.");
//     getUsersFromFirebase();
//   });
//   //Will Run Only on pageload
//   useEffect(() => {
//     console.log("Will Run only on page load");
//   }, []);
//   //Will run on any particular state change and on page load
//   useEffect(() => {
//     console.log("Will Run On Roll Number change");
//   }, [rollNo]);
