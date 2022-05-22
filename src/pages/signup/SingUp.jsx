import React, { useState } from 'react'
import { firestore, auth } from '../../components/firebase/Firebase.utiles';
import { addDoc, collection } from "firebase/firestore"
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { createUserWithEmailAndPassword} from "firebase/auth"
const SingUp = () => {
    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });
    const [errormsg, setErrormsg]=useState("");
    const [userArray, setUserArray] = useState([]);

    const ctaHandler = (e) => {
        const { name, value } = e.target;
        setUserData(s => ({ ...s, [name]: value }));
        
    }
    const addToArray = async (e) => {
        e.preventDefault();
        let obj = {
            firstname: userData.firstname,
            lastname: userData.lastname,
            email: userData.email,
            password: userData.password,
        }
        if( userData.firstname !== "" && userData.lastname !=="" && userData.email!=="" && userData.password !==""){
            setUserArray([...userArray, obj]);
        // localStorage.setItem("users",JSON.stringify(userArray));
        setErrormsg("")
        }
        else{
            setErrormsg("found some of params empty prams cannot be empty")
        }

        try {
            const docRef = await addDoc(collection(firestore, "user"), obj);
           
        } catch (error) {
        }
        createUserWithEmailAndPassword(auth, userData.email, userData.password)
            .then((userCredential) => {
                const user = userCredential.user;

                setDoc(doc(firestore, "users", user.uid), { dateCreated: serverTimestamp(), uid: user.uid });

            })

            .catch((error) => {
                const errorMessage = error.message;

            });
        
    }

    return (
        <div className='container col-6'>
                    <p style={{backgroundColor:"red", color:"white"}} className="ml-20">{errormsg}</p>
            <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input name='firstname' onChange={ctaHandler} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input name='lastname' onChange={ctaHandler} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Email
                        </label>
                        <input name='email' onChange={ctaHandler} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="exampl123@gmail.com" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Password
                        </label>
                        <input name='password' onChange={ctaHandler} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                        <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            City
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            State
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                    </div>
                </div>
                <button className='btn btn-success col-6 ml-20 mt-10' onClick={addToArray}>Sing Up</button>
            </form>

        </div>
    )
}

export default SingUp;
